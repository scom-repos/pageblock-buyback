define("@buyback/swap-utils", ["require", "exports", "@ijstech/eth-wallet", "@openswap/sdk", "@buyback/global", "@buyback/store", "@buyback/queue-utils"], function (require, exports, eth_wallet_1, sdk_1, global_1, store_1, queue_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.registerPairsByAddress = exports.setApprovalModalSpenderAddress = exports.getApprovalModelAction = exports.setERC20AllowanceToZero = exports.getHybridRouterAddress = exports.getRouterAddress = exports.executeSwap = exports.getTradeFeeMap = exports.getExtendedRouteObjData = void 0;
    const Factory = 'OAXDEX_Factory';
    const RouterV1 = "OAXDEX_RouterV1";
    const Router = "OAXDEX_Router";
    function getAddresses() {
        return store_1.CoreContractAddressesByChainId[store_1.getChainId()];
    }
    ;
    const getChainNativeToken = () => {
        return store_1.ChainNativeTokenByChainId[store_1.getChainId()];
    };
    const getWETH = () => {
        return store_1.WETHByChainId[store_1.getChainId()];
    };
    const getWrappedTokenAddress = () => {
        return getWETH().address;
    };
    const getHybridRouterAddress = () => {
        let Address = getAddresses();
        return Address['OSWAP_HybridRouter2'];
    };
    exports.getHybridRouterAddress = getHybridRouterAddress;
    const getFactoryAddress = (market) => {
        let Address = getAddresses();
        switch (market) {
            case store_1.Market.OPENSWAP:
                return Address[Factory];
            case store_1.Market.UNISWAP:
                return Address.UniswapV2Factory;
            case store_1.Market.SUSHISWAP:
                return Address.SushiSwapV2Factory;
            case store_1.Market.PANCAKESWAPV1:
                return Address.PancakeSwapFactoryV1;
            case store_1.Market.PANCAKESWAP:
                return Address.PancakeSwapFactory;
            case store_1.Market.BAKERYSWAP:
                return Address.BakerySwapFactory;
            case store_1.Market.BURGERSWAP:
                return Address.BurgerSwapFactory;
            case store_1.Market.IFSWAPV1:
                return Address.IFSwapFactoryV1;
            case store_1.Market.IFSWAPV3:
                return Address.IFSwapFactoryV3;
            case store_1.Market.QUICKSWAP:
                return Address.QuickSwapFactory;
            case store_1.Market.BISWAP:
                return Address.BiSwapFactory;
            case store_1.Market.PANGOLIN:
                return Address.PangolinFactory;
            case store_1.Market.TRADERJOE:
                return Address.TraderJoeFactory;
            case store_1.Market.SPIRITSWAP:
                return Address.SpiritSwapFactory;
            case store_1.Market.SPOOKYSWAP:
                return Address.SpookySwapFactory;
            case store_1.Market.HAKUSWAP:
                return Address.HakuSwapFactory;
            case store_1.Market.JETSWAP:
                return Address.JetSwapFactory;
            default:
                return Address[Factory];
        }
    };
    function getRouterAddress(market) {
        let Address = getAddresses();
        switch (market) {
            case store_1.Market.OPENSWAP:
                return Address[Router];
            case store_1.Market.UNISWAP:
                return Address.UniswapV2Router02;
            case store_1.Market.SUSHISWAP:
                return Address.SushiSwapV2Router02;
            case store_1.Market.PANCAKESWAPV1:
                return Address.PancakeSwapRouterV1;
            case store_1.Market.PANCAKESWAP:
                return Address.PancakeSwapRouter;
            case store_1.Market.BAKERYSWAP:
                return Address.BakerySwapRouter;
            case store_1.Market.BURGERSWAP:
                return Address.BurgerSwapRouter;
            case store_1.Market.IFSWAPV1:
                return Address.IFSwapRouterV1;
            case store_1.Market.OPENSWAPV1:
                return Address[RouterV1];
            case store_1.Market.QUICKSWAP:
                return Address.QuickSwapRouter;
            case store_1.Market.BISWAP:
                return Address.BiSwapRouter;
            case store_1.Market.PANGOLIN:
                return Address.PangolinRouter;
            case store_1.Market.TRADERJOE:
                return Address.TraderJoeRouter;
            case store_1.Market.SPIRITSWAP:
                return Address.SpiritSwapRouter;
            case store_1.Market.SPOOKYSWAP:
                return Address.SpookySwapRouter;
            case store_1.Market.IFSWAPV3:
                return Address.IFSwapRouterV3;
            default:
                return Address[Router];
        }
    }
    exports.getRouterAddress = getRouterAddress;
    async function allowanceRouter(wallet, market, token, owner, callback) {
        let erc20 = new eth_wallet_1.Erc20(wallet, token.address, token.decimals);
        let spender;
        if (market == store_1.Market.HYBRID || market == store_1.Market.MIXED_QUEUE || market == store_1.Market.PEGGED_QUEUE || market == store_1.Market.GROUP_QUEUE) {
            spender = getHybridRouterAddress();
        }
        else {
            spender = getRouterAddress(market);
        }
        let allowance = await erc20.allowance({
            owner,
            spender
        });
        allowance = eth_wallet_1.Utils.fromDecimals(allowance, token.decimals);
        if (callback)
            callback(null, allowance);
        return allowance;
    }
    async function checkIsApproveButtonShown(wallet, firstTokenObject, fromInput, market) {
        if (!store_1.isWalletConnected())
            return false;
        let isApproveButtonShown = false;
        const owner = wallet.account.address;
        const nativeTokenObject = getChainNativeToken();
        if (!nativeTokenObject)
            return false;
        const firstTokenAddress = firstTokenObject.address;
        if (!firstTokenAddress || firstTokenAddress === nativeTokenObject.symbol) {
            isApproveButtonShown = false;
        }
        else {
            isApproveButtonShown = false;
            const allowance = await allowanceRouter(wallet, market, firstTokenObject, owner);
            isApproveButtonShown = fromInput.gt(allowance);
        }
        return isApproveButtonShown;
    }
    function getTradeFee(market) {
        switch (market) {
            case store_1.Market.BISWAP:
                return { fee: "1", base: "1000" };
            case store_1.Market.UNISWAP:
            case store_1.Market.SUSHISWAP:
            case store_1.Market.BAKERYSWAP:
            case store_1.Market.PANGOLIN:
            case store_1.Market.TRADERJOE:
            case store_1.Market.QUICKSWAP:
            case store_1.Market.SPIRITSWAP:
                return { fee: "3", base: "1000" };
            case store_1.Market.PANCAKESWAPV1:
            case store_1.Market.SPOOKYSWAP:
                return { fee: "2", base: "1000" };
            case store_1.Market.PANCAKESWAP:
                return { fee: "25", base: "10000" };
            case store_1.Market.BURGERSWAP:
                return { fee: "3", base: "1000" };
            case store_1.Market.IFSWAPV1:
                return { fee: "6", base: "10000" };
            case store_1.Market.IFSWAPV3: //trade fee by pair. 0.3% is default
                return { fee: "30", base: "10000" };
            case store_1.Market.MIXED_QUEUE:
                return { fee: "1", base: "1000" };
            case store_1.Market.PEGGED_QUEUE:
                return { fee: "1", base: "1000" };
            case store_1.Market.OPENSWAP:
            default:
                return { fee: "200", base: "100000" };
        }
    }
    async function getTradeFeeMap(markets) {
        let tradeFeeMap = {};
        markets.forEach(market => tradeFeeMap[market] = getTradeFee(market));
        return tradeFeeMap;
    }
    exports.getTradeFeeMap = getTradeFeeMap;
    const calculateAmountOutByTradeFee = (tradeFeeMap, pairInfo, amountIn) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let amountInWithFee = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).times(amountIn);
        let amtOut = (new eth_wallet_1.BigNumber(pairInfo.reserveB).times(amountInWithFee)).idiv(new eth_wallet_1.BigNumber(pairInfo.reserveA).times(tradeFeeObj.base).plus(amountInWithFee)).toFixed();
        return amtOut;
    };
    const calculateAmountInByTradeFee = (tradeFeeMap, pairInfo, amountOut) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let feeMultiplier = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee);
        if (pairInfo.reserveB.lte(amountOut)) {
            return null;
        }
        let amtIn = new eth_wallet_1.BigNumber(pairInfo.reserveA).times(amountOut).times(tradeFeeObj.base).idiv(new eth_wallet_1.BigNumber(pairInfo.reserveB.minus(amountOut)).times(feeMultiplier)).plus(1).toFixed();
        return amtIn;
    };
    const getPathsByTokenIn = (tradeFeeMap, pairInfoList, routeObj, tokenIn) => {
        let routeObjList = [];
        let listItems = pairInfoList.filter(v => v.tokenOut.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n) => n.address != v.tokenIn.address));
        let getNewAmmRouteObj = (pairInfo, routeObj, amountOut) => {
            let amtIn = calculateAmountInByTradeFee(tradeFeeMap, pairInfo, amountOut);
            if (!amtIn)
                return null;
            let newRouteObj = {
                pairs: [...routeObj.pairs, pairInfo.pair],
                market: [...routeObj.market, pairInfo.market],
                customDataList: [...routeObj.customDataList, {
                        reserveA: pairInfo.reserveA,
                        reserveB: pairInfo.reserveB
                    }],
                route: [...routeObj.route, pairInfo.tokenIn],
                amounts: [...routeObj.amounts, amtIn]
            };
            return newRouteObj;
        };
        let getNewQueueRouteObj = (pairInfo, routeObj, amountOut) => {
            let tradeFeeObj = tradeFeeMap[pairInfo.market];
            let tradeFeeFactor = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
            let amtIn = new eth_wallet_1.BigNumber(amountOut).shiftedBy(18 - Number(pairInfo.tokenOut.decimals)).div(pairInfo.priceSwap).shiftedBy(pairInfo.tokenIn.decimals).div(tradeFeeFactor).toFixed();
            let sufficientLiquidity = new eth_wallet_1.BigNumber(pairInfo.totalLiquidity).gt(amountOut);
            if (!sufficientLiquidity)
                return null;
            let newRouteObj = {
                pairs: [...routeObj.pairs, pairInfo.pair],
                market: [...routeObj.market, pairInfo.market],
                customDataList: [...routeObj.customDataList, {
                        queueType: pairInfo.queueType,
                        price: pairInfo.price,
                        priceSwap: pairInfo.priceSwap
                    }],
                route: [...routeObj.route, pairInfo.tokenIn],
                amounts: [...routeObj.amounts, amtIn]
            };
            return newRouteObj;
        };
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
            let lastAmtIn = routeObj.amounts[routeObj.amounts.length - 1];
            let newRouteObj = listItem.market == store_1.Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtIn) : getNewAmmRouteObj(listItem, routeObj, lastAmtIn);
            if (!newRouteObj)
                continue;
            if (listItem.tokenIn.address == tokenIn.address) {
                routeObjList.push(newRouteObj);
                break;
            }
            else {
                if (newRouteObj.route.length >= 4)
                    continue;
                let childPaths = getPathsByTokenIn(tradeFeeMap, pairInfoList, Object.assign({}, newRouteObj), tokenIn);
                routeObjList.push(...childPaths);
            }
        }
        return routeObjList;
    };
    const getPathsByTokenOut = (tradeFeeMap, pairInfoList, routeObj, tokenOut) => {
        let routeObjList = [];
        let listItems = pairInfoList.filter(v => v.tokenIn.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n) => n.address != v.tokenOut.address));
        let getNewAmmRouteObj = (pairInfo, routeObj, amountIn) => {
            let amtOut = calculateAmountOutByTradeFee(tradeFeeMap, pairInfo, amountIn);
            let newRouteObj = {
                pairs: [...routeObj.pairs, pairInfo.pair],
                market: [...routeObj.market, pairInfo.market],
                route: [...routeObj.route, pairInfo.tokenOut],
                customDataList: [...routeObj.customDataList, {
                        reserveA: pairInfo.reserveA,
                        reserveB: pairInfo.reserveB
                    }],
                amounts: [...routeObj.amounts, amtOut]
            };
            return newRouteObj;
        };
        let getNewQueueRouteObj = (pairInfo, routeObj, amountIn) => {
            let tradeFeeObj = tradeFeeMap[pairInfo.market];
            let tradeFeeFactor = new eth_wallet_1.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
            let amtOut = new eth_wallet_1.BigNumber(amountIn).shiftedBy(18 - Number(pairInfo.tokenIn.decimals)).div(pairInfo.price).shiftedBy(pairInfo.tokenOut.decimals).times(tradeFeeFactor).toFixed();
            let sufficientLiquidity = new eth_wallet_1.BigNumber(pairInfo.totalLiquidity).gt(amtOut);
            if (!sufficientLiquidity)
                return null;
            let newRouteObj = {
                pairs: [...routeObj.pairs, pairInfo.pair],
                market: [...routeObj.market, pairInfo.market],
                customDataList: [...routeObj.customDataList, {
                        queueType: pairInfo.queueType,
                        price: pairInfo.price,
                        priceSwap: pairInfo.priceSwap
                    }],
                route: [...routeObj.route, pairInfo.tokenOut],
                amounts: [...routeObj.amounts, amtOut]
            };
            return newRouteObj;
        };
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
            let lastAmtOut = routeObj.amounts[routeObj.amounts.length - 1];
            let newRouteObj = listItem.market == store_1.Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtOut) : getNewAmmRouteObj(listItem, routeObj, lastAmtOut);
            if (!newRouteObj)
                continue;
            if (listItem.tokenOut.address == tokenOut.address) {
                routeObjList.push(newRouteObj);
                break;
            }
            else {
                if (newRouteObj.route.length >= 4)
                    continue;
                let childPaths = getPathsByTokenOut(tradeFeeMap, pairInfoList, Object.assign({}, newRouteObj), tokenOut);
                routeObjList.push(...childPaths);
            }
        }
        return routeObjList;
    };
    async function getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue) {
        let currPrice = new eth_wallet_1.BigNumber(0);
        if (bestRouteObj.customDataList.length > 0) {
            currPrice = bestRouteObj.market.map((v, i) => {
                let customDataObj = bestRouteObj.customDataList[i];
                if (v == store_1.Market.MIXED_QUEUE && customDataObj.price) {
                    return new eth_wallet_1.BigNumber(customDataObj.price).shiftedBy(-bestRouteObj.route[i].decimals);
                }
                else {
                    let reserveA = new eth_wallet_1.BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
                    let reserveB = new eth_wallet_1.BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
                    return reserveA.div(reserveB);
                }
            })
                .reduce((prev, curr) => prev.times(curr));
        }
        let fee = new eth_wallet_1.BigNumber(1).minus(bestRouteObj.market.map((market) => {
            let tradeFeeObj = tradeFeeMap[market];
            let tradeFee = new eth_wallet_1.BigNumber(tradeFeeObj.fee).div(tradeFeeObj.base);
            return new eth_wallet_1.BigNumber(1).minus(tradeFee);
        }).reduce((a, b) => a.times(b)));
        let priceImpact;
        if (bestRouteObj.market.length == 1 && bestRouteObj.market[0] == store_1.Market.MIXED_QUEUE) {
            priceImpact = '0';
        }
        else {
            priceImpact = swapPrice.minus(currPrice).div(swapPrice).minus(fee).toFixed();
        }
        //let gasFee = await calculateGasFee(wallet, bestRouteObj.market);
        let extendedRouteObj = {
            pairs: bestRouteObj.pairs,
            market: bestRouteObj.market,
            bestRoute: bestRouteObj.route,
            priceImpact: priceImpact,
            price: swapPrice.toFixed(),
            tradeFee: fee.toFixed(),
        };
        if (isHybridOrQueue) {
            let Address = getAddresses();
            let undefinedPairs = [];
            if (!bestRouteObj.isRegistered && Address['OSWAP_HybridRouterRegistry']) {
                for (let i = 0; i < bestRouteObj.pairs.length; i++) {
                    let pair = bestRouteObj.pairs[i];
                    let hybridRouterRegistry = new sdk_1.Contracts.OSWAP_HybridRouterRegistry(wallet, Address['OSWAP_HybridRouterRegistry']);
                    let typeCode = (await hybridRouterRegistry.getTypeCode(pair)).toFixed();
                    if (typeCode === '0')
                        undefinedPairs.push(pair);
                }
            }
            let providerConfigByMarketCode = {};
            Object.values(store_1.ProviderConfigMap).forEach((v, i) => {
                providerConfigByMarketCode[v.marketCode] = v;
            });
            let bestSmartRoute = bestRouteObj.market.map((v, i) => {
                let providerObj = providerConfigByMarketCode[v];
                let isRegistered;
                if (bestRouteObj.isRegistered) {
                    isRegistered = bestRouteObj.isRegistered[i];
                }
                else {
                    isRegistered = Address['OSWAP_HybridRouterRegistry'] ? !undefinedPairs.includes(bestRouteObj.pairs[i]) : true;
                }
                let obj = {
                    provider: providerObj.key,
                    pairAddress: bestRouteObj.pairs[i],
                    caption: providerObj.caption,
                    fromToken: bestRouteObj.route[i],
                    toToken: bestRouteObj.route[i + 1],
                    isRegistered
                };
                if (v == store_1.Market.MIXED_QUEUE) {
                    let { queueType, orderIds } = bestRouteObj.customDataList[i];
                    obj = Object.assign(Object.assign({}, obj), { queueType,
                        orderIds });
                }
                return obj;
            });
            extendedRouteObj = Object.assign(Object.assign({}, extendedRouteObj), { bestSmartRoute });
        }
        return extendedRouteObj;
    }
    exports.getExtendedRouteObjData = getExtendedRouteObjData;
    const getHybridAmountsOut = async (wallet, amountIn, tokenIn, pair, data = '0x') => {
        let result;
        try {
            let Address = getAddresses();
            let hybridRouter = new sdk_1.Contracts.OSWAP_HybridRouter2(wallet, Address['OSWAP_HybridRouter2']);
            result = await hybridRouter.getAmountsOutStartsWith({
                amountIn,
                pair,
                tokenIn,
                data
            });
        }
        catch (err) {
            console.log('getHybrid2AmountsOut', err);
        }
        return result;
    };
    const hybridTradeExactIn = async (wallet, bestSmartRoute, path, pairs, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer, data, callback, confirmationCallback) => {
        if (path.length < 2) {
            return null;
        }
        let tokenIn = path[0];
        let tokenOut = path[path.length - 1];
        if (bestSmartRoute && bestSmartRoute.length > 0) {
            let pairIndex = bestSmartRoute.findIndex(n => n.queueType == global_1.QueueType.RANGE_QUEUE);
            if (pairIndex != -1) {
                if (bestSmartRoute[pairIndex].orderIds) {
                    let orderIds = bestSmartRoute[pairIndex].orderIds;
                    data = "0x" + eth_wallet_1.Utils.numberToBytes32(0x20 * (orderIds.length + 1)) + eth_wallet_1.Utils.numberToBytes32(orderIds.length) + orderIds.map(e => eth_wallet_1.Utils.numberToBytes32(e)).join('');
                }
                else {
                    let amountInTokenAmount = eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0);
                    let tokenInAddress = tokenIn.address ? tokenIn.address : getWrappedTokenAddress();
                    let amountsOutObj = await getHybridAmountsOut(wallet, amountInTokenAmount, tokenInAddress, pairs);
                    if (!amountsOutObj)
                        return null;
                    let pair = pairs[pairIndex];
                    let tokenA = path[pairIndex];
                    let tokenB = path[pairIndex + 1];
                    let rangeAmountOut = amountsOutObj[pairIndex + 1];
                    data = await queue_utils_1.getRangeQueueData(pair, tokenA, tokenB, rangeAmountOut);
                }
            }
        }
        let hybridRouterAddress = getHybridRouterAddress();
        let hybridRouter = new sdk_1.Contracts.OSWAP_HybridRouter2(wallet, hybridRouterAddress);
        let receipt;
        if (!tokenIn.address) {
            let params = {
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                pair: pairs,
                to: toAddress,
                deadline,
                data
            };
            if (feeOnTransfer) {
                receipt = await hybridRouter.swapExactETHForTokensSupportingFeeOnTransferTokens(params, eth_wallet_1.Utils.toDecimals(amountIn).dp(0));
            }
            else {
                receipt = await hybridRouter.swapExactETHForTokens(params, eth_wallet_1.Utils.toDecimals(amountIn).dp(0));
            }
        }
        else if (!tokenOut.address) {
            let params = {
                amountIn: eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                pair: pairs,
                to: toAddress,
                deadline,
                data
            };
            if (feeOnTransfer) {
                receipt = await hybridRouter.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
            }
            else {
                receipt = await hybridRouter.swapExactTokensForETH(params);
            }
        }
        else {
            let params = {
                amountIn: eth_wallet_1.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
                amountOutMin: eth_wallet_1.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
                pair: pairs,
                tokenIn: tokenIn.address,
                to: toAddress,
                deadline,
                data
            };
            if (feeOnTransfer) {
                receipt = await hybridRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
            }
            else {
                receipt = await hybridRouter.swapExactTokensForTokens(params);
            }
        }
        return receipt;
    };
    const executeSwap = async (swapData) => {
        var _a;
        let receipt = null;
        const wallet = store_1.getWallet();
        try {
            const toAddress = wallet.account.address;
            const slippageTolerance = store_1.getSlippageTolerance();
            const transactionDeadlineInMinutes = store_1.getTransactionDeadline();
            const transactionDeadline = Math.floor(Date.now() / 1000 + transactionDeadlineInMinutes * 60);
            if (swapData.provider === "RestrictedOracle") {
                const obj = await queue_utils_1.getGroupQueueTraderDataObj(swapData.pairs[0], swapData.routeTokens[0], swapData.routeTokens[1], swapData.fromAmount.toString(), (_a = swapData.groupQueueOfferIndex) === null || _a === void 0 ? void 0 : _a.toString());
                if (!obj || !obj.data)
                    return {
                        receipt: null,
                        error: { message: "No data from Group Queue Trader" },
                    };
                const data = obj.data;
                const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
                receipt = await hybridTradeExactIn(wallet, swapData.bestSmartRoute, swapData.routeTokens, swapData.pairs, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false, data);
            }
        }
        catch (error) {
            return { receipt: null, error: error };
        }
        return { receipt, error: null };
    };
    exports.executeSwap = executeSwap;
    //For testing only
    const setERC20AllowanceToZero = async (token, spenderAddress) => {
        let wallet = store_1.getWallet();
        let erc20 = new sdk_1.Contracts.ERC20(wallet, token.address);
        let receipt = await erc20.approve({
            spender: spenderAddress,
            amount: 0
        });
        return receipt;
    };
    exports.setERC20AllowanceToZero = setERC20AllowanceToZero;
    var approvalModel;
    const getApprovalModelAction = async (options) => {
        const approvalOptions = Object.assign(Object.assign({}, options), { spenderAddress: '' });
        approvalModel = new global_1.ERC20ApprovalModel(approvalOptions);
        let approvalModelAction = approvalModel.getAction();
        return approvalModelAction;
    };
    exports.getApprovalModelAction = getApprovalModelAction;
    const setApprovalModalSpenderAddress = (market, contractAddress) => {
        let wallet = eth_wallet_1.Wallet.getInstance();
        let spender;
        if (contractAddress) {
            spender = contractAddress;
        }
        else {
            if (market == store_1.Market.HYBRID || market == store_1.Market.MIXED_QUEUE || market == store_1.Market.PEGGED_QUEUE || market == store_1.Market.GROUP_QUEUE) {
                spender = getHybridRouterAddress();
            }
            else {
                spender = getRouterAddress(market);
            }
        }
        approvalModel.spenderAddress = spender;
    };
    exports.setApprovalModalSpenderAddress = setApprovalModalSpenderAddress;
    const registerPairsByAddress = async (market, pairAddresses) => {
        let wallet = eth_wallet_1.Wallet.getInstance();
        let registryAddress = getAddresses()["OSWAP_HybridRouterRegistry"];
        let registry = new sdk_1.Contracts.OSWAP_HybridRouterRegistry(wallet, registryAddress);
        let factory = market.map(m => getFactoryAddress(m));
        let pairAddress = pairAddresses;
        return await registry.registerPairsByAddress2({ factory, pairAddress });
    };
    exports.registerPairsByAddress = registerPairsByAddress;
});
