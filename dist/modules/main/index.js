var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@buyback/main/panelConfig/token-selection/tokenSelection.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    components_1.Styles.cssRule('.token-selection', {
        $nest: {
            '#tokenSearch': {
                width: '100% !important',
            },
            '.token-agree-input': {
                $nest: {
                    '.i-checkbox_label': {
                        fontSize: '1.5rem',
                        color: '#f6c958',
                        width: '150px !important'
                    },
                    '.checkmark': {
                        height: '30px',
                        width: '30px',
                        background: 'none',
                        border: `3px solid #6573c3`,
                    },
                    '.checkmark:after': {
                        border: `3px solid #6573c3`,
                        height: '16px',
                        left: '7.5px',
                        top: '0px',
                        width: '7px',
                        borderLeft: 0,
                        borderTop: 0,
                    }
                }
            },
            '.btn-source-panel': {
                padding: '5px',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #a8327f 0%, #d4626a 100%)',
                borderRadius: '5px',
            },
            '.token-import-input': {
                width: '100%',
                $nest: {
                    'input': {
                        width: '100%',
                        background: 'none',
                        color: 'blue',
                        border: 'none',
                        fontSize: '1rem',
                        margin: '5px 0',
                    }
                }
            },
            '.pnl-token-import': {
                border: `2px solid #6573c3`,
                borderRadius: '0.75rem',
                margin: '1rem 0',
                padding: '1.25rem 1rem 1rem'
            },
            '.i-modal_header > i-icon': {
                fill: `#F15E61 !important`
            },
            'i-icon': {
                display: 'inline-block'
            },
            '.btn-import': {
                background: 'linear-gradient(90deg, #a8327f 0%, #d4626a 100%)',
                borderRadius: '5px',
                color: '#fff',
                fontSize: '1rem',
                padding: '0.25rem 1.25rem'
            },
            '::-webkit-scrollbar': {
                width: '3px',
            },
            '::-webkit-scrollbar-thumb': {
                background: '#F15E61',
                borderRadius: '5px',
            },
            '.ml-auto': {
                marginLeft: 'auto',
            },
            '.custom-btn': {
                display: 'flex',
                alignItems: 'center',
                width: 'max-content',
                padding: '0.25rem 0.5rem',
                boxShadow: 'none',
                background: 'linear-gradient(90deg, #a8327f 0%, #d4626a 100%)',
                $nest: {
                    '&:hover': {
                        background: 'linear-gradient(90deg, #a8327f 0%, #d4626a 100%)',
                        opacity: .9
                    },
                    '&.disabled': {
                        background: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box',
                        opacity: 1
                    },
                    '> i-icon': {
                        marginRight: '0',
                        height: '18px !important',
                    },
                    '> i-image': {
                        lineHeight: 'initial',
                        marginRight: '0.5rem',
                    },
                    '&.has-token': {
                        background: 'transparent',
                        fontWeight: 'bold',
                        color: '#f6c958',
                        paddingRight: '0',
                        $nest: {
                            '> i-icon': {
                                marginRight: '-7px',
                                fill: '#F15E61',
                            }
                        }
                    },
                },
            },
            '#btnMax': {
                marginRight: '0.25rem',
            },
            '#btnToken': {
                background: '#0C1234',
                color: '#FFFFFF',
                height: '40px',
                width: '100%',
                padding: '0.5rem 0.75rem',
                maxWidth: '300px',
                borderRadius: '12px',
                $nest: {
                    'i-icon': {
                        marginLeft: '0.25rem',
                    },
                }
            },
            '.bg-modal': {
                $nest: {
                    '.modal': {
                        background: '#192046',
                        width: 500,
                        maxWidth: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        color: '#fff',
                        marginTop: 40
                    },
                }
            },
            '#tokenImportModal.bg-modal .modal': {
                width: 400,
            },
            '#tokenSelectionModal': {
                $nest: {
                    '.i-modal_header': {
                        marginBottom: '1.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: `2px solid #F15E61`,
                        color: '#F15E61',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                    },
                    '.i-modal_header > span': {
                        color: '#F15E61',
                    },
                    '.i-modal_header > i-icon': {
                        fill: `#F15E61 !important`
                    },
                    '.search': {
                        position: 'relative',
                        marginBottom: '1.5rem',
                        $nest: {
                            'i-icon': {
                                position: 'absolute',
                                top: 'calc(50% - 8px)',
                                left: '1rem',
                                transform: 'rotate(90deg)',
                                opacity: 0.7
                            },
                            'i-input': {
                                width: '100%'
                            },
                            'i-input > input': {
                                width: '100%',
                                height: 'auto !important',
                                padding: '1rem 1.5rem 1rem 2.25rem',
                                borderRadius: '0.5rem',
                                border: '2px solid #2a3675',
                                background: 'transparent',
                                color: '#FFFFFF',
                                fontSize: 'inherit',
                            }
                        }
                    },
                    '.token-header': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBlock: '0.5rem',
                        $nest: {
                            'i-label *': {
                                color: '#F15E61',
                                fontSize: '1rem',
                            },
                            '.token-section': {
                                position: 'relative',
                                cursor: 'pointer',
                            },
                            'i-icon': {
                                width: '10px',
                                height: '14px',
                                display: 'flex',
                                fill: '#FFFFFF',
                                position: 'absolute',
                                right: '0',
                            },
                            '.icon-sort-up': {
                                top: '2px',
                            },
                            '.icon-sort-down': {
                                bottom: '2px',
                            },
                            '.icon-sorted': {
                                fill: '#F15E61',
                            }
                        }
                    },
                    '.common-token': {
                        $nest: {
                            'i-grid-layout': {
                                margin: '0.5rem 0 0',
                                alignItems: 'center',
                                justifyContent: 'unset'
                            },
                            '.grid-item': {
                                padding: '0.35rem 0.5rem',
                                borderRadius: '1rem',
                                border: '2px solid transparent',
                                cursor: 'pointer',
                                $nest: {
                                    '&:hover': {
                                        borderColor: '#F15E61'
                                    },
                                    'i-image': {
                                        marginRight: '0.5rem'
                                    },
                                    'i-label': {
                                        overflow: 'hidden'
                                    },
                                }
                            },
                        }
                    },
                    '.token-list': {
                        margin: '0.5rem -0.5rem',
                        maxHeight: '45vh',
                        overflowY: 'auto',
                        $nest: {
                            '.token-info': {
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '1rem',
                                marginRight: '0.5rem',
                                textAlign: 'left'
                            },
                            '.token-item': {
                                padding: '0.5rem',
                                overflow: 'unset',
                                $nest: {
                                    '&:hover': {
                                        background: 'linear-gradient(254.8deg,rgba(231,91,102,.1) -8.08%,rgba(181,32,130,.1) 84.35%) !important'
                                    },
                                    'i-image': {
                                        marginRight: '0.5rem'
                                    },
                                    '&:not(:first-child)': {
                                        marginTop: 0
                                    },
                                    'i-label': {
                                        color: '#FFFFFF'
                                    }
                                }
                            },
                            '.token-name i-label > *': {
                                fontSize: '0.75rem',
                                marginRight: '0.5rem',
                                color: '#f50057'
                            }
                        }
                    }
                }
            },
            '@media screen and (max-width: 425px)': {
                $nest: {
                    '.common-list': {
                        gridTemplateColumns: 'repeat(3, 1fr) !important',
                    }
                }
            }
        }
    });
});
define("@buyback/main/panelConfig/token-selection/importToken.tsx", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@buyback/store"], function (require, exports, components_2, eth_wallet_1, store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImportToken = void 0;
    ;
    let ImportToken = class ImportToken extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
            this._state = {
                address: '',
                name: ''
            };
            this.$eventBus = components_2.application.EventBus;
        }
        ;
        set token(value) {
            this._token = value;
            this.updateState();
        }
        get token() {
            return this._token;
        }
        updateState() {
            this._state.address = this.token.address || '';
            this._state.name = this.token.name || '';
        }
        closeModal() {
            this.importModal.visible = false;
        }
        showModal() {
            this.importModal.visible = true;
        }
        async onImportToken(source, event) {
            event.stopPropagation();
            const tokenObj = this.token;
            store_1.addUserTokens(tokenObj);
            store_1.setTokenMap();
            await store_1.setTokenBalances();
            this.$eventBus.dispatch("emitNewToken" /* EmitNewToken */, tokenObj);
            if (typeof this.onUpdate === 'function') {
                this.onUpdate(tokenObj);
            }
            this.closeModal();
        }
        onHandleCheck(source, event) {
            this.importBtn.enabled = source.checked;
        }
        viewContract() {
            const chainId = eth_wallet_1.Wallet.getInstance().chainId;
            store_1.viewOnExplorerByAddress(chainId, this._state.address);
        }
        async init() {
            super.init();
            this.importModal.onClose = () => {
                this.tokenAgreeCheckBox.checked = false;
                this.importBtn.enabled = false;
            };
        }
        render() {
            return (this.$render("i-modal", { id: "importModal", class: "bg-modal", title: "Select Token", closeIcon: { name: 'times' } },
                this.$render("i-panel", { class: "pnl-token-import" },
                    this.$render("i-panel", null,
                        this.$render("i-icon", { name: "question", class: "cicrle", fill: "#e83e8c", width: 15, height: 15, margin: { right: 3 } }),
                        this.$render("i-label", { caption: this._state.name })),
                    this.$render("i-hstack", { margin: { top: 5, bottom: 5 } },
                        this.$render("i-label", { caption: this._state.address, font: { color: '#1890ff' }, class: "pointer", onClick: () => this.viewContract() })),
                    this.$render("i-panel", { class: "btn-source-panel" },
                        this.$render("i-icon", { name: "exclamation-triangle", margin: { right: 3 }, fill: "#fff", width: 15, height: 15 }),
                        this.$render("i-label", { caption: "Unknow Source" }))),
                this.$render("i-panel", { class: "pnl-token-import" },
                    this.$render("i-hstack", { horizontalAlignment: "center", margin: { bottom: 5 } },
                        this.$render("i-icon", { name: "exclamation-triangle", margin: { right: 3 }, fill: "#e83e8c", width: 30, height: 30 })),
                    this.$render("i-hstack", { horizontalAlignment: "center", class: "text-center", margin: { bottom: 5 } },
                        this.$render("i-label", { font: { bold: true, color: "#fff" }, caption: "Trade at your own risk!" })),
                    this.$render("i-hstack", { horizontalAlignment: "center", class: "text-center", margin: { bottom: 5 } },
                        this.$render("i-label", { font: { color: "#fff" }, caption: "Anyone can create a token, including creating fake versions of existing token that claims tp represent projects" })),
                    this.$render("i-hstack", { horizontalAlignment: "center", class: "text-center", margin: { bottom: 5 } },
                        this.$render("i-label", { width: 300, font: { bold: true, color: "#fff" }, caption: "If you purchased this token, you may not be to able sell it back" })),
                    this.$render("i-hstack", { horizontalAlignment: "center", class: "text-center" },
                        this.$render("i-checkbox", { id: "tokenAgreeCheckBox", width: "200", margin: { top: 30 }, height: 30, class: "token-agree-input", background: { color: 'transparent' }, caption: "I understand", onChanged: this.onHandleCheck.bind(this) }))),
                this.$render("i-button", { id: "importBtn", class: "btn-import", width: "100%", caption: "Import", height: 40, enabled: false, onClick: this.onImportToken.bind(this) })));
        }
    };
    __decorate([
        components_2.observable()
    ], ImportToken.prototype, "_state", void 0);
    ImportToken = __decorate([
        components_2.customElements('import-token')
    ], ImportToken);
    exports.ImportToken = ImportToken;
});
define("@buyback/main/panelConfig/token-selection/tokenSelection.tsx", ["require", "exports", "@ijstech/components", "@buyback/store", "@buyback/global", "@buyback/assets", "@buyback/main/panelConfig/token-selection/tokenSelection.css.ts"], function (require, exports, components_3, store_2, global_1, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenSelection = void 0;
    ;
    let TokenSelection = class TokenSelection extends components_3.Module {
        constructor(parent, options) {
            super(parent, options);
            this._isSortBalanceShown = true;
            this._isBtnMaxShown = false;
            this.isInitialized = false;
            this.sortToken = (a, b, asc) => {
                if (a.balance != b.balance) {
                    return asc ? (a.balance - b.balance) : (b.balance - a.balance);
                }
                if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) {
                    return -1;
                }
                if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) {
                    return 1;
                }
                return 0;
            };
            this.$eventBus = components_3.application.EventBus;
            this.registerEvent();
        }
        get token() {
            return this._token;
        }
        set token(value) {
            this._token = value;
            this.updateButton(value);
        }
        get targetChainId() {
            return this._targetChainId;
        }
        set targetChainId(value) {
            this._targetChainId = value;
            this.updateDataByChain(true);
        }
        get tokenDataListProp() {
            return this._tokenDataListProp;
        }
        set tokenDataListProp(value) {
            this._tokenDataListProp = value;
            this.renderTokenItems();
            this.updateButton();
        }
        get onSelectToken() {
            return this._onSelectToken;
        }
        set onSelectToken(callback) {
            this._onSelectToken = callback;
        }
        get isCommonShown() {
            return this._isCommonShown;
        }
        set isCommonShown(value) {
            this._isCommonShown = value;
            this.renderCommonItems();
        }
        get isSortBalanceShown() {
            return this._isSortBalanceShown;
        }
        set isSortBalanceShown(value) {
            this._isSortBalanceShown = value;
            this.sortBalancePanel.visible = value;
        }
        get isBtnMaxShown() {
            return this._isBtnMaxShown;
        }
        set isBtnMaxShown(value) {
            this._isBtnMaxShown = value;
            if (!this.btnMax)
                return;
            if (value) {
                this.btnMax.visible = true;
            }
            else {
                this.btnMax.visible = false;
            }
        }
        get onSetMaxBalance() {
            return this._onSetMaxBalance;
        }
        set onSetMaxBalance(callback) {
            this._onSetMaxBalance = callback;
        }
        get chainId() {
            if (this.targetChainId) {
                return this.targetChainId;
            }
            return store_2.isWalletConnected() ? this.currentChainId : store_2.getChainId();
        }
        get disableSelect() {
            return this._disableSelect;
        }
        set disableSelect(value) {
            this._disableSelect = value;
            this.btnToken.enabled = !value;
            // this.btnToken.rightIcon.name = value ? '' : 'caret-down';
            this.btnToken.rightIcon.visible = !value;
        }
        get disabledMaxBtn() {
            return this._disabledMaxBtn;
        }
        set disabledMaxBtn(value) {
            this._disabledMaxBtn = value;
            this.btnMax.enabled = !value;
        }
        async initData() {
            if (!this.chainId) {
                this.currentChainId = store_2.getChainId();
            }
            if (store_2.isWalletConnected()) {
                this.tokenBalancesMap = store_2.getTokenBalances();
            }
            this.renderTokenItems();
        }
        async updateDataByChain(init) {
            this.tokenBalancesMap = await store_2.updateAllTokenBalances();
            this.renderTokenItems();
            this.updateButton(init ? undefined : this.token);
            if (init) {
                this.isInitialized = true;
            }
        }
        async updateDataByNewToken() {
            this.tokenBalancesMap = store_2.getTokenBalances();
            this.renderTokenItems();
        }
        async onChainChange() {
            if (!this.targetChainId) {
                this.currentChainId = store_2.getChainId();
                this.updateDataByChain();
            }
        }
        async onWalletConnect() {
            this.checkHasMetaMask = store_2.hasMetaMask();
            await this.initData();
            this.updateStatusButton();
        }
        async onWalletDisconnect() {
            await this.initData();
        }
        async onPaid() {
            await this.updateDataByChain();
            await this.initData();
        }
        registerEvent() {
            this.$eventBus.register(this, "isWalletConnected" /* IsWalletConnected */, this.onWalletConnect);
            this.$eventBus.register(this, "IsWalletDisconnected" /* IsWalletDisconnected */, this.onWalletDisconnect);
            this.$eventBus.register(this, "chainChanged" /* chainChanged */, this.onChainChange);
            this.$eventBus.register(this, "Paid" /* Paid */, this.onPaid);
            this.$eventBus.register(this, "emitNewToken" /* EmitNewToken */, this.updateDataByNewToken);
        }
        get tokenDataList() {
            if (this.tokenDataListProp && this.tokenDataListProp.length) {
                return this.tokenDataListProp;
            }
            const tokenList = store_2.getTokenList(this.chainId).filter(f => f.address);
            return tokenList.map((token) => {
                var _a;
                const tokenObject = Object.assign({}, token);
                const nativeToken = store_2.ChainNativeTokenByChainId[this.chainId];
                if (token.symbol === nativeToken.symbol) {
                    Object.assign(tokenObject, { isNative: true });
                }
                if (!store_2.isWalletConnected()) {
                    Object.assign(tokenObject, {
                        balance: 0,
                    });
                }
                else if (this.tokenBalancesMap) {
                    Object.assign(tokenObject, {
                        balance: this.tokenBalancesMap[((_a = token.address) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || token.symbol] || 0,
                    });
                }
                return tokenObject;
            }).sort(this.sortToken);
        }
        get commonTokenDataList() {
            const tokenList = this.tokenDataList;
            if (!tokenList)
                return [];
            return tokenList.filter((token) => token.isCommon || token.isNative);
        }
        get tokenDataListFiltered() {
            let tokenList = this.tokenDataList || [];
            if (tokenList.length) {
                if (this.filterValue) {
                    tokenList = tokenList.filter((token) => {
                        var _a;
                        return token.symbol.toUpperCase().includes(this.filterValue) ||
                            token.name.toUpperCase().includes(this.filterValue) ||
                            ((_a = token.address) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === this.filterValue;
                    });
                }
                if (this.sortValue !== undefined) {
                    tokenList = tokenList.sort((a, b) => {
                        return this.sortToken(a, b, this.sortValue);
                    });
                    const allBalanceZero = !tokenList.some((token) => token.balance && token.balance !== '0');
                    if (allBalanceZero && !this.sortValue) {
                        tokenList = tokenList.reverse();
                    }
                }
            }
            return tokenList;
        }
        sortBalance() {
            this.sortValue = !this.sortValue;
            if (this.sortValue) {
                this.iconSortUp.classList.add('icon-sorted');
                this.iconSortDown.classList.remove('icon-sorted');
            }
            else {
                this.iconSortUp.classList.remove('icon-sorted');
                this.iconSortDown.classList.add('icon-sorted');
            }
            this.renderTokenItems();
        }
        filterSearch(source) {
            this.filterValue = source.value.toUpperCase();
            this.renderTokenItems();
        }
        async renderCommonItems() {
            if (!this.commonTokenList)
                return;
            this.commonTokenList.innerHTML = '';
            if (this.isCommonShown && this.commonTokenDataList) {
                this.commonTokenPanel.visible = true;
                this.commonTokenDataList.forEach((token) => {
                    const logoAddress = token.address && !this.targetChainId ? store_2.getTokenIcon(token.address) : assets_1.default.fullPath(store_2.getTokenIconPath(token, this.chainId));
                    this.commonTokenList.appendChild(this.$render("i-hstack", { background: { color: "var(--background-default)" }, onClick: () => this.onSelect(token), tooltip: { content: token.name }, verticalAlignment: "center", class: "grid-item" },
                        this.$render("i-image", { width: 24, height: 24, url: logoAddress, fallbackUrl: store_2.fallBackUrl }),
                        this.$render("i-label", { caption: token.symbol, onClick: () => this.onSelect(token) })));
                });
            }
            else {
                this.commonTokenPanel.visible = false;
            }
        }
        renderToken(token) {
            const logoAddress = token.address && !this.targetChainId ? store_2.getTokenIcon(token.address) : assets_1.default.fullPath(store_2.getTokenIconPath(token, this.chainId));
            return (this.$render("i-hstack", { width: "100%", verticalAlignment: "center", class: "token-item", padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' }, onClick: () => this.onSelect(token) },
                this.$render("i-vstack", { width: "100%" },
                    this.$render("i-hstack", null,
                        this.$render("i-hstack", null,
                            this.$render("i-image", { width: 36, height: 36, url: logoAddress, fallbackUrl: store_2.fallBackUrl }),
                            this.$render("i-panel", { class: "token-info" },
                                this.$render("i-label", { caption: token.symbol, onClick: () => this.onSelect(token) }),
                                this.$render("i-hstack", { class: "token-name", verticalAlignment: "center" },
                                    this.$render("i-label", { caption: token.name, onClick: () => this.onSelect(token) }),
                                    token.address && !token.isNative ?
                                        this.$render("i-icon", { name: "copy", width: "14px", height: "14px", fill: '#FFFFFF', margin: { right: 8 }, tooltip: { content: `${token.symbol} has been copied`, trigger: 'click' }, onClick: () => components_3.application.copyToClipboard(token.address || ''), class: "inline-flex pointer" })
                                        : [],
                                    token.address && this.checkHasMetaMask ?
                                        this.$render("i-image", { display: "flex", width: 16, height: 16, url: assets_1.default.fullPath('img/swap/metamask.png'), tooltip: { content: 'Add to MetaMask' }, onClick: (target, event) => this.addToMetamask(event, token) })
                                        : []))),
                        this.$render("i-label", { class: "ml-auto", caption: global_1.formatNumber(token.balance, 4), onClick: () => this.onSelect(token) })),
                    token.isNew ? (this.$render("i-hstack", { horizontalAlignment: "center" },
                        this.$render("i-button", { caption: 'Import', class: "btn-import", margin: { top: 10 }, height: 34, onClick: (source, event) => this.showImportTokenModal(event, token) }))) : (this.$render("i-hstack", null)))));
        }
        async renderTokenItems() {
            if (!this.tokenList)
                return;
            this.renderCommonItems();
            this.tokenList.innerHTML = '';
            if (this.tokenDataListFiltered.length) {
                const tokenItems = this.tokenDataListFiltered.map((token) => this.renderToken(token));
                this.tokenList.append(...tokenItems);
            }
            else if (this.targetChainId && this.targetChainId !== store_2.getChainId()) {
                this.tokenList.innerHTML = '';
                this.tokenList.append(this.$render("i-label", { font: { color: '#FFFFFF' }, class: "text-center mt-1 mb-1", caption: "No tokens found" }));
            }
            else {
                try {
                    const tokenObj = await store_2.getTokenObject(this.filterValue, true);
                    if (!tokenObj)
                        throw new Error('Token is invalid');
                    this.tokenList.innerHTML = '';
                    this.tokenList.appendChild(this.renderToken(Object.assign(Object.assign({}, tokenObj), { isNew: true })));
                }
                catch (err) {
                    this.tokenList.innerHTML = '';
                    this.tokenList.append(this.$render("i-label", { font: { color: '#FFFFFF' }, class: "text-center mt-1 mb-1", caption: "No tokens found" }));
                }
            }
        }
        addToMetamask(event, token) {
            event.stopPropagation();
            const img = `${window.location.origin}${store_2.getTokenIconPath(token, this.chainId).substring(1)}`;
            window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: token.address,
                        symbol: token.symbol,
                        decimals: token.decimals,
                        image: img
                    },
                },
            });
        }
        async showModal() {
            if (!this.enabled)
                return;
            this.tokenSearch.value = '';
            this.filterValue = '';
            this.sortValue = undefined;
            this.iconSortUp.classList.remove('icon-sorted');
            this.iconSortDown.classList.remove('icon-sorted');
            if (!this.tokenList.innerHTML) {
                await this.initData();
            }
            this.tokenSelectionModal.visible = true;
        }
        updateStatusButton() {
            const status = store_2.isWalletConnected();
            if (this.btnToken) {
                this.btnToken.enabled = !this.disableSelect && status;
            }
            if (this.btnMax) {
                this.btnMax.enabled = !this.disabledMaxBtn && status;
            }
        }
        updateButton(token) {
            var _a;
            const btnToken = this.btnToken;
            if (!btnToken)
                return;
            try {
                let image = btnToken.querySelector('i-image');
                token = (_a = this.tokenDataList) === null || _a === void 0 ? void 0 : _a.find((v) => { var _a; return (v.address && v.address == ((_a = this.token) === null || _a === void 0 ? void 0 : _a.address)); });
                if (!token) {
                    btnToken.caption = 'Select a token';
                    btnToken.classList.remove('has-token');
                    this.btnMax.visible = false;
                    if (image) {
                        btnToken.removeChild(image);
                    }
                }
                else {
                    btnToken.caption = token.symbol;
                    btnToken.classList.add('has-token');
                    if (this.isBtnMaxShown) {
                        this.btnMax.visible = true;
                    }
                    const logoAddress = token.address && !this.targetChainId ? store_2.getTokenIcon(token.address) : assets_1.default.fullPath(store_2.getTokenIconPath(token, this.chainId));
                    if (!image) {
                        image = new components_3.Image(btnToken, {
                            width: 20,
                            height: 20,
                            fallbackUrl: store_2.fallBackUrl
                        });
                        btnToken.prepend(image);
                    }
                    image.url = logoAddress;
                }
            }
            catch (_b) { }
        }
        async onSelect(token, isNew = false) {
            this.token = token;
            // The token has been not imported
            if (!isNew && token.isNew && !store_2.hasUserToken(token.address || '', this.chainId)) {
                store_2.setUserTokens(token, this.chainId);
                store_2.setTokenMap();
                await store_2.setTokenBalances();
                this.$eventBus.dispatch("emitNewToken" /* EmitNewToken */, token);
                isNew = true;
            }
            this.onSelectToken(Object.assign(Object.assign({}, token), { isNew }));
            this.tokenSelectionModal.visible = false;
        }
        ;
        async init() {
            await this.onWalletConnect();
            super.init();
            this.disableSelect = this.getAttribute("disableSelect", true);
            this.disabledMaxBtn = this.getAttribute("disabledMaxBtn", true);
            this.updateStatusButton();
            this.updateButton();
            if (!store_2.isWalletConnected())
                this.disableSelect = false;
        }
        showImportTokenModal(event, token) {
            event.stopPropagation();
            this.importTokenModal.token = token;
            this.importTokenModal.showModal();
            this.importTokenModal.onUpdate = this.onImportToken.bind(this);
        }
        onImportToken(token) {
            this.onSelect(token, true);
        }
        onCloseModal() {
            // reset list
            this.filterValue = '';
            this.renderTokenItems();
        }
        render() {
            return (this.$render("i-panel", { class: "token-selection" },
                this.$render("i-panel", { class: "flex" },
                    this.$render("i-button", { id: "btnMax", visible: false, enabled: false, class: "custom-btn", caption: "Max", onClick: () => this.onSetMaxBalance() }),
                    this.$render("i-button", { id: "btnToken", enabled: false, class: "custom-btn", rightIcon: { name: "caret-down", fill: '#F15E61' }, caption: "Select a token", onClick: () => this.showModal() })),
                this.$render("i-modal", { id: "tokenSelectionModal", class: "bg-modal", title: "Select Token", closeIcon: { name: 'times' }, onClose: () => this.onCloseModal() },
                    this.$render("i-panel", { class: "search" },
                        this.$render("i-icon", { width: 16, height: 16, name: "search", fill: "white" }),
                        this.$render("i-input", { id: "tokenSearch", placeholder: "Search name or paste address", width: "100%", height: "auto", onKeyUp: this.filterSearch.bind(this) })),
                    this.$render("i-panel", { id: "commonTokenPanel", class: "common-token" },
                        this.$render("i-label", { caption: "Common Token" }),
                        this.$render("i-grid-layout", { id: "commonTokenList", columnsPerRow: 4, gap: { row: '1rem', column: '1rem' }, class: "common-list", verticalAlignment: "center" })),
                    this.$render("i-panel", { id: "sortBalancePanel", class: "token-header" },
                        this.$render("i-label", { caption: "Token" }),
                        this.$render("i-panel", { class: "token-section ml-auto", onClick: () => this.sortBalance() },
                            this.$render("i-label", { class: "mr-1", caption: "Balance" }),
                            this.$render("i-icon", { id: "iconSortUp", class: "icon-sort-up", name: "sort-up" }),
                            this.$render("i-icon", { id: "iconSortDown", class: "icon-sort-down", name: "sort-down" }))),
                    this.$render("i-grid-layout", { id: "tokenList", class: "token-list", columnsPerRow: 1 })),
                this.$render("import-token", { id: "importTokenModal" })));
        }
    };
    __decorate([
        components_3.observable()
    ], TokenSelection.prototype, "sortValue", void 0);
    __decorate([
        components_3.observable()
    ], TokenSelection.prototype, "filterValue", void 0);
    TokenSelection = __decorate([
        components_3.customElements('token-selection')
    ], TokenSelection);
    exports.TokenSelection = TokenSelection;
    ;
});
define("@buyback/main/panelConfig/token-selection/index.tsx", ["require", "exports", "@buyback/main/panelConfig/token-selection/tokenSelection.tsx", "@buyback/main/panelConfig/token-selection/importToken.tsx"], function (require, exports, tokenSelection_1, importToken_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImportToken = exports.TokenSelection = void 0;
    Object.defineProperty(exports, "TokenSelection", { enumerable: true, get: function () { return tokenSelection_1.TokenSelection; } });
    Object.defineProperty(exports, "ImportToken", { enumerable: true, get: function () { return importToken_1.ImportToken; } });
});
define("@buyback/main/panelConfig/buyback.tsx", ["require", "exports", "@ijstech/components", "@buyback/global", "@buyback/store", "@buyback/main/panelConfig/token-selection/index.tsx"], function (require, exports, components_4, global_2, store_3, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CampaignConfig = void 0;
    ;
    let CampaignConfig = class CampaignConfig extends components_4.Module {
        constructor(parent, options) {
            super(parent, options);
            this.isInitialized = false;
            this.setupInput = () => {
                if (this.inputName) {
                    this.inputName.enabled = !this.isNew;
                    this.inputOfferIndex.enabled = this.isNew;
                    this.inputPrice.enabled = this.isNew;
                    this.inputAmount.enabled = this.isNew;
                    this.inputCommittedAmount.enabled = this.isNew;
                    if (this.fromTokenSelection) {
                        this.fromTokenSelection.enabled = this.isNew;
                    }
                    if (this.toTokenSelection) {
                        this.toTokenSelection.enabled = this.isNew;
                    }
                }
            };
            this.setupData = async () => {
                if (this.data) {
                    const { projectName, offerIndex, tokenIn, tokenOut, idoPrice, idoAmount, committedAmount } = this.data;
                    const interval = setInterval(async () => {
                        if (this.isInitialized) {
                            clearInterval(interval);
                            const tokenMap = store_3.getTokenMap();
                            this.inputName.value = projectName;
                            this.inputOfferIndex.value = `${offerIndex}` || '';
                            if (tokenOut) {
                                const fromToken = tokenMap[tokenOut] || tokenMap[tokenOut.toLowerCase()];
                                this.fromToken = fromToken;
                                this.fromTokenSelection.token = fromToken;
                            }
                            if (tokenIn) {
                                const toToken = tokenMap[tokenIn] || tokenMap[tokenIn.toLowerCase()];
                                this.toToken = toToken;
                                this.toTokenSelection.token = toToken;
                            }
                            this.inputPrice.value = `${idoPrice || ''}`;
                            this.inputAmount.value = `${idoAmount || ''}`;
                            this.inputCommittedAmount.value = `${committedAmount || ''}`;
                            this.emitInput();
                        }
                    }, 200);
                }
            };
            this.emitInput = () => {
                components_4.application.EventBus.dispatch("emitInput" /* EmitInput */);
            };
            this.onInputIndex = () => {
                let value = this.inputOfferIndex.value;
                value = value.replace(/[^0-9]+/g, "");
                this.inputOfferIndex.value = value;
                this.emitInput();
            };
            this.onInputNumber = (input) => {
                global_2.limitInputNumber(input, 18);
                this.emitInput();
            };
            this.onInputFromToken = (token) => {
                this.fromToken = token;
                this.emitInput();
            };
            this.onInputToToken = (token) => {
                this.toToken = token;
                this.emitInput();
            };
            this.onInputText = () => {
                this.emitInput();
            };
            this.checkValidation = () => {
                return !!this.inputName.value &&
                    this.fromToken && this.toToken &&
                    global_2.isValidNumber(this.inputOfferIndex.value) &&
                    global_2.isValidNumber(this.inputPrice.value) &&
                    global_2.isValidNumber(this.inputAmount.value) &&
                    global_2.isValidNumber(this.inputCommittedAmount.value);
            };
            this.getData = () => {
                var _a, _b;
                const buyback = {
                    projectName: this.inputName.value,
                    offerIndex: this.inputOfferIndex.value,
                    tokenIn: ((_a = this.toToken) === null || _a === void 0 ? void 0 : _a.address) || '',
                    tokenOut: ((_b = this.fromToken) === null || _b === void 0 ? void 0 : _b.address) || '',
                    idoPrice: this.inputPrice.value,
                    idoAmount: this.inputAmount.value,
                    committedAmount: this.inputCommittedAmount.value,
                };
                return buyback;
            };
        }
        set isNew(value) {
            this._isNew = value;
            this.setupInput();
        }
        get isNew() {
            return this._isNew;
        }
        set data(value) {
            this._data = value;
            this.setupData();
        }
        get data() {
            return this._data;
        }
        async init() {
            super.init();
            this.fromTokenSelection = new index_1.TokenSelection();
            this.fromTokenSelection.onSelectToken = this.onInputFromToken;
            this.toTokenSelection = new index_1.TokenSelection();
            this.toTokenSelection.onSelectToken = this.onInputToToken;
            this.pnlFromTokenSelection.appendChild(this.fromTokenSelection);
            this.pnlToTokenSelection.appendChild(this.toTokenSelection);
            this.setupInput();
            this.isInitialized = true;
        }
        render() {
            return (this.$render("i-panel", { class: "custom-scroll" },
                this.$render("i-vstack", { gap: 10, verticalAlignment: "center", class: "main-content" },
                    this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "space-between" },
                        this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                            this.$render("i-label", { class: "lb-title", caption: "Project Name" }),
                            this.$render("i-label", { caption: "*", font: { color: '#F15E61', size: '16px' } })),
                        this.$render("i-input", { id: "inputName", class: "input-text w-input", onChanged: this.onInputText })),
                    this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "space-between" },
                        this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                            this.$render("i-label", { class: "lb-title", caption: "From Token" }),
                            this.$render("i-label", { caption: "*", font: { color: '#F15E61', size: '16px' } })),
                        this.$render("i-panel", { id: "pnlFromTokenSelection", class: "w-input" })),
                    this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "space-between" },
                        this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                            this.$render("i-label", { class: "lb-title", caption: "To Token" }),
                            this.$render("i-label", { caption: "*", font: { color: '#F15E61', size: '16px' } })),
                        this.$render("i-panel", { id: "pnlToTokenSelection", class: "w-input" })),
                    this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "space-between" },
                        this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                            this.$render("i-label", { class: "lb-title", caption: "Offer Index" }),
                            this.$render("i-label", { caption: "*", font: { color: '#F15E61', size: '16px' } })),
                        this.$render("i-panel", { class: "w-input" },
                            this.$render("i-input", { id: "inputOfferIndex", inputType: "number", maxWidth: 300, class: "input-text w-input", onChanged: this.onInputIndex }))),
                    this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "space-between" },
                        this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                            this.$render("i-label", { class: "lb-title", caption: "Buyback Price" }),
                            this.$render("i-label", { caption: "*", font: { color: '#F15E61', size: '16px' } })),
                        this.$render("i-panel", { class: "w-input" },
                            this.$render("i-input", { id: "inputPrice", inputType: "number", maxWidth: 300, class: "input-text w-input", onChanged: this.onInputNumber }))),
                    this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "space-between" },
                        this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                            this.$render("i-label", { class: "lb-title", caption: "Amount" }),
                            this.$render("i-label", { caption: "*", font: { color: '#F15E61', size: '16px' } })),
                        this.$render("i-panel", { class: "w-input" },
                            this.$render("i-input", { id: "inputAmount", inputType: "number", maxWidth: 300, class: "input-text w-input", onChanged: this.onInputNumber }))),
                    this.$render("i-hstack", { gap: 10, verticalAlignment: "center", horizontalAlignment: "space-between" },
                        this.$render("i-hstack", { gap: 4, verticalAlignment: "center" },
                            this.$render("i-label", { class: "lb-title", caption: "Committed Amount" }),
                            this.$render("i-label", { caption: "*", font: { color: '#F15E61', size: '16px' } })),
                        this.$render("i-panel", { class: "w-input" },
                            this.$render("i-input", { id: "inputCommittedAmount", inputType: "number", maxWidth: 300, class: "input-text w-input", onChanged: this.onInputNumber }))))));
        }
    };
    CampaignConfig = __decorate([
        components_4.customElements('campaign-config')
    ], CampaignConfig);
    exports.CampaignConfig = CampaignConfig;
});
define("@buyback/main/panelConfig/panel-config.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    components_5.Styles.cssRule('.panel-config', {
        background: "#192046",
        padding: '1rem',
        margin: 'auto',
        $nest: {
            '.modal': {
                width: 800,
                maxWidth: '100%',
                borderRadius: '1rem',
                padding: '1.5rem 1rem',
            },
            'i-button': {
                padding: '6px 12px',
                textAlign: 'center',
            },
            '.pnl-label': {
                $nest: {
                    'i-icon': {
                        display: 'none',
                        cursor: 'pointer'
                    },
                    '&:hover i-icon': {
                        display: 'block',
                    },
                }
            },
            '.btn-item': {
                background: `#f50057 !important`,
                borderRadius: 0,
                color: '#FFFFFF',
                $nest: {
                    '&.btn-active': {
                        background: `#F15E61 !important`,
                        cursor: 'default',
                    }
                }
            },
            '.w-input': {
                width: 'calc(100% - 180px) !important',
            },
            'input': {
                $nest: {
                    '&::-webkit-outer-spin-button': {
                        '-webkit-appearance': 'none',
                        margin: '0',
                    },
                    '&::-webkit-inner-spin-button': {
                        '-webkit-appearance': 'none',
                        margin: '0',
                    },
                    '&:focus::placeholder': {
                        opacity: 0,
                    }
                }
            },
            '.input-area': {
                height: '80px !important',
                borderRadius: 12,
                padding: 8,
                background: "#0C1234",
                $nest: {
                    'textarea': {
                        width: '100% !important',
                        height: '100% !important',
                        background: 'transparent',
                        boxShadow: 'none',
                        outline: 'none',
                        border: 'none',
                        color: '#FFFFFF',
                        fontSize: '1rem',
                    }
                }
            },
            '.input-text': {
                height: '40px !important',
                borderRadius: 12,
                paddingInline: 8,
                background: "#0C1234",
                $nest: {
                    '&.w-100': {
                        width: '100% !important',
                    },
                    input: {
                        border: 'none',
                        width: '100% !important',
                        height: '100% !important',
                        backgroundColor: 'transparent',
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        textAlign: 'left'
                    },
                }
            },
            '.main-content': {
                $nest: {
                    '.lb-title ': {
                        color: '#fff'
                    },
                }
            },
            '#lbMinLockTime': {
                opacity: 0.8
            },
            'token-selection.disabled #btnToken': {
                cursor: 'default !important',
            },
            '.network-selection': {
                $nest: {
                    '.btn-select:hover': {
                        background: `rgba(0, 0, 0, 0.54) !important`,
                    },
                    '.btn-select.disabled': {
                        color: `#fff !important`,
                        cursor: 'default !important',
                    },
                    '.modal': {
                        padding: '0.75rem 0',
                        background: '#0C1234',
                        borderRadius: 6,
                        border: `1px solid #2c387e`,
                        $nest: {
                            '& > i-vstack': {
                                maxHeight: '40vh',
                                overflow: 'auto',
                            },
                            'i-button': {
                                boxShadow: 'none',
                                color: '#FFFFFF'
                            },
                            'i-button:hover': {
                                background: `linear-gradient(254.8deg, rgba(231,91,102,.1) -8.08%, rgba(181,32,130,.1) 84.35%) !important`,
                            },
                        },
                    },
                },
            },
            '.cursor-pointer': {
                cursor: 'pointer',
            },
            '&.custom-scroll *': {
                $nest: {
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar': {
                        width: '5px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#F15E61',
                        borderRadius: '5px',
                    }
                }
            },
            '#loadingElm.i-loading--active': {
                marginTop: '2rem',
                position: 'initial',
                $nest: {
                    '.i-loading-spinner': {
                        marginTop: '2rem',
                    },
                },
            },
            '@media screen and (max-width: 525px)': {
                $nest: {
                    '.main-content': {
                        $nest: {
                            '.w-input': {
                                width: '100% !important'
                            },
                            '.row-mobile': {
                                flexWrap: 'nowrap',
                                $nest: {
                                    '.lb-title': {
                                        whiteSpace: 'nowrap',
                                    }
                                }
                            },
                            '.network-selection': {
                                $nest: {
                                    'i-button': {
                                        maxWidth: 'inherit !important',
                                    },
                                    'i-modal': {
                                        width: '100%',
                                        maxWidth: 'inherit !important',
                                        $nest: {
                                            '.modal': {
                                                background: '#192046',
                                                maxWidth: 'inherit !important',
                                            }
                                        }
                                    }
                                }
                            },
                            'i-hstack': {
                                flexWrap: 'wrap',
                            },
                        }
                    }
                }
            }
        }
    });
});
define("@buyback/main/panelConfig/panel-config.tsx", ["require", "exports", "@ijstech/components", "@buyback/global", "@buyback/store", "@buyback/result", "@buyback/main/panelConfig/buyback.tsx", "@buyback/main/panelConfig/panel-config.css.ts"], function (require, exports, components_6, global_3, store_4, result_1, buyback_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PanelConfig = void 0;
    ;
    let PanelConfig = class PanelConfig extends components_6.Module {
        constructor(parent, options) {
            super(parent, options);
            this.registerEvent = () => {
                this.$eventBus.register(this, "emitInput" /* EmitInput */, this.updateButton);
                this.$eventBus.register(this, "isWalletConnected" /* IsWalletConnected */, this.renderUI);
                this.$eventBus.register(this, "IsWalletDisconnected" /* IsWalletDisconnected */, this.renderUI);
                this.$eventBus.register(this, "chainChanged" /* chainChanged */, this.onChangeChanged);
            };
            this.renderUI = () => {
                const isConnected = store_4.isWalletConnected();
                this.networkElm.visible = !isConnected;
                this.buybackCampaignElm.visible = isConnected;
                this.updateNetworkName(store_4.getChainId());
            };
            this.onChangeChanged = () => {
                const chainId = store_4.getChainId();
                this.updateNetworkName(chainId);
                this.updateButton();
            };
            this.showInputBuyback = async (isNew, buyback) => {
                // this.wrapperNetworkElm.visible = isNew;
                this.groupBtnSaveElm.visible = !isNew;
                this.groupBtnDeployElm.visible = isNew;
                this.isNew = isNew;
                this.pnlInfoElm.clearInnerHTML();
                if (buyback) {
                    await this.onAddBuyback(buyback);
                }
                else {
                    this.onAddBuyback();
                }
            };
            this.onAddBuyback = async (campaign) => {
                this.campaignConfig = new buyback_1.CampaignConfig();
                this.campaignConfig.isNew = this.isNew;
                this.campaignConfig.data = campaign;
                this.pnlInfoElm.clearInnerHTML();
                this.pnlInfoElm.appendChild(this.campaignConfig);
            };
            this.onBack = () => {
                this.pnlInfoElm.clearInnerHTML();
                if (this.onReset) {
                    this.onReset();
                }
            };
            this.updateNetworkName = (chainId) => {
                const network = store_4.getNetworkInfo(chainId);
                this.lbNetworkName.caption = network ? network.name : 'Unknown Network';
            };
            this.updateButton = () => {
                const valid = !!this.checkValidation();
                if (this.isNew) {
                    if (this.btnDeployExport.rightIcon.visible)
                        return;
                    this.btnExport.enabled = valid;
                    this.btnDeployExport.enabled = valid;
                }
                else {
                    this.btnSave.enabled = valid;
                    this.btnDownload.enabled = valid;
                }
            };
            this.checkValidation = () => {
                if (this.campaignConfig) {
                    return this.campaignConfig.checkValidation();
                }
                return false;
            };
            this.getBuybackData = () => {
                return this.campaignConfig.getData();
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
            this.onSave = () => {
                if (!this.isNew && this.checkValidation()) {
                    const buyback = this.getBuybackData();
                    this.onConfigSave(buyback);
                }
            };
            this.onDownload = (data) => {
                if (this.isNew && data) {
                    global_3.downloadJsonFile('buyback.json', Object.assign({}, data));
                    return;
                }
                if (this.checkValidation()) {
                    const buyback = this.getBuybackData();
                    global_3.downloadJsonFile('buyback.json', buyback);
                }
            };
            this.onDeployBuyback = async () => {
                if (this.isNew && this.checkValidation()) {
                    const buyback = this.getBuybackData();
                    let result;
                    this.showResultMessage(this.buybackResult, 'warning', `Deploying ${buyback.projectName}`);
                    const onUpdateBtn = () => {
                        this.btnDeployExport.rightIcon.visible = false;
                        this.btnDeployExport.caption = 'Deploy and Export JSON';
                        this.updateButton();
                        this.backElm.classList.add('cursor-pointer');
                        this.backElm.onClick = () => this.onBack();
                    };
                    const callBack = async (err, reply) => {
                        if (err) {
                            this.showResultMessage(this.buybackResult, 'error', err);
                            onUpdateBtn();
                        }
                        else {
                            this.showResultMessage(this.buybackResult, 'success', reply);
                            this.backElm.classList.remove('cursor-pointer');
                            this.backElm.onClick = () => { };
                            this.btnExport.enabled = false;
                            this.btnDeployExport.enabled = false;
                            this.btnDeployExport.caption = 'Deploying & Exporting';
                            this.btnDeployExport.rightIcon.visible = true;
                        }
                    };
                    const confirmationCallBack = async (receipt) => {
                        if (!result)
                            return;
                        onUpdateBtn();
                    };
                    global_3.registerSendTxEvents({
                        transactionHash: callBack,
                        confirmation: confirmationCallBack
                    });
                    // TODO
                    // result = await deployBuyback(buyback, callBack);
                    // if (result) {
                    //   this.buybackResult.closeModal();
                    //   const obj = {[chainId]: [{ ...result }]};
                    //   this.onConfigSave(obj);
                    //   confirmationCallBack(true);
                    //   this.onDownload(obj);
                    // }
                }
            };
            this.$eventBus = components_6.application.EventBus;
            this.registerEvent();
        }
        onConfirm() {
            if (this.isNew) {
                this.onDeployBuyback();
            }
            else {
                this.onSave();
            }
        }
        init() {
            super.init();
            this.buybackResult = new result_1.Result();
            this.appendChild(this.buybackResult);
        }
        render() {
            return (this.$render("i-panel", { class: "panel-config custom-scroll" },
                this.$render("i-panel", { id: "configBuybacksElm", margin: { left: 'auto', right: 'auto' }, width: "100%", maxWidth: 800 },
                    this.$render("i-hstack", { id: "backElm", gap: 4, width: "fit-content", margin: { top: 5, bottom: 15, left: 'auto' }, verticalAlignment: "center", class: "cursor-pointer", onClick: this.onBack },
                        this.$render("i-icon", { name: "arrow-left", fill: '#FFFFFF', width: 20, height: 20 }),
                        this.$render("i-label", { caption: "Back", font: { size: '20px', bold: true, color: '#FFFFFF' } })),
                    this.$render("i-hstack", { id: "networkElm", width: "100%", height: 150, verticalAlignment: "center", horizontalAlignment: "center" },
                        this.$render("i-label", { caption: "Please connect with your network!", font: { color: '#FFFFFF' } })),
                    this.$render("i-panel", { visible: false, id: "buybackCampaignElm", width: "100%" },
                        this.$render("i-hstack", { id: "wrapperNetworkElm", width: "100%", margin: { bottom: 10 }, verticalAlignment: "center", horizontalAlignment: "center" },
                            this.$render("i-label", { id: "lbNetworkName", font: { color: '#F15E61', size: '20px', bold: true } })),
                        this.$render("i-vstack", { gap: 10, verticalAlignment: "center", class: "main-content" },
                            this.$render("i-panel", { id: "pnlInfoElm" }),
                            this.$render("i-hstack", { margin: { top: 10 }, horizontalAlignment: "center" },
                                this.$render("i-hstack", { id: "groupBtnSaveElm", gap: 10, margin: { top: 20 }, verticalAlignment: "center", horizontalAlignment: "center", wrap: "wrap" },
                                    this.$render("i-button", { id: "btnSave", caption: "Save", enabled: false, width: 200, maxWidth: "100%", class: "btn-os", onClick: this.onSave }),
                                    this.$render("i-button", { id: "btnDownload", caption: "Export JSON", enabled: false, width: 200, maxWidth: "100%", class: "btn-os", onClick: () => this.onDownload() })),
                                this.$render("i-hstack", { id: "groupBtnDeployElm", gap: 10, margin: { top: 10 }, verticalAlignment: "center", horizontalAlignment: "center", wrap: "wrap" },
                                    this.$render("i-button", { id: "btnExport", caption: "Export JSON", enabled: false, width: 200, maxWidth: "100%", class: "btn-os", onClick: () => this.onDownload() }),
                                    this.$render("i-button", { id: "btnDeployExport", caption: "Deploy & Export JSON", enabled: false, width: 300, maxWidth: "100%", rightIcon: { spin: true, visible: false, fill: '#FFFFFF' }, class: "btn-os", onClick: this.onDeployBuyback }))))))));
        }
    };
    PanelConfig = __decorate([
        components_6.customElements('panel-config')
    ], PanelConfig);
    exports.PanelConfig = PanelConfig;
});
define("@buyback/main/panelConfig/index.tsx", ["require", "exports", "@buyback/main/panelConfig/panel-config.tsx"], function (require, exports, panel_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PanelConfig = void 0;
    Object.defineProperty(exports, "PanelConfig", { enumerable: true, get: function () { return panel_config_1.PanelConfig; } });
});
define("@buyback/main/index.css.ts", ["require", "exports", "@ijstech/components", "@buyback/assets"], function (require, exports, components_7, assets_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    components_7.Styles.Theme.darkTheme.background.default = '#192046';
    const colorVar = {
        primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
        primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
        darkBg: '#181E3E 0% 0% no-repeat padding-box',
        primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
    };
    components_7.Styles.fontFace({
        fontFamily: "Apple SD Gothic Neo",
        src: `url("${assets_2.default.fullPath('fonts/FontsFree-Net-Apple-SD-Gothic-Neo-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Montserrat Regular",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Montserrat Bold",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Montserrat Light",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Montserrat Medium",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Montserrat SemiBold",
        src: `url("${assets_2.default.fullPath('fonts/montserrat/Montserrat-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Raleway Regular",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-Regular.ttf')}") format("truetype")`,
        fontWeight: 'nomal',
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Raleway Bold",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-Bold.ttf')}") format("truetype")`,
        fontWeight: 'bold',
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Raleway Light",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-Light.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Raleway Medium",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-Medium.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_7.Styles.fontFace({
        fontFamily: "Raleway SemiBold",
        src: `url("${assets_2.default.fullPath('fonts/raleway/Raleway-SemiBold.ttf')}") format("truetype")`,
        fontStyle: 'normal'
    });
    components_7.Styles.cssRule('.pageblock-buyback', {
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
define("@buyback/main", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@buyback/assets", "@buyback/global", "@buyback/store", "@buyback/queue-utils", "@buyback/swap-utils", "@buyback/result", "@buyback/main/panelConfig/index.tsx", "@buyback/main/index.css.ts"], function (require, exports, components_8, eth_wallet_2, assets_3, global_4, store_5, queue_utils_1, swap_utils_1, result_2, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuybackBlock = void 0;
    components_8.Styles.Theme.applyTheme(components_8.Styles.Theme.darkTheme);
    const maxHeight = '321px';
    const maxWidth = '690px';
    let BuybackBlock = class BuybackBlock extends components_8.Module {
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
                const isConnected = store_5.isWalletConnected();
                this.onSetupPage(isConnected);
            };
            this.initWalletData = async () => {
                let accountsChangedEventHandler = async (account) => {
                    store_5.setTokenMap();
                };
                let chainChangedEventHandler = async (hexChainId) => {
                    store_5.setTokenMap();
                };
                const selectedProvider = localStorage.getItem('walletProvider');
                const isValidProvider = Object.values(eth_wallet_2.WalletPlugin).includes(selectedProvider);
                if (!eth_wallet_2.Wallet.getInstance().chainId) {
                    eth_wallet_2.Wallet.getInstance().chainId = store_5.getDefaultChainId();
                }
                if (store_5.hasWallet() && isValidProvider) {
                    await store_5.connectWallet(selectedProvider, {
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
                    if (firstToken && firstToken.symbol !== ((_a = store_5.ChainNativeTokenByChainId[store_5.getChainId()]) === null || _a === void 0 ? void 0 : _a.symbol)) {
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
                    else if (campaignObj.chainId && campaignObj.chainId !== store_5.getChainId()) {
                        const networkName = store_5.getNetworkInfo(campaignObj.chainId) ? store_5.getNetworkInfo(campaignObj.chainId).name : `ChainId = ${campaignObj.chainId}`;
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
                const tokenBalances = store_5.getTokenBalances();
                const balance = new eth_wallet_2.BigNumber(available).times(offerPrice).dividedBy(tradeFee);
                const tokenBalance = new eth_wallet_2.BigNumber(tokenBalances[this.getValueByKey('toTokenAddress')]);
                const amountIn = new eth_wallet_2.BigNumber(amount).times(offerPrice).dividedBy(tradeFee);
                return (eth_wallet_2.BigNumber.minimum(balance, tokenBalance, amountIn)).toFixed();
            };
            this.getSecondAvailableBalance = () => {
                if (!this.buybackInfo || !this.buybackInfo.queueInfo) {
                    return '0';
                }
                const { queueInfo } = this.buybackInfo;
                const { offerPrice, tradeFee } = queueInfo;
                return new eth_wallet_2.BigNumber(this.getFirstAvailableBalance()).dividedBy(offerPrice).times(tradeFee).toFixed();
            };
            this.getTokenObject = (key) => {
                const tokenMap = store_5.getTokenMap();
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
                global_4.limitInputNumber(this.firstInput, (firstToken === null || firstToken === void 0 ? void 0 : firstToken.decimals) || 18);
                if (!this.buybackInfo)
                    return;
                const info = this.buybackInfo.queueInfo || {};
                const { offerPrice, tradeFee } = info;
                const firstSymbol = (firstToken === null || firstToken === void 0 ? void 0 : firstToken.symbol) || '';
                const inputVal = new eth_wallet_2.BigNumber(this.firstInput.value).dividedBy(offerPrice).times(tradeFee);
                if (inputVal.isNaN()) {
                    this.lbFee.caption = `0 ${firstSymbol}`;
                    this.secondInput.value = '';
                }
                else {
                    this.lbFee.caption = `${global_4.formatNumber(new eth_wallet_2.BigNumber(1).minus(tradeFee).times(this.firstInput.value), 6)} ${firstSymbol}`;
                    this.secondInput.value = global_4.limitDecimals(inputVal, (secondToken === null || secondToken === void 0 ? void 0 : secondToken.decimals) || 18);
                }
                this.updateBtnSwap();
            };
            this.secondInputChange = () => {
                const firstToken = this.getTokenObject('toTokenAddress');
                const secondToken = this.getTokenObject('fromTokenAddress');
                global_4.limitInputNumber(this.secondInput, (secondToken === null || secondToken === void 0 ? void 0 : secondToken.decimals) || 18);
                if (!this.buybackInfo)
                    return;
                const info = this.buybackInfo.queueInfo || {};
                const { offerPrice, tradeFee } = info;
                const firstSymbol = (firstToken === null || firstToken === void 0 ? void 0 : firstToken.symbol) || '';
                const inputVal = new eth_wallet_2.BigNumber(this.secondInput.value).multipliedBy(offerPrice).dividedBy(tradeFee);
                if (inputVal.isNaN()) {
                    this.firstInput.value = '';
                    this.lbFee.caption = `0 ${firstSymbol}`;
                }
                else {
                    this.firstInput.value = global_4.limitDecimals(inputVal, (firstToken === null || firstToken === void 0 ? void 0 : firstToken.decimals) || 18);
                    this.lbFee.caption = `${global_4.formatNumber(new eth_wallet_2.BigNumber(1).minus(tradeFee).times(this.firstInput.value), 6)} ${firstSymbol}`;
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
                const firstVal = new eth_wallet_2.BigNumber(this.firstInput.value);
                const secondVal = new eth_wallet_2.BigNumber(this.secondInput.value);
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
                this.showResultMessage(this.buybackResult, 'warning', `Swapping ${global_4.formatNumber(this.firstInput.value)} ${firstToken === null || firstToken === void 0 ? void 0 : firstToken.symbol} to ${global_4.formatNumber(this.secondInput.value)} ${secondToken === null || secondToken === void 0 ? void 0 : secondToken.symbol}`);
                const params = {
                    provider: "RestrictedOracle",
                    queueType: global_4.QueueType.GROUP_QUEUE,
                    routeTokens: [firstToken, secondToken],
                    bestSmartRoute: [firstToken, secondToken],
                    pairs: [pairAddress],
                    fromAmount: new eth_wallet_2.BigNumber(this.firstInput.value),
                    toAmount: new eth_wallet_2.BigNumber(this.secondInput.value),
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
                        await store_5.setTokenBalances();
                        await this.onSetupPage(store_5.isWalletConnected(), true);
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
                swap_utils_1.setApprovalModalSpenderAddress(store_5.Market.HYBRID);
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
                    this.noCampaignSection = await components_8.Panel.create({ height: '100%' });
                }
                const isConnected = store_5.isWalletConnected();
                const isBtnShown = !this.data && isConnected;
                let importFileElm;
                let onImportCampaign;
                let onClose;
                if (isBtnShown) {
                    importFileElm = await components_8.Label.create({ visible: false });
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
                        this.$render("i-image", { url: assets_3.default.fullPath('img/staking/TrollTrooper.svg') }),
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
                    const firstSymbol = store_5.tokenSymbol(this.getValueByKey('toTokenAddress'));
                    const vStackTimer = await components_8.VStack.create({ gap: 4, verticalAlignment: 'center' });
                    const lbTimer = await components_8.Label.create({ caption: 'Starts In', font: { size: '12px' } });
                    lbTimer.classList.add('opacity-50');
                    const endHour = await components_8.Label.create();
                    const endDay = await components_8.Label.create();
                    const endMin = await components_8.Label.create();
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
                    const vStackEndTime = await components_8.VStack.create({ gap: 4, verticalAlignment: 'center' });
                    const lbEndTime = await components_8.Label.create({ caption: 'Estimated End Time', font: { size: '12px' } });
                    lbEndTime.classList.add('opacity-50');
                    vStackEndTime.appendChild(lbEndTime);
                    vStackEndTime.appendChild(this.$render("i-label", { caption: global_4.formatDate(info.endDate), font: { size: '16px', bold: true }, lineHeight: "29px" }));
                    let interval;
                    const setTimer = () => {
                        const { startDate, endDate } = info;
                        let days = 0;
                        let hours = 0;
                        let mins = 0;
                        if (components_8.moment().isBefore(components_8.moment(startDate))) {
                            lbTimer.caption = 'Starts In';
                            lbEndTime.caption = 'Estimated End Time';
                            days = components_8.moment(startDate).diff(components_8.moment(), 'days');
                            hours = components_8.moment(startDate).diff(components_8.moment(), 'hours') - days * 24;
                            mins = components_8.moment(startDate).diff(components_8.moment(), 'minutes') - days * 24 * 60 - hours * 60;
                        }
                        else if (components_8.moment(components_8.moment()).isBefore(endDate)) {
                            lbTimer.caption = 'Ends In';
                            vStackEndTime.visible = false;
                            days = components_8.moment(endDate).diff(components_8.moment(), 'days');
                            hours = components_8.moment(endDate).diff(components_8.moment(), 'hours') - days * 24;
                            mins = components_8.moment(endDate).diff(components_8.moment(), 'minutes') - days * 24 * 60 - hours * 60;
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
                                this.$render("i-image", { width: 36, height: 36, url: store_5.getTokenIcon(tokenOut), fallbackUrl: store_5.fallBackUrl }),
                                this.$render("i-image", { width: 24, height: 24, url: store_5.getTokenIcon(tokenIn), fallbackUrl: store_5.fallBackUrl, position: "absolute", bottom: -4, left: 24 })),
                            this.$render("i-label", { caption: projectName || '', margin: { top: 4 }, font: { size: '20px', color: '#FF6363', name: 'Montserrat Bold', bold: true } })),
                        this.$render("i-hstack", { gap: 60, width: "100%", verticalAlignment: "center" },
                            this.$render("i-vstack", { gap: 4, verticalAlignment: "center" },
                                this.$render("i-label", { caption: "Buyback Price", font: { size: '12px' }, class: "opacity-50" }),
                                this.$render("i-label", { caption: `${1 / this.getValueByKey('offerPrice')} ${store_5.tokenSymbol(this.getValueByKey('fromTokenAddress'))}`, font: { size: '24px', color: '#72F35D', bold: true }, lineHeight: "29px" })),
                            vStackTimer,
                            vStackEndTime),
                        this.$render("i-hstack", { gap: 20, margin: { top: 15 }, verticalAlignment: "center" },
                            this.$render("i-vstack", { gap: 4, width: "calc(50% - 30px)", height: 90, verticalAlignment: "space-between" },
                                this.$render("i-vstack", { gap: 4, verticalAlignment: "center" },
                                    this.$render("i-label", { caption: "You Swap", font: { size: '14px' } }),
                                    this.$render("i-label", { caption: `Balance: ${global_4.formatNumber(this.getFirstAvailableBalance())} ${firstSymbol}`, font: { size: '12px' }, class: "opacity-50", margin: { left: 'auto' } })),
                                this.$render("i-hstack", { id: "firstInputBox", gap: 8, width: "100%", height: 50, verticalAlignment: "center", background: { color: '#232B5A' }, border: { radius: 16, width: 2, style: 'solid', color: 'transparent' }, padding: { left: 7, right: 7 } },
                                    this.$render("i-hstack", { gap: 4, width: 100, verticalAlignment: "center" },
                                        this.$render("i-image", { width: 20, height: 20, url: store_5.getTokenIcon(this.getValueByKey('toTokenAddress')), fallbackUrl: store_5.fallBackUrl }),
                                        this.$render("i-label", { caption: firstSymbol, font: { size: '16px' } })),
                                    this.$render("i-input", { id: "firstInput", inputType: "number", placeholder: "0.0", class: "input-amount", width: "100%", height: "100%", onChanged: this.firstInputChange, onFocus: () => this.handleFocusInput(true, true), onBlur: () => this.handleFocusInput(true, false) }))),
                            this.$render("i-icon", { name: "arrow-right", fill: "#f15e61", width: 20, height: 20, margin: { top: 40 } }),
                            this.$render("i-vstack", { gap: 4, width: "calc(50% - 30px)", height: 90, verticalAlignment: "space-between" },
                                this.$render("i-label", { caption: "You Receive", font: { size: '14px' } }),
                                this.$render("i-hstack", { id: "secondInputBox", width: "100%", height: 50, position: "relative", verticalAlignment: "center", background: { color: '#232B5A' }, border: { radius: 16, width: 2, style: 'solid', color: 'transparent' }, padding: { left: 7, right: 7 } },
                                    this.$render("i-hstack", { gap: 4, margin: { right: 8 }, width: 100, verticalAlignment: "center" },
                                        this.$render("i-image", { width: 20, height: 20, url: store_5.getTokenIcon(this.getValueByKey('fromTokenAddress')), fallbackUrl: store_5.fallBackUrl }),
                                        this.$render("i-label", { caption: store_5.tokenSymbol(this.getValueByKey('fromTokenAddress')), font: { size: '16px' } })),
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
                this.pnlConfig = new index_2.PanelConfig();
                this.pnlConfig.visible = false;
                this.pnlConfig.onConfigSave = (campaign) => this.onConfigSave(campaign);
                this.pnlConfig.onReset = () => {
                    this.pnlConfig.visible = false;
                    this.buybackLayout.visible = true;
                };
                this.buybackComponent.appendChild(this.pnlConfig);
                this.buybackResult = new result_2.Result();
                this.buybackComponent.appendChild(this.buybackResult);
                this.buybackResult.visible = false;
                this.showResultMessage(this.buybackResult, 'warning', '');
                setTimeout(() => {
                    this.buybackResult.closeModal();
                    this.buybackResult.visible = true;
                }, 100);
                this.initWalletData();
                store_5.setDataFromSCConfig(store_5.Networks, store_5.InfuraId);
                store_5.setCurrentChainId(store_5.getDefaultChainId());
                if (!this.data) {
                    await this.renderEmpty();
                }
            };
            this.$eventBus = components_8.application.EventBus;
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
            this.onSetupPage(store_5.isWalletConnected());
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
            this.onSetupPage(store_5.isWalletConnected());
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
            const isUpcoming = components_8.moment().isBefore(components_8.moment(startDate));
            const isEnded = components_8.moment().isAfter(components_8.moment(endDate));
            if (isUpcoming || isEnded) {
                return true;
            }
            if (!allowAll) {
                const address = store_5.getWallet().address;
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
            const firstVal = new eth_wallet_2.BigNumber(this.firstInput.value);
            const secondVal = new eth_wallet_2.BigNumber(this.secondInput.value);
            if (firstVal.lt(0) || secondVal.lt(0)) {
                return 'Amount must be greater than 0';
            }
            if (this.buybackInfo) {
                const firstMaxVal = new eth_wallet_2.BigNumber(this.getFirstAvailableBalance());
                const secondMaxVal = new eth_wallet_2.BigNumber(this.getSecondAvailableBalance());
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
                            this.$render("i-icon", { class: "i-loading-spinner_icon", image: { url: assets_3.default.fullPath('img/loading.svg'), width: 36, height: 36 } }),
                            this.$render("i-label", { caption: "Loading...", font: { color: '#FD4A4C', size: '1.5em' }, class: "i-loading-spinner_text" }))),
                    this.$render("i-panel", { id: "buybackElm", class: "wrapper" }))));
        }
    };
    BuybackBlock = __decorate([
        components_8.customModule,
        components_8.customElements('i-section-buyback')
    ], BuybackBlock);
    exports.BuybackBlock = BuybackBlock;
});
