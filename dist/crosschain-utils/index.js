define("@buyback/crosschain-utils",(require, exports)=>{
  var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/crosschain-utils/index.ts
__export(exports, {
  createBridgeVaultOrder: () => createBridgeVaultOrder,
  getApprovalModelAction: () => getApprovalModelAction,
  getAvailableRouteOptions: () => getAvailableRouteOptions,
  getChainIdGroup: () => getChainIdGroup,
  getMainChainId: () => getMainChainId,
  getTargetChainTokenMap: () => getTargetChainTokenMap,
  getTokenByVaultAddress: () => getTokenByVaultAddress,
  getVaultTokenMap: () => getVaultTokenMap,
  initCrossChainWallet: () => initCrossChainWallet,
  setApprovalModalSpenderAddress: () => setApprovalModalSpenderAddress
});

// src/crosschain-utils/API.ts
var import_global = __toModule(require("@buyback/global"));
var import_store = __toModule(require("@buyback/store"));
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));
var import_cross_chain_bridge = __toModule(require("@ijstech/cross-chain-bridge"));
var routeAPI = import_store.baseRoute + "/trading/v1/cross-chain-route";
var approvalModel;
var getApprovalModelAction = async (options) => {
  const approvalOptions = __spreadProps(__spreadValues({}, options), {
    spenderAddress: ""
  });
  approvalModel = new import_global.ERC20ApprovalModel(approvalOptions);
  let approvalModelAction = approvalModel.getAction();
  return approvalModelAction;
};
var setApprovalModalSpenderAddress = (contractAddress) => {
  approvalModel.spenderAddress = contractAddress;
};
var getChainIdGroup = () => {
  const chainId = (0, import_store.getChainId)();
  const list = (0, import_store.getMatchNetworks)({ isDisabled: false, isCrossChainSupported: true });
  const testnetSupportedList = list.filter((v) => v.isTestnet);
  const mainnetSupportedList = list.filter((v) => !v.isTestnet);
  if (testnetSupportedList.some((item) => item.chainId === chainId)) {
    return testnetSupportedList;
  }
  return mainnetSupportedList;
};
var getMainChainId = () => {
  let chainGroup = getChainIdGroup();
  if (chainGroup) {
    let mainChain = chainGroup.find((v) => v.isMainChain == true);
    if (mainChain)
      return mainChain.chainId;
  }
  return null;
};
var getTokenByVaultAddress = (chainId, vaultAddress) => {
  if (!chainId)
    return null;
  let vaultTokenMap = getVaultTokenMap();
  let tokenAddress = vaultTokenMap[chainId][vaultAddress.toLowerCase()];
  let tokenMap = getTargetChainTokenMap(chainId);
  let token = tokenMap[tokenAddress.toLowerCase()];
  return token;
};
var getTargetChainTokenMap = (chainId) => {
  let tokenList = (0, import_store.getTokenList)(chainId);
  tokenList = tokenList.map((v) => v = __spreadProps(__spreadValues({}, v), { address: v.address ? v.address.toLowerCase() : void 0 })).sort((a, b) => {
    if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) {
      return -1;
    }
    if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  let tokenMap = {};
  Object.values(tokenList).forEach((v, i) => {
    if (v.isNative)
      v = __spreadProps(__spreadValues({}, import_store.crossChainNativeTokenList[chainId]), { isNative: true });
    tokenMap["" + v.address] = v;
  });
  return tokenMap;
};
var initCrossChainWallet = (chainId) => {
  const wallet = import_eth_wallet.Wallet.getInstance();
  const networkInfo = (0, import_store.getNetworkInfo)(chainId);
  let rpcEndpoint = networkInfo.rpc;
  let crossChainWallet = new import_eth_wallet.Wallet(rpcEndpoint, { address: wallet.address });
  return crossChainWallet;
};
var getVaultTokenMap = () => {
  let vaultTokenMap = {};
  import_store.BridgeVaultGroupList.forEach((vaultGroup) => {
    for (const [chainId, vault] of Object.entries(vaultGroup.vaults)) {
      vaultTokenMap[chainId] = vaultTokenMap[chainId] || {};
      vaultTokenMap[chainId][vault.vaultAddress.toLowerCase()] = vault.tokenAddress.toLowerCase();
    }
  });
  return vaultTokenMap;
};
var createBridgeVaultOrder = async (params) => {
  try {
    const { vaultAddress, targetChainId, tokenIn, tokenOut, amountIn, minAmountOut, transactionSetting, sourceRouteInfo } = params;
    const wallet = import_eth_wallet.Wallet.getInstance();
    const transactionDeadlineInMinutes = transactionSetting.transactionDeadlineInMinutes;
    const transactionDeadline = Math.floor(Date.now() / 1e3 + transactionDeadlineInMinutes * 60);
    const slippageTolerance = transactionSetting.slippageTolerance;
    const amountInTokenAmount = import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals);
    const minAmountOutTokenAmount = import_eth_wallet.Utils.toDecimals(minAmountOut, tokenOut.decimals).dp(0, 1);
    if (tokenOut.isNative) {
      tokenOut.address = import_store.nullAddress;
    }
    const newOrder = {
      peerChain: targetChainId,
      inAmount: amountInTokenAmount,
      outToken: tokenOut.address || "",
      minOutAmount: minAmountOutTokenAmount,
      to: wallet.address,
      expire: transactionDeadline
    };
    const chainId = await wallet.getChainId();
    const sourceVaultToken = getTokenByVaultAddress(chainId, vaultAddress);
    let receipt;
    if (sourceRouteInfo) {
      const wrapperAddress = import_store.CrossChainAddressMap[chainId].wrapperAddress;
      const wrapperContract = new import_cross_chain_bridge.Contracts.OSWAP_RouterVaultWrapper(wallet, wrapperAddress);
      if (!(sourceVaultToken == null ? void 0 : sourceVaultToken.decimals)) {
        throw new Error("Missing Source Vault Token Decimals");
      }
      newOrder.inAmount = new import_eth_wallet.BigNumber(sourceRouteInfo.amountOut).shiftedBy(sourceVaultToken.decimals).times(1 - slippageTolerance / 100).dp(0, 1);
      if (tokenIn.isNative) {
        const swapExactETHForTokenParams = {
          pair: sourceRouteInfo.pairs,
          vault: vaultAddress,
          deadline: transactionDeadline,
          order: newOrder
        };
        receipt = await wrapperContract.swapExactETHForTokens(swapExactETHForTokenParams, import_eth_wallet.Utils.toDecimals(amountIn, 18));
      } else {
        const swapExactTokenForTokensParams = {
          pair: sourceRouteInfo.pairs,
          vault: vaultAddress,
          amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals),
          deadline: transactionDeadline,
          order: newOrder
        };
        receipt = await wrapperContract.swapExactTokensForTokens(swapExactTokenForTokensParams);
      }
    } else {
      const vaultContract = new import_cross_chain_bridge.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
      receipt = await vaultContract.newOrder(newOrder);
    }
    return { receipt, error: null };
  } catch (error) {
    return { receipt: null, error };
  }
};
var composeRouteObjBridge = async (routeObj, firstInput, vaultTokenToTargetChain, bridgeFees, slippageTolerance) => {
  let fromAmount = new import_eth_wallet.BigNumber(0);
  let toAmount = new import_eth_wallet.BigNumber(0);
  let minReceivedMaxSold = 0;
  let priceImpact = 0;
  let price = 0;
  let priceSwap = 0;
  let tradeFee = 0;
  let fees;
  let isApproveButtonShown = false;
  try {
    toAmount = new import_eth_wallet.BigNumber(routeObj.targetRouteObj.amountOut);
    if (toAmount.isZero())
      return null;
    minReceivedMaxSold = toAmount.times(1 - slippageTolerance / 100).toNumber();
    fromAmount = firstInput;
    price = new import_eth_wallet.BigNumber(fromAmount).div(toAmount).toNumber();
    priceSwap = new import_eth_wallet.BigNumber(1).div(price).toNumber();
    let sourceRoutingPrice = routeObj.sourceRouteObj ? routeObj.sourceRouteObj.price : 1;
    fees = {
      sourceRouteLiquidityFee: routeObj.sourceRouteObj ? new import_eth_wallet.BigNumber(routeObj.sourceRouteObj.tradeFee).times(fromAmount).toNumber() : 0,
      targetRouteLiquidityFee: new import_eth_wallet.BigNumber(routeObj.targetRouteObj.tradeFee).times(vaultTokenToTargetChain).times(sourceRoutingPrice).toNumber(),
      baseFee: new import_eth_wallet.BigNumber(bridgeFees.baseFee).times(sourceRoutingPrice).toNumber(),
      transactionFee: new import_eth_wallet.BigNumber(bridgeFees.transactionFee).times(sourceRoutingPrice).toNumber(),
      protocolFee: new import_eth_wallet.BigNumber(bridgeFees.protocolFee).times(sourceRoutingPrice).toNumber(),
      imbalanceFee: new import_eth_wallet.BigNumber(bridgeFees.imbalanceFee).times(sourceRoutingPrice).toNumber()
    };
    tradeFee = Object.values(fees).reduce((a, b) => a + b);
  } catch (err) {
    console.log("err", err);
    return null;
  }
  return __spreadProps(__spreadValues({}, routeObj), {
    price,
    priceSwap,
    fromAmount,
    toAmount,
    priceImpact,
    tradeFee,
    fees,
    minReceivedMaxSold,
    isApproveButtonShown
  });
};
var getExtendedRouteObjDataForDirectRoute = async (bestRouteObj, swapPrice) => {
  let fee = new import_eth_wallet.BigNumber(0);
  let priceImpact = new import_eth_wallet.BigNumber(0);
  let extendedRouteObj = {
    pairs: bestRouteObj.pairs,
    market: bestRouteObj.market,
    bestRoute: bestRouteObj.route,
    priceImpact,
    price: swapPrice.toFixed(),
    tradeFee: fee.toFixed()
  };
  return extendedRouteObj;
};
var checkIsApproveButtonShown = async (tokenIn, fromInput, address) => {
  const wallet = import_eth_wallet.Wallet.getInstance();
  let erc20 = new import_eth_wallet.Erc20(wallet, tokenIn.address);
  let allowance = await erc20.allowance({
    owner: wallet.address,
    spender: address
  });
  return fromInput.gt(import_eth_wallet.Utils.fromDecimals(allowance, tokenIn.decimals));
};
var getAvailableRouteOptions = async (params, getTradeFeeMap, getExtendedRouteObjData, slippageTolerance) => {
  var _a, _b;
  let { fromChainId, toChainId, tokenIn, tokenOut, amountIn } = params;
  let isTokenInNative = false;
  let isTokenOutNative = false;
  if (tokenIn.isNative) {
    isTokenInNative = true;
    tokenIn.address = import_store.crossChainNativeTokenList[fromChainId].wethAddress;
  }
  if (tokenOut.isNative) {
    tokenOut.address = import_store.crossChainNativeTokenList[toChainId].wethAddress;
  }
  const tradeFeeMapMarkets = Object.values(import_store.ProviderConfigMap).map(({ marketCode }) => marketCode);
  const tradeFeeMap = await getTradeFeeMap(tradeFeeMapMarkets);
  const routeObjArr = await (0, import_global.getAPI)(routeAPI, {
    fromChainId,
    toChainId,
    tokenIn: tokenIn.address,
    tokenOut: tokenOut.address,
    amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals),
    version: (0, import_store.getBridgeVaultVersion)((0, import_store.getChainId)())
  });
  if (!routeObjArr || !routeObjArr.routes)
    return [];
  const composeRoutes = async (routeObj, chainId, fromAmount) => {
    const providerConfigByDexId = Object.values(import_store.ProviderConfigMap).filter(({ supportedChains }) => supportedChains == null ? void 0 : supportedChains.includes(chainId)).reduce((acc, cur) => {
      if (cur.dexId || cur.dexId === 0)
        acc[cur.dexId] = cur;
      return acc;
    }, {});
    let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
    let bestRouteObj;
    bestRouteObj = {
      pairs: routeObj.route.map((v) => v.address),
      isRegistered: routeObj.route.map((v) => v.isRegistered),
      market: routeObj.route.map((v) => {
        let dexId2 = [5, 6].includes(v.dexId) ? 5 : v.dexId;
        return providerConfigByDexId[dexId2].marketCode;
      }),
      route: routeObj.tokens,
      customDataList: routeObj.route.map((v) => {
        return {
          queueType: v.queueType,
          orderIds: v.orderIds,
          reserveA: v.reserves.reserve0,
          reserveB: v.reserves.reserve1
        };
      })
    };
    let amountOut = import_eth_wallet.Utils.fromDecimals(routeObj.amountOut, routeObj.tokens[routeObj.tokens.length - 1].decimals);
    let swapPrice = new import_eth_wallet.BigNumber(fromAmount).div(amountOut);
    let targetChainWallet = initCrossChainWallet(chainId);
    let extendedData = bestRouteObj.pairs.length !== 0 ? await getExtendedRouteObjData(targetChainWallet, bestRouteObj, tradeFeeMap, swapPrice, true) : await getExtendedRouteObjDataForDirectRoute(bestRouteObj, swapPrice);
    let provider = providerConfigByDexId[dexId].key;
    let key = provider + "|" + (routeObj.isDirectRoute ? "0" : "1");
    bestRouteObj = __spreadProps(__spreadValues({}, extendedData), {
      amountOut,
      provider,
      key,
      queueType: routeObj.queueType
    });
    return bestRouteObj;
  };
  let bestRouteObjArr = [];
  let wrapperAddress = import_store.CrossChainAddressMap[fromChainId].wrapperAddress;
  for (let i = 0; i < routeObjArr["routes"].length; i++) {
    let routeObj = routeObjArr["routes"][i];
    let sourceVaultToken = getTokenByVaultAddress(fromChainId, routeObj.vault);
    let targetVaultAddresses = (_b = (_a = import_store.BridgeVaultGroupList.filter((v) => {
      if (v.deprecated)
        return false;
      return v.vaults[fromChainId].vaultAddress.toLowerCase() == routeObj.vault.toLowerCase();
    })[0]) == null ? void 0 : _a.vaults) == null ? void 0 : _b[toChainId];
    if (targetVaultAddresses == null)
      continue;
    let targetVaultTokenAddress = targetVaultAddresses.tokenAddress;
    let tokenMap = getTargetChainTokenMap(toChainId);
    let targetVaultToken = tokenMap[targetVaultTokenAddress.toLowerCase()];
    const fees = Object.entries(routeObj.fees).reduce((acc, [key, value]) => {
      acc[key] = new import_eth_wallet.BigNumber(value).shiftedBy(-targetVaultToken.decimals);
      return acc;
    }, {});
    amountIn = new import_eth_wallet.BigNumber(amountIn);
    let sourceRouteObj = routeObj.sourceRoute ? await composeRoutes(routeObj.sourceRoute, fromChainId, amountIn) : null;
    let vaultTokenFromSourceChain = routeObj.sourceRoute ? sourceRouteObj.amountOut : amountIn;
    let bridgeFee = new import_eth_wallet.BigNumber(fees.baseFee).plus(fees.protocolFee).plus(fees.transactionFee).plus(fees.imbalanceFee);
    let vaultTokenToTargetChain = new import_eth_wallet.BigNumber(vaultTokenFromSourceChain).minus(bridgeFee).toFixed();
    let targetRouteObj = await composeRoutes(routeObj.targetRoute, toChainId, vaultTokenToTargetChain);
    let bestRouteObj;
    bestRouteObj = {
      sourceRouteObj,
      targetRouteObj,
      sourceVaultToken,
      targetVaultToken,
      vaultTokenFromSourceChain: routeObj.sourceRoute ? vaultTokenFromSourceChain : null,
      vaultTokenToTargetChain,
      vaultAddress: routeObj.vault,
      contractAddress: sourceRouteObj ? wrapperAddress : routeObj.vault
    };
    bestRouteObj = await composeRouteObjBridge(bestRouteObj, amountIn, new import_eth_wallet.BigNumber(vaultTokenToTargetChain), fees, slippageTolerance);
    if (isTokenInNative && bestRouteObj) {
      bestRouteObj.sourceRouteObj.bestRoute[0] = tokenIn;
      bestRouteObj.sourceRouteObj.bestSmartRoute[0].fromToken = tokenIn;
    }
    if (isTokenOutNative) {
      bestRouteObj.targetRouteObj.bestRoute[bestRouteObj.targetRouteObj.bestRoute.length - 1] = tokenOut;
      bestRouteObj.targetRouteObj.bestSmartRoute[bestRouteObj.targetRouteObj.bestSmartRoute.length - 1].toToken = tokenOut;
    }
    bestRouteObjArr.push(bestRouteObj);
  }
  bestRouteObjArr = bestRouteObjArr.filter((v) => v !== null);
  bestRouteObjArr.sort((a, b) => a.toAmount.lt(b.toAmount) ? 1 : -1);
  if (bestRouteObjArr[0] && !isTokenInNative)
    bestRouteObjArr[0].isApproveButtonShown = await checkIsApproveButtonShown(tokenIn, new import_eth_wallet.BigNumber(amountIn), bestRouteObjArr[0].contractAddress);
  return bestRouteObjArr;
};
  
  });