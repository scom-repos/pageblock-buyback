import { Wallet, BigNumber, Utils, Erc20, TransactionReceipt } from "@ijstech/eth-wallet";
import { Contracts } from "@openswap/sdk";

import {
  QueueType,
  ITokenObject,
  IERC20ApprovalEventOptions,
  ERC20ApprovalModel,
} from "@buyback/global";

import { 
  Market,
  ProviderConfigMap,
  CoreContractAddressesByChainId,
  ChainNativeTokenByChainId,
  WETHByChainId,
  getWallet, 
  getSlippageTolerance, 
  getTransactionDeadline,
  isWalletConnected,
  getChainId,
} from "@buyback/store";

import { getPair as getOraclePair, getRangeQueueData, getGroupQueueTraderDataObj } from "@buyback/queue-utils";

interface TradeFee {
  fee: string
  base: string
}
interface TradeFeeMap {
  [market: number]: TradeFee
}
interface AvailableRoute {
  pair:string,
  market:Market,
  tokenIn:ITokenObject,
  tokenOut:ITokenObject,
  reserveA: BigNumber,
  reserveB: BigNumber,
}

const Factory = 'OAXDEX_Factory';
const RouterV1 = "OAXDEX_RouterV1";
const Router = "OAXDEX_Router";

function getAddresses() {
  return CoreContractAddressesByChainId[getChainId()];
};
const getChainNativeToken = (): ITokenObject => {
  return ChainNativeTokenByChainId[getChainId()]
};
const getWETH = (): ITokenObject => {
  return WETHByChainId[getChainId()];
};
const getWrappedTokenAddress = (): string => {
  return getWETH().address!;
};

const getHybridRouterAddress = (): string => {
  let Address = getAddresses();
  return Address['OSWAP_HybridRouter2'];
};
const getFactoryAddress = (market: Market): string => {
  let Address = getAddresses();
  switch (market) {
    case Market.OPENSWAP:
      return Address[Factory];
    case Market.UNISWAP:
      return Address.UniswapV2Factory;
    case Market.SUSHISWAP:
      return Address.SushiSwapV2Factory;
    case Market.PANCAKESWAPV1:
      return Address.PancakeSwapFactoryV1;
    case Market.PANCAKESWAP:
      return Address.PancakeSwapFactory;
    case Market.BAKERYSWAP:
      return Address.BakerySwapFactory;
    case Market.BURGERSWAP:
      return Address.BurgerSwapFactory;
    case Market.IFSWAPV1:
      return Address.IFSwapFactoryV1;
    case Market.IFSWAPV3:
      return Address.IFSwapFactoryV3;
    case Market.QUICKSWAP:
      return Address.QuickSwapFactory;
    case Market.BISWAP:
      return Address.BiSwapFactory;
    case Market.PANGOLIN:
      return Address.PangolinFactory;
    case Market.TRADERJOE:
      return Address.TraderJoeFactory;
    case Market.SPIRITSWAP:
      return Address.SpiritSwapFactory;
    case Market.SPOOKYSWAP:
      return Address.SpookySwapFactory;
    case Market.HAKUSWAP:
      return Address.HakuSwapFactory;
    case Market.JETSWAP:
      return Address.JetSwapFactory;
    default:
      return Address[Factory];
  }
}
function getRouterAddress(market: Market): string {
  let Address = getAddresses();
  switch (market) {
    case Market.OPENSWAP:
      return Address[Router];
    case Market.UNISWAP:
      return Address.UniswapV2Router02;
    case Market.SUSHISWAP:
      return Address.SushiSwapV2Router02;
    case Market.PANCAKESWAPV1:
      return Address.PancakeSwapRouterV1;
    case Market.PANCAKESWAP:
      return Address.PancakeSwapRouter;
    case Market.BAKERYSWAP:
      return Address.BakerySwapRouter;
    case Market.BURGERSWAP:
      return Address.BurgerSwapRouter;
    case Market.IFSWAPV1:
      return Address.IFSwapRouterV1;
    case Market.OPENSWAPV1:
      return Address[RouterV1];
    case Market.QUICKSWAP:
      return Address.QuickSwapRouter;
    case Market.BISWAP:
      return Address.BiSwapRouter;
    case Market.PANGOLIN:
      return Address.PangolinRouter;
    case Market.TRADERJOE:
      return Address.TraderJoeRouter;
    case Market.SPIRITSWAP:
      return Address.SpiritSwapRouter;
    case Market.SPOOKYSWAP:
      return Address.SpookySwapRouter;
    case Market.IFSWAPV3:
      return Address.IFSwapRouterV3;
    default:
      return Address[Router];
  }
}

async function allowanceRouter(wallet: Wallet, market: Market, token: ITokenObject, owner: string, callback?: any) {
  let erc20 = new Erc20(wallet, token.address, token.decimals);
  let spender;
  if (market == Market.HYBRID || market == Market.MIXED_QUEUE || market == Market.PEGGED_QUEUE || market == Market.GROUP_QUEUE) {
    spender = getHybridRouterAddress();
  }
  else {
    spender = getRouterAddress(market);
  }
  let allowance = await erc20.allowance({
    owner,
    spender
  })
  allowance = Utils.fromDecimals(allowance, token.decimals);
  if (callback)
    callback(null, allowance);
  return allowance;
}

async function checkIsApproveButtonShown(wallet: Wallet, firstTokenObject: any, fromInput: BigNumber, market: Market) {
  if (!isWalletConnected()) return false;
  let isApproveButtonShown = false;
  const owner = wallet.account.address;
  const nativeTokenObject = getChainNativeToken();
  if (!nativeTokenObject) return false;

  const firstTokenAddress = firstTokenObject.address;
  if (!firstTokenAddress || firstTokenAddress === nativeTokenObject.symbol) {
    isApproveButtonShown = false;
  } else {
    isApproveButtonShown = false;
    const allowance = await allowanceRouter(wallet, market, firstTokenObject, owner);
    isApproveButtonShown = fromInput.gt(allowance);
  }
  return isApproveButtonShown;
}

function getTradeFee(market: Market) {
  switch (market) {
    case Market.BISWAP:
      return { fee: "1", base: "1000" };
    case Market.UNISWAP:
    case Market.SUSHISWAP:
    case Market.BAKERYSWAP:
    case Market.PANGOLIN:
    case Market.TRADERJOE:
    case Market.QUICKSWAP:
    case Market.SPIRITSWAP:
      return { fee: "3", base: "1000" };
    case Market.PANCAKESWAPV1:
    case Market.SPOOKYSWAP:
      return { fee: "2", base: "1000" };
    case Market.PANCAKESWAP:
      return { fee: "25", base: "10000" };
    case Market.BURGERSWAP:
      return { fee: "3", base: "1000" };
    case Market.IFSWAPV1:
      return { fee: "6", base: "10000" };
    case Market.IFSWAPV3: //trade fee by pair. 0.3% is default
      return { fee:"30", base: "10000"}   
    case Market.MIXED_QUEUE:
      return { fee: "1", base: "1000" };
    case Market.PEGGED_QUEUE:
      return { fee: "1", base: "1000" };
    case Market.OPENSWAP:
    default:
      return { fee: "200", base: "100000" };
  }
}

async function getTradeFeeMap(markets: Market[]) {
  let tradeFeeMap:TradeFeeMap = {};
  markets.forEach(market => tradeFeeMap[market] = getTradeFee(market));
  return tradeFeeMap;
}

const calculateAmountOutByTradeFee = (tradeFeeMap: any, pairInfo: any, amountIn: string) => {
  let tradeFeeObj = tradeFeeMap[pairInfo.market];
  let amountInWithFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).times(amountIn);
  let amtOut = (new BigNumber(pairInfo.reserveB).times(amountInWithFee)).idiv(new BigNumber(pairInfo.reserveA).times(tradeFeeObj.base).plus(amountInWithFee)).toFixed();
  return amtOut;
}

const calculateAmountInByTradeFee = (tradeFeeMap: any, pairInfo: any, amountOut: string) => {
  let tradeFeeObj = tradeFeeMap[pairInfo.market];
  let feeMultiplier = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee);
  if (pairInfo.reserveB.lte(amountOut)) {
    return null;
  }
  let amtIn = new BigNumber(pairInfo.reserveA).times(amountOut).times(tradeFeeObj.base).idiv(new BigNumber(pairInfo.reserveB.minus(amountOut)).times(feeMultiplier)).plus(1).toFixed();
  return amtIn;
}

const getPathsByTokenIn = (tradeFeeMap: any, pairInfoList: any[], routeObj: any, tokenIn: ITokenObject) => {
  let routeObjList: any[] = [];
  let listItems = pairInfoList.filter(v => v.tokenOut.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n: any) => n.address != v.tokenIn.address));

  let getNewAmmRouteObj = (pairInfo: any, routeObj: any, amountOut: string) => {
    let amtIn = calculateAmountInByTradeFee(tradeFeeMap, pairInfo, amountOut);
    if (!amtIn) return null;
    let newRouteObj = {
      pairs: [...routeObj.pairs, pairInfo.pair],
      market: [...routeObj.market, pairInfo.market],
      customDataList: [...routeObj.customDataList, {
        reserveA: pairInfo.reserveA,
        reserveB: pairInfo.reserveB
      }],
      route: [...routeObj.route, pairInfo.tokenIn],
      amounts: [...routeObj.amounts, amtIn]
    }
    return newRouteObj;
  }

  let getNewQueueRouteObj = (pairInfo: any, routeObj: any, amountOut: string) => {
    let tradeFeeObj = tradeFeeMap[pairInfo.market];
    let tradeFeeFactor = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
    let amtIn = new BigNumber(amountOut).shiftedBy(18 - Number(pairInfo.tokenOut.decimals)).div(pairInfo.priceSwap).shiftedBy(pairInfo.tokenIn.decimals).div(tradeFeeFactor).toFixed()
    let sufficientLiquidity = new BigNumber(pairInfo.totalLiquidity).gt(amountOut);
    if (!sufficientLiquidity) return null
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
    }
    return newRouteObj;
  }

  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    let lastAmtIn = routeObj.amounts[routeObj.amounts.length - 1];
    let newRouteObj = listItem.market == Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtIn) : getNewAmmRouteObj(listItem, routeObj, lastAmtIn);
    if (!newRouteObj) continue;
    if (listItem.tokenIn.address == tokenIn.address) {
      routeObjList.push(newRouteObj);
      break;
    }
    else {
      if (newRouteObj.route.length >= 4) continue;
      let childPaths = getPathsByTokenIn(tradeFeeMap, pairInfoList, { ...newRouteObj }, tokenIn);
      routeObjList.push(...childPaths);
    }
  }
  return routeObjList;
}

const getPathsByTokenOut = (tradeFeeMap: any, pairInfoList: any[], routeObj: any, tokenOut: ITokenObject) => {
  let routeObjList: any[] = [];
  let listItems = pairInfoList.filter(v => v.tokenIn.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n: any) => n.address != v.tokenOut.address));

  let getNewAmmRouteObj = (pairInfo: any, routeObj: any, amountIn: string) => {
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
    }
    return newRouteObj;
  }

  let getNewQueueRouteObj = (pairInfo: any, routeObj: any, amountIn: string) => {
    let tradeFeeObj = tradeFeeMap[pairInfo.market];
    let tradeFeeFactor = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
    let amtOut = new BigNumber(amountIn).shiftedBy(18 - Number(pairInfo.tokenIn.decimals)).div(pairInfo.price).shiftedBy(pairInfo.tokenOut.decimals).times(tradeFeeFactor).toFixed()
    let sufficientLiquidity = new BigNumber(pairInfo.totalLiquidity).gt(amtOut);
    if (!sufficientLiquidity) return null;
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
    }
    return newRouteObj;
  }

  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    let lastAmtOut = routeObj.amounts[routeObj.amounts.length - 1];
    let newRouteObj = listItem.market == Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtOut) : getNewAmmRouteObj(listItem, routeObj, lastAmtOut);
    if (!newRouteObj) continue;
    if (listItem.tokenOut.address == tokenOut.address) {
      routeObjList.push(newRouteObj);
      break;
    }
    else {
      if (newRouteObj.route.length >= 4) continue;
      let childPaths = getPathsByTokenOut(tradeFeeMap, pairInfoList, { ...newRouteObj }, tokenOut);
      routeObjList.push(...childPaths);
    }
  }
  return routeObjList;
}

async function getExtendedRouteObjData(wallet: Wallet, bestRouteObj: any, tradeFeeMap: TradeFeeMap, swapPrice: BigNumber, isHybridOrQueue: boolean) {
  let currPrice = new BigNumber(0);
  if (bestRouteObj.customDataList.length > 0) {
    currPrice = bestRouteObj.market.map((v: Market, i: number) => {
      let customDataObj = bestRouteObj.customDataList[i];
      if (v == Market.MIXED_QUEUE && customDataObj.price) {
        return new BigNumber(customDataObj.price).shiftedBy(-bestRouteObj.route[i].decimals);
      }
      else {
        let reserveA = new BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
        let reserveB = new BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
        return reserveA.div(reserveB);
      }
    })
      .reduce((prev: any, curr: any) => prev.times(curr));
  }

  let fee = new BigNumber(1).minus(bestRouteObj.market.map((market:number) => {
    let tradeFeeObj = tradeFeeMap[market]
    let tradeFee = new BigNumber(tradeFeeObj.fee).div(tradeFeeObj.base);
    return new BigNumber(1).minus(tradeFee)
  }).reduce((a: any, b: any) => a.times(b)));

  let priceImpact: string;
  if (bestRouteObj.market.length == 1 && bestRouteObj.market[0] == Market.MIXED_QUEUE) {
    priceImpact = '0';
  }
  else {
    priceImpact = swapPrice.minus(currPrice).div(swapPrice).minus(fee).toFixed();
  }

  //let gasFee = await calculateGasFee(wallet, bestRouteObj.market);

  let extendedRouteObj: any = {
    pairs: bestRouteObj.pairs,
    market: bestRouteObj.market,
    bestRoute: bestRouteObj.route,
    priceImpact: priceImpact,
    price: swapPrice.toFixed(),
    tradeFee: fee.toFixed(),
  }

  if (isHybridOrQueue) {
    let Address = getAddresses();
    let undefinedPairs: string[] = [];
    if (!bestRouteObj.isRegistered && Address['OSWAP_HybridRouterRegistry']) {
      for (let i = 0; i < bestRouteObj.pairs.length; i++) {
        let pair = bestRouteObj.pairs[i];
        let hybridRouterRegistry = new Contracts.OSWAP_HybridRouterRegistry(wallet as any, Address['OSWAP_HybridRouterRegistry']);
        let typeCode = (await hybridRouterRegistry.getTypeCode(pair)).toFixed();
        if (typeCode === '0') undefinedPairs.push(pair);
      }
    }

    let providerConfigByMarketCode: any = {};
    Object.values(ProviderConfigMap).forEach((v, i) => {
      providerConfigByMarketCode[v.marketCode] = v;
    });
    let bestSmartRoute = bestRouteObj.market.map((v: any, i: any) => {
      let providerObj = providerConfigByMarketCode[v];
      let isRegistered;
      if (bestRouteObj.isRegistered) {
        isRegistered = bestRouteObj.isRegistered[i];
      }
      else {
        isRegistered = Address['OSWAP_HybridRouterRegistry'] ? !undefinedPairs.includes(bestRouteObj.pairs[i]) : true;
      }

      let obj: any = {
        provider: providerObj.key,
        pairAddress: bestRouteObj.pairs[i],
        caption: providerObj.caption,
        fromToken: bestRouteObj.route[i],
        toToken: bestRouteObj.route[i + 1],
        isRegistered
      }
      if (v == Market.MIXED_QUEUE) {
        let { queueType, orderIds } = bestRouteObj.customDataList[i];
        obj = {
          ...obj,
          queueType,
          orderIds
        }
      }

      return obj;
    })

    extendedRouteObj = {
      ...extendedRouteObj,
      bestSmartRoute
    }
  }

  return extendedRouteObj;
}

const getHybridAmountsOut = async (wallet: Wallet, amountIn: BigNumber, tokenIn: string, pair: string[], data: string = '0x') => {
  let result
  try {
    let Address = getAddresses();
    let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet as any, Address['OSWAP_HybridRouter2']);
    result = await hybridRouter.getAmountsOutStartsWith({
      amountIn,
      pair,
      tokenIn,
      data
    })
  }
  catch (err) {
    console.log('getHybrid2AmountsOut', err)
  }
  return result;
}

const hybridTradeExactIn = async (wallet: Wallet, bestSmartRoute: any[], path: any[], pairs: string[], amountIn: string, amountOutMin: string, toAddress: string, deadline: number, feeOnTransfer: boolean, data: string, callback?: any, confirmationCallback?: any) => {
  if (path.length < 2) {
    return null;
  }

  let tokenIn = path[0];
  let tokenOut = path[path.length - 1];

  if (bestSmartRoute && bestSmartRoute.length > 0) {
    let pairIndex = bestSmartRoute.findIndex(n => n.queueType == QueueType.RANGE_QUEUE);
    if (pairIndex != -1) {
      if (bestSmartRoute[pairIndex].orderIds) {
        let orderIds: number[] = bestSmartRoute[pairIndex].orderIds;
        data = "0x" + Utils.numberToBytes32(0x20 * (orderIds.length + 1)) + Utils.numberToBytes32(orderIds.length) + orderIds.map(e => Utils.numberToBytes32(e)).join('');
      }
      else {
        let amountInTokenAmount = Utils.toDecimals(amountIn, tokenIn.decimals).dp(0);
        let tokenInAddress = tokenIn.address ? tokenIn.address : getWrappedTokenAddress();
        let amountsOutObj = await getHybridAmountsOut(wallet, amountInTokenAmount, tokenInAddress, pairs);
        if (!amountsOutObj) return null;
        let pair = pairs[pairIndex];
        let tokenA = path[pairIndex];
        let tokenB = path[pairIndex + 1];
        let rangeAmountOut = amountsOutObj[pairIndex + 1];
        data = await getRangeQueueData(pair, tokenA, tokenB, rangeAmountOut);
      }
    }
  }

  let hybridRouterAddress = getHybridRouterAddress();
  let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet as any, hybridRouterAddress);

  let receipt;
  if (!tokenIn.address) {
    let params = {
      amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      pair: pairs,
      to: toAddress,
      deadline,
      data
    };
    if (feeOnTransfer) {
      receipt = await hybridRouter.swapExactETHForTokensSupportingFeeOnTransferTokens(params, Utils.toDecimals(amountIn).dp(0))
    }
    else {
      receipt = await hybridRouter.swapExactETHForTokens(params, Utils.toDecimals(amountIn).dp(0))
    }
  } else if (!tokenOut.address) {
    let params = {
      amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      pair: pairs,
      to: toAddress,
      deadline,
      data
    };
    if (feeOnTransfer) {
      receipt = await hybridRouter.swapExactTokensForETHSupportingFeeOnTransferTokens(params)
    }
    else {
      receipt = await hybridRouter.swapExactTokensForETH(params)
    }
  }
  else {
    let params = {
      amountIn: Utils.toDecimals(amountIn, tokenIn.decimals).dp(0),
      amountOutMin: Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0),
      pair: pairs,
      tokenIn: tokenIn.address,
      to: toAddress,
      deadline,
      data
    };
    if (feeOnTransfer) {
      receipt = await hybridRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(params)
    }
    else {
      receipt = await hybridRouter.swapExactTokensForTokens(params)
    }
  }
  return receipt;
}

interface SwapData {
  provider: string;
  queueType?: QueueType;
  routeTokens: any[];
  bestSmartRoute: any[];
  pairs: string[];
  fromAmount: BigNumber;
  toAmount: BigNumber;
  isFromEstimated: boolean;
  groupQueueOfferIndex?: number;
}


const executeSwap: (swapData: SwapData) => Promise<{
  receipt: TransactionReceipt | null;
  error: Record<string, string> | null;
}> = async (swapData: SwapData) => {
  let receipt: TransactionReceipt | null = null;
  const wallet = getWallet() as any;
  try {
    const toAddress = wallet.account.address;
    const slippageTolerance = getSlippageTolerance();
    const transactionDeadlineInMinutes = getTransactionDeadline();
    const transactionDeadline = Math.floor(
      Date.now() / 1000 + transactionDeadlineInMinutes * 60
    );
    if (swapData.provider === "RestrictedOracle") {
      const obj = await getGroupQueueTraderDataObj(
        swapData.pairs[0],
        swapData.routeTokens[0],
        swapData.routeTokens[1],
        swapData.fromAmount.toString(),
        swapData.groupQueueOfferIndex?.toString()
      );
      if (!obj || !obj.data)
        return {
          receipt: null,
          error: { message: "No data from Group Queue Trader" },
        };
      const data = obj.data;
      const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
      receipt = await hybridTradeExactIn(
        wallet,
        swapData.bestSmartRoute,
        swapData.routeTokens,
        swapData.pairs,
        swapData.fromAmount.toString(),
        amountOutMin.toString(),
        toAddress,
        transactionDeadline,
        false,
        data
      );
    }
  } catch (error) {
    return { receipt: null, error: error as any };
  }
  return { receipt, error: null };
};

//For testing only
const setERC20AllowanceToZero = async (token: ITokenObject, spenderAddress: string) => {
  let wallet = getWallet() as any;
  let erc20 = new Contracts.ERC20(wallet, token.address);
  let receipt = await erc20.approve({
    spender: spenderAddress,
    amount: 0
  });
  return receipt;
}

var approvalModel: ERC20ApprovalModel;

const getApprovalModelAction = async (options: IERC20ApprovalEventOptions) => {
  const approvalOptions = {
    ...options,
    spenderAddress: ''
  };
  approvalModel = new ERC20ApprovalModel(approvalOptions);
  let approvalModelAction = approvalModel.getAction();
  return approvalModelAction;
}

const setApprovalModalSpenderAddress = (market: Market, contractAddress?: string) => {
  let wallet = Wallet.getInstance();
  let spender;
  if (contractAddress) {
    spender = contractAddress
  } else {
    if (market == Market.HYBRID || market == Market.MIXED_QUEUE || market == Market.PEGGED_QUEUE || market == Market.GROUP_QUEUE) {
      spender = getHybridRouterAddress();
    }
    else {
      spender = getRouterAddress(market);
    }
  }
  approvalModel.spenderAddress = spender;
}

const registerPairsByAddress = async (market: Market[], pairAddresses: string[]) => {
  let wallet = Wallet.getInstance() as any;
  let registryAddress = getAddresses()["OSWAP_HybridRouterRegistry"]
  let registry = new Contracts.OSWAP_HybridRouterRegistry(wallet,registryAddress);
  let factory = market.map(m=>getFactoryAddress(m));
  let pairAddress = pairAddresses;
  return await registry.registerPairsByAddress2({factory,pairAddress});
}

export {
  getExtendedRouteObjData,
  getTradeFeeMap,
  SwapData,
  executeSwap,
  getRouterAddress,
  getHybridRouterAddress,
  setERC20AllowanceToZero,
  getApprovalModelAction,
  setApprovalModalSpenderAddress,
  registerPairsByAddress,
}