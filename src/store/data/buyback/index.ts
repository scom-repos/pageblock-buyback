import Assets from "@buyback/assets";

export enum Market {
  OPENSWAP,
  UNISWAP,
  SUSHISWAP,
  PANCAKESWAPV1,
  PANCAKESWAP,
  BAKERYSWAP,
  BURGERSWAP,
  IFSWAPV1,
  OPENSWAPV1,
  HYBRID,
  MIXED_QUEUE,
  GROUP_QUEUE,
  QUICKSWAP,
  BISWAP,
  PANGOLIN,
  TRADERJOE,
  SPIRITSWAP,
  SPOOKYSWAP,
  PEGGED_QUEUE,
  HAKUSWAP,
  JETSWAP,
  IFSWAPV3
}

export interface ProviderConfig {
  caption: string;
  image: string;
  marketCode: Market;
  key: string;
  dexId?: number;
  supportedChains?: number[];
}

export const ProviderConfigMap: { [key: string]: ProviderConfig } = {
  OpenSwap: {
    caption: 'OpenSwap',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.OPENSWAP,
    key: 'OpenSwap',
    dexId: 1,
    supportedChains: [42, 56, 97, 4002, 43113, 43114, 80001, 13370, 338]
  },
  Uniswap: {
    caption: 'Uniswap',
    image: Assets.fullPath('img/swap/uniswap-logo.svg'),
    marketCode: Market.UNISWAP,
    key: 'Uniswap',
    dexId: 10,
    supportedChains: [1, 42]
  },
  SushiSwap: {
    caption: 'SushiSwap',
    image: Assets.fullPath('img/swap/sushiswap-logo.svg'),
    marketCode: Market.SUSHISWAP,
    key: 'SushiSwap',
    dexId: 8,
    supportedChains: [1, 42, 137, 250, 43113, 43114]
  },
  PancakeSwap: {
    caption: 'PancakeSwap',
    image: Assets.fullPath('img/swap/pancakeswap.svg'),
    marketCode: Market.PANCAKESWAP,
    key: 'PancakeSwap',
    dexId: 2,
    supportedChains: [56, 97]
  },
  PancakeSwapV1: {
    caption: 'PancakeSwapV1',
    image: Assets.fullPath('img/pancakeswap.svg'),
    marketCode: Market.PANCAKESWAPV1,
    key: 'PancakeSwapV1'
  },
  BakerySwap: {
    caption: 'BakerySwap',
    image: Assets.fullPath('img/swap/bakeryswap.svg'),
    marketCode: Market.BAKERYSWAP,
    key: 'BakerySwap',
    dexId: 3,
    supportedChains: [56, 97]
  },
  BurgerSwap: {
    caption: 'BurgerSwap',
    image: Assets.fullPath('img/swap/burgerswap.png'),
    marketCode: Market.BURGERSWAP,
    key: 'BurgerSwap',
    dexId: 4
  },
  Oracle: {
    caption: 'Oracle',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.MIXED_QUEUE,
    key: 'Oracle',
    dexId: 5,
    supportedChains: [56, 97, 43113, 43114]
  },
  PeggedOracle: {
    caption: 'Pegged Queue',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.PEGGED_QUEUE,
    key: 'PeggedOracle'
  },
  GroupQueue: {
    caption: 'Group Queue',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.GROUP_QUEUE,
    key: 'GroupQueue'
  },
  IFSwapV1: {
    caption: 'IFSwapV1',
    image: Assets.fullPath('img/swap/IFSwapV1.png'),
    marketCode: Market.IFSWAPV1,
    key: 'IFSwapV1',
    dexId: 7,
    supportedChains: [56]
  },
  IFSwapV3: {
    caption: 'IFSwapV3',
    image: Assets.fullPath('img/swap/IFSwapV1.png'),
    marketCode: Market.IFSWAPV3,
    key: 'IFSwapV3',
    dexId: 18,
    supportedChains: [56]
  },
  OpenSwapV1: {
    caption: 'OpenSwapV1',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.OPENSWAPV1,
    key: 'OpenSwapV1'
  },
  Hybrid: {
    caption: 'Smart Router',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.HYBRID,
    key: 'Hybrid',
    dexId: 0,
    supportedChains: [42, 56, 97, 43113, 43114]
  },
  QuickSwap: {
    caption: 'QuickSwap',
    image: Assets.fullPath('img/swap/quickswap-logo.png'),
    marketCode: Market.QUICKSWAP,
    key: 'QuickSwap',
    dexId: 9,
    supportedChains: [137]
  },
  BiSwap: {
    caption: 'BiSwap',
    image: Assets.fullPath('img/swap/biswapsvg.svg'),
    marketCode: Market.BISWAP,
    key: 'BiSwap',
    dexId: 11,
    supportedChains: [56]
  },
  Pangolin: {
    caption: 'Pangolin',
    image: Assets.fullPath('img/swap/pangolin.svg'),
    marketCode: Market.PANGOLIN,
    key: 'Pangolin',
    dexId: 12,
    supportedChains: [43113, 43114]
  },
  TraderJoe: {
    caption: 'TraderJoe',
    image: Assets.fullPath('img/swap/traderjoe.svg'),
    marketCode: Market.TRADERJOE,
    key: 'TraderJoe',
    dexId: 13,
    supportedChains: [43114]
  },
  SpiritSwap: {
    caption: 'SpiritSwap',
    image: Assets.fullPath('img/swap/spiritswap-logo.svg'),
    marketCode: Market.SPIRITSWAP,
    key: 'SpiritSwap',
    dexId: 15,
    supportedChains: [250]
  },
  SpookySwap: {
    caption: 'SpookySwap',
    image: Assets.fullPath('img/swap/spookyswap-logo.svg'),
    marketCode: Market.SPOOKYSWAP,
    key: 'SpookySwap',
    dexId: 14,
    supportedChains: [250]
  },
};

export interface GuaranteedBuyBackCampaign {
  projectName: string;
  providerAddress?: string;
  pairAddress?: string;
  offerIndex: number;
  description?: string;
  projectUrl?: string;
  tokenIn: string;
  tokenOut: string;
  idoPrice: number;
  idoAmount: number;
  idoDate?: number;
  idoUrl?: string;
  committedAmount: number;
  offeringType?: string;
  marketPriceRef?: string;
}

export const GuaranteedBuyBackCampaignInfo: {
  [chainId: number]: GuaranteedBuyBackCampaign[];
} = {
  // Binance Mainnet
  56: [{
    projectName: 'Impossible IDO Buyback - Ouro Finance (IDIA)',
    providerAddress: '0x04a2684a46934504a62bdf9947af166f01bf14f8',
    pairAddress: '0x9f1418f82B2927AcED3154d9e838fe5202952CAE',
    offerIndex: 2,
    description: 'This is the Buyback of OGS token with a buyback price at 50% of the IDO Price.',
    projectUrl: 'https://ouro.finance/',
    tokenIn: '0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89',
    tokenOut: '0x416947e6Fc78F158fd9B775fA846B72d768879c2',
    idoPrice: 0.0136,
    idoAmount: 8738029,
    idoDate: 1641499200000,
    idoUrl: 'https://app.impossible.finance/launchpad/project/OGS',
    committedAmount: 17006.78207,
    offeringType: 'IDO',
    marketPriceRef: "0xe6A97E7B5EB2FA72A8B4BeDaaf4CdE85E015DAbf" // OGS & BUSD Pair
  },
  {
    projectName: 'Impossible IDO Buyback - Ouro Finance',
    providerAddress: '0x04a2684a46934504a62bdf9947af166f01bf14f8',
    pairAddress: '0x785970CeEec60666b3E34671996604f4d59040dF',
    offerIndex: 4,
    description: 'This is the Buyback of OGS token with a buyback price at 50% of the IDO Price.',
    projectUrl: 'https://ouro.finance/',
    tokenIn: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    tokenOut: '0x416947e6Fc78F158fd9B775fA846B72d768879c2',
    idoPrice: 0.025,
    idoAmount: 29558444,
    idoDate: 1641499200000,
    idoUrl: 'https://app.impossible.finance/launchpad/project/OGS',
    committedAmount: 155488,
    offeringType: 'IDO',
    marketPriceRef: "0xe6A97E7B5EB2FA72A8B4BeDaaf4CdE85E015DAbf" // OGS & BUSD Pair
  },
  {
    projectName: "Impossible IDO Buyback - Basketballverse",
    providerAddress: "0x04a2684a46934504a62bdf9947af166f01bf14f8",
    pairAddress: "0xB964167ea1ec84431Cb5f824061Ff699378dA2Da",
    offerIndex: 2,
    description: "This is the Buyback of dBVR token with a buyback price at 100% of the IDO Price.",
    projectUrl: "https://www.basketballverse.gg/",
    tokenIn: "0xe9e7cea3dedca5984780bafc599bd69add087d56",//"BUSD",
    tokenOut: "0x16c5e51bfa38a6dd109bcc4921a92aef13b14ed9",//"dBVR",
    idoPrice: 0.15, // in tokenOut
    idoAmount: 1852881,
    idoDate: 1650686400000,
    idoUrl: "https://app.impossible.finance/launchpad/project/BVR",
    committedAmount: 1852881,
    offeringType: "IDO",
    marketPriceRef: "",
  }],
  // Binance Test Chain
  97: [
    {
      projectName: "OSwap IDO Buyback #1",
      providerAddress: "0xD2Ed0a2B019Ea79E917f897F68d3f8e295FB8019",
      pairAddress: "0x14CdA7e08E4A2c4648E0bFaa3A0693fD7FAFeeF9",
      offerIndex: 6,
      description:
        "This is the second IDO Buyback of OSWAP with a buyback price at <b>20%</b> of the IDO Price. <b>90%</b> of the IDO Amount will be covered on a <b>prorated basis</b>.",
      projectUrl: "https://doc.openswap.xyz/",
      // tokenIn: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
      tokenIn: "0xde9334c157968320f26e449331d6544b89bbd00f",
      tokenOut: "0x45eee762aaea4e5ce317471bda8782724972ee19",
      idoPrice: 0.04,
      idoAmount: 125000,
      idoDate: 1630339200000,
      idoUrl: "https://invest.impossible.finance/project/IDO1/OSWAP_UNLIMITED?tab=closed",
      committedAmount: 900,
      offeringType: "IDO",
      marketPriceRef: "0xb0094FfE387da1739FB95bAbCAF01B105FD0D887", // OSWAP & BUSD Pair
    },
    {
      projectName: "Impossible IDO Buyback - Ouro Finance",
      providerAddress: "0x18a6Ab8742BD46d27B9823c9767522f48ebF26b3",
      pairAddress: "0x14CdA7e08E4A2c4648E0bFaa3A0693fD7FAFeeF9",
      offerIndex: 8,
      description: "This is the Buyback of OGS token with a buyback price at 50% of the IDO Price.",
      projectUrl: "https://ouro.finance",
      tokenIn: "0xde9334c157968320f26e449331d6544b89bbd00f",//"0x416947e6fc78f158fd9b775fa846b72d768879c2",
      tokenOut: "0x45eee762aaea4e5ce317471bda8782724972ee19",//"0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89",
      idoPrice: 0.0136, // in tokenOut
      idoAmount: 10000,
      idoDate: 1630339200000,
      idoUrl: "https://app.impossible.finance/launchpad/project/OGS",
      committedAmount: 10000,
      offeringType: "IDO",
      marketPriceRef: "", // OSWAP & BUSD Pair
    },
    {
      projectName: "Impossible IDO Buyback - Basketballverse",
      providerAddress: "0xBF3e64dE14043bf5d3eEC09e0215B336a8eE268e",
      pairAddress: "0xcd904402DE7eC5c80edF56b43bc9458047d8dB12",
      offerIndex: 3,
      description: "This is the Buyback of dBVR token with a buyback price at 100% of the IDO Price.",
      projectUrl: "https://www.basketballverse.gg/",
      tokenIn: "0xde9334c157968320f26e449331d6544b89bbd00f",//"BUSD",
      tokenOut: "0x9DbD7024804a2a6131BE7C8dE7A7773c5c119419",//"dBVR",
      idoPrice: 0.15, // in tokenOut
      idoAmount: 1852881,
      idoDate:
        1650686400000,
      idoUrl: "https://app.impossible.finance/launchpad/project/BVR",
      committedAmount: 1852881,
      offeringType: "IDO",
      marketPriceRef: "",
    }
  ]
};

