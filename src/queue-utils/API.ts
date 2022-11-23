import {
  QueueType,
  toWeiInv,
  ABIKeys,
  numberToBytes32,
  uniqWith,
  ITokenObject,
  registerSendTxEvents,
  IERC20ApprovalEventOptions,
  ERC20ApprovalModel,
} from '@buyback/global';
import { BigNumber, Wallet, Utils, Erc20 } from '@ijstech/eth-wallet';
import { 
  getChainNativeToken,
  getAddresses,
  DefaultTokens, 
  WETHByChainId, 
  ToUSDPriceFeedAddressesMap,
  tokenPriceAMMReference,
  getWallet, 
  getChainId, 
  getTokenMap,
  GuaranteedBuyBackCampaignInfo,
  GuaranteedBuyBackCampaign,
  nullAddress,
} from '@buyback/store';
import { Contracts } from "@openswap/sdk";
import { Contracts as SolidityContracts } from "@validapp/chainlink-sdk"
import { Contracts as AdaptorContracts } from "@openswap/oracle-adaptor-sdk"
import moment from 'moment';

const isFactory2Applied = true; // hard coded

const OracleFactory = isFactory2Applied ? ABIKeys.OracleFactory : ABIKeys.Factory;
const ConfigStore = ABIKeys.ConfigStore;
const INFINITE = new BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
type FactoryType = Contracts.OSWAP_Factory | Contracts.OSWAP_OracleFactory | Contracts.OSWAP_RangeFactory | Contracts.OSWAP_RestrictedFactory;
interface IActiveQueueInfo {
  queueSize: BigNumber
  totalOrder: BigNumber
  totalStake?: BigNumber
  topStake?: BigNumber
}

export interface QueueTotals {
  totalAmount: BigNumber;
  totalStake: BigNumber;
}

export interface QueuesTotals extends QueueTotals{
  priorityQueue: QueueTotals
  rangeQueue: QueueTotals
  peggedQueue: QueueTotals
  groupQueue: QueueTotals
}

export interface AllocationMap{ address:string, allocation:string }
const Address = getAddresses(getChainId());

const getWETH = (chainId: number): ITokenObject => {
  let wrappedToken = WETHByChainId[chainId];
  return wrappedToken;
};

const getAddressByKey = (key: string) => {
  let Address = getAddresses(getChainId());
  return Address[key];
}

const getOracleRouterAddress = (): string => {
  let Address = getAddresses(getChainId());
  let routerAddress = Address['OSWAP_OracleRouter'];
  return routerAddress;
};

function toTokenAmount(token: any, amount: any) {
  return (BigNumber.isBigNumber(amount) ? amount : new BigNumber(amount.toString())).shiftedBy(Number(token.decimals)).decimalPlaces(0, BigNumber.ROUND_FLOOR);
}

function toWei(amount: any) {
  return (BigNumber.isBigNumber(amount) ? amount : new BigNumber(amount.toString())).shiftedBy(18).decimalPlaces(0);
}

const getTokenPrice = async (token: string) => { // in USD value
  const wallet = getWallet();
  let chainId = wallet.chainId ?? getChainId();
  let tokenPrice: number | string;

  // get price from price feed 
  let tokenPriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId][token.toLowerCase()];
  if (tokenPriceFeedAddress) {
    const aggregatorProxy = new SolidityContracts.AggregatorProxy(wallet, tokenPriceFeedAddress);
    let tokenLatestRoundData = await aggregatorProxy.latestRoundData();
    let tokenPriceFeedDecimals = await aggregatorProxy.decimals();
    return new BigNumber(tokenLatestRoundData.answer).shiftedBy(-tokenPriceFeedDecimals).toFixed();
  }

  // get price from AMM
  let referencePair = tokenPriceAMMReference[chainId] && tokenPriceAMMReference[chainId][token.toLowerCase()]
  if (!referencePair) return null
  const pairContract = new Contracts.OSWAP_Pair(wallet, referencePair);
  let token0 = await pairContract.token0();
  let token1 = await pairContract.token1();
  let reserves = await pairContract.getReserves();
  let token0PriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId] && ToUSDPriceFeedAddressesMap[chainId][token0.toLowerCase()]
  let token1PriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId] && ToUSDPriceFeedAddressesMap[chainId][token1.toLowerCase()]

  if (token0PriceFeedAddress || token1PriceFeedAddress) {
    if (token0PriceFeedAddress) {
      const aggregatorProxy = new SolidityContracts.AggregatorProxy(wallet, token0PriceFeedAddress);
      let token0LatestRoundData = await aggregatorProxy.latestRoundData();
      let token0PriceFeedDecimals = await aggregatorProxy.decimals();
      let token0USDPrice = new BigNumber(token0LatestRoundData.answer).shiftedBy(-token0PriceFeedDecimals).toFixed();
      if (new BigNumber(token.toLowerCase()).lt(token0.toLowerCase())) {
        tokenPrice = new BigNumber(reserves._reserve1).div(reserves._reserve0).times(token0USDPrice).toFixed()
      } else {
        tokenPrice = new BigNumber(reserves._reserve0).div(reserves._reserve1).times(token0USDPrice).toFixed()
      }
    } else {
      const aggregatorProxy = new SolidityContracts.AggregatorProxy(wallet, token1PriceFeedAddress);
      let token1LatestRoundData = await aggregatorProxy.latestRoundData();
      let token1PriceFeedDecimals = await aggregatorProxy.decimals();
      let token1USDPrice = new BigNumber(token1LatestRoundData.answer).shiftedBy(-token1PriceFeedDecimals).toFixed();
      if (new BigNumber(token.toLowerCase()).lt(token1.toLowerCase())) {
        tokenPrice = new BigNumber(reserves._reserve1).div(reserves._reserve0).times(token1USDPrice).toFixed()
      } else {
        tokenPrice = new BigNumber(reserves._reserve0).div(reserves._reserve1).times(token1USDPrice).toFixed()
      }
    }
  } else {
    if (token0.toLowerCase() == token.toLowerCase()) {//for other reference pair
      let token1Price: string = await getTokenPrice(token1) || ''
      tokenPrice = new BigNumber(token1Price).times(reserves._reserve1).div(reserves._reserve0).toFixed()
    } else {
      let token0Price: string = await getTokenPrice(token0) || ''
      tokenPrice = new BigNumber(token0Price).times(reserves._reserve0).div(reserves._reserve1).toFixed()
    }
  }
  return tokenPrice
}

const getQueueStakeToken = ():ITokenObject|null => {
  let chainId = getChainId();
  if (!DefaultTokens[chainId]) return null;
  let stakeToken = DefaultTokens[chainId].find(v => v.symbol == 'OSWAP');
  return stakeToken ? { ...stakeToken, address: stakeToken.address!.toLowerCase() } : null;
}

const mapTokenObjectSet = (obj: any) => {
  let chainId = getChainId();
  const WETH9 = getWETH(chainId);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!obj[key]?.address) obj[key] = WETH9;
    }
  }
  return obj;
}

const getTokenObjectByAddress = (address: string) => {
  let chainId = getChainId();
  if (address.toLowerCase() === getAddressByKey('WETH9').toLowerCase()) {
    return getWETH(chainId);
  }
  let tokenMap = getTokenMap();
  return tokenMap[address.toLowerCase()];
}

const getFactoryAddress = (queueType: QueueType) => {
  switch (queueType) {
    case QueueType.PRIORITY_QUEUE:
      return getAddressByKey("OSWAP_OracleFactory");
    case QueueType.RANGE_QUEUE:
      return getAddressByKey("OSWAP_RangeFactory");
    case QueueType.PEGGED_QUEUE:
      return getAddressByKey("OSWAP_PeggedOracleFactory");
    case QueueType.GROUP_QUEUE:
      return getAddressByKey("OSWAP_RestrictedFactory");
  }
}

const getLiquidityProviderAddress = (queueType: QueueType) => {
  switch (queueType) {
    case QueueType.PRIORITY_QUEUE:
      return getAddressByKey("OSWAP_OracleLiquidityProvider");
    case QueueType.RANGE_QUEUE:
      return getAddressByKey("OSWAP_RangeLiquidityProvider");
    case QueueType.PEGGED_QUEUE:
      return getAddressByKey("OSWAP_PeggedOracleLiquidityProvider");
    case QueueType.GROUP_QUEUE:
      return getAddressByKey("OSWAP_RestrictedLiquidityProvider");
  }
}

const getTradeFee = (queueType: QueueType) => {
  switch (queueType) {
    case QueueType.PRIORITY_QUEUE:
    case QueueType.RANGE_QUEUE:
    case QueueType.GROUP_QUEUE:
      return { fee: "1", base: "1000" };
    case QueueType.PEGGED_QUEUE:
      return { fee: "1", base: "1000" };
  }
}
// const getOracle = async (queueType: QueueType, tokenA: any, tokenB: any) => {
//   let tokens = mapTokenObjectSet({ tokenA, tokenB });
//   let factory = getFactoryABIKey(queueType);

//   if (!tokens.tokenA.address || !tokens.tokenB.address)
//     return null

//   let address = await eth.call(factory, Address[factory], "oracles", [tokens.tokenA.address, tokens.tokenB.address]);
//   return address;
// }
const getPair = async (queueType: QueueType, tokenA: any, tokenB: any) => {
  const wallet = getWallet();
  let tokens = mapTokenObjectSet({ tokenA, tokenB });
  let params = { param1: tokens.tokenA.address, param2: tokens.tokenB.address };
  let factoryAddress = getFactoryAddress(queueType);
  switch (queueType) {
    case QueueType.PEGGED_QUEUE:
    case QueueType.PRIORITY_QUEUE:
      let priorityQ = new Contracts.OSWAP_OracleFactory(wallet,factoryAddress);
      return await priorityQ.getPair(params);
    case QueueType.RANGE_QUEUE:
      let rangeQ = new Contracts.OSWAP_RangeFactory(wallet,factoryAddress);
      return await rangeQ.getPair(params);
    case QueueType.GROUP_QUEUE:
      let groupQ = new Contracts.OSWAP_RestrictedFactory(wallet,factoryAddress);
      return await groupQ.getPair({ ...params, param3: 0 });
  }
}

const _findStakedIndex = async (queueType: QueueType, tokenA: any, tokenB: any, token: any, staked: string, provider: string, callback?: any) => {
  let wallet = getWallet();
  let tokens = mapTokenObjectSet({ tokenA, tokenB, token });

  var address = await getPair(queueType, tokens.tokenA, tokens.tokenB);
  if (address === Utils.nullAddress) {
    // throw new Error("Pair not exists");
    return 0;
  }
  const oraclePairContract = new Contracts.OSWAP_OraclePair(wallet, address);
  var direction = (new BigNumber(tokens.tokenA.address.toLowerCase()).lt(tokens.tokenB.address.toLowerCase())) ? tokens.tokenB.address == tokens.token.address : tokens.tokenA.address == tokens.token.address;
  var index = await oraclePairContract.providerOfferIndex(provider);
  var offer = await oraclePairContract.offers({ param1: direction, param2: index });
  let StakeToken = getQueueStakeToken();
  const stakedAmount = toTokenAmount(StakeToken, staked);
  var newStake = new BigNumber(offer.staked).plus(stakedAmount);
  var position = await oraclePairContract.findPosition({ direction, staked: newStake, afterIndex: 0 });
  if (callback) {
    callback(null, position.afterIndex)
  }
  return position.afterIndex;
}

const getQueueInfoObj = async (queueType: QueueType, tokenA: any, tokenB: any) => {
  try {
    let tokens = mapTokenObjectSet({ tokenA, tokenB });
    let address = await getPair(queueType, tokens.tokenA, tokens.tokenB);

    if (address == Utils.nullAddress) {
      return null;
    }
    let direction = new BigNumber(tokens.tokenA.address.toLowerCase()).lt(tokens.tokenB.address.toLowerCase());
    let wallet = getWallet();
    let amounts:BigNumber[] = [];
    let queueSize = new BigNumber("0");
    let expiryDates:BigNumber[] = [];
    let lowerLimits:BigNumber[] = [];
    let upperLimits:BigNumber[] = [];
    switch (queueType) {
    case QueueType.RANGE_QUEUE:
      let rangePair = new Contracts.OSWAP_RangePair(wallet,address);
      queueSize = await rangePair.counter();
      let rangeQ = await rangePair.getOffers({ direction, start: 0, end: queueSize });
      amounts = rangeQ.amountAndReserve.slice(0, rangeQ.amountAndReserve.length / 2);
      expiryDates = rangeQ.startDateAndExpire.slice(rangeQ.startDateAndExpire.length / 2, rangeQ.startDateAndExpire.length);
      lowerLimits = rangeQ.lowerLimitAndUpperLimit.slice(0, rangeQ.lowerLimitAndUpperLimit.length / 2);
      upperLimits = rangeQ.lowerLimitAndUpperLimit.slice(rangeQ.lowerLimitAndUpperLimit.length / 2, rangeQ.lowerLimitAndUpperLimit.length);
      break;
    case QueueType.PRIORITY_QUEUE:
    case QueueType.PEGGED_QUEUE:
      let priorityPair = new Contracts.OSWAP_OraclePair(wallet,address);
      queueSize = await priorityPair.queueSize(direction);
      let priorityQ = await priorityPair.getQueue({ direction, start: 0, end: queueSize });
      amounts = priorityQ.amount;
      expiryDates = priorityQ.expire
      break;
    /*  
    case QueueType.PEGGED_QUEUE:
      let peggedContract = new Contracts.OSWAP_RestrictedPair(wallet,address);
      queueSize = await peggedContract.counter(direction);
      let peggedQ = await peggedContract.getOffers({ direction, start: 0, length: queueSize });
      amounts = peggedQ.amountAndPrice;
      expiryDates = peggedQ.startDateAndExpire;
      break;
    */
    case QueueType.GROUP_QUEUE:
      //GROUP_QUEUE was not here before refactor
      break;
    }
    if (amounts.length<=0) return null;

    let tradeFeeObj = getTradeFee(queueType);
    const price = await getLatestOraclePrice(queueType, tokens.tokenB, tokens.tokenA);
    const priceSwap = await getLatestOraclePrice(queueType, tokens.tokenA, tokens.tokenB);
    let totalLiquidity = new BigNumber(0);

    for (let i = 0; i < amounts.length; i++) {
      let expire = expiryDates[i].toNumber() * 1000;
      if (moment(expire).isBefore(moment())) continue;
      if (lowerLimits.length>0 && upperLimits.length>0) {
        if (lowerLimits[i] && lowerLimits[i].gt(priceSwap)) continue;
        if (lowerLimits[i] && upperLimits[i].gt(0) && upperLimits[i].lt(priceSwap)) continue;
      }
      totalLiquidity = totalLiquidity.plus(amounts[i]);
    }

    return {
      price,
      priceSwap,
      totalLiquidity: totalLiquidity.toFixed(),
      tradeFeeObj,
      pair: address
    };
  } catch (error) {
    return null;
  }
}

interface GroupQueueOfferDetail {
  pairAddress:string,
  tokenIn:string,
  tokenOut:string,
  index: BigNumber,
  provider: string,
  amount: BigNumber,
  allocation: BigNumber,
  tokenInAvailable: string,
  price: BigNumber,
  start: number,
  expire: number,
  allowAll: boolean,
  locked: boolean,
  tradeFee: string,
}

const getGroupQueueItemsForTrader = async (pairAddress: string, tokenIn: any, tokenOut: any):Promise<GroupQueueOfferDetail[]> => {
  let wallet = getWallet();
  let chainId = getChainId();
  const nativeToken = getChainNativeToken(chainId);
  var direction = new BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
  let trader = wallet.address;
  const pairContract = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
  let traderOffer = await pairContract.getTraderOffer({ trader, direction, start: 0, length: 100 });
  let amounts = traderOffer.amountAndPrice.slice(0, traderOffer.amountAndPrice.length / 2);
  let prices = traderOffer.amountAndPrice.slice(traderOffer.amountAndPrice.length / 2, traderOffer.amountAndPrice.length);
  let startDates = traderOffer.startDateAndExpire.slice(0, traderOffer.startDateAndExpire.length / 2);
  let endDates = traderOffer.startDateAndExpire.slice(traderOffer.startDateAndExpire.length / 2, traderOffer.startDateAndExpire.length);
  let locked = traderOffer.lockedAndAllowAll.slice(0, traderOffer.lockedAndAllowAll.length);
  let queueArr:GroupQueueOfferDetail[] = [];
  let tradeFeeObj = getTradeFee(QueueType.GROUP_QUEUE);
  let tradeFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
  const WETH9Address = getAddressByKey('WETH9');
  const isTokenInNative =  tokenIn.address.toLowerCase() == WETH9Address.toLowerCase();
  const isTokenOutNative = tokenOut.address.toLowerCase() == WETH9Address.toLowerCase();

  for (let i = 0; i < amounts.length; i++) {
    if (amounts[i].eq("0")) continue;
    let allocation = await getGroupQueueAllocation(trader, traderOffer.index[i].toNumber(), pairAddress, tokenIn, tokenOut);
    if (allocation.eq("0")) continue;
    let tokenOutAvailable = new BigNumber(amounts[i]).gt(new BigNumber(allocation)) ? allocation : amounts[i]
    let tokenInAvailable = new BigNumber(tokenOutAvailable).dividedBy(new BigNumber(prices[i])).shiftedBy(18 - tokenOut.decimals).dividedBy(new BigNumber(tradeFee)).decimalPlaces(tokenIn.decimals, 1).toFixed();
    queueArr.push({
      pairAddress,
      tokenIn: isTokenInNative ? nativeToken.symbol : tokenIn.address,
      tokenOut: isTokenOutNative ? nativeToken.symbol : tokenOut.address,
      index: traderOffer.index[i],
      provider: traderOffer.provider[i],
      amount: amounts[i],
      allocation,
      tokenInAvailable,
      price: prices[i],
      start: startDates[i].toNumber() * 1000,
      expire: endDates[i].toNumber() * 1000,
      allowAll: false,
      locked: locked[i],
      tradeFee
    });
  }
  return queueArr.filter(v => moment().isBetween(v.start, v.expire));
}

const getGroupQueueItemsForAllowAll = async (pairAddress: string, tokenIn: any, tokenOut: any):Promise<GroupQueueOfferDetail[]> => {
  let wallet = getWallet();
  let chainId = getChainId();
  const nativeToken = getChainNativeToken(chainId);
  var direction = new BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
  const oracleContract = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
  let allOffer = await oracleContract.getOffers({ direction, start: 0, length: 100 });
  let amounts = allOffer.amountAndPrice.slice(0, allOffer.amountAndPrice.length / 2);
  let prices = allOffer.amountAndPrice.slice(allOffer.amountAndPrice.length / 2, allOffer.amountAndPrice.length);
  let startDates = allOffer.startDateAndExpire.slice(0, allOffer.startDateAndExpire.length / 2);
  let endDates = allOffer.startDateAndExpire.slice(allOffer.startDateAndExpire.length / 2, allOffer.startDateAndExpire.length);
  let allowAll = allOffer.lockedAndAllowAll.slice(allOffer.lockedAndAllowAll.length / 2, allOffer.lockedAndAllowAll.length);
  let locked = allOffer.lockedAndAllowAll.slice(0, allOffer.lockedAndAllowAll.length);
  let queueArr:GroupQueueOfferDetail[] = [];
  let tradeFeeObj = getTradeFee(QueueType.GROUP_QUEUE);
  let tradeFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
  const WETH9Address = getAddressByKey('WETH9');
  const isTokenInNative =  tokenIn.address.toLowerCase() == WETH9Address.toLowerCase();
  const isTokenOutNative = tokenOut.address.toLowerCase() == WETH9Address.toLowerCase();

  for (let i = 0; i < amounts.length; i++) {
    let tokenOutAvailable = amounts[i]
    let tokenInAvailable = tokenOutAvailable.dividedBy(prices[i]).shiftedBy(18 - tokenOut.decimals).dividedBy(new BigNumber(tradeFee)).decimalPlaces(tokenIn.decimals, 1).toFixed();

    queueArr.push({
      pairAddress,
      tokenIn: isTokenInNative ? nativeToken.symbol : tokenIn.address,
      tokenOut: isTokenOutNative ? nativeToken.symbol : tokenOut.address,
      index: allOffer.index[i],
      provider: allOffer.provider[i],
      amount: amounts[i],
      allocation: amounts[i],
      tokenInAvailable,
      price: prices[i],
      start: startDates[i].toNumber() * 1000,
      expire: endDates[i].toNumber() * 1000,
      allowAll: allowAll[i],
      locked: locked[i],
      tradeFee
    });
  }

  return queueArr.filter(v => (moment().isBetween(v.start, v.expire) && v.allowAll == true));
}

const getGroupQueueTraderDataObj = async (pairAddress: string, tokenIn: any, tokenOut: any, amountIn: string, offerIndex?: string) => {
  let tokens = mapTokenObjectSet({ tokenIn, tokenOut });
  let tokenAmountIn = toTokenAmount(tokens.tokenIn, amountIn).toFixed();
  let tradeFeeObj = getTradeFee(QueueType.GROUP_QUEUE);
  let tradeFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
  let queueArr = await getGroupQueueItemsForTrader(pairAddress, tokens.tokenIn, tokens.tokenOut);
  let queueAll = await getGroupQueueItemsForAllowAll(pairAddress, tokens.tokenIn, tokens.tokenOut);
  queueArr = queueArr.concat(queueAll);
  queueArr = queueArr.map(v => {
    return {
      ...v,
      amountIn: new BigNumber(tokenAmountIn).shiftedBy(-tokens.tokenIn.decimals).toFixed(),
      amountOut: new BigNumber(tokenAmountIn).times(v.price).shiftedBy(-18 - Number(tokens.tokenIn.decimals) + Number(tokens.tokenOut.decimals)).times(tradeFee).toFixed()
    }
  }).filter(v => new BigNumber(v.tokenInAvailable).gte(new BigNumber(v.amountIn))).sort((a, b) => new BigNumber(b.amountOut).minus(a.amountOut).toNumber());

  if (queueArr.length == 0) {
    return {
      sufficientLiquidity: false
    }
  }

  let ratioArr = [getWallet().web3.utils.toWei('1')];
  let queueItem;
  if (offerIndex) {
    queueItem = queueArr.find(o => o.index.eq(offerIndex));
    if (!queueItem) return null;
  }
  else {
    queueItem = queueArr[0];
  }

  let indexArr = [queueItem.index];
  let amountOut = queueItem.amount; //was amountOut
  let price = new BigNumber(1).shiftedBy(18).div(queueItem.price).toFixed();
  let priceSwap = new BigNumber(queueItem.price).shiftedBy(-18).toFixed();

  let data = "0x" + numberToBytes32((indexArr.length * 2 + 1) * 32) + numberToBytes32(indexArr.length) + indexArr.map(e => numberToBytes32(e)).join('') + ratioArr.map(e => numberToBytes32(e)).join('');
  return {
    sufficientLiquidity: true,
    price: parseFloat(price),
    priceSwap: parseFloat(priceSwap),
    amountIn,
    amountOut: new BigNumber(amountOut).shiftedBy(-tokens.tokenOut.decimals).toFixed(),
    data,
    tradeFeeObj
  }
}

const getOriginalQueuePosition = async (provider: string, pairAddress: string, direction: boolean, queueSize: number) => {
  const contractIns = new Contracts.OSWAP_OraclePair(getWallet(), pairAddress);
  let offerIndex = await contractIns.providerOfferIndex(provider);
  for (let j = 0; j < queueSize; j += 100) {
    let queue = await contractIns.getQueue({ direction, start: j, end: j + 100 });
    let position = queue.index.findIndex(q => q.eq(offerIndex));
    if (position != -1) return j + position + 1;
  }
  return 0;
}

const getNewQueuePosition = async (provider: string, pairAddress: string, direction: boolean, queueSize: number, newStakes: string) => {
  const contractIns = new Contracts.OSWAP_OraclePair(getWallet(), pairAddress);
  let offerIndex = await contractIns.providerOfferIndex(provider);
  let offer = await contractIns.offers({ param1: direction, param2: offerIndex });
  let StakeToken = getQueueStakeToken();
  let staked = toTokenAmount(StakeToken, newStakes).plus(offer.staked);
  let i, j, position = 0;
  for (j = 0; j < queueSize; j += 100) {
    let queue = await contractIns.getQueue({ direction, start: j, end: j + 100 });
    for (i = 0; i < queue.index.length; i++) {
      if (staked.gt(queue.staked[i])) {
        let result = { position: position + 1, queueSize: queueSize + (offer.isActive ? 0 : 1) };
        return result;
      }
      if (queue.provider[i].toLowerCase() != provider.toLowerCase()) {
        position++;
      }
    }
  }
  return { position: position + 1, queueSize: queueSize + (offer.isActive ? 0 : 1) };
}

interface ProviderGroupQueue {
  pairAddress: string
  fromTokenAddress: string,
  toTokenAddress: string,
  amount: string,
  offerPrice: string,
  startDate: number,
  endDate: number,
  state: string,
  allowAll: boolean,
  direct: boolean,
  offerIndex: BigNumber,
  addresses:AllocationMap[],
  allocation: string,
  willGet: string,
}

const getProviderGroupQueues = async (provider: string):Promise<ProviderGroupQueue[]> => {
  let wallet = getWallet();
  let chainId = getChainId();
  const factoryAddress = getFactoryAddress(QueueType.GROUP_QUEUE);
  const factory = new Contracts.OSWAP_RestrictedFactory(wallet, factoryAddress);
  const nativeToken = getChainNativeToken(chainId);
  const WETH9Address = getAddressByKey('WETH9');
  let pairs: ProviderGroupQueue[] = [];
  const getProviderGroupQueueInfo = async (pairAddress: string, token0: any, token1: any, direction: boolean) => {
    let promises = [];
    const oraclePair = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
    let offer = await oraclePair.getProviderOffer({ provider, direction, start: 0, length: 100 });
    let amounts = offer.amountAndPrice.slice(0, offer.amountAndPrice.length / 2);
    let prices = offer.amountAndPrice.slice(offer.amountAndPrice.length / 2, offer.amountAndPrice.length);
    let startDates = offer.startDateAndExpire.slice(0, offer.startDateAndExpire.length / 2);
    let endDates = offer.startDateAndExpire.slice(offer.startDateAndExpire.length / 2, offer.startDateAndExpire.length);
    let lockedArr = offer.lockedAndAllowAll.slice(0, offer.lockedAndAllowAll.length / 2);
    let allowAllArr = offer.lockedAndAllowAll.slice(offer.lockedAndAllowAll.length / 2, offer.lockedAndAllowAll.length);

    for (let i = 0; i < amounts.length; i++) {
      promises.push(new Promise<void>(async (resolve, reject) => {
        try {
          let offerIndex = offer.index[i];
          let approvedTraderLength = (await oraclePair.getApprovedTraderLength({ direction, offerIndex })).toNumber();
          let addresses:AllocationMap[] = [];
          let totalAllocation = new BigNumber('0');
          for (let j = 0; j < approvedTraderLength; j += 100) {
            let approvedTrader = await oraclePair.getApprovedTrader({ direction, offerIndex, start: j, length:100 });
            addresses.push(...approvedTrader.trader.map((v, i) => {
              let allocation = new BigNumber(approvedTrader.allocation[i]).shiftedBy(-Number(token0.decimals)).toFixed()
              totalAllocation = totalAllocation.plus(allocation);
              return {
                address: v,
                allocation
              }
            }))
          }
          let price = toWeiInv(new BigNumber(prices[i]).shiftedBy(-18).toFixed()).shiftedBy(-18).toFixed();
          let data = {
            pairAddress: pairAddress.toLowerCase(),
            fromTokenAddress: token0.address.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : token0.address.toLowerCase(),
            toTokenAddress: token1.address.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : token1.address.toLowerCase(),
            amount: new BigNumber(amounts[i]).shiftedBy(-Number(token0.decimals)).toFixed(),
            offerPrice: price,
            startDate: startDates[i].toNumber() * 1000,
            endDate: endDates[i].toNumber() * 1000,
            state: lockedArr[i] ? 'Locked' : 'Unlocked',
            allowAll: allowAllArr[i],
            direct: true,
            offerIndex: offerIndex,
            addresses,
            allocation: totalAllocation.toFixed(),
            willGet: new BigNumber(amounts[i]).times(new BigNumber(price)).shiftedBy(-Number(token0.decimals)).toFixed()
          }
          pairs.push(data);
        } catch (err) {
        }
        resolve();
      }));
    }
    return promises;
  }

  let allPairsLength = (await factory.allPairsLength()).toNumber();
  let promises = [];
  for (let i = 0; i < allPairsLength; i++) {
    let pairAddress = await factory.allPairs(i);
    const oraclePair = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
    let token0Address = await oraclePair.token0();
    let token1Address = await oraclePair.token1();
    let token0 = getTokenObjectByAddress(token0Address);
    let token1 = getTokenObjectByAddress(token1Address);
    let inverseDirection = new BigNumber(token0Address.toLowerCase()).lt(token1Address.toLowerCase());
    let directDirection = !inverseDirection;

    let directOfferIndexLength = await oraclePair.getProviderOfferIndexLength({ provider, direction: directDirection });
    let inverseOfferIndexLength = await oraclePair.getProviderOfferIndexLength({ provider, direction: inverseDirection });

    if (new BigNumber(directOfferIndexLength).gt(0)) {
      let directQueuePromises = await getProviderGroupQueueInfo(pairAddress, token0, token1, directDirection);
      promises.push(...directQueuePromises);
    }
    if (new BigNumber(inverseOfferIndexLength).gt(0)) {
      let inverseQueuePromises = await getProviderGroupQueueInfo(pairAddress, token1, token0, inverseDirection);
      promises.push(...inverseQueuePromises);
    }
  }

  await Promise.all(promises);
  return pairs;
}

export interface GroupQueueDetail extends GroupQueueOfferDetail {
  buyback?:boolean,
  projectName?:string
}

const getTraderGroupQueues = async () => {
  let wallet = getWallet();
  let chainId = getChainId();
  const nativeToken = getChainNativeToken(chainId);
  const factoryAddress = getFactoryAddress(QueueType.GROUP_QUEUE);
  const factory = new Contracts.OSWAP_RestrictedFactory(wallet, factoryAddress);
  let pairs: GroupQueueDetail[] = [];
  let allPairsLength = (await factory.allPairsLength()).toNumber();
  const WETH9Address = getAddressByKey('WETH9');
  for (let i = 0; i < allPairsLength; i++) {
    let pairAddress = await factory.allPairs(i);
    const pairContract = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
    let token0Address = await pairContract.token0();
    let token1Address = await pairContract.token1();
    let token0 = getTokenObjectByAddress(token0Address);
    let token1 = getTokenObjectByAddress(token1Address);
    let directQueueArr = await getGroupQueueItemsForTrader(pairAddress, token0, token1);
    let directQueueAll = await getGroupQueueItemsForAllowAll(pairAddress, token0, token1);
    let inversQueueArr = await getGroupQueueItemsForTrader(pairAddress, token1, token0);
    let inversQueueAll = await getGroupQueueItemsForAllowAll(pairAddress, token1, token0);
    pairs.push(...directQueueArr, ...directQueueAll, ...inversQueueArr, ...inversQueueAll)
  }
  let constantInfo = GuaranteedBuyBackCampaignInfo;
  let info = constantInfo[chainId];


  if (info) {
    for (let i = 0; i < info.length; i++) {
      let tokenIn = info[i].tokenIn.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : info[i].tokenIn;
      let tokenOut = info[i].tokenOut.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : info[i].tokenOut;
      pairs.find(function (offer, index) {
        if (offer.pairAddress.toLowerCase() == info[i].pairAddress?.toLowerCase() &&
          offer.tokenIn.toLowerCase() == tokenOut.toLowerCase() &&
          offer.tokenOut.toLowerCase() == tokenIn.toLowerCase() &&
          offer.index.toNumber() == info[i].offerIndex) {
          offer.buyback = true;
          offer.projectName = info[i].projectName;
        }
      });
    }
  }
  return pairs;
}

const getGroupQueueAllocation = async (traderAddress: string, offerIndex: number, pairAddress: string, tokenIn: any, tokenOut: any) => {
  let direction = new BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase());
  return await new Contracts.OSWAP_RestrictedPair(getWallet(), pairAddress).traderAllocation({ param1: direction, param2: offerIndex, param3: traderAddress });
};

const isQueueJoined = (queueType: QueueType, offer: any, stake?: any) => {
  if (queueType == QueueType.PRIORITY_QUEUE || queueType == QueueType.PEGGED_QUEUE) {
    return new BigNumber(offer.amount).gt(0) ||
      new BigNumber(offer.reserve).gt(0) ||
      new BigNumber(offer.staked).gt(0);
  } else if (queueType == QueueType.RANGE_QUEUE) {
    return new BigNumber(offer.amount).gt(0) ||
      new BigNumber(offer.reserve).gt(0) ||
      new BigNumber(stake).gt(0);
  }
  return false;
}

const getLatestOraclePrice = async (queueType: QueueType, token: ITokenObject, againstToken: ITokenObject) => {
  let tokens = mapTokenObjectSet({ token, againstToken });
  let wallet = getWallet();
  let address = getFactoryAddress(queueType);
  let factory = new Contracts.OSWAP_OracleFactory(wallet, address);
  let oracleAdapterAddress = await factory.oracles({ param1: tokens.token.address, param2: tokens.againstToken.address });
  let price = '0';
  try {
    const oracleAdaptorContract = new AdaptorContracts.OSWAP_OracleChainlink(wallet, oracleAdapterAddress);
    price = (await oracleAdaptorContract.getLatestPrice({
      from: tokens.token.address,
      to: tokens.againstToken.address,
      payload: "0x"
    })).toFixed();
  }
  catch (err) {
    console.log("Fail to get latest price from oracle");
  }
  return price;
}

const getLatestOraclePriceAlt = async (token: any, againstToken: any) => {
  let wallet = getWallet();
  let tokens = mapTokenObjectSet({ token, againstToken });
  let price = "0";

  // TODO: Check Price
  try {
    let oracleRouterAddress = getOracleRouterAddress();
    let oracleRouter = new Contracts.OSWAP_OracleRouter(wallet, oracleRouterAddress);
    let ammFactory = await oracleRouter.ammFactory();

    let factory = new Contracts.OSWAP_Factory(wallet, ammFactory);
    let pairAddress = await factory.getPair({ param1: tokens.token.address, param2: tokens.againstToken.address });
    price = await getPriceByAmmReserve(pairAddress, tokens.token, tokens.againstToken);
  }
  catch (err) {
    console.log("Failed to get AMM price")
    console.log(err)
  }
  return price;
}

const getPriceByAmmReserve = async (pairAddress: string, token: any, againstToken: any) => {
  let reserveObj;
  let wallet = getWallet();
  let reserves = await new Contracts.OSWAP_Pair(wallet, pairAddress).getReserves();
  if (new BigNumber(token.address.toLowerCase()).lt(againstToken.address.toLowerCase())) {
    reserveObj = {
      reserveA: reserves._reserve0.shiftedBy(-token.decimals),
      reserveB: reserves._reserve1.shiftedBy(-againstToken.decimals)
    }
  } else {
    reserveObj = {
      reserveA: reserves._reserve1.shiftedBy(-token.decimals),
      reserveB: reserves._reserve0.shiftedBy(-againstToken.decimals)
    };
  }
  let price = new BigNumber(reserveObj.reserveB).div(reserveObj.reserveA).toFixed();
  return price;
}

const getRestrictedPairCustomParams = async () => {
  const FEE_PER_ORDER = "RestrictedPair.feePerOrder";
  const FEE_PER_TRADER = "RestrictedPair.feePerTrader";
  const MAX_DUR = "RestrictedPair.maxDur";
  let wallet = getWallet();
  const address = getAddressByKey(ConfigStore);
  const configStoreContract = new Contracts.OSWAP_ConfigStore(wallet, address);
  let feePerOrderRaw = await configStoreContract.customParam(Utils.stringToBytes32(FEE_PER_ORDER).toString());
  let feePerOrder = Utils.fromDecimals(feePerOrderRaw).toString();
  let feePerTraderRaw = await configStoreContract.customParam(Utils.stringToBytes32(FEE_PER_TRADER).toString());
  let feePerTrader = Utils.fromDecimals(feePerTraderRaw).toString();
  let maxDur = await configStoreContract.customParam(Utils.stringToBytes32(MAX_DUR).toString());
  maxDur = BigInt(maxDur).toString();
  return {
    feePerOrder,
    feePerTrader,
    maxDur
  }
}

const getGroupQueuePairInfo = async (pairAddress: string, tokenAddress: string, provider?: string, offerIndex?: number) => {
  let wallet = getWallet();
  let chainId = getChainId();
  const nativeToken = getChainNativeToken(chainId);
  const WETH9Address = getAddressByKey('WETH9');
  const _offerIndex = offerIndex? new BigNumber(offerIndex) : new BigNumber(0)

  if (tokenAddress == nativeToken.symbol) tokenAddress = WETH9Address;
  const factoryAddress = getFactoryAddress(QueueType.GROUP_QUEUE)
  const factoryContract = new Contracts.OSWAP_RestrictedFactory(wallet, factoryAddress);
  const groupPair = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
  let token0Address = await groupPair.token0();
  let token1Address = await groupPair.token1();
  let token0 = getTokenObjectByAddress(token0Address);
  let token1 = getTokenObjectByAddress(token1Address);
  let token = getTokenObjectByAddress(tokenAddress);
  let directDirection = !(new BigNumber(token0Address.toLowerCase()).lt(token1Address.toLowerCase()));
  let direction = directDirection ? token1Address.toLowerCase() != tokenAddress.toLowerCase() : token0Address.toLowerCase() != tokenAddress.toLowerCase();
  let pairIndex = await factoryContract.pairIdx(pairAddress);
  let queueSize = (await groupPair.counter(direction)).toNumber();
  let queue = await groupPair.getOffers({ direction, start: 0, length: queueSize });
  let amounts = queue.amountAndPrice.slice(0, queue.amountAndPrice.length / 2);
  let expiryDates = queue.startDateAndExpire.slice(queue.startDateAndExpire.length / 2, queue.startDateAndExpire.length);

  let tokenDecimals = token.decimals;
  let now = new Date().getTime();
  let totalAmount = new BigNumber("0");

  let againstToken = (token0Address.toLowerCase() == tokenAddress.toLowerCase()) ? token1 : token0;
  for (let i = 0; i < amounts.length; i++) {
    if (now >= new Date(expiryDates[i].toNumber() * 1000).getTime()) continue;
    totalAmount = totalAmount.plus(amounts[i]);
  }

  let customParams = await getRestrictedPairCustomParams();

  let returnObj = {
    pairAddress: pairAddress.toLowerCase(),
    fromTokenAddress: token.address?.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : token.address?.toLowerCase(),
    toTokenAddress: againstToken.address?.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : againstToken.address?.toLowerCase(),
    pairIndex: pairIndex,
    ...customParams
  };


  if (provider && offerIndex) {
    const getProviderQueuePairInfo = async function () {
      let offer = await groupPair.offers({ param1: direction, param2: _offerIndex });
      let againstTokenDecimals = againstToken.decimals;

      let approvedTraderLength = (await groupPair.getApprovedTraderLength({ direction, offerIndex: _offerIndex })).toNumber();
      let addresses = [];
      for (let j = 0; j < approvedTraderLength; j += 100) {
        let approvedTrader = await groupPair.getApprovedTrader({ direction, offerIndex: _offerIndex, start: j, length: 100 });
        addresses.push(...approvedTrader.trader.map((v: any, i: number) => {
          return {
            address: v,
            allocation: new BigNumber(approvedTrader.allocation[i]).shiftedBy(-Number(tokenDecimals)).toFixed()
          }
        }))
      }

      const restrictedPrice = new BigNumber(offer.restrictedPrice).shiftedBy(-18).toFixed();
      return {
        amount: new BigNumber(offer.amount).shiftedBy(-Number(tokenDecimals)).toFixed(),
        reserve: new BigNumber(offer.receiving).shiftedBy(-Number(againstTokenDecimals)).toFixed(),
        startDate: new Date(offer.startDate.toNumber() * 1000),
        expire: new Date(offer.expire.toNumber() * 1000),
        locked: offer.locked,
        allowAll: offer.allowAll,
        offerPrice: toWeiInv(restrictedPrice).shiftedBy(-18).toFixed(),
        addresses
      }
    }
    let providerQueuePairInfo = await getProviderQueuePairInfo();
    returnObj = { ...returnObj, ...providerQueuePairInfo };
  }

  return returnObj;
}

const getToBeApprovedTokens = async (queueType: QueueType, tokenObj: any, amount: string, stake: string) => {
  const WETH9Address = getAddressByKey('WETH9');
  let tokens = mapTokenObjectSet({ tokenObj });
  let tokenList:string[] = [];
  const liqProviderAddress = getLiquidityProviderAddress(queueType);
  if (tokens.tokenObj.address.toLowerCase() != WETH9Address.toLowerCase()) {
    let allowance = await getTokenAllowance(tokens.tokenObj.address, tokens.tokenObj.decimals, liqProviderAddress);
    if (new BigNumber(amount).gt(allowance)) tokenList.push(tokens.tokenObj.address.toLowerCase());
  }
  if (new BigNumber(stake).gt(0)) {
    let StakeToken = getQueueStakeToken();
    if (!StakeToken || !StakeToken.address) return tokenList;
    let allowance = await getTokenAllowance(StakeToken.address, StakeToken.decimals, liqProviderAddress);
    if (new BigNumber(stake).gt(allowance)) tokenList.push(StakeToken.address.toLowerCase());
  }
  return tokenList;
}

const isPairApprovedForStakeToken = async (pairAddress: string) => {
  let StakeToken = getQueueStakeToken();
  if (!StakeToken || !StakeToken.address) return true;
  let allowance = await getTokenAllowance(StakeToken.address,StakeToken.decimals,pairAddress);
  return allowance.gt(0);
}

const getTokenAllowance = async (tokenAddress: string, tokenDecimals:number, contractAddress: string) => {
  let wallet = getWallet();
  const selectedAddress = wallet.address;
  const ERC20 = new Contracts.ERC20(wallet, tokenAddress);
  let allowance = await ERC20.allowance({ owner: selectedAddress, spender: contractAddress });
  return allowance.shiftedBy(-tokenDecimals);
}

const approveLPMax = async (queueType: QueueType, tokenObj: any, callback: any, confirmationCallback: any) => {
  let amount = INFINITE;
  let receipt = await new Contracts.ERC20(getWallet(), tokenObj.address).approve({ spender: getLiquidityProviderAddress(queueType), amount });
  return receipt;
}

const getEstimatedAmountInUSD = async (tokenObj: any, amount: string) => {
  let tokens = mapTokenObjectSet({ tokenObj });
  let tokenPrice = await getTokenPrice(tokens.tokenObj.address.toLowerCase())
  return tokenPrice != null ? new BigNumber(amount).times(tokenPrice).toFixed() : new BigNumber(amount).toFixed();
}

const approvePairMax = async (pairAddress: string, callback: any, confirmationCallback: any) => {
  let amount = INFINITE;
  let StakeToken = getQueueStakeToken();
  let receipt = await new Contracts.ERC20(getWallet(), StakeToken!.address).approve({ spender: pairAddress, amount });
  return receipt;
}

//WIP
const removeLiquidityFromGroupQueue = async (tokenA: any, tokenB: any, toAddress: string, tokenOut: any, amountOut: string, receivingOut: string, orderIndex: any, deadline: number, callback: any, confirmationCallback: any) => {
  let address = getLiquidityProviderAddress(QueueType.GROUP_QUEUE);
  const liquidityProviderContract = new Contracts.OSWAP_RestrictedLiquidityProvider(getWallet(),address)
  let receivingToken = tokenA.address == tokenOut.address ? tokenB : tokenA;
  if (!amountOut) amountOut = '0';
  if (!receivingOut) receivingOut = '0';
  if (!tokenA.address || !tokenB.address) {
    let erc20Token = tokenA.address ? tokenA : tokenB;
    var receipt = await liquidityProviderContract.removeLiquidityETH({
      tokenA: erc20Token.address as string,
      removingTokenA: erc20Token == tokenOut,
      to: toAddress,
      pairIndex: 0, //TODO
      offerIndex: orderIndex,
      amountOut: toTokenAmount(tokenOut, amountOut),
      receivingOut: toTokenAmount(receivingToken, receivingOut),
      deadline
    });
  } else {
    var receipt = await liquidityProviderContract.removeLiquidity({
      tokenA: tokenA.address,
      tokenB: tokenB.address,
      removingTokenA: tokenA == tokenOut,
      to: toAddress,
      pairIndex: 0,
      offerIndex: orderIndex,
      amountOut: toTokenAmount(tokenOut, amountOut),
      receivingOut: toTokenAmount(receivingToken, receivingOut),
      deadline
    });
  }
  return receipt;
}

const addLiquidityToGroupQueue = async (pairAddress: string, tokenA: ITokenObject, tokenB: ITokenObject, tokenIn: ITokenObject, pairIndex: number, offerIndex: number, amountIn: number, allowAll: boolean, restrictedPrice: string, startDate: number, expire: number, deadline: number, whitelistAddress: any[]) => {
  let receipt;
  let trader: string[] = []
  let allocation: BigNumber[] = []
  type AddLiquidityETHParam = {
    tokenA: string;
    addingTokenA: boolean;
    pairIndex: number | BigNumber;
    offerIndex: number | BigNumber;
    amountAIn: number | BigNumber;
    allowAll: boolean;
    restrictedPrice: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
    deadline: number | BigNumber;
  }

  whitelistAddress.map(v => {
    if (v.allocation != v.oldAllocation) {
      trader.push(v.address)
      allocation.push(toTokenAmount(tokenIn, v.allocation))
    }
  })

  // Only add traders for gas efficiency
  /*if (new BigNumber(amountIn).eq(0) && offerIndex != 0 ) {
    let restrictedPair = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress)
    let erc20 = new Erc20(wallet , await restrictedPair.govToken())
    let feePerTrader = (await getRestrictedPairCustomParams()).feePerTrader
    let govAmount = new BigNumber(feePerTrader).times(trader.length).shiftedBy(18)
    let allowance = await erc20.allowance({owner: wallet.address, spender: pairAddress})
    if (allowance.gte(govAmount)){
      let addingTokenA = tokenA.address == tokenIn.address
      let direction = (new BigNumber(tokenA).lt(tokenB)) ? addingTokenA : !addingTokenA;
      console.log("checking", addingTokenA, direction, offerIndex, trader, allocation)
      receipt = await restrictedPair.setMultipleApprovedTraders({direction, offerIndex, trader, allocation})
      return receipt
    }
  }*/

  const liquidityContract = new Contracts.OSWAP_RestrictedLiquidityProvider(getWallet(),getLiquidityProviderAddress(QueueType.GROUP_QUEUE));

  const getReceipt = async (param: AddLiquidityETHParam, value?: number | BigNumber) => {
    if (trader.length == 0) {
      receipt = value !== undefined ? await liquidityContract.addLiquidityETH(param, value) : await liquidityContract.addLiquidityETH(param,0);
    } else {
      const params:{
        param: (number | BigNumber)[];
        /* Liq Provider Contract
        function addLiquidityETH(
        address tokenA,
        bool addingTokenA,
        uint256 pairIndex,
        uint256 offerIndex,
        uint256 amountAIn,
        bool allowAll,
        uint256 restrictedPrice,
        uint256 startDate,
        uint256 expire,
        uint256 deadline)*/
        trader: string[];
        allocation: (number | BigNumber)[];
      } = {
        param: [
          new BigNumber(param.tokenA.toLowerCase()),
          param.addingTokenA?1:0,
          param.pairIndex,
          param.offerIndex,
          param.amountAIn,
          param.allowAll?1:0,
          param.restrictedPrice,
          param.startDate,
          param.expire,
          param.deadline
        ],
        trader,
        allocation
      };
      receipt = value !== undefined ? await liquidityContract.addLiquidityETHAndTrader(params, value) : await liquidityContract.addLiquidityETHAndTrader(params, 0);
    }
  }

  if (!tokenA.address || !tokenB.address) { // if the pair contain a native token
    let erc20Token = tokenA.address ? tokenA : tokenB;
    if (!tokenIn.address) { // if the incoming token is native
      getReceipt({
        tokenA: erc20Token.address!,
        addingTokenA: false,
        pairIndex,
        offerIndex,
        amountAIn: toWei(amountIn),
        allowAll,
        restrictedPrice: toWei(restrictedPrice),
        startDate,
        expire,
        deadline
      }, toWei(amountIn));
    } else {  // if the incoming token is not native
      getReceipt({
        tokenA: erc20Token.address!,
        addingTokenA: true,
        pairIndex,
        offerIndex,
        amountAIn: toTokenAmount(tokenIn, amountIn),
        allowAll: allowAll,
        restrictedPrice: toWei(restrictedPrice),
        startDate,
        expire,
        deadline
      });
    }
  } else {// if the pair does not contain a native token
    const paramObj = {
      tokenA: tokenA.address,
      tokenB: tokenB.address,
      addingTokenA: tokenA.address == tokenIn.address,
      pairIndex,
      offerIndex,
      amountIn: toTokenAmount(tokenIn, amountIn),
      allowAll,
      restrictedPrice: toWei(restrictedPrice),
      startDate,
      expire,
      deadline
    }
    if (trader.length == 0) {
      receipt = await liquidityContract.addLiquidity(paramObj);
    } else {
      const paramObj = {
        tokenA: tokenA.address,
        tokenB: tokenB.address,
        addingTokenA: tokenA.address == tokenIn.address? 1 : 0,
        pairIndex,
        offerIndex,
        amountIn: toTokenAmount(tokenIn, amountIn),
        allowAll: allowAll? 1: 0 ,
        restrictedPrice: toWei(restrictedPrice),
        startDate,
        expire,
        deadline
      }
      const param: any = Object.values(paramObj);
      const params = { param, trader, allocation };
      receipt = await liquidityContract.addLiquidityAndTrader(params);
    }
  }
  return receipt;
}

const isGroupQueueOracleSupported = async (tokenA: string, tokenB: string) => {
  let oracleAddress = await new Contracts.OSWAP_RestrictedFactory(getWallet(), getFactoryAddress(QueueType.GROUP_QUEUE)).oracles({ param1: tokenA, param2: tokenB });
  return oracleAddress != nullAddress
}

const creatGroupQueuePair = async (tokenA: string, tokenB: string, callback: any, confirmationCallback: any) => {
  let factory = 'OSWAP_RestrictedFactory';
  let token0: string
  let token1: string
  if (new BigNumber(tokenA.toLowerCase()).lt(tokenB.toLowerCase())) {
    token0 = tokenA;
    token1 = tokenB;
  } else {
    token0 = tokenB;
    token1 = tokenA;
  }
  const factoryContract = new Contracts.OSWAP_RestrictedFactory(getWallet(), Address[factory]);
  let receipt = await factoryContract.createPair({ tokenA: token0, tokenB: token1 });
  return receipt;
}

export interface GuaranteedBuyBackInfo extends GuaranteedBuyBackCampaign {
  queueInfo: ProviderGroupQueueInfo,
  priceInfo: {
    marketPrice: string;
    idoDiff: string;
    buybackDiff: string;
    priceCoverage: string;
  },
  amountInfo: {
    swappedAmount: string;
    lockedAmount: string;
    unlockedAmount: string;
    committedAmount: number;
    committedAmountInToken: string;
    amountCoverage: string;
    lockedAmountInPercent: string;
  }
}

const getGuaranteedBuyBackInfo = async (buybackCampaign: GuaranteedBuyBackCampaign): Promise<GuaranteedBuyBackInfo | null> => {
  let info = buybackCampaign;
  let allInfo: GuaranteedBuyBackInfo;
  if (!info) return null;
  
  if (!info.pairAddress) {
    info.pairAddress = await getPair(QueueType.GROUP_QUEUE, getTokenObjectByAddress(info.tokenIn), getTokenObjectByAddress(info.tokenOut));
  }
  let queueInfo = await getProviderGroupQueueInfoByIndex(
    info.pairAddress,
    info.tokenIn,
    info.offerIndex);

  //Price Information
  let tokenOutPrice = await getTokenPrice(info.tokenOut);
  let tokenInPrice = await getTokenPrice(info.tokenIn);
  let tokenMarketPrice = tokenOutPrice&&tokenInPrice?new BigNumber(tokenOutPrice).dividedBy(tokenInPrice):new BigNumber("0");
  let one = new BigNumber("1");
  let priceInfo = {
    marketPrice: tokenMarketPrice.toFixed(),
    idoDiff: tokenMarketPrice.minus(info.idoPrice).dividedBy(info.idoPrice).toFixed(),
    buybackDiff: tokenMarketPrice.minus(one.dividedBy(queueInfo.offerPrice)).dividedBy(one.dividedBy(queueInfo.offerPrice)).toFixed(),
    priceCoverage: one.dividedBy(queueInfo.offerPrice).dividedBy(info.idoPrice).toFixed(),
  }

  //Amount Information
  let committedAmountInToken = new BigNumber(info.committedAmount).times(queueInfo.offerPrice).toFixed()
  let swappedAmount = new BigNumber(info.committedAmount).minus(queueInfo.allocation).toFixed()
  if (queueInfo.allowAll) swappedAmount = "0" //Todo: use subgraph
  let lockedAmount = queueInfo.state == 'Locked' ? new BigNumber(queueInfo.amount).toFixed() : "0" // locked amount + swapped amount
  
  let amountInfo = {
    swappedAmount,
    lockedAmount,
    unlockedAmount: new BigNumber(info.committedAmount).minus(swappedAmount).minus(lockedAmount).toFixed(),
    committedAmount: info.committedAmount,
    committedAmountInToken,
    amountCoverage: new BigNumber(committedAmountInToken).gt(info.idoAmount)? "1" : new BigNumber(committedAmountInToken).dividedBy(info.idoAmount).toFixed(),
    lockedAmountInPercent: new BigNumber(queueInfo.amount).plus(swappedAmount).dividedBy(info.committedAmount).times(100).toFixed()
  }
  allInfo = {
    ...info,
    queueInfo,
    priceInfo,
    amountInfo
  }

  return allInfo;
}

interface ProviderGroupQueueInfo {
  pairAddress: string,
  fromTokenAddress: string,
  toTokenAddress: string,
  amount: string,
  offerPrice: string,
  startDate: number,
  endDate: number,
  state: string,
  allowAll: boolean,
  direct: boolean,
  offerIndex: number,
  addresses:{address:string,allocation:string}[],
  allocation: string,
  willGet: string,
  tradeFee:string,
  tokenInAvailable:string,
  available:string
}

const getProviderGroupQueueInfoByIndex = async (pairAddress: string, tokenInAddress: string, offerIndex: number):Promise<ProviderGroupQueueInfo> => {
  let wallet = getWallet();
  let chainId = getChainId();
  if (!wallet.provider) wallet.provider = wallet.networksMap[chainId].rpcUrls[0];
  const nativeToken = getChainNativeToken(chainId);
  const WETH9Address = getAddressByKey('WETH9');
  const oracleContract = new Contracts.OSWAP_RestrictedPair(wallet, pairAddress);
  let token0Address = await oracleContract.token0();
  let token1Address = await oracleContract.token1();
  let direction: boolean;
  let tokenOut: ITokenObject;
  let tokenIn: ITokenObject;
  tokenInAddress = tokenInAddress.toLowerCase()
  token0Address = token0Address.toLowerCase()
  token1Address = token1Address.toLowerCase()
  if (token0Address == tokenInAddress) {
    direction = !(new BigNumber(token0Address).lt(token1Address));
    tokenIn = getTokenObjectByAddress(token0Address);
    tokenOut = getTokenObjectByAddress(token1Address);
  } else {
    direction = new BigNumber(token0Address).lt(token1Address);
    tokenIn = getTokenObjectByAddress(token1Address);
    tokenOut = getTokenObjectByAddress(token0Address);
  }
  let offer = await oracleContract.getOffers({ direction, start: offerIndex, length: 1 });
  let tradeFeeObj = getTradeFee(QueueType.GROUP_QUEUE);
  let tradeFee = new BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).div(tradeFeeObj.base).toFixed();
  
  let approvedTraderLength = await oracleContract.getApprovedTraderLength({ direction, offerIndex });
  let addresses:{address:string,allocation:string}[] = [];
  let totalAllocation = '0';
  for (let i = 0; i < approvedTraderLength.toNumber(); i += 100) {
    let approvedTrader = await oracleContract.getApprovedTrader({ direction, offerIndex, start: i, length: 100 });
    addresses.push(...approvedTrader.trader.map((v: string, i: number) => {
      let allo = new BigNumber(approvedTrader.allocation[i]).shiftedBy(-Number(tokenIn.decimals));
      totalAllocation = allo.plus(totalAllocation).toFixed()
      return {
        address: v,
        allocation: allo.toFixed()
      }
    }));
  }
  let price = toWeiInv(new BigNumber(offer.amountAndPrice[1]).shiftedBy(-tokenOut.decimals).toFixed()).shiftedBy(-tokenIn.decimals).toFixed();
  let amount = new BigNumber(offer.amountAndPrice[0]).shiftedBy(-Number(tokenIn.decimals)).toFixed();
  const selectedAddress = wallet.address;
  let available = offer.lockedAndAllowAll[1] ? amount : new BigNumber(await getGroupQueueAllocation(selectedAddress, offerIndex, pairAddress, tokenOut, tokenIn)).shiftedBy(-Number(tokenIn.decimals)).toFixed();
  let tokenInAvailable = new BigNumber(available).dividedBy(new BigNumber(price)).dividedBy(new BigNumber(tradeFee)).toFixed();
  return {
    pairAddress: pairAddress.toLowerCase(),
    fromTokenAddress: tokenInAddress == WETH9Address.toLowerCase() ? nativeToken.symbol : tokenInAddress,
    toTokenAddress: tokenOut.address? tokenOut.address.toLowerCase() == WETH9Address.toLowerCase() ? nativeToken.symbol : tokenOut.address.toLowerCase() : "",
    amount,
    offerPrice: price,
    startDate: offer.startDateAndExpire[0].times(1000).toNumber(),
    endDate: offer.startDateAndExpire[1].times(1000).toNumber(),
    state: offer.lockedAndAllowAll[0] ? 'Locked' : 'Unlocked',
    allowAll: offer.lockedAndAllowAll[1],
    direct: true,
    offerIndex,
    addresses,
    allocation: totalAllocation,
    willGet: new BigNumber(offer.amountAndPrice[0]).times(new BigNumber(price)).shiftedBy(-Number(tokenIn.decimals)).toFixed(),
    tradeFee,
    tokenInAvailable,
    available
  }
}

export interface QueueBasicInfo {
  firstToken: string,
  secondToken: string,
  queueSize: BigNumber,
  topStake: BigNumber | undefined,
  totalOrder: BigNumber,
  totalStake: BigNumber | undefined,
  pairAddress: string,
  isOdd :boolean,
}

const getRangeQueueData = async (pair: string, tokenA: ITokenObject, tokenB: ITokenObject, amountOut: BigNumber) => {
  let data = '0x';
  let wallet = getWallet();
  let chainId = getChainId();

  if (!tokenA.address) tokenA = getWETH(chainId);
  if (!tokenB.address) tokenB = getWETH(chainId);
  let direction = (new BigNumber(tokenA.address!.toLowerCase()).lt(tokenB.address!.toLowerCase()));
  let rangePair = new Contracts.OSWAP_RangePair(wallet, pair);
  let offers = await rangePair.getOffers({
    direction,
    start: 0,
    end: 100
  });
  let amounts = offers.amountAndReserve.slice(0, offers.amountAndReserve.length / 2);
  let reserves = offers.amountAndReserve.slice(offers.amountAndReserve.length / 2, offers.amountAndReserve.length);
  let expiryDates = offers.startDateAndExpire.slice(offers.startDateAndExpire.length / 2, offers.startDateAndExpire.length);
  let lowerLimits = offers.lowerLimitAndUpperLimit.slice(0, offers.lowerLimitAndUpperLimit.length / 2);
  let upperLimits = offers.lowerLimitAndUpperLimit.slice(offers.lowerLimitAndUpperLimit.length / 2, offers.lowerLimitAndUpperLimit.length);

  if (amounts.length > 1) {
    let index = [];
    let remainingAmt = new BigNumber(amountOut);
    const priceSwap = await getLatestOraclePrice(QueueType.RANGE_QUEUE, tokenA, tokenB);
    let offerArr = [...Array(amounts.length).keys()].map(i => i + 1).map(v => {
      return {
        index: v,
        provider: offers.provider[v],
        amount: amounts[v],
        reserve: reserves[v],
        lowerLimit: lowerLimits[v],
        upperLimit: upperLimits[v],
        expire: expiryDates[v],
        privateReplenish: offers.privateReplenish[v]
      }
    }).sort((a, b) => new BigNumber(b.amount).minus(a.amount).toNumber())

    for (let i = 0; i < offerArr.length; i++) {
      let offer = offerArr[i];
      let lowerLimit = offer.lowerLimit;
      let upperLimit = offer.upperLimit;
      let expire = offer.expire.toNumber() * 1000;
      if (moment(expire).isBefore(moment())) continue;
      if (new BigNumber(lowerLimit).gt(priceSwap)) continue;
      if (new BigNumber(upperLimit).gt(0) && new BigNumber(upperLimit).lt(priceSwap)) continue;
      if (remainingAmt.gt(offer.amount)) {
        index.push(offer.index);
        remainingAmt = remainingAmt.minus(offer.amount);
      }
      else {
        index.push(offer.index);
        break;
      }
    }
    data = "0x" + Utils.numberToBytes32(0x20 * (index.length + 1)) + Utils.numberToBytes32(index.length) + index.map(e => Utils.numberToBytes32(e)).join('');
  }
  return data;
}


const getApprovalModelAction = (spenderAddress: string, options: IERC20ApprovalEventOptions) => {
  const approvalOptions = {
    ...options,
    spenderAddress
  };
  const approvalModel = new ERC20ApprovalModel(approvalOptions);
  let approvalModelAction = approvalModel.getAction();
  return approvalModelAction;
}

const convertGroupQueueWhitelistedAddresses = (inputText: string) : {address:string, allocation: number}[] =>  {
  
  function splitByMultipleSeparator(input: string, separators: any[]): string[] {
    for (let i = 1; i < separators.length; i ++) {
      input = input.replace(separators[i], separators[0])
    }
    return input.split(separators[0]).filter( text => text != "").map(v => v.trim())
  }

  let data: {address:string, allocation: number}[] =[]
  let textArray = splitByMultipleSeparator(inputText, [",", /\s/g, ":", "="])

  if (textArray.length%2 != 0 ) return []

  for (let i = 0; i < textArray.length; i+=2) {
    data.push({
      address: textArray[i],
      allocation: Number(textArray[i+1])
    })
  }
  return data
}

export {
  getPair,
  getQueueInfoObj,
  getProviderGroupQueues,
  ProviderGroupQueue,
  getRangeQueueData,
  getTraderGroupQueues,
  getGroupQueuePairInfo,
  getToBeApprovedTokens,
  isPairApprovedForStakeToken,
  approveLPMax,
  getLiquidityProviderAddress,
  getLatestOraclePrice,
  getLatestOraclePriceAlt,
  getPriceByAmmReserve,
  getEstimatedAmountInUSD,
  approvePairMax,
  addLiquidityToGroupQueue,
  removeLiquidityFromGroupQueue,
  getGroupQueueTraderDataObj,
  getGuaranteedBuyBackInfo,
  isGroupQueueOracleSupported,
  creatGroupQueuePair,
  getQueueStakeToken,
  getApprovalModelAction,
  convertGroupQueueWhitelistedAddresses,
}
