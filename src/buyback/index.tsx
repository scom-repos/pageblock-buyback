import { Module, Panel, Button, Label, VStack, Container, customElements, ControlElement, IEventBus, application, customModule, Modal, Input } from '@ijstech/components';
import { formatNumber, formatDate, PageBlock, EventId, limitInputNumber, limitDecimals, IERC20ApprovalAction, QueueType, ITokenObject } from '@buyback/global';
import { InfuraId, Networks, getChainId, getTokenMap, isWalletConnected, setTokenMap, getDefaultChainId, hasWallet, connectWallet, setDataFromSCConfig, setCurrentChainId, tokenSymbol, GuaranteedBuyBackCampaign, getTokenIcon, fallBackUrl, getTokenBalances, getWallet, setTokenBalances, Market, ChainNativeTokenByChainId, getNetworkInfo } from '@buyback/store';
import Assets from '@buyback/assets';
import moment from 'moment';
import { BigNumber, Wallet, WalletPlugin } from '@ijstech/eth-wallet';
import { Result } from '../result';
import {  maxHeight, maxWidth } from '../config';
import './buyback.css';
import { getGuaranteedBuyBackInfo, GuaranteedBuyBackInfo } from '@buyback/queue-utils';
import { PanelConfig } from './panelConfig';
import { executeSwap, getApprovalModelAction, setApprovalModalSpenderAddress } from '@buyback/swap-utils';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['i-section-buyback']: BuybackBlock
		}
	}
}

@customModule
@customElements('i-section-buyback')
export class BuybackBlock extends Module implements PageBlock {
	private data: GuaranteedBuyBackCampaign;
	readonly onEdit: () => Promise<void>;
	readonly onConfirm: () => Promise<void>;
	readonly onDiscard: () => Promise<void>;

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

	validateConfig() {

	}

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
      this.buybackInfo = await getGuaranteedBuyBackInfo(this.data);
			this.renderBuybackCampaign();
			const firstToken = this.getTokenObject('toTokenAddress');
			if (firstToken && firstToken.symbol !== ChainNativeTokenByChainId[getChainId()]?.symbol) {
				await this.initApprovalModelAction();
			}
    } catch (e) { console.error(e) }
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
		const info = this.buybackInfo.queueInfo || {};
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
		const info = this.buybackInfo.queueInfo || {};
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
			const info = this.buybackInfo.queueInfo || {};
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
      return 'Swapping';
    }
    return 'Swap';
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
			this.noCampaignSection = await Panel.create({ height: '100%' });
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
			<i-panel class="no-buyback" height="100%" background={{ color: '#0c1234' }}>
				<i-vstack gap={10} verticalAlignment="center">
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
			</i-panel>
		);
		this.noCampaignSection.visible = true;
	}

	private renderEmpty = async () => {
		await this.initEmptyUI();
		if (this.buybackElm) {
			this.buybackElm.clearInnerHTML();
			this.buybackElm.appendChild(this.noCampaignSection);
		}
		if (this.loadingElm) {
			this.loadingElm.visible = false;
		}
	}

	private renderBuybackCampaign = async () => {
		if (this.buybackInfo) {
			this.buybackElm.clearInnerHTML();
			const { tokenOut, tokenIn, projectName, queueInfo } = this.buybackInfo;
			const info = queueInfo || {};
			const firstSymbol = tokenSymbol(this.getValueByKey('toTokenAddress'));

			const vStackTimer = await VStack.create({ gap: 4, verticalAlignment: 'center' });
			const lbTimer = await Label.create({ caption: 'Starts In', font: {size: '12px'} });
			lbTimer.classList.add('opacity-50');
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

			const vStackEndTime = await VStack.create({ gap: 4, verticalAlignment: 'center' });
			const lbEndTime = await Label.create({ caption: 'Estimated End Time', font: { size: '12px' } });
			lbEndTime.classList.add('opacity-50');
			vStackEndTime.appendChild(lbEndTime);
			vStackEndTime.appendChild(
				<i-label caption={formatDate(info.endDate)} font={{ size: '16px', bold: true }} lineHeight="29px" />
			);
			let interval: NodeJS.Timeout;
			const setTimer = () => {
				const { startDate, endDate } = info;
				let days = 0;
				let hours = 0;
				let mins = 0;
				if (moment().isBefore(moment(startDate))) {
					lbTimer.caption = 'Starts In';
					lbEndTime.caption = 'Estimated End Time';
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
					lbEndTime.caption = 'Ended On';
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
				<i-panel class="pnl-buy-back" padding={{ bottom: 15, top: 15, right: 15, left: 15 }} height="auto">
          <i-hstack gap={10} verticalAlignment="center" horizontalAlignment="start" margin={{ bottom: 15 }} >
						<i-hstack width={50} position="relative" verticalAlignment="center">
              <i-image
                width={36}
								height={36}
                url={getTokenIcon(tokenOut)}
                fallbackUrl={fallBackUrl}
              />
              <i-image
                width={24}
                height={24}
                url={getTokenIcon(tokenIn)}
                fallbackUrl={fallBackUrl}
								position="absolute"
								bottom={-4}
								left={24}
              />
            </i-hstack>
            <i-label caption={projectName || ''} margin={{ top: 4 }} font={{ size: '20px', color: '#FF6363', name: 'Montserrat Bold', bold: true }} />
          </i-hstack>
          <i-hstack gap={60} width="100%" verticalAlignment="center">
						<i-vstack gap={4} verticalAlignment="center">
              <i-label caption="Buyback Price" font={{ size: '12px' }} class="opacity-50" />
              <i-label caption={`${1 / this.getValueByKey('offerPrice')} ${tokenSymbol(this.getValueByKey('fromTokenAddress'))}`} font={{ size: '24px', color: '#72F35D', bold: true }} lineHeight="29px" />
						</i-vstack>
						{ vStackTimer }
						{ vStackEndTime }
					</i-hstack>
					<i-hstack gap={20} margin={{ top: 15 }} verticalAlignment="center">
						<i-vstack gap={4} width="calc(50% - 30px)" height={90} verticalAlignment="space-between">
							<i-vstack gap={4} verticalAlignment="center">
								<i-label caption="You Swap" font={{ size: '14px' }} />
								<i-label caption={`Balance: ${formatNumber(this.getFirstAvailableBalance())} ${firstSymbol}`} font={{ size: '12px' }} class="opacity-50" margin={{ left: 'auto' }} />
							</i-vstack>
							<i-hstack id="firstInputBox" gap={8} width="100%" height={50} verticalAlignment="center" background={{ color: '#232B5A' }} border={{ radius: 16, width: 2, style: 'solid', color: 'transparent' }} padding={{ left: 7, right: 7 }}>
								<i-hstack gap={4} width={100} verticalAlignment="center">
									<i-image width={20} height={20} url={getTokenIcon(this.getValueByKey('toTokenAddress'))} fallbackUrl={fallBackUrl} />
									<i-label caption={firstSymbol} font={{ size: '16px' }} />
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
						</i-vstack>
						<i-icon name="arrow-right" fill="#f15e61" width={20} height={20} margin={{ top: 40 }} />
						<i-vstack gap={4} width="calc(50% - 30px)" height={90} verticalAlignment="space-between">
							<i-label caption="You Receive" font={{ size: '14px' }} />
							<i-hstack id="secondInputBox" width="100%" height={50} position="relative" verticalAlignment="center" background={{ color: '#232B5A' }} border={{ radius: 16, width: 2, style: 'solid', color: 'transparent' }} padding={{ left: 7, right: 7 }}>
								<i-hstack gap={4} margin={{ right: 8 }} width={100} verticalAlignment="center">
									<i-image width={20} height={20} url={getTokenIcon(this.getValueByKey('fromTokenAddress'))} fallbackUrl={fallBackUrl} />
									<i-label caption={tokenSymbol(this.getValueByKey('fromTokenAddress'))} font={{ size: '16px' }} />
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
								{/* <i-label caption="Best Price" class="best-price" /> */}
							</i-hstack>
						</i-vstack>
					</i-hstack>
					<i-hstack gap={10} margin={{ top: 6 }} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label caption="Trade Fee" font={{ size: '14px' }} class="opacity-50" />
						<i-label id="lbFee" caption={`0 ${firstSymbol}`} font={{ size: '14px' }} />
					</i-hstack>
					<i-vstack margin={{ top: 15 }} verticalAlignment="center" horizontalAlignment="center">
						<i-button
							id="btnSwap"
							caption="Swap"
							enabled={false}
							class="btn-os btn-swap"
							rightIcon={{ spin: true, visible: false }}
							onClick={this.onSwap}
						/>
					</i-vstack>
        </i-panel>
			)
		} else {
			this.renderEmpty();
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
				<i-panel id="buybackLayout" class="buyback-layout" width={maxWidth} height={maxHeight}>
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
					<i-panel id="buybackElm" class="wrapper" />
				</i-panel>
			</i-panel>
		)
	}
}
