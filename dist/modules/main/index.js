var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@buyback/main/index.css.ts", ["require", "exports", "@ijstech/components", "@buyback/assets"], function (require, exports, components_1, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const colorVar = {
        primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
        primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
        darkBg: '#181E3E 0% 0% no-repeat padding-box',
        primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
    };
    components_1.Styles.fontFace({
        fontFamily: "Apple SD Gothic Neo",
        src: `url("${assets_1.default.fullPath('fonts/FontsFree-Net-Apple-SD-Gothic-Neo-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat Regular",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat Bold",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat Light",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat Medium",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Montserrat SemiBold",
        src: `url("${assets_1.default.fullPath('fonts/montserrat/Montserrat-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway Regular",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway Bold",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway Light",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway Medium",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.fontFace({
        fontFamily: "Raleway SemiBold",
        src: `url("${assets_1.default.fullPath('fonts/raleway/Raleway-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_1.Styles.cssRule('.pageblock-buyback', {
        $nest: {
            'i-label': {
                fontFamily: 'Montserrat Regular',
                color: '#fff',
            },
            'span': {
                letterSpacing: '0.15px',
            },
            '#buybackElm': {
                background: '#0c1234',
            },
            '.i-loading-overlay': {
                background: '#0c1234',
            },
            '.overflow-inherit': {
                overflow: 'inherit',
            },
            '::selection': {
                color: '#fff',
                background: '#1890ff'
            },
            '.btn-os': {
                background: colorVar.primaryButton,
                height: 'auto !important',
                color: '#fff',
                transition: 'background .3s ease',
                fontSize: '1rem',
                fontWeight: 'bold',
                fontFamily: 'Raleway Bold',
                $nest: {
                    'i-icon.loading-icon': {
                        marginInline: '0.25rem',
                        width: '16px !important',
                        height: '16px !important',
                    },
                },
            },
            '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
                background: colorVar.primaryGradient,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                opacity: .9
            },
            '.btn-os:not(.disabled):not(.is-spinning):focus': {
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
            },
            '.btn-os.disabled, .btn-os.is-spinning': {
                background: colorVar.primaryDisabled,
                opacity: 1
            },
            '.dark-bg, .dark-modal > div > div': {
                background: colorVar.darkBg,
                borderRadius: 5
            },
            '.btn-transparent, .btn-transparent:not(.disabled):focus, .btn-transparent:not(.disabled):hover': {
                background: 'transparent',
                boxShadow: 'none',
                backgroundColor: 'transparent'
            },
            '.mr-0-5': {
                marginRight: '.5rem'
            },
            '.ml-0-5': {
                marginLeft: '.5rem'
            },
            '.mb-0-5': {
                marginBottom: '.5rem'
            },
            '.hidden': {
                display: 'none !important'
            },
            '.no-wrap': {
                whiteSpace: 'nowrap'
            },
            '.flex-nowrap': {
                flexWrap: 'nowrap',
            },
            '.py-1': {
                paddingTop: '1rem',
                paddingBottom: '1rem'
            },
            '.px-1': {
                paddingLeft: '1rem',
                paddingRight: '1rem'
            },
            '.align-middle': {
                alignItems: 'center'
            },
            '.buyback-layout': {
                width: '100%',
                marginInline: 'auto',
                overflow: 'hidden',
            },
            'i-link': {
                display: 'flex',
                $nest: {
                    '&:hover *': {
                        color: '#fff',
                        opacity: 0.9,
                    },
                },
            },
            '.opacity-50': {
                opacity: 0.5
            },
            '.cursor-default': {
                cursor: 'default',
            },
            '.text-overflow': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            '.wrapper': {
                width: '100%',
                height: '100%',
                maxWidth: '690px',
                maxHeight: '321px',
                $nest: {
                    '.bg-color': {
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#fff',
                        minHeight: '485px',
                        height: '100%',
                        borderRadius: '15px',
                        paddingBottom: '1rem',
                        position: 'relative',
                    },
                    '.btn-import, .btn-swap': {
                        width: 370,
                        maxWidth: '100%',
                        padding: '0.625rem 0',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        borderRadius: 12,
                    },
                    '.no-buyback': {
                        padding: '3rem 2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        justifyContent: 'center',
                        $nest: {
                            'i-label > *': {
                                fontSize: '1.5rem',
                                marginTop: '1rem',
                            }
                        }
                    },
                    '.slider-arrow': {
                        fill: '#f15e61',
                    }
                },
            },
            '.custom-timer': {
                display: 'flex',
                $nest: {
                    '.timer-value': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#F15E61',
                        borderRadius: 4,
                        paddingInline: 4,
                        minWidth: 20,
                        height: 20,
                        fontSize: 14,
                        fontFamily: 'Montserrat Regular',
                    },
                    '.timer-unit': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            },
            '.input-amount > input': {
                border: 'none',
                width: '100% !important',
                height: '100% !important',
                backgroundColor: 'transparent',
                color: '#fff',
                fontSize: '1rem',
                textAlign: 'right',
            },
            '.highlight-box': {
                borderColor: '#E53780 !important'
            },
            '.best-price': {
                position: 'absolute',
                top: '-10px',
                left: '10px',
                background: 'linear-gradient(255deg,#f15e61,#b52082)',
                borderRadius: ' 0.75rem',
                padding: '0.1rem 0.5rem',
            },
            '.ml-auto': {
                marginLeft: 'auto',
            },
            '.mr-025': {
                marginRight: '0.25rem',
            },
            '.input-disabled': {
                opacity: 0.4,
                cursor: 'default',
                $nest: {
                    '*': {
                        cursor: 'default',
                    }
                }
            },
            '#importFileErrModal': {
                $nest: {
                    '.modal': {
                        borderRadius: 12,
                    },
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: `2px solid #F15E61`,
                        color: '#F15E61',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                    },
                    '.i-modal_header > i-icon': {
                        fill: `#F15E61 !important`
                    },
                    '#importFileErr span': {
                        fontSize: '16px !important'
                    }
                }
            },
            '#loadingElm.i-loading--active': {
                marginTop: '2rem',
                position: 'initial',
                $nest: {
                    '#buybackElm': {
                        display: 'none !important',
                    },
                    '.i-loading-spinner': {
                        marginTop: '2rem',
                    },
                },
            },
            '.connect-wallet': {
                display: 'block',
                textAlign: 'center',
                paddingTop: '1rem',
            },
        }
    });
});
define("@buyback/main", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@buyback/assets", "@buyback/global", "@buyback/store", "@buyback/queue-utils", "@buyback/swap-utils", "@buyback/result", "@buyback/panel-config", "@buyback/main/index.css.ts"], function (require, exports, components_2, eth_wallet_1, assets_2, global_1, store_1, queue_utils_1, swap_utils_1, result_1, panel_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuybackBlock = void 0;
    const maxHeight = '321px';
    const maxWidth = '690px';
    let BuybackBlock = class BuybackBlock extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
            this.isImportNewCampaign = false;
            this.registerEvent = () => {
                this.$eventBus.register(this, "isWalletConnected" /* IsWalletConnected */, this.onWalletConnect);
                this.$eventBus.register(this, "IsWalletDisconnected" /* IsWalletDisconnected */, this.onWalletConnect);
                this.$eventBus.register(this, "chainChanged" /* chainChanged */, this.onChainChange);
            };
            this.onWalletConnect = async (connected) => {
                this.onSetupPage(connected);
            };
            this.onChainChange = async () => {
                const isConnected = store_1.isWalletConnected();
                this.onSetupPage(isConnected);
            };
            this.initWalletData = async () => {
                let accountsChangedEventHandler = async (account) => {
                    store_1.setTokenMap();
                };
                let chainChangedEventHandler = async (hexChainId) => {
                    store_1.setTokenMap();
                };
                const selectedProvider = localStorage.getItem('walletProvider');
                const isValidProvider = Object.values(eth_wallet_1.WalletPlugin).includes(selectedProvider);
                if (!eth_wallet_1.Wallet.getInstance().chainId) {
                    eth_wallet_1.Wallet.getInstance().chainId = store_1.getDefaultChainId();
                }
                if (store_1.hasWallet() && isValidProvider) {
                    await store_1.connectWallet(selectedProvider, {
                        'accountsChanged': accountsChangedEventHandler,
                        'chainChanged': chainChangedEventHandler
                    });
                }
            };
            this.onSetupPage = async (connected, hideLoading) => {
                var _a;
                if (!hideLoading && this.loadingElm) {
                    this.loadingElm.visible = true;
                }
                if (!connected || !this.data) {
                    this.renderEmpty();
                    return;
                }
                try {
                    this.buybackInfo = await queue_utils_1.getGuaranteedBuyBackInfo(this.data);
                    this.renderBuybackCampaign();
                    const firstToken = this.getTokenObject('toTokenAddress');
                    if (firstToken && firstToken.symbol !== ((_a = store_1.ChainNativeTokenByChainId[store_1.getChainId()]) === null || _a === void 0 ? void 0 : _a.symbol)) {
                        await this.initApprovalModelAction();
                    }
                }
                catch (_b) {
                    this.renderEmpty();
                }
                if (!hideLoading && this.loadingElm) {
                    this.loadingElm.visible = false;
                }
            };
            this.initInputFile = (importFileElm) => {
                var _a;
                importFileElm.caption = '<input type="file" accept=".json" />';
                const inputElm = (_a = importFileElm.firstChild) === null || _a === void 0 ? void 0 : _a.firstChild;
                if (inputElm) {
                    inputElm.onchange = (event) => {
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
                        };
                    };
                }
            };
            this.convertJSONToObj = async (result) => {
                if (!result)
                    this.showImportJsonError('Data is corrupted. No data were recovered.');
                try {
                    const campaignObj = JSON.parse(result);
                    const length = Object.keys(campaignObj).length;
                    if (!length) {
                        this.showImportJsonError('No data found in the imported file.');
                    }
                    else if (campaignObj.chainId && campaignObj.chainId !== store_1.getChainId()) {
                        const networkName = store_1.getNetworkInfo(campaignObj.chainId) ? store_1.getNetworkInfo(campaignObj.chainId).name : `ChainId = ${campaignObj.chainId}`;
                        this.showImportJsonError(`Please switch the network to ${networkName}`);
                    }
                    else {
                        this.onEditCampaign(this.isImportNewCampaign, campaignObj);
                    }
                }
                catch (_a) {
                    this.showImportJsonError('Data is corrupted. No data were recovered.');
                }
            };
            this.getFirstAvailableBalance = () => {
                if (!this.buybackInfo || this.isSwapDisabled) {
                    return '0';
                }
                const { queueInfo } = this.buybackInfo;
                const { available, offerPrice, tradeFee, amount } = queueInfo;
                const tokenBalances = store_1.getTokenBalances();
                const balance = new eth_wallet_1.BigNumber(available).times(offerPrice).dividedBy(tradeFee);
                const tokenBalance = new eth_wallet_1.BigNumber(tokenBalances[this.getValueByKey('toTokenAddress')]);
                const amountIn = new eth_wallet_1.BigNumber(amount).times(offerPrice).dividedBy(tradeFee);
                return (eth_wallet_1.BigNumber.minimum(balance, tokenBalance, amountIn)).toFixed();
            };
            this.getSecondAvailableBalance = () => {
                if (!this.buybackInfo || !this.buybackInfo.queueInfo) {
                    return '0';
                }
                const { queueInfo } = this.buybackInfo;
                const { offerPrice, tradeFee } = queueInfo;
                return new eth_wallet_1.BigNumber(this.getFirstAvailableBalance()).dividedBy(offerPrice).times(tradeFee).toFixed();
            };
            this.getTokenObject = (key) => {
                const tokenMap = store_1.getTokenMap();
                const tokenAddress = this.getValueByKey(key);
                if (tokenAddress && tokenMap) {
                    let token = tokenMap[tokenAddress.toLowerCase()];
                    if (!token) {
                        token = tokenMap[tokenAddress];
                    }
                    return token;
                }
                return null;
            };
            this.handleFocusInput = (first, isFocus) => {
                const elm = first ? this.firstInputBox : this.secondInputBox;
                if (isFocus) {
                    elm.classList.add('highlight-box');
                }
                else {
                    elm.classList.remove('highlight-box');
                }
            };
            this.firstInputChange = () => {
                const firstToken = this.getTokenObject('toTokenAddress');
                const secondToken = this.getTokenObject('fromTokenAddress');
                global_1.limitInputNumber(this.firstInput, (firstToken === null || firstToken === void 0 ? void 0 : firstToken.decimals) || 18);
                if (!this.buybackInfo)
                    return;
                const info = this.buybackInfo.queueInfo || {};
                const { offerPrice, tradeFee } = info;
                const firstSymbol = (firstToken === null || firstToken === void 0 ? void 0 : firstToken.symbol) || '';
                const inputVal = new eth_wallet_1.BigNumber(this.firstInput.value).dividedBy(offerPrice).times(tradeFee);
                if (inputVal.isNaN()) {
                    this.lbFee.caption = `0 ${firstSymbol}`;
                    this.secondInput.value = '';
                }
                else {
                    this.lbFee.caption = `${global_1.formatNumber(new eth_wallet_1.BigNumber(1).minus(tradeFee).times(this.firstInput.value), 6)} ${firstSymbol}`;
                    this.secondInput.value = global_1.limitDecimals(inputVal, (secondToken === null || secondToken === void 0 ? void 0 : secondToken.decimals) || 18);
                }
                this.updateBtnSwap();
            };
            this.secondInputChange = () => {
                const firstToken = this.getTokenObject('toTokenAddress');
                const secondToken = this.getTokenObject('fromTokenAddress');
                global_1.limitInputNumber(this.secondInput, (secondToken === null || secondToken === void 0 ? void 0 : secondToken.decimals) || 18);
                if (!this.buybackInfo)
                    return;
                const info = this.buybackInfo.queueInfo || {};
                const { offerPrice, tradeFee } = info;
                const firstSymbol = (firstToken === null || firstToken === void 0 ? void 0 : firstToken.symbol) || '';
                const inputVal = new eth_wallet_1.BigNumber(this.secondInput.value).multipliedBy(offerPrice).dividedBy(tradeFee);
                if (inputVal.isNaN()) {
                    this.firstInput.value = '';
                    this.lbFee.caption = `0 ${firstSymbol}`;
                }
                else {
                    this.firstInput.value = global_1.limitDecimals(inputVal, (firstToken === null || firstToken === void 0 ? void 0 : firstToken.decimals) || 18);
                    this.lbFee.caption = `${global_1.formatNumber(new eth_wallet_1.BigNumber(1).minus(tradeFee).times(this.firstInput.value), 6)} ${firstSymbol}`;
                }
                this.updateBtnSwap();
            };
            this.updateBtnSwap = () => {
                if (!this.buybackInfo)
                    return;
                if (this.isSwapDisabled) {
                    this.btnSwap.enabled = false;
                    return;
                }
                const firstVal = new eth_wallet_1.BigNumber(this.firstInput.value);
                const secondVal = new eth_wallet_1.BigNumber(this.secondInput.value);
                const firstAvailable = this.getFirstAvailableBalance();
                const secondAvailable = this.getSecondAvailableBalance();
                if (firstVal.isNaN() || firstVal.lte(0) || firstVal.gt(firstAvailable) || secondVal.isNaN() || secondVal.lte(0) || secondVal.gt(secondAvailable)) {
                    this.btnSwap.enabled = false;
                }
                else {
                    this.btnSwap.enabled = true;
                }
            };
            this.onSwap = () => {
                if (this.buybackInfo && this.isApproveButtonShown) {
                    const info = this.buybackInfo.queueInfo || {};
                    this.approvalModelAction.doApproveAction(this.getTokenObject('toTokenAddress'), info.tokenInAvailable);
                    return;
                }
                else {
                    this.approvalModelAction.doPayAction();
                }
            };
            this.onSubmit = async () => {
                if (!this.buybackInfo || !this.buybackInfo.queueInfo)
                    return;
                const firstToken = this.getTokenObject('toTokenAddress');
                const secondToken = this.getTokenObject('fromTokenAddress');
                const { pairAddress, offerIndex } = this.buybackInfo.queueInfo;
                this.showResultMessage(this.buybackResult, 'warning', `Swapping ${global_1.formatNumber(this.firstInput.value)} ${firstToken === null || firstToken === void 0 ? void 0 : firstToken.symbol} to ${global_1.formatNumber(this.secondInput.value)} ${secondToken === null || secondToken === void 0 ? void 0 : secondToken.symbol}`);
                const params = {
                    provider: "RestrictedOracle",
                    queueType: global_1.QueueType.GROUP_QUEUE,
                    routeTokens: [firstToken, secondToken],
                    bestSmartRoute: [firstToken, secondToken],
                    pairs: [pairAddress],
                    fromAmount: new eth_wallet_1.BigNumber(this.firstInput.value),
                    toAmount: new eth_wallet_1.BigNumber(this.secondInput.value),
                    isFromEstimated: false,
                    groupQueueOfferIndex: offerIndex,
                };
                const { error } = await swap_utils_1.executeSwap(params);
                if (error) {
                    this.showResultMessage(this.buybackResult, 'error', error);
                }
            };
            this.updateInput = (enabled) => {
                this.firstInput.enabled = enabled;
                this.secondInput.enabled = enabled;
            };
            this.initApprovalModelAction = async () => {
                this.approvalModelAction = await swap_utils_1.getApprovalModelAction({
                    sender: this,
                    payAction: this.onSubmit,
                    onToBeApproved: async (token) => {
                        this.isApproveButtonShown = true;
                        this.btnSwap.enabled = true;
                        this.btnSwap.caption = 'Approve';
                    },
                    onToBePaid: async (token) => {
                        this.updateBtnSwap();
                        this.btnSwap.caption = this.submitButtonText;
                        this.isApproveButtonShown = false;
                    },
                    onApproving: async (token, receipt, data) => {
                        this.showResultMessage(this.buybackResult, 'success', receipt || '');
                        this.btnSwap.rightIcon.visible = true;
                        this.btnSwap.caption = 'Approving';
                        this.updateInput(false);
                    },
                    onApproved: async (token, data) => {
                        this.isApproveButtonShown = false;
                        this.btnSwap.rightIcon.visible = false;
                        this.btnSwap.caption = this.submitButtonText;
                        this.updateInput(true);
                        this.updateBtnSwap();
                    },
                    onApprovingError: async (token, err) => {
                        this.showResultMessage(this.buybackResult, 'error', err);
                        this.updateInput(true);
                        this.btnSwap.caption = 'Approve';
                        this.btnSwap.rightIcon.visible = false;
                    },
                    onPaying: async (receipt, data) => {
                        this.showResultMessage(this.buybackResult, 'success', receipt || '');
                        this.btnSwap.rightIcon.visible = true;
                        this.btnSwap.caption = this.submitButtonText;
                        this.updateInput(false);
                    },
                    onPaid: async (data) => {
                        await store_1.setTokenBalances();
                        await this.onSetupPage(store_1.isWalletConnected(), true);
                        this.firstInput.value = '';
                        this.secondInput.value = '';
                        this.btnSwap.rightIcon.visible = false;
                        this.btnSwap.caption = this.submitButtonText;
                    },
                    onPayingError: async (err) => {
                        this.showResultMessage(this.buybackResult, 'error', err);
                        this.btnSwap.rightIcon.visible = false;
                        this.btnSwap.enabled = true;
                        this.btnSwap.caption = this.submitButtonText;
                    }
                });
                swap_utils_1.setApprovalModalSpenderAddress(store_1.Market.HYBRID);
                const firstToken = this.getTokenObject('toTokenAddress');
                await this.approvalModelAction.checkAllowance(firstToken, this.getFirstAvailableBalance());
            };
            this.getValueByKey = (key) => {
                const item = this.buybackInfo;
                if (!item)
                    return null;
                if (item.queueInfo) {
                    return item.queueInfo[key];
                }
                return null;
            };
            this.showResultMessage = (result, status, content) => {
                if (!result)
                    return;
                let params = { status };
                if (status === 'success') {
                    params.txtHash = content;
                }
                else {
                    params.content = content;
                }
                result.message = Object.assign({}, params);
                result.showModal();
            };
            this.initEmptyUI = async () => {
                if (!this.noCampaignSection) {
                    this.noCampaignSection = await components_2.Panel.create({ height: '100%' });
                }
                const isConnected = store_1.isWalletConnected();
                const isBtnShown = !this.data && isConnected;
                let importFileElm;
                let onImportCampaign;
                let onClose;
                if (isBtnShown) {
                    importFileElm = await components_2.Label.create({ visible: false });
                    onImportCampaign = (isNew) => {
                        var _a, _b;
                        this.isImportNewCampaign = isNew;
                        (_b = (_a = importFileElm.firstChild) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.click();
                    };
                    onClose = () => {
                        this.importFileErrModal.visible = false;
                    };
                    this.initInputFile(importFileElm);
                }
                this.noCampaignSection.clearInnerHTML();
                this.noCampaignSection.appendChild(this.$render("i-panel", { class: "no-buyback", height: "100%", background: { color: '#0c1234' } },
                    this.$render("i-vstack", { gap: 10, verticalAlignment: "center" },
                        this.$render("i-image", { url: assets_2.default.fullPath('img/staking/TrollTrooper.svg') }),
                        this.$render("i-label", { font: { color: '#FFFFFF' }, caption: isConnected ? 'No Buybacks' : 'Please connect with your wallet!' }),
                        isBtnShown ? (this.$render("i-hstack", { gap: 10, margin: { top: 10 }, verticalAlignment: "center", horizontalAlignment: "center" },
                            this.$render("i-button", { id: "btnImportExisting", maxWidth: 220, caption: "Import Buyback Campaign", class: "btn-os btn-import", font: { size: '14px' }, rightIcon: { visible: false, spin: true, fill: '#fff' }, onClick: () => onImportCampaign(false) }),
                            importFileElm,
                            this.$render("i-modal", { id: "importFileErrModal", maxWidth: "100%", width: 420, title: "Import Campaign Error", closeIcon: { name: 'times' } },
                                this.$render("i-vstack", { gap: 20, margin: { bottom: 10 }, verticalAlignment: "center", horizontalAlignment: "center" },
                                    this.$render("i-label", { id: "importFileErr", font: { size: '16px', color: '#fff' } }),
                                    this.$render("i-button", { caption: "Close", class: "btn-os btn-import", width: 120, onClick: onClose }))))) : [])));
                this.noCampaignSection.visible = true;
            };
            this.renderEmpty = async () => {
                await this.initEmptyUI();
                if (this.buybackElm) {
                    this.buybackElm.clearInnerHTML();
                    this.buybackElm.appendChild(this.noCampaignSection);
                }
                if (this.loadingElm) {
                    this.loadingElm.visible = false;
                }
            };
            this.renderBuybackCampaign = async () => {
                if (this.buybackInfo) {
                    this.buybackElm.clearInnerHTML();
                    const { tokenOut, tokenIn, projectName, queueInfo } = this.buybackInfo;
                    const info = queueInfo || {};
                    const firstSymbol = store_1.tokenSymbol(this.getValueByKey('toTokenAddress'));
                    const vStackTimer = await components_2.VStack.create({ gap: 4, verticalAlignment: 'center' });
                    const lbTimer = await components_2.Label.create({ caption: 'Starts In', font: { size: '12px' } });
                    lbTimer.classList.add('opacity-50');
                    const endHour = await components_2.Label.create();
                    const endDay = await components_2.Label.create();
                    const endMin = await components_2.Label.create();
                    endHour.classList.add('timer-value');
                    endDay.classList.add('timer-value');
                    endMin.classList.add('timer-value');
                    vStackTimer.appendChild(lbTimer);
                    vStackTimer.appendChild(this.$render("i-panel", { lineHeight: "29px" },
                        this.$render("i-hstack", { gap: 4, verticalAlignment: "center", class: "custom-timer" },
                            endDay,
                            this.$render("i-label", { caption: "D", class: "timer-unit" }),
                            endHour,
                            this.$render("i-label", { caption: "H", class: "timer-unit" }),
                            endMin,
                            this.$render("i-label", { caption: "M", class: "timer-unit" }))));
                    const vStackEndTime = await components_2.VStack.create({ gap: 4, verticalAlignment: 'center' });
                    const lbEndTime = await components_2.Label.create({ caption: 'Estimated End Time', font: { size: '12px' } });
                    lbEndTime.classList.add('opacity-50');
                    vStackEndTime.appendChild(lbEndTime);
                    vStackEndTime.appendChild(this.$render("i-label", { caption: global_1.formatDate(info.endDate), font: { size: '16px', bold: true }, lineHeight: "29px" }));
                    let interval;
                    const setTimer = () => {
                        const { startDate, endDate } = info;
                        let days = 0;
                        let hours = 0;
                        let mins = 0;
                        if (components_2.moment().isBefore(components_2.moment(startDate))) {
                            lbTimer.caption = 'Starts In';
                            lbEndTime.caption = 'Estimated End Time';
                            days = components_2.moment(startDate).diff(components_2.moment(), 'days');
                            hours = components_2.moment(startDate).diff(components_2.moment(), 'hours') - days * 24;
                            mins = components_2.moment(startDate).diff(components_2.moment(), 'minutes') - days * 24 * 60 - hours * 60;
                        }
                        else if (components_2.moment(components_2.moment()).isBefore(endDate)) {
                            lbTimer.caption = 'Ends In';
                            vStackEndTime.visible = false;
                            days = components_2.moment(endDate).diff(components_2.moment(), 'days');
                            hours = components_2.moment(endDate).diff(components_2.moment(), 'hours') - days * 24;
                            mins = components_2.moment(endDate).diff(components_2.moment(), 'minutes') - days * 24 * 60 - hours * 60;
                        }
                        else {
                            vStackTimer.visible = false;
                            vStackEndTime.visible = true;
                            lbEndTime.caption = 'Ended On';
                            days = hours = mins = 0;
                            clearInterval(interval);
                        }
                        endDay.caption = `${days}`;
                        endHour.caption = `${hours}`;
                        endMin.caption = `${mins}`;
                    };
                    setTimer();
                    interval = setInterval(() => {
                        setTimer();
                    }, 1000);
                    this.buybackElm.clearInnerHTML();
                    this.buybackElm.appendChild(this.$render("i-panel", { class: "pnl-buy-back", padding: { bottom: 15, top: 15, right: 15, left: 15 }, height: "auto" },
                        this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "start", margin: { bottom: 15 } },
                            this.$render("i-hstack", { width: 50, position: "relative", verticalAlignment: "center" },
                                this.$render("i-image", { width: 36, height: 36, url: store_1.getTokenIcon(tokenOut), fallbackUrl: store_1.fallBackUrl }),
                                this.$render("i-image", { width: 24, height: 24, url: store_1.getTokenIcon(tokenIn), fallbackUrl: store_1.fallBackUrl, position: "absolute", bottom: -4, left: 24 })),
                            this.$render("i-label", { caption: projectName || '', margin: { top: 4 }, font: { size: '20px', color: '#FF6363', name: 'Montserrat Bold', bold: true } })),
                        this.$render("i-hstack", { gap: 60, width: "100%", verticalAlignment: "center" },
                            this.$render("i-vstack", { gap: 4, verticalAlignment: "center" },
                                this.$render("i-label", { caption: "Buyback Price", font: { size: '12px' }, class: "opacity-50" }),
                                this.$render("i-label", { caption: `${1 / this.getValueByKey('offerPrice')} ${store_1.tokenSymbol(this.getValueByKey('fromTokenAddress'))}`, font: { size: '24px', color: '#72F35D', bold: true }, lineHeight: "29px" })),
                            vStackTimer,
                            vStackEndTime),
                        this.$render("i-hstack", { gap: 20, margin: { top: 15 }, verticalAlignment: "center" },
                            this.$render("i-vstack", { gap: 4, width: "calc(50% - 30px)", height: 90, verticalAlignment: "space-between" },
                                this.$render("i-vstack", { gap: 4, verticalAlignment: "center" },
                                    this.$render("i-label", { caption: "You Swap", font: { size: '14px' } }),
                                    this.$render("i-label", { caption: `Balance: ${global_1.formatNumber(this.getFirstAvailableBalance())} ${firstSymbol}`, font: { size: '12px' }, class: "opacity-50", margin: { left: 'auto' } })),
                                this.$render("i-hstack", { id: "firstInputBox", gap: 8, width: "100%", height: 50, verticalAlignment: "center", background: { color: '#232B5A' }, border: { radius: 16, width: 2, style: 'solid', color: 'transparent' }, padding: { left: 7, right: 7 } },
                                    this.$render("i-hstack", { gap: 4, width: 100, verticalAlignment: "center" },
                                        this.$render("i-image", { width: 20, height: 20, url: store_1.getTokenIcon(this.getValueByKey('toTokenAddress')), fallbackUrl: store_1.fallBackUrl }),
                                        this.$render("i-label", { caption: firstSymbol, font: { size: '16px' } })),
                                    this.$render("i-input", { id: "firstInput", inputType: "number", placeholder: "0.0", class: "input-amount", width: "100%", height: "100%", onChanged: this.firstInputChange, onFocus: () => this.handleFocusInput(true, true), onBlur: () => this.handleFocusInput(true, false) }))),
                            this.$render("i-icon", { name: "arrow-right", fill: "#f15e61", width: 20, height: 20, margin: { top: 40 } }),
                            this.$render("i-vstack", { gap: 4, width: "calc(50% - 30px)", height: 90, verticalAlignment: "space-between" },
                                this.$render("i-label", { caption: "You Receive", font: { size: '14px' } }),
                                this.$render("i-hstack", { id: "secondInputBox", width: "100%", height: 50, position: "relative", verticalAlignment: "center", background: { color: '#232B5A' }, border: { radius: 16, width: 2, style: 'solid', color: 'transparent' }, padding: { left: 7, right: 7 } },
                                    this.$render("i-hstack", { gap: 4, margin: { right: 8 }, width: 100, verticalAlignment: "center" },
                                        this.$render("i-image", { width: 20, height: 20, url: store_1.getTokenIcon(this.getValueByKey('fromTokenAddress')), fallbackUrl: store_1.fallBackUrl }),
                                        this.$render("i-label", { caption: store_1.tokenSymbol(this.getValueByKey('fromTokenAddress')), font: { size: '16px' } })),
                                    this.$render("i-input", { id: "secondInput", inputType: "number", placeholder: "0.0", class: "input-amount", width: "100%", height: "100%", onChanged: this.secondInputChange, onFocus: () => this.handleFocusInput(false, true), onBlur: () => this.handleFocusInput(false, false) })))),
                        this.$render("i-hstack", { gap: 10, margin: { top: 6 }, verticalAlignment: "center", horizontalAlignment: "space-between" },
                            this.$render("i-label", { caption: "Trade Fee", font: { size: '14px' }, class: "opacity-50" }),
                            this.$render("i-label", { id: "lbFee", caption: `0 ${firstSymbol}`, font: { size: '14px' } })),
                        this.$render("i-vstack", { margin: { top: 15 }, verticalAlignment: "center", horizontalAlignment: "center" },
                            this.$render("i-button", { id: "btnSwap", caption: "Swap", enabled: false, class: "btn-os btn-swap", rightIcon: { spin: true, visible: false }, onClick: this.onSwap }))));
                }
                else {
                    this.renderEmpty();
                }
            };
            this.init = async () => {
                super.init();
                this.pnlConfig = new panel_config_1.PanelConfig();
                this.pnlConfig.visible = false;
                this.pnlConfig.onConfigSave = (campaign) => this.onConfigSave(campaign);
                this.pnlConfig.onReset = () => {
                    this.pnlConfig.visible = false;
                    this.buybackLayout.visible = true;
                };
                this.buybackComponent.appendChild(this.pnlConfig);
                this.buybackResult = new result_1.Result();
                this.buybackComponent.appendChild(this.buybackResult);
                this.buybackResult.visible = false;
                this.showResultMessage(this.buybackResult, 'warning', '');
                setTimeout(() => {
                    this.buybackResult.closeModal();
                    this.buybackResult.visible = true;
                }, 100);
                this.initWalletData();
                store_1.setDataFromSCConfig(store_1.Networks, store_1.InfuraId);
                store_1.setCurrentChainId(store_1.getDefaultChainId());
                if (!this.data) {
                    await this.renderEmpty();
                }
            };
            this.$eventBus = components_2.application.EventBus;
            this.registerEvent();
        }
        validateConfig() {
        }
        async getData() {
            return this.data;
        }
        async setData(value) {
            this.data = value;
            this.pnlConfig.visible = false;
            this.buybackLayout.visible = true;
            this.onSetupPage(store_1.isWalletConnected());
        }
        async getTag() {
            return this.tag;
        }
        async setTag(value) {
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
        async onConfigSave(buyback) {
            this.data = buyback;
            this.pnlConfig.visible = false;
            this.buybackLayout.visible = true;
            this.onSetupPage(store_1.isWalletConnected());
        }
        async onEditCampaign(isNew, data) {
            this.pnlConfig.showInputBuyback(isNew, this.getCampaign(data));
            this.buybackLayout.visible = false;
            this.pnlConfig.visible = true;
        }
        getCampaign(data) {
            const _data = data ? data : this.data;
            return _data;
        }
        showImportJsonError(message) {
            this.importFileErrModal.visible = true;
            this.importFileErr.caption = message;
        }
        get isSwapDisabled() {
            if (!this.buybackInfo)
                return true;
            const info = this.buybackInfo.queueInfo;
            if (!info)
                return true;
            const { startDate, endDate, allowAll, addresses } = info;
            const isUpcoming = components_2.moment().isBefore(components_2.moment(startDate));
            const isEnded = components_2.moment().isAfter(components_2.moment(endDate));
            if (isUpcoming || isEnded) {
                return true;
            }
            if (!allowAll) {
                const address = store_1.getWallet().address;
                const isWhitelisted = addresses.some((item) => item.address === address);
                return !isWhitelisted;
            }
            return false;
        }
        get submitButtonText() {
            var _a, _b;
            if (this.isApproveButtonShown) {
                return ((_a = this.btnSwap) === null || _a === void 0 ? void 0 : _a.rightIcon.visible) ? 'Approving' : 'Approve';
            }
            const firstVal = new eth_wallet_1.BigNumber(this.firstInput.value);
            const secondVal = new eth_wallet_1.BigNumber(this.secondInput.value);
            if (firstVal.lt(0) || secondVal.lt(0)) {
                return 'Amount must be greater than 0';
            }
            if (this.buybackInfo) {
                const firstMaxVal = new eth_wallet_1.BigNumber(this.getFirstAvailableBalance());
                const secondMaxVal = new eth_wallet_1.BigNumber(this.getSecondAvailableBalance());
                if (firstVal.gt(firstMaxVal) || secondVal.gt(secondMaxVal)) {
                    return 'Insufficient amount available';
                }
            }
            if ((_b = this.btnSwap) === null || _b === void 0 ? void 0 : _b.rightIcon.visible) {
                return 'Swapping';
            }
            return 'Swap';
        }
        ;
        render() {
            return (this.$render("i-panel", { id: "buybackComponent", class: "pageblock-buyback", minHeight: 200 },
                this.$render("i-panel", { id: "buybackLayout", class: "buyback-layout", width: maxWidth, height: maxHeight },
                    this.$render("i-vstack", { id: "loadingElm", class: "i-loading-overlay" },
                        this.$render("i-vstack", { class: "i-loading-spinner", horizontalAlignment: "center", verticalAlignment: "center" },
                            this.$render("i-icon", { class: "i-loading-spinner_icon", image: { url: assets_2.default.fullPath('img/loading.svg'), width: 36, height: 36 } }),
                            this.$render("i-label", { caption: "Loading...", font: { color: '#FD4A4C', size: '1.5em' }, class: "i-loading-spinner_text" }))),
                    this.$render("i-panel", { id: "buybackElm", class: "wrapper" }))));
        }
    };
    BuybackBlock = __decorate([
        components_2.customModule
    ], BuybackBlock);
    exports.BuybackBlock = BuybackBlock;
});
