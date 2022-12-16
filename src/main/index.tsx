import { Styles, Module, Panel, Button, Label, VStack, Container, ControlElement, IEventBus, application, customModule, Image, Modal, Input, moment, GridLayout, HStack, Markdown } from '@ijstech/components';
import { BigNumber, Wallet, WalletPlugin } from '@ijstech/eth-wallet';
import Assets from '@buyback/assets';
import { formatNumber, formatDate, PageBlock, EventId, limitInputNumber, limitDecimals, IERC20ApprovalAction, QueueType, ITokenObject } from '@buyback/global';
import { InfuraId, Networks, getChainId, getTokenMap, isWalletConnected, setTokenMap, getDefaultChainId, hasWallet, connectWallet, setDataFromSCConfig, setCurrentChainId, tokenSymbol, GuaranteedBuyBackCampaign, getTokenIcon, fallBackUrl, getTokenBalances, getWallet, setTokenBalances, Market, ChainNativeTokenByChainId, getNetworkInfo } from '@buyback/store';
import { getGuaranteedBuyBackInfo, GuaranteedBuyBackInfo } from '@buyback/queue-utils';
import { executeSwap, getApprovalModelAction, setApprovalModalSpenderAddress } from '@buyback/swap-utils';
import { Result } from '@buyback/result';
import { PanelConfig } from '@buyback/panel-config';
import './index.css';

const Theme = Styles.Theme.ThemeVars;
const maxHeight = '321px';
const maxWidth = '690px';

@customModule
export class BuybackBlock extends Module implements PageBlock {
	private data: GuaranteedBuyBackCampaign;
	readonly onEdit: () => Promise<void>;
	readonly onConfirm: () => Promise<void>;
	readonly onDiscard: () => Promise<void>;

	private gridDApp: GridLayout;
	private leftStack: VStack;
	private emptyStack: VStack;
	
	private pnlConfig: PanelConfig;
	private $eventBus: IEventBus;
	private loadingElm: Panel;
	private buybackComponent: Panel;
	private buybackLayout: Panel;
	private buybackElm: Panel;
	private buybackResult: Result;
	private noCampaignSection: Panel;
	private importFileErrModal: Modal;
  private importFileErr: Label;
	private isImportNewCampaign = false;
	private btnAddNew: Button;
	private btnImportNew: Button;
	private btnImportExisting: Button;
	private buybackInfo: GuaranteedBuyBackInfo | null;
	private firstInputBox: VStack;
  private secondInputBox: VStack;
	private firstInput: Input;
	private secondInput: Input;
	private lbFee: Label;
	private btnSwap: Button;
	private approvalModelAction: IERC20ApprovalAction;
	private isApproveButtonShown: boolean;

	async getData() {
		return this.data;
	}

	async setData(value: any) {
		this.data = value;
		this.pnlConfig.visible = false;
		this.buybackLayout.visible = true;
		this.onSetupPage(isWalletConnected());
	}

	async getTag() {
		return this.tag;
	}

	async setTag(value: any) {
		this.tag = value;
	}

	async edit() {
		this.pnlConfig.showInputBuyback(!this.data, this.getCampaign());
		this.buybackLayout.visible = false;
		this.pnlConfig.visible = true;
	}

	async confirm() {
		if (this.pnlConfig) {
			this.pnlConfig.onConfirm();
		}
	}

	async discard() {
		this.pnlConfig.visible = false;
		this.buybackLayout.visible = true;
	}

	async config() {

	}

	async onConfigSave(buyback: GuaranteedBuyBackCampaign) {
		this.data = buyback;
		this.pnlConfig.visible = false;
		this.buybackLayout.visible = true;
		this.onSetupPage(isWalletConnected());
	}

	async onEditCampaign(isNew: boolean, data?: GuaranteedBuyBackCampaign) {
		this.pnlConfig.showInputBuyback(isNew, this.getCampaign(data));
		this.buybackLayout.visible = false;
		this.pnlConfig.visible = true;
	}

	private getCampaign(data?: GuaranteedBuyBackCampaign) {
		const _data = data ? data : this.data;
		return _data;
	}

	constructor(parent?: Container, options?: ControlElement) {
		super(parent, options);
		this.$eventBus = application.EventBus;
		this.registerEvent();
	}

	private registerEvent = () => {
		this.$eventBus.register(this, EventId.IsWalletConnected, this.onWalletConnect);
		this.$eventBus.register(this, EventId.IsWalletDisconnected, this.onWalletConnect);
		this.$eventBus.register(this, EventId.chainChanged, this.onChainChange);
	}

	private onWalletConnect = async (connected: boolean) => {
		this.onSetupPage(connected);
	}

	private onChainChange = async () => {
		const isConnected = isWalletConnected();
		this.onSetupPage(isConnected);
	}

	private initWalletData = async () => {
		let accountsChangedEventHandler = async (account: string) => {
			setTokenMap();
		}
		let chainChangedEventHandler = async (hexChainId: number) => {
			setTokenMap();
		}
		const selectedProvider = localStorage.getItem('walletProvider') as WalletPlugin;
		const isValidProvider = Object.values(WalletPlugin).includes(selectedProvider);
		if (!Wallet.getInstance().chainId) {
			Wallet.getInstance().chainId = getDefaultChainId();
		}
		if (hasWallet() && isValidProvider) {
			await connectWallet(selectedProvider, {
				'accountsChanged': accountsChangedEventHandler,
				'chainChanged': chainChangedEventHandler
			});
		}
	}

	private onSetupPage = async (connected: boolean, hideLoading?: boolean) => {
		if (!hideLoading && this.loadingElm) {
			this.loadingElm.visible = true;
		}
		if (!connected || !this.data) {
			this.renderEmpty();
			return;
		}
		try {
			this.gridDApp.visible = true;
			this.emptyStack.visible = false;
			this.buybackInfo = await getGuaranteedBuyBackInfo(this.data);
			this.renderBuybackCampaign();
			this.renderLeftPart();
			const firstToken = this.getTokenObject('toTokenAddress');
			if (firstToken && firstToken.symbol !== ChainNativeTokenByChainId[getChainId()]?.symbol) {
				await this.initApprovalModelAction();
			}
		} catch {
			this.renderEmpty();
		}
		if (!hideLoading && this.loadingElm) {
			this.loadingElm.visible = false;
		}
	}

	private initInputFile = (importFileElm: Label) => {
    importFileElm.caption = '<input type="file" accept=".json" />';
    const inputElm = importFileElm.firstChild?.firstChild as HTMLElement;
    if (inputElm) {
      inputElm.onchange = (event: any) => {
        const reader = new FileReader();
        const files = event.target.files;
        if (!files.length) {
          return;
        }
        const file = files[0];
        reader.readAsBinaryString(file);
        reader.onload = (event) => {
          const { loaded, total } = event;
          const isCompleted = loaded === total;
          if (isCompleted) {
            this.initInputFile(importFileElm);
            this.convertJSONToObj(reader.result);
          }
        }
      }
    }
  }

	private convertJSONToObj = async (result: any) => {
    if (!result) this.showImportJsonError('Data is corrupted. No data were recovered.');
		try {
			const campaignObj = JSON.parse(result);
			const length = Object.keys(campaignObj).length;
			if (!length) {
				this.showImportJsonError('No data found in the imported file.');
			} else if (campaignObj.chainId && campaignObj.chainId !== getChainId()) {
				const networkName = getNetworkInfo(campaignObj.chainId) ? getNetworkInfo(campaignObj.chainId).name : `ChainId = ${campaignObj.chainId}`;
				this.showImportJsonError(`Please switch the network to ${networkName}`);
			} else {
				this.onEditCampaign(this.isImportNewCampaign, campaignObj);
			}
		} catch {
			this.showImportJsonError('Data is corrupted. No data were recovered.');
		}
  }

	private showImportJsonError(message: string) {
    this.importFileErrModal.visible = true;
    this.importFileErr.caption = message;
  }

	private get isSwapDisabled() {
		if (!this.buybackInfo) return true;
		const info = this.buybackInfo.queueInfo;
		if (!info) return true;
    const { startDate, endDate, allowAll, addresses } = info;
		const isUpcoming = moment().isBefore(moment(startDate));
		const isEnded = moment().isAfter(moment(endDate));
		if (isUpcoming || isEnded) {
			return true;
		}
		if (!allowAll) {
			const address = getWallet().address;
      const isWhitelisted = addresses.some((item: any) => item.address === address);
      return !isWhitelisted;
		}
		return false;
	}

	private getFirstAvailableBalance = () => {
		if (!this.buybackInfo || this.isSwapDisabled) {
			return '0';
		}
		const { queueInfo } = this.buybackInfo;
		const { available, offerPrice, tradeFee, amount } = queueInfo;
		const tokenBalances = getTokenBalances();
		const balance = new BigNumber(available).times(offerPrice).dividedBy(tradeFee);
		const tokenBalance = new BigNumber(tokenBalances[this.getValueByKey('toTokenAddress')]);
		const amountIn = new BigNumber(amount).times(offerPrice).dividedBy(tradeFee);
		return (BigNumber.minimum(balance, tokenBalance, amountIn)).toFixed();
	}

	private getSecondAvailableBalance = () => {
		if (!this.buybackInfo || !this.buybackInfo.queueInfo) {
			return '0';
		}
		const { queueInfo } = this.buybackInfo;
		const { offerPrice, tradeFee } = queueInfo;
    return new BigNumber(this.getFirstAvailableBalance()).dividedBy(offerPrice).times(tradeFee).toFixed();
	}

	private getTokenObject = (key: string) => {
		const tokenMap = getTokenMap();
		const tokenAddress = this.getValueByKey(key);
    if (tokenAddress && tokenMap) {
      let token = tokenMap[tokenAddress.toLowerCase()];
      if (!token) {
        token = tokenMap[tokenAddress];
      }
      return token;
    }
    return null;
  }

	private handleFocusInput = (first: boolean, isFocus: boolean) => {
    const elm = first ? this.firstInputBox : this.secondInputBox;
    if (isFocus) {
      elm.classList.add('highlight-box');
    } else {
      elm.classList.remove('highlight-box');
    }
  }

	private firstInputChange = () => {
		const firstToken = this.getTokenObject('toTokenAddress');
		const secondToken = this.getTokenObject('fromTokenAddress');
    limitInputNumber(this.firstInput, firstToken?.decimals || 18);
    if (!this.buybackInfo) return;
		const info = this.buybackInfo.queueInfo || {} as any;
    const { offerPrice, tradeFee } = info;
		const firstSymbol = firstToken?.symbol || '';
		const inputVal = new BigNumber(this.firstInput.value).dividedBy(offerPrice).times(tradeFee);
    if (inputVal.isNaN()) {
      this.lbFee.caption = `0 ${firstSymbol}`;
      this.secondInput.value = '';
    } else {
      this.lbFee.caption = `${formatNumber(new BigNumber(1).minus(tradeFee).times(this.firstInput.value), 6)} ${firstSymbol}`;
      this.secondInput.value = limitDecimals(inputVal, secondToken?.decimals || 18);
    }
    this.updateBtnSwap();
  }

  private secondInputChange = () => {
		const firstToken = this.getTokenObject('toTokenAddress');
		const secondToken = this.getTokenObject('fromTokenAddress');
    limitInputNumber(this.secondInput, secondToken?.decimals || 18);
    if (!this.buybackInfo) return;
		const info = this.buybackInfo.queueInfo || {} as any;
    const { offerPrice, tradeFee } = info;
		const firstSymbol = firstToken?.symbol || '';
    const inputVal = new BigNumber(this.secondInput.value).multipliedBy(offerPrice).dividedBy(tradeFee);
    if (inputVal.isNaN()) {
      this.firstInput.value = '';
      this.lbFee.caption = `0 ${firstSymbol}`;
    } else {
      this.firstInput.value = limitDecimals(inputVal, firstToken?.decimals || 18);
      this.lbFee.caption = `${formatNumber(new BigNumber(1).minus(tradeFee).times(this.firstInput.value), 6)} ${firstSymbol}`;
    }
    this.updateBtnSwap();
  }

	private updateBtnSwap = () => {
		if (!this.buybackInfo) return;
		if (this.isSwapDisabled) {
			this.btnSwap.enabled = false;
			return;
		}
    const firstVal = new BigNumber(this.firstInput.value);
    const secondVal = new BigNumber(this.secondInput.value);
		const firstAvailable = this.getFirstAvailableBalance();
		const secondAvailable = this.getSecondAvailableBalance();
    if (firstVal.isNaN() || firstVal.lte(0) || firstVal.gt(firstAvailable) || secondVal.isNaN() || secondVal.lte(0) || secondVal.gt(secondAvailable)) {
      this.btnSwap.enabled = false;
    } else {
      this.btnSwap.enabled = true;
    }
  }

	private onSwap = () => {
		if (this.buybackInfo && this.isApproveButtonShown) {
			const info = this.buybackInfo.queueInfo || {} as any;
      this.approvalModelAction.doApproveAction(this.getTokenObject('toTokenAddress') as ITokenObject, info.tokenInAvailable);
      return;
    } else {
      this.approvalModelAction.doPayAction();
    }
	}

	private onSubmit = async () => {
		if (!this.buybackInfo || !this.buybackInfo.queueInfo) return;
		const firstToken = this.getTokenObject('toTokenAddress');
		const secondToken = this.getTokenObject('fromTokenAddress');
		const { pairAddress, offerIndex } = this.buybackInfo.queueInfo;
		this.showResultMessage(this.buybackResult, 'warning', `Swapping ${formatNumber(this.firstInput.value)} ${firstToken?.symbol} to ${formatNumber(this.secondInput.value)} ${secondToken?.symbol}`);
		const params = {
			provider: "RestrictedOracle",
			queueType: QueueType.GROUP_QUEUE,
			routeTokens: [firstToken, secondToken],
			bestSmartRoute: [firstToken, secondToken],
			pairs: [pairAddress],
			fromAmount: new BigNumber(this.firstInput.value),
			toAmount: new BigNumber(this.secondInput.value),
			isFromEstimated: false,
			groupQueueOfferIndex: offerIndex,
		}
		const { error } = await executeSwap(params);
		if (error) {
			this.showResultMessage(this.buybackResult, 'error', error as any);
		}
  }

	private updateInput = (enabled: boolean) => {
    this.firstInput.enabled = enabled;
    this.secondInput.enabled = enabled;
  }

	private get submitButtonText() {
    if (this.isApproveButtonShown) {
      return this.btnSwap?.rightIcon.visible ? 'Approving' : 'Approve';
    }
    const firstVal = new BigNumber(this.firstInput.value);
    const secondVal = new BigNumber(this.secondInput.value);
    if (firstVal.lt(0) || secondVal.lt(0)) {
      return 'Amount must be greater than 0';
    }
    if (this.buybackInfo) {
      const firstMaxVal = new BigNumber(this.getFirstAvailableBalance());
      const secondMaxVal = new BigNumber(this.getSecondAvailableBalance());
      if (firstVal.gt(firstMaxVal) || secondVal.gt(secondMaxVal)) {
        return 'Insufficient amount available';
      }
    }
    if (this.btnSwap?.rightIcon.visible) {
      return 'Selling';
    }
    return 'Sell';
  };

	private initApprovalModelAction = async () => {
    this.approvalModelAction = await getApprovalModelAction(
      {
      sender: this,
      payAction: this.onSubmit,
      onToBeApproved: async(token: ITokenObject) => {
        this.isApproveButtonShown = true
        this.btnSwap.enabled = true;
        this.btnSwap.caption = 'Approve';
      },
      onToBePaid: async(token: ITokenObject) => {
        this.updateBtnSwap();
        this.btnSwap.caption = this.submitButtonText;
        this.isApproveButtonShown = false
      },
      onApproving: async(token: ITokenObject, receipt?: string, data?: any) => {
        this.showResultMessage(this.buybackResult, 'success', receipt || '');
        this.btnSwap.rightIcon.visible = true;
        this.btnSwap.caption = 'Approving';
        this.updateInput(false);
      },
      onApproved: async(token: ITokenObject, data?: any) => {
				this.isApproveButtonShown = false;
				this.btnSwap.rightIcon.visible = false;
				this.btnSwap.caption = this.submitButtonText;
        this.updateInput(true);
        this.updateBtnSwap();
      },
      onApprovingError: async(token: ITokenObject, err: Error) => {
        this.showResultMessage(this.buybackResult, 'error', err);
        this.updateInput(true);
        this.btnSwap.caption = 'Approve';
        this.btnSwap.rightIcon.visible = false;
      },
      onPaying: async(receipt?: string, data?: any) => {
        this.showResultMessage(this.buybackResult, 'success', receipt || '');
        this.btnSwap.rightIcon.visible = true;
        this.btnSwap.caption = this.submitButtonText;
        this.updateInput(false);
      },
      onPaid: async(data?: any) => {
        await setTokenBalances();
				await this.onSetupPage(isWalletConnected(), true);
				this.firstInput.value = '';
				this.secondInput.value = '';
				this.btnSwap.rightIcon.visible = false;
				this.btnSwap.caption = this.submitButtonText;
      },
      onPayingError: async(err: Error) => {
        this.showResultMessage(this.buybackResult, 'error', err);
        this.btnSwap.rightIcon.visible = false;
        this.btnSwap.enabled = true;
        this.btnSwap.caption = this.submitButtonText;
      }
    });
    setApprovalModalSpenderAddress(Market.HYBRID);
		const firstToken = this.getTokenObject('toTokenAddress') as ITokenObject;
    await this.approvalModelAction.checkAllowance(firstToken, this.getFirstAvailableBalance());
  }

	getValueByKey = (key: string) => {
		const item = this.buybackInfo as any;
		if (!item) return null;
    if (item.queueInfo) {
      return item.queueInfo[key];
    }
    return null;
  }

	private showResultMessage = (result: Result, status: 'warning' | 'success' | 'error', content?: string | Error) => {
		if (!result) return;
		let params: any = { status };
		if (status === 'success') {
			params.txtHash = content;
		} else {
			params.content = content;
		}
		result.message = { ...params };
		result.showModal();
	}

	private initEmptyUI = async () => {
		if (!this.noCampaignSection) {
			this.noCampaignSection = await Panel.create({ width: maxWidth, height: maxHeight });
		}
		const isConnected = isWalletConnected();
		const isBtnShown = !this.data && isConnected;
		let importFileElm: any;
		let onImportCampaign: any;
		let onClose: any;
		if (isBtnShown) {
			importFileElm = await Label.create({ visible: false });
			onImportCampaign = (isNew: boolean) => {
				this.isImportNewCampaign = isNew;
				(importFileElm.firstChild?.firstChild as HTMLElement)?.click();
			}
			onClose = () => {
				this.importFileErrModal.visible = false;
			}
			this.initInputFile(importFileElm);
		}
		this.noCampaignSection.clearInnerHTML();
		this.noCampaignSection.appendChild(
			<i-vstack class="no-buyback" height="100%" background={{ color: '#0c1234' }} verticalAlignment="center">
				<i-vstack gap={10} verticalAlignment="center" horizontalAlignment="center">
					<i-image url={Assets.fullPath('img/staking/TrollTrooper.svg')} />
					<i-label font={{ color: '#FFFFFF' }} caption={ isConnected ? 'No Buybacks' : 'Please connect with your wallet!' } />
					{
						isBtnShown ? (
							<i-hstack gap={10} margin={{ top: 10 }} verticalAlignment="center" horizontalAlignment="center">
								{/* <i-button id="btnAddNew" maxWidth={220} caption="Add New Campaign" class="btn-os btn-import" font={{ size: '14px' }} onClick={() => this.onEditCampaign(true)} /> */}
								{/* <i-button id="btnImportNew" maxWidth={220} caption="Import New Campaign" class="btn-os btn-import" font={{ size: '14px' }} onClick={() => onImportCampaign(true)} /> */}
								<i-button id="btnImportExisting" maxWidth={220} caption="Import Buyback Campaign" class="btn-os btn-import" font={{ size: '14px' }} rightIcon={{ visible: false, spin: true, fill: '#fff' }} onClick={() => onImportCampaign(false)} />
								{ importFileElm }
								<i-modal id="importFileErrModal" maxWidth="100%" width={420} title="Import Campaign Error" closeIcon={{ name: 'times' }}>
									<i-vstack gap={20} margin={{ bottom: 10 }} verticalAlignment="center" horizontalAlignment="center">
										<i-label id="importFileErr" font={{ size: '16px', color: '#fff' }} />
										<i-button caption="Close" class="btn-os btn-import" width={120} onClick={onClose} />
									</i-vstack>
								</i-modal>
							</i-hstack>
						) : []
					}
				</i-vstack>
			</i-vstack>
		);
		this.noCampaignSection.visible = true;
	}

	private renderEmpty = async () => {
		this.gridDApp.visible = false;
		this.emptyStack.visible = true;
		await this.initEmptyUI();
		if (this.emptyStack) {
			this.emptyStack.clearInnerHTML();
			this.emptyStack.appendChild(this.noCampaignSection);
		}
		if (this.loadingElm) {
			this.loadingElm.visible = false;
		}
	}

	private renderBuybackCampaign = async () => {
		if (this.buybackInfo) {
			this.buybackElm.clearInnerHTML();
			const { queueInfo, pairAddress } = this.buybackInfo;
			const info = queueInfo || {} as any;
			const firstSymbol = tokenSymbol(this.getValueByKey('toTokenAddress'));

			const vStackTimer = await VStack.create({ gap: 4, verticalAlignment: 'center' });
			const lbTimer = await Label.create({ caption: 'Starts In: ', font: { size: '12px' } });
			const endHour = await Label.create();
			const endDay = await Label.create();
			const endMin = await Label.create();
			endHour.classList.add('timer-value');
			endDay.classList.add('timer-value');
			endMin.classList.add('timer-value');
			vStackTimer.appendChild(lbTimer);
			vStackTimer.appendChild(
				<i-panel lineHeight="29px">
					<i-hstack gap={4} verticalAlignment="center" class="custom-timer">
						{endDay}
						<i-label caption="D" class="timer-unit" />
						{endHour}
						<i-label caption="H" class="timer-unit" />
						{endMin}
						<i-label caption="M" class="timer-unit" />
					</i-hstack>
				</i-panel>
			);

			const vStackEndTime = await HStack.create({ gap: 4, verticalAlignment: 'center', margin: {top: '0.75rem'} });
			const lbEndTime = await Label.create({ caption: 'Estimated End Time: ', font: { size: '0.875rem', bold: true } });
			vStackEndTime.appendChild(lbEndTime);
			vStackEndTime.appendChild(<i-label caption={formatDate(info.endDate)} font={{ size: '0.875rem'}} />);
			let interval: any;
			const setTimer = () => {
				const { startDate, endDate } = info;
				let days = 0;
				let hours = 0;
				let mins = 0;
				if (moment().isBefore(moment(startDate))) {
					lbTimer.caption = 'Starts In: ';
					lbEndTime.caption = 'Estimated End Time: ';
					days = moment(startDate).diff(moment(), 'days');
					hours = moment(startDate).diff(moment(), 'hours') - days * 24;
					mins = moment(startDate).diff(moment(), 'minutes') - days * 24 * 60 - hours * 60;
				} else if (moment(moment()).isBefore(endDate)) {
					lbTimer.caption = 'Ends In';
					vStackEndTime.visible = false;
					days = moment(endDate).diff(moment(), 'days');
					hours = moment(endDate).diff(moment(), 'hours') - days * 24;
					mins = moment(endDate).diff(moment(), 'minutes') - days * 24 * 60 - hours * 60;
				} else {
					vStackTimer.visible = false;
					vStackEndTime.visible = true;
					lbEndTime.caption = 'Ended On: ';
					days = hours = mins = 0;
					clearInterval(interval);
				}
				endDay.caption = `${days}`;
				endHour.caption = `${hours}`;
				endMin.caption = `${mins}`;
			}
			setTimer();
			interval = setInterval(() => {
				setTimer();
			}, 1000);
			this.buybackElm.clearInnerHTML();
			this.buybackElm.appendChild(
				<i-panel padding={{ bottom: 15, top: 15, right: 15, left: 15 }} height="auto">
          <i-vstack gap="0.5rem" width="100%" verticalAlignment="center" margin={{bottom: '1rem'}}>
						<i-vstack>
							<i-hstack gap={4} verticalAlignment="center">
								<i-label caption="Buyback Price: " font={{ bold: true }} />
								<i-label
									caption={`${1 / this.getValueByKey('offerPrice')} ${tokenSymbol(this.getValueByKey('fromTokenAddress'))}`}
									font={{ bold: true }}
								/>
							</i-hstack>
							<i-label caption="I don't have a digital wallet" font={{ size: '0.8125rem' }} link={{ href: 'https://metamask.io/' }}></i-label>
						</i-vstack>
						{/* { vStackTimer } */}
						{ vStackEndTime }
					</i-vstack>
					<i-hstack gap={20} margin={{ top: 15 }} verticalAlignment="center">
						<i-vstack gap={4} width="100%" verticalAlignment="space-between">
							<i-hstack gap={4} horizontalAlignment="end">
								<i-label
									caption={`Balance: ${formatNumber(this.getFirstAvailableBalance())} ${firstSymbol}`}
									font={{ size: '0.75rem' }}
								/>
							</i-hstack>
							<i-hstack id="firstInputBox" visible={false} gap={8} width="100%" height={50} verticalAlignment="center" background={{ color: '#232B5A' }} border={{ radius: 5, width: 2, style: 'solid', color: 'transparent' }} padding={{ left: 7, right: 7 }}>
								<i-hstack gap={4} width={100} verticalAlignment="center">
									<i-image width={20} height={20} url={getTokenIcon(this.getValueByKey('toTokenAddress'))} fallbackUrl={fallBackUrl} />
									<i-label caption={firstSymbol} />
								</i-hstack>
								<i-input
									id="firstInput"
									inputType="number"
									placeholder="0.0"
									class="input-amount"
									width="100%"
									height="100%"
									onChanged={this.firstInputChange}
									onFocus={() => this.handleFocusInput(true, true)}
									onBlur={() => this.handleFocusInput(true, false)}
								/>
							</i-hstack>
							<i-hstack id="secondInputBox" width="100%" height={40} position="relative" verticalAlignment="center" background={{ color: '#fff' }} border={{ radius: 5, width: 2, style: 'solid', color: 'transparent' }} padding={{ left: 7, right: 7 }}>
								<i-hstack gap={4} margin={{ right: 8 }} width={100} verticalAlignment="center">
									<i-image width={20} height={20} url={getTokenIcon(this.getValueByKey('fromTokenAddress'))} fallbackUrl={fallBackUrl} />
									<i-label caption={tokenSymbol(this.getValueByKey('fromTokenAddress'))} />
								</i-hstack>
								<i-input
									id="secondInput"
									inputType="number"
									placeholder="0.0"
									class="input-amount"
									width="100%"
									height="100%"
									onChanged={this.secondInputChange}
									onFocus={() => this.handleFocusInput(false, true)}
									onBlur={() => this.handleFocusInput(false, false)}
								/>
							</i-hstack>
						</i-vstack>
					</i-hstack>
					<i-hstack gap={10} margin={{ top: 6 }} verticalAlignment="center" horizontalAlignment="end">
						<i-label caption="Trade Fee" font={{ size: '0.75rem' }} />
						<i-label id="lbFee" caption={`0 ${firstSymbol}`} font={{ size: '0.75rem' }} />
					</i-hstack>
					<i-vstack margin={{ top: 15 }} verticalAlignment="center" horizontalAlignment="center">
						<i-panel>
							<i-button
								id='btnSwap'
								width='100px'
								caption='Sell'
								padding={{ top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' }}
								font={{ size: '0.875rem', color: Theme.colors.primary.contrastText }}
								rightIcon={{ visible: false, fill: Theme.colors.primary.contrastText }}
								onClick={this.onSwap.bind(this)}
							></i-button>
						</i-panel>
					</i-vstack>
					<i-vstack gap="0.5rem">
						<i-vstack gap='0.25rem'>
							<i-label caption='smart contract:' font={{ size: '0.75rem' }}></i-label>
							<i-label caption={pairAddress} font={{ size: '0.75rem' }} overflowWrap='anywhere'></i-label>
						</i-vstack>
						<i-label caption='Terms & Condition' font={{ size: '0.75rem' }} link={{ href: 'https://docs.scom.dev/' }}></i-label>
					</i-vstack>
        </i-panel>
			)
		} else {
			this.renderEmpty();
		}
	}

	private renderLeftPart = async () => {
		if (this.buybackInfo) {
			this.leftStack.clearInnerHTML();
			const { tokenOut, tokenIn, projectName, description, idoUrl } = this.buybackInfo;
			this.leftStack.clearInnerHTML();
			this.leftStack.appendChild(
				<i-panel padding={{ bottom: 15, top: 15, right: 15, left: 15 }} height="auto">
					<i-vstack gap="1rem" margin={{ bottom: 15 }} width="100%">
						<i-hstack horizontalAlignment="center">
							<i-hstack position="relative" verticalAlignment="center" horizontalAlignment="center" margin={{bottom: '1.25rem'}}>
								<i-image
									width={80}
									height={80}
									url={getTokenIcon(tokenOut)}
									fallbackUrl={fallBackUrl}
								/>
								<i-image
									width={50}
									height={50}
									url={getTokenIcon(tokenIn)}
									fallbackUrl={fallBackUrl}
									position="absolute"
									bottom={-15}
									right={-10}
								/>
							</i-hstack>
						</i-hstack>
						<i-label
							caption={projectName || ''} margin={{ top: '0.5em', bottom: '1em' }}
							font={{ weight: 600 }}
						/>
						<i-label caption={description || ''} font={{ size: '0.875rem' }} />
						<i-hstack visible={!!idoUrl} verticalAlignment='center' gap='0.25rem'>
              <i-label caption='Details here: ' font={{ size: '0.875rem' }}></i-label>
							<i-label
								font={{ size: '0.875rem' }} caption={idoUrl}
								link={{href: idoUrl}}
							></i-label>
            </i-hstack>
          </i-vstack>
        </i-panel>
			)
		}
	}

	init = async () => {
		super.init();
		this.pnlConfig = new PanelConfig();
		this.pnlConfig.visible = false;
		this.pnlConfig.onConfigSave = (campaign: GuaranteedBuyBackCampaign) => this.onConfigSave(campaign);
		this.pnlConfig.onReset = () => {
			this.pnlConfig.visible = false;
			this.buybackLayout.visible = true;
		}
		this.buybackComponent.appendChild(this.pnlConfig);
		this.buybackResult = new Result();
		this.buybackComponent.appendChild(this.buybackResult);
		this.buybackResult.visible = false;
		this.showResultMessage(this.buybackResult, 'warning', '');
		setTimeout(() => {
			this.buybackResult.closeModal();
			this.buybackResult.visible = true;
		}, 100)
		this.initWalletData();
		setDataFromSCConfig(Networks, InfuraId);
		setCurrentChainId(getDefaultChainId());
		if (!this.data) {
			await this.renderEmpty();
		}
	}

	render() {
		return (
			<i-panel id="buybackComponent" class="pageblock-buyback" minHeight={200}>
				<i-panel id="buybackLayout" class="buyback-layout">
					<i-vstack id="loadingElm" class="i-loading-overlay">
						<i-vstack class="i-loading-spinner" horizontalAlignment="center" verticalAlignment="center">
							<i-icon
								class="i-loading-spinner_icon"
								image={{ url: Assets.fullPath('img/loading.svg'), width: 36, height: 36 }}
							/>
							<i-label
								caption="Loading..." font={{ color: '#FD4A4C', size: '1.5em' }}
								class="i-loading-spinner_text"
							/>
						</i-vstack>
					</i-vstack>
					<i-vstack id="emptyStack" visible={false} verticalAlignment="center" horizontalAlignment="center"></i-vstack>
					<i-grid-layout
						id='gridDApp'
						width='100%'
						height='100%'
						templateColumns={['60%', 'auto']}
					>
						<i-vstack id="leftStack" padding={{ top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' }}></i-vstack>
						<i-vstack id="buybackElm" gap="0.5rem" padding={{ top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' }} background={{ color: '#f1f1f1' }} verticalAlignment='space-between'>
						</i-vstack>
					</i-grid-layout>
				</i-panel>
			</i-panel>
		)
	}
}
