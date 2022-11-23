define("@buyback/swap-utils",(require, exports)=>{
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

// src/swap-utils/index.ts
__export(exports, {
  createBridgeVaultOrder: () => createBridgeVaultOrder,
  executeSwap: () => executeSwap,
  getApprovalModelAction: () => getApprovalModelAction,
  getAvailableRouteOptions: () => getAvailableRouteOptions,
  getExtendedRouteObjData: () => getExtendedRouteObjData,
  getHybridRouterAddress: () => getHybridRouterAddress,
  getRouterAddress: () => getRouterAddress,
  getTradeFeeMap: () => getTradeFeeMap,
  registerPairsByAddress: () => registerPairsByAddress,
  setApprovalModalSpenderAddress: () => setApprovalModalSpenderAddress,
  setERC20AllowanceToZero: () => setERC20AllowanceToZero
});

// src/swap-utils/API.ts
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));
var import_sdk = __toModule(require("@openswap/sdk"));
var import_bakery_swap_sdk = __toModule(require("@validapp/bakery-swap-sdk"));
var import_trader_joe_sdk = __toModule(require("@validapp/trader-joe-sdk"));
var import_impossible_swap_sdk = __toModule(require("@scom/impossible-swap-sdk"));
var import_global = __toModule(require("@buyback/global"));
var import_crosschain_utils = __toModule(require("@buyback/crosschain-utils"));
var import_store = __toModule(require("@buyback/store"));
var import_queue_utils = __toModule(require("@buyback/queue-utils"));
var Factory = "OAXDEX_Factory";
var RouterV1 = "OAXDEX_RouterV1";
var Router = "OAXDEX_Router";
function getAddresses() {
  return import_store.CoreContractAddressesByChainId[(0, import_store.getChainId)()];
}
var getWETH = () => {
  return import_store.WETHByChainId[(0, import_store.getChainId)()];
};
var getWrappedTokenAddress = () => {
  return getWETH().address;
};
var getHybridRouterAddress = () => {
  let Address = getAddresses();
  return Address["OSWAP_HybridRouter2"];
};
var getFactoryAddress = (market) => {
  let Address = getAddresses();
  switch (market) {
    case import_store.Market.OPENSWAP:
      return Address[Factory];
    case import_store.Market.UNISWAP:
      return Address.UniswapV2Factory;
    case import_store.Market.SUSHISWAP:
      return Address.SushiSwapV2Factory;
    case import_store.Market.PANCAKESWAPV1:
      return Address.PancakeSwapFactoryV1;
    case import_store.Market.PANCAKESWAP:
      return Address.PancakeSwapFactory;
    case import_store.Market.BAKERYSWAP:
      return Address.BakerySwapFactory;
    case import_store.Market.BURGERSWAP:
      return Address.BurgerSwapFactory;
    case import_store.Market.IFSWAPV1:
      return Address.IFSwapFactoryV1;
    case import_store.Market.IFSWAPV3:
      return Address.IFSwapFactoryV3;
    case import_store.Market.QUICKSWAP:
      return Address.QuickSwapFactory;
    case import_store.Market.BISWAP:
      return Address.BiSwapFactory;
    case import_store.Market.PANGOLIN:
      return Address.PangolinFactory;
    case import_store.Market.TRADERJOE:
      return Address.TraderJoeFactory;
    case import_store.Market.SPIRITSWAP:
      return Address.SpiritSwapFactory;
    case import_store.Market.SPOOKYSWAP:
      return Address.SpookySwapFactory;
    case import_store.Market.HAKUSWAP:
      return Address.HakuSwapFactory;
    case import_store.Market.JETSWAP:
      return Address.JetSwapFactory;
    default:
      return Address[Factory];
  }
};
function getRouterAddress(market) {
  let Address = getAddresses();
  switch (market) {
    case import_store.Market.OPENSWAP:
      return Address[Router];
    case import_store.Market.UNISWAP:
      return Address.UniswapV2Router02;
    case import_store.Market.SUSHISWAP:
      return Address.SushiSwapV2Router02;
    case import_store.Market.PANCAKESWAPV1:
      return Address.PancakeSwapRouterV1;
    case import_store.Market.PANCAKESWAP:
      return Address.PancakeSwapRouter;
    case import_store.Market.BAKERYSWAP:
      return Address.BakerySwapRouter;
    case import_store.Market.BURGERSWAP:
      return Address.BurgerSwapRouter;
    case import_store.Market.IFSWAPV1:
      return Address.IFSwapRouterV1;
    case import_store.Market.OPENSWAPV1:
      return Address[RouterV1];
    case import_store.Market.QUICKSWAP:
      return Address.QuickSwapRouter;
    case import_store.Market.BISWAP:
      return Address.BiSwapRouter;
    case import_store.Market.PANGOLIN:
      return Address.PangolinRouter;
    case import_store.Market.TRADERJOE:
      return Address.TraderJoeRouter;
    case import_store.Market.SPIRITSWAP:
      return Address.SpiritSwapRouter;
    case import_store.Market.SPOOKYSWAP:
      return Address.SpookySwapRouter;
    case import_store.Market.IFSWAPV3:
      return Address.IFSwapRouterV3;
    default:
      return Address[Router];
  }
}
function getTradeFee(market) {
  switch (market) {
    case import_store.Market.BISWAP:
      return { fee: "1", base: "1000" };
    case import_store.Market.UNISWAP:
    case import_store.Market.SUSHISWAP:
    case import_store.Market.BAKERYSWAP:
    case import_store.Market.PANGOLIN:
    case import_store.Market.TRADERJOE:
    case import_store.Market.QUICKSWAP:
    case import_store.Market.SPIRITSWAP:
      return { fee: "3", base: "1000" };
    case import_store.Market.PANCAKESWAPV1:
    case import_store.Market.SPOOKYSWAP:
      return { fee: "2", base: "1000" };
    case import_store.Market.PANCAKESWAP:
      return { fee: "25", base: "10000" };
    case import_store.Market.BURGERSWAP:
      return { fee: "3", base: "1000" };
    case import_store.Market.IFSWAPV1:
      return { fee: "6", base: "10000" };
    case import_store.Market.IFSWAPV3:
      return { fee: "30", base: "10000" };
    case import_store.Market.MIXED_QUEUE:
      return { fee: "1", base: "1000" };
    case import_store.Market.PEGGED_QUEUE:
      return { fee: "1", base: "1000" };
    case import_store.Market.OPENSWAP:
    default:
      return { fee: "200", base: "100000" };
  }
}
async function getTradeFeeMap(markets) {
  let tradeFeeMap = {};
  markets.forEach((market) => tradeFeeMap[market] = getTradeFee(market));
  return tradeFeeMap;
}
async function getExtendedRouteObjData(wallet, bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue) {
  let currPrice = new import_eth_wallet.BigNumber(0);
  if (bestRouteObj.customDataList.length > 0) {
    currPrice = bestRouteObj.market.map((v, i) => {
      let customDataObj = bestRouteObj.customDataList[i];
      if (v == import_store.Market.MIXED_QUEUE && customDataObj.price) {
        return new import_eth_wallet.BigNumber(customDataObj.price).shiftedBy(-bestRouteObj.route[i].decimals);
      } else {
        let reserveA = new import_eth_wallet.BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
        let reserveB = new import_eth_wallet.BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
        return reserveA.div(reserveB);
      }
    }).reduce((prev, curr) => prev.times(curr));
  }
  let fee = new import_eth_wallet.BigNumber(1).minus(bestRouteObj.market.map((market) => {
    let tradeFeeObj = tradeFeeMap[market];
    let tradeFee = new import_eth_wallet.BigNumber(tradeFeeObj.fee).div(tradeFeeObj.base);
    return new import_eth_wallet.BigNumber(1).minus(tradeFee);
  }).reduce((a, b) => a.times(b)));
  let priceImpact;
  if (bestRouteObj.market.length == 1 && bestRouteObj.market[0] == import_store.Market.MIXED_QUEUE) {
    priceImpact = "0";
  } else {
    priceImpact = swapPrice.minus(currPrice).div(swapPrice).minus(fee).toFixed();
  }
  let extendedRouteObj = {
    pairs: bestRouteObj.pairs,
    market: bestRouteObj.market,
    bestRoute: bestRouteObj.route,
    priceImpact,
    price: swapPrice.toFixed(),
    tradeFee: fee.toFixed()
  };
  if (isHybridOrQueue) {
    let Address = getAddresses();
    let undefinedPairs = [];
    if (!bestRouteObj.isRegistered && Address["OSWAP_HybridRouterRegistry"]) {
      for (let i = 0; i < bestRouteObj.pairs.length; i++) {
        let pair = bestRouteObj.pairs[i];
        let hybridRouterRegistry = new import_sdk.Contracts.OSWAP_HybridRouterRegistry(wallet, Address["OSWAP_HybridRouterRegistry"]);
        let typeCode = (await hybridRouterRegistry.getTypeCode(pair)).toFixed();
        if (typeCode === "0")
          undefinedPairs.push(pair);
      }
    }
    let providerConfigByMarketCode = {};
    Object.values(import_store.ProviderConfigMap).forEach((v, i) => {
      providerConfigByMarketCode[v.marketCode] = v;
    });
    let bestSmartRoute = bestRouteObj.market.map((v, i) => {
      let providerObj = providerConfigByMarketCode[v];
      let isRegistered;
      if (bestRouteObj.isRegistered) {
        isRegistered = bestRouteObj.isRegistered[i];
      } else {
        isRegistered = Address["OSWAP_HybridRouterRegistry"] ? !undefinedPairs.includes(bestRouteObj.pairs[i]) : true;
      }
      let obj = {
        provider: providerObj.key,
        pairAddress: bestRouteObj.pairs[i],
        caption: providerObj.caption,
        fromToken: bestRouteObj.route[i],
        toToken: bestRouteObj.route[i + 1],
        isRegistered
      };
      if (v == import_store.Market.MIXED_QUEUE) {
        let { queueType, orderIds } = bestRouteObj.customDataList[i];
        obj = __spreadProps(__spreadValues({}, obj), {
          queueType,
          orderIds
        });
      }
      return obj;
    });
    extendedRouteObj = __spreadProps(__spreadValues({}, extendedRouteObj), {
      bestSmartRoute
    });
  }
  return extendedRouteObj;
}
var getHybridAmountsOut = async (wallet, amountIn, tokenIn, pair, data = "0x") => {
  let result;
  try {
    let Address = getAddresses();
    let hybridRouter = new import_sdk.Contracts.OSWAP_HybridRouter2(wallet, Address["OSWAP_HybridRouter2"]);
    result = await hybridRouter.getAmountsOutStartsWith({
      amountIn,
      pair,
      tokenIn,
      data
    });
  } catch (err) {
    console.log("getHybrid2AmountsOut", err);
  }
  return result;
};
var getHybridAmountsIn = async (wallet, amountOut, tokenIn, pair, data = "0x") => {
  let result;
  try {
    let Address = getAddresses();
    let hybridRouter = new import_sdk.Contracts.OSWAP_HybridRouter2(wallet, Address["OSWAP_HybridRouter2"]);
    result = await hybridRouter.getAmountsInStartsWith({
      amountOut,
      pair,
      tokenIn,
      data
    });
  } catch (err) {
  }
  return result;
};
var BakerySwapTradeExactIn = async function(wallet, routerAddress, tokenIn, tokenOut, path, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer) {
  let receipt;
  let router = new import_bakery_swap_sdk.Contracts.BakerySwapRouter(wallet, routerAddress);
  if (!tokenIn.address) {
    let params = {
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactBNBForTokensSupportingFeeOnTransferTokens(params, import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
    } else {
      receipt = await router.swapExactBNBForTokens(params, import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
    }
  } else if (!tokenOut.address) {
    let params = {
      amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactTokensForBNBSupportingFeeOnTransferTokens(params);
    } else {
      receipt = await router.swapExactTokensForBNB(params);
    }
  } else {
    let params = {
      amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
    } else {
      receipt = await router.swapExactTokensForTokens(params);
    }
  }
  return receipt;
};
var BakerySwapTradeExactOut = async function(wallet, routerAddress, tokenIn, tokenOut, path, amountOut, amountInMax, toAddress, deadline) {
  let receipt;
  let router = new import_bakery_swap_sdk.Contracts.BakerySwapRouter(wallet, routerAddress);
  if (!tokenIn.address) {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapBNBForExactTokens(params, import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
  } else if (!tokenOut.address) {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapTokensForExactBNB(params);
  } else {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapTokensForExactTokens(params);
  }
  return receipt;
};
var TraderJoeTradeExactIn = async function(wallet, routerAddress, tokenIn, tokenOut, path, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer) {
  let receipt;
  let router = new import_trader_joe_sdk.Contracts.JoeRouter02(wallet, routerAddress);
  if (!tokenIn.address) {
    let params = {
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactAVAXForTokensSupportingFeeOnTransferTokens(params, import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
    } else {
      receipt = await router.swapExactAVAXForTokens(params, import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
    }
  } else if (!tokenOut.address) {
    let params = {
      amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactTokensForAVAXSupportingFeeOnTransferTokens(params);
    } else {
      receipt = await router.swapExactTokensForAVAX(params);
    }
  } else {
    let params = {
      amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
    } else {
      receipt = await router.swapExactTokensForTokens(params);
    }
  }
  return receipt;
};
var TraderJoeTradeExactOut = async function(wallet, routerAddress, tokenIn, tokenOut, path, amountOut, amountInMax, toAddress, deadline) {
  let receipt;
  let router = new import_trader_joe_sdk.Contracts.JoeRouter02(wallet, routerAddress);
  if (!tokenIn.address) {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapAVAXForExactTokens(params, import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
  } else if (!tokenOut.address) {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapTokensForExactAVAX(params);
  } else {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapTokensForExactTokens(params);
  }
  return receipt;
};
var ImpossibleSwapTradeExactIn = async function(wallet, routerAddress, tokenIn, tokenOut, path, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer) {
  let receipt;
  let router = new import_impossible_swap_sdk.Contracts.ImpossibleRouter(wallet, routerAddress);
  if (!tokenIn.address) {
    let params = {
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactETHForTokensSupportingFeeOnTransferTokens(params, import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
    } else {
      receipt = await router.swapExactETHForTokens(params, import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
    }
  } else if (!tokenOut.address) {
    let params = {
      amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
    } else {
      receipt = await router.swapExactTokensForETH(params);
    }
  } else {
    let params = {
      amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    if (feeOnTransfer) {
      receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
    } else {
      receipt = await router.swapExactTokensForTokens(params);
    }
  }
  return receipt;
};
var ImpossibleSwapTradeExactOut = async function(wallet, routerAddress, tokenIn, tokenOut, path, amountOut, amountInMax, toAddress, deadline) {
  let receipt;
  let router = new import_impossible_swap_sdk.Contracts.ImpossibleRouter(wallet, routerAddress);
  if (!tokenIn.address) {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapETHForExactTokens(params, import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
  } else if (!tokenOut.address) {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapTokensForExactETH(params);
  } else {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      path,
      to: toAddress,
      deadline
    };
    receipt = await router.swapTokensForExactTokens(params);
  }
  return receipt;
};
var AmmTradeExactIn = async function(wallet, market, routeTokens, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer, callback, confirmationCallback) {
  if (routeTokens.length < 2) {
    return null;
  }
  let tokenIn = routeTokens[0];
  let tokenOut = routeTokens[routeTokens.length - 1];
  let routerAddress = getRouterAddress(market);
  let addresses = [];
  let wrappedTokenAddress = getWrappedTokenAddress();
  for (let i = 0; i < routeTokens.length; i++) {
    addresses.push(routeTokens[i].address || wrappedTokenAddress);
  }
  let receipt;
  switch (market) {
    case import_store.Market.IFSWAPV3:
      receipt = await ImpossibleSwapTradeExactIn(wallet, routerAddress, tokenIn, tokenOut, addresses, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer);
      break;
    case import_store.Market.BAKERYSWAP:
      receipt = await BakerySwapTradeExactIn(wallet, routerAddress, tokenIn, tokenOut, addresses, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer);
      break;
    case import_store.Market.TRADERJOE:
    case import_store.Market.PANGOLIN:
      receipt = await TraderJoeTradeExactIn(wallet, routerAddress, tokenIn, tokenOut, addresses, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer);
      break;
    default:
      if (!tokenIn.address) {
        let params = {
          amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
          path: addresses,
          to: toAddress,
          deadline
        };
        let router = new import_sdk.Contracts.OSWAP_Router(wallet, routerAddress);
        if (feeOnTransfer) {
          receipt = await router.swapExactETHForTokensSupportingFeeOnTransferTokens(params, import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
        } else {
          receipt = await router.swapExactETHForTokens(params, import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0));
        }
      } else if (!tokenOut.address) {
        let params = {
          amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
          amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
          path: addresses,
          to: toAddress,
          deadline
        };
        let router = new import_sdk.Contracts.OSWAP_Router(wallet, routerAddress);
        if (feeOnTransfer) {
          receipt = await router.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
        } else {
          receipt = await router.swapExactTokensForETH(params);
        }
      } else {
        let params = {
          amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
          amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
          path: addresses,
          to: toAddress,
          deadline
        };
        let router = new import_sdk.Contracts.OSWAP_Router(wallet, routerAddress);
        if (feeOnTransfer) {
          receipt = await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
        } else {
          receipt = await router.swapExactTokensForTokens(params);
        }
      }
      break;
  }
  return receipt;
};
var AmmTradeExactOut = async function(wallet, market, routeTokens, amountOut, amountInMax, toAddress, deadline, callback, confirmationCallback) {
  if (routeTokens.length < 2) {
    return null;
  }
  let tokenIn = routeTokens[0];
  let tokenOut = routeTokens[routeTokens.length - 1];
  let routerAddress = getRouterAddress(market);
  let router = new import_sdk.Contracts.OSWAP_Router(wallet, routerAddress);
  let addresses = [];
  let wrappedTokenAddress = getWrappedTokenAddress();
  for (let i = 0; i < routeTokens.length; i++) {
    addresses.push(routeTokens[i].address || wrappedTokenAddress);
  }
  let receipt;
  switch (market) {
    case import_store.Market.IFSWAPV3:
      receipt = await ImpossibleSwapTradeExactOut(wallet, routerAddress, tokenIn, tokenOut, addresses, amountOut, amountInMax, toAddress, deadline);
      break;
    case import_store.Market.BAKERYSWAP:
      receipt = await BakerySwapTradeExactOut(wallet, routerAddress, tokenIn, tokenOut, addresses, amountOut, amountInMax, toAddress, deadline);
      break;
    case import_store.Market.TRADERJOE:
    case import_store.Market.PANGOLIN:
      receipt = await TraderJoeTradeExactOut(wallet, routerAddress, tokenIn, tokenOut, addresses, amountOut, amountInMax, toAddress, deadline);
      break;
    default:
      if (!tokenIn.address) {
        let params = {
          amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
          path: addresses,
          to: toAddress,
          deadline
        };
        receipt = await router.swapETHForExactTokens(params, import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0));
      } else if (!tokenOut.address) {
        let params = {
          amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
          amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
          path: addresses,
          to: toAddress,
          deadline
        };
        receipt = await router.swapTokensForExactETH(params);
      } else {
        let params = {
          amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
          amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
          path: addresses,
          to: toAddress,
          deadline
        };
        receipt = await router.swapTokensForExactTokens(params);
      }
      break;
  }
  return receipt;
};
var hybridTradeExactIn = async (wallet, bestSmartRoute, path, pairs, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer, data, callback, confirmationCallback) => {
  if (path.length < 2) {
    return null;
  }
  let tokenIn = path[0];
  let tokenOut = path[path.length - 1];
  if (bestSmartRoute && bestSmartRoute.length > 0) {
    let pairIndex = bestSmartRoute.findIndex((n) => n.queueType == import_global.QueueType.RANGE_QUEUE);
    if (pairIndex != -1) {
      if (bestSmartRoute[pairIndex].orderIds) {
        let orderIds = bestSmartRoute[pairIndex].orderIds;
        data = "0x" + import_eth_wallet.Utils.numberToBytes32(32 * (orderIds.length + 1)) + import_eth_wallet.Utils.numberToBytes32(orderIds.length) + orderIds.map((e) => import_eth_wallet.Utils.numberToBytes32(e)).join("");
      } else {
        let amountInTokenAmount = import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0);
        let tokenInAddress = tokenIn.address ? tokenIn.address : getWrappedTokenAddress();
        let amountsOutObj = await getHybridAmountsOut(wallet, amountInTokenAmount, tokenInAddress, pairs);
        if (!amountsOutObj)
          return null;
        let pair = pairs[pairIndex];
        let tokenA = path[pairIndex];
        let tokenB = path[pairIndex + 1];
        let rangeAmountOut = amountsOutObj[pairIndex + 1];
        data = await (0, import_queue_utils.getRangeQueueData)(pair, tokenA, tokenB, rangeAmountOut);
      }
    }
  }
  let hybridRouterAddress = getHybridRouterAddress();
  let hybridRouter = new import_sdk.Contracts.OSWAP_HybridRouter2(wallet, hybridRouterAddress);
  let receipt;
  if (!tokenIn.address) {
    let params = {
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      pair: pairs,
      to: toAddress,
      deadline,
      data
    };
    if (feeOnTransfer) {
      receipt = await hybridRouter.swapExactETHForTokensSupportingFeeOnTransferTokens(params, import_eth_wallet.Utils.toDecimals(amountIn).dp(0));
    } else {
      receipt = await hybridRouter.swapExactETHForTokens(params, import_eth_wallet.Utils.toDecimals(amountIn).dp(0));
    }
  } else if (!tokenOut.address) {
    let params = {
      amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      pair: pairs,
      to: toAddress,
      deadline,
      data
    };
    if (feeOnTransfer) {
      receipt = await hybridRouter.swapExactTokensForETHSupportingFeeOnTransferTokens(params);
    } else {
      receipt = await hybridRouter.swapExactTokensForETH(params);
    }
  } else {
    let params = {
      amountIn: import_eth_wallet.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: import_eth_wallet.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      pair: pairs,
      tokenIn: tokenIn.address,
      to: toAddress,
      deadline,
      data
    };
    if (feeOnTransfer) {
      receipt = await hybridRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(params);
    } else {
      receipt = await hybridRouter.swapExactTokensForTokens(params);
    }
  }
  return receipt;
};
var hybridTradeExactOut = async (wallet, bestSmartRoute, path, pairs, amountOut, amountInMax, toAddress, deadline, data, callback, confirmationCallback) => {
  if (path.length < 2) {
    return null;
  }
  let tokenIn = path[0];
  let tokenOut = path[path.length - 1];
  if (bestSmartRoute && bestSmartRoute.length > 0) {
    let pairIndex = bestSmartRoute.findIndex((n) => n.queueType == import_global.QueueType.RANGE_QUEUE);
    if (pairIndex != -1) {
      if (bestSmartRoute[pairIndex].orderIds) {
        let orderIds = bestSmartRoute[pairIndex].orderIds;
        data = "0x" + import_eth_wallet.Utils.numberToBytes32(32 * (orderIds.length + 1)) + import_eth_wallet.Utils.numberToBytes32(orderIds.length) + orderIds.map((e) => import_eth_wallet.Utils.numberToBytes32(e)).join("");
      } else {
        let amountOutTokenAmount = import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0);
        let amountsOutObj = await getHybridAmountsIn(wallet, amountOutTokenAmount, tokenIn, pairs);
        if (!amountsOutObj)
          return null;
        let pair = pairs[pairIndex];
        let tokenA = path[pairIndex];
        let tokenB = path[pairIndex + 1];
        let rangeAmountOut = amountsOutObj[pairIndex + 1];
        data = await (0, import_queue_utils.getRangeQueueData)(pair, tokenA, tokenB, rangeAmountOut);
      }
    }
  }
  let hybridRouterAddress = getHybridRouterAddress();
  let hybridRouter = new import_sdk.Contracts.OSWAP_HybridRouter2(wallet, hybridRouterAddress);
  let receipt;
  if (!tokenIn.address) {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals),
      pair: pairs,
      to: toAddress,
      deadline,
      data
    };
    receipt = await hybridRouter.swapETHForExactTokens(params, import_eth_wallet.Utils.toDecimals(amountInMax).dp(0));
  } else if (!tokenOut.address) {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      pair: pairs,
      to: toAddress,
      deadline,
      data
    };
    receipt = await hybridRouter.swapTokensForExactETH(params);
  } else {
    let params = {
      amountOut: import_eth_wallet.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0),
      amountInMax: import_eth_wallet.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0),
      pair: pairs,
      tokenOut: tokenOut.address,
      to: toAddress,
      deadline,
      data
    };
    receipt = await hybridRouter.swapTokensForExactTokens(params);
  }
  return receipt;
};
var executeSwap = async (swapData) => {
  var _a;
  let receipt = null;
  const wallet = (0, import_store.getWallet)();
  try {
    const toAddress = wallet.account.address;
    const slippageTolerance = (0, import_store.getSlippageTolerance)();
    const transactionDeadlineInMinutes = (0, import_store.getTransactionDeadline)();
    const transactionDeadline = Math.floor(Date.now() / 1e3 + transactionDeadlineInMinutes * 60);
    if (swapData.provider === "Hybrid" || swapData.provider === "Oracle" && swapData.bestSmartRoute || swapData.provider === "PeggedOracle") {
      if (swapData.isFromEstimated) {
        const amountInMax = swapData.fromAmount.times(1 + slippageTolerance / 100);
        receipt = await hybridTradeExactOut(wallet, swapData.bestSmartRoute, swapData.routeTokens, swapData.pairs, swapData.toAmount.toString(), amountInMax.toString(), toAddress, transactionDeadline, "0x");
      } else {
        const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
        receipt = await hybridTradeExactIn(wallet, swapData.bestSmartRoute, swapData.routeTokens, swapData.pairs, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false, "0x");
      }
    } else if (!swapData.queueType) {
      const market = import_store.ProviderConfigMap[swapData.provider].marketCode;
      if (swapData.isFromEstimated) {
        const amountInMax = swapData.fromAmount.times(1 + slippageTolerance / 100);
        receipt = await AmmTradeExactOut(wallet, market, swapData.routeTokens, swapData.toAmount.toString(), amountInMax.toString(), toAddress, transactionDeadline);
      } else {
        const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
        receipt = await AmmTradeExactIn(wallet, market, swapData.routeTokens, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false);
      }
    } else if (swapData.provider === "RestrictedOracle") {
      const obj = await (0, import_queue_utils.getGroupQueueTraderDataObj)(swapData.pairs[0], swapData.routeTokens[0], swapData.routeTokens[1], swapData.fromAmount.toString(), (_a = swapData.groupQueueOfferIndex) == null ? void 0 : _a.toString());
      if (!obj || !obj.data)
        return {
          receipt: null,
          error: { message: "No data from Group Queue Trader" }
        };
      const data = obj.data;
      const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
      receipt = await hybridTradeExactIn(wallet, swapData.bestSmartRoute, swapData.routeTokens, swapData.pairs, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false, data);
    }
  } catch (error) {
    return { receipt: null, error };
  }
  return { receipt, error: null };
};
var setERC20AllowanceToZero = async (token, spenderAddress) => {
  let wallet = (0, import_store.getWallet)();
  let erc20 = new import_sdk.Contracts.ERC20(wallet, token.address);
  let receipt = await erc20.approve({
    spender: spenderAddress,
    amount: 0
  });
  return receipt;
};
var approvalModel;
var getApprovalModelAction = async (options) => {
  const approvalOptions = __spreadProps(__spreadValues({}, options), {
    spenderAddress: ""
  });
  approvalModel = new import_global.ERC20ApprovalModel(approvalOptions);
  let approvalModelAction = approvalModel.getAction();
  return approvalModelAction;
};
var setApprovalModalSpenderAddress = (market, contractAddress) => {
  let wallet = import_eth_wallet.Wallet.getInstance();
  let spender;
  if (contractAddress) {
    spender = contractAddress;
  } else {
    if (market == import_store.Market.HYBRID || market == import_store.Market.MIXED_QUEUE || market == import_store.Market.PEGGED_QUEUE || market == import_store.Market.GROUP_QUEUE) {
      spender = getHybridRouterAddress();
    } else {
      spender = getRouterAddress(market);
    }
  }
  approvalModel.spenderAddress = spender;
};
var getAvailableRouteOptions = async (params) => {
  let slippageTolerance = (0, import_store.getSlippageTolerance)();
  return await (0, import_crosschain_utils.getAvailableRouteOptions)(params, getTradeFeeMap, getExtendedRouteObjData, slippageTolerance);
};
var createBridgeVaultOrder = async (newOrderParams) => (0, import_crosschain_utils.createBridgeVaultOrder)(__spreadProps(__spreadValues({}, newOrderParams), {
  transactionSetting: {
    transactionDeadlineInMinutes: (0, import_store.getTransactionDeadline)(),
    slippageTolerance: (0, import_store.getSlippageTolerance)()
  }
}));
var registerPairsByAddress = async (market, pairAddresses) => {
  let wallet = import_eth_wallet.Wallet.getInstance();
  let registryAddress = getAddresses()["OSWAP_HybridRouterRegistry"];
  let registry = new import_sdk.Contracts.OSWAP_HybridRouterRegistry(wallet, registryAddress);
  let factory = market.map((m) => getFactoryAddress(m));
  let pairAddress = pairAddresses;
  return await registry.registerPairsByAddress2({ factory, pairAddress });
};
  
  });