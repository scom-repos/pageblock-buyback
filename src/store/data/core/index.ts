export const CoreContractAddressesByChainId: { [chainId: number]: {[contract:string]:string} } = {
  1: {
    // "GOV_TOKEN": undefined,
    "WETH9": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    // "OAXDEX_Governance": undefined,
    // "OAXDEX_VotingRegistry": undefined,
    // "OAXDEX_Factory": undefined,
    // "OAXDEX_Administrator": undefined,
    // "OAXDEX_VotingExecutor": undefined,
    // "OAXDEX_Router": undefined,
    // "OAXDEX_OracleRouter": undefined,
    // "OAXDEX_OracleLiquidityProvider": undefined,
    // "UniswapV2Factory": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UniswapV2Router02": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "SushiSwapV2Factory": "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
    "SushiSwapV2Router02": "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
  },
  4: { // Rinkeby
    "WETH9": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    "MockChainlinkUSDT": "0x82D6466553978edfC416Aa360e7bec4D8aF60ad8",
    "GOV_TOKEN": "0x3Fb6f85Db141c2d5DA1C6dcea80dA974fb09ed28",
    "OAXDEX_Governance": "0xFeA4807aAb9f1CdA382a3e2076102718bc547Ad9",
    "OAXDEX_VotingRegistry": "0xfE34db2D8C73b61701eEF5A71584DC0319A8b105",
    "OAXDEX_Factory": "0x051732011D8b709322C6fC1fE517f68d10Db1b8f",
    "OAXDEX_Administrator": "0xdbf7120bB13EbF2DDbd0Fef23232B0B2b8E20e93",
    "OAXDEX_VotingExecutor": "0x1Ab6b7eB1Fa2efa2bA5604Bf568b3bEd3b1C56d1",
    "OAXDEX_Router": "0x5837a508B429788a576357A4bF78a3e0DA1A684e",
    "OAXDEX_OracleRouter": "0x4d7C952eEFF589D29AaDEF04E738aC7af1Af0c9B",
    "OAXDEX_OracleLiquidityProvider": "0xb689a7efd351882fb1D5f1276DA42Ae401cF8Ff7",
    "OAXDEX_OracleChainlink": "0xF6F531aFAc924170331577ddAC0700551a11f072",
    "UniswapV2Factory": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UniswapV2Router02": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "SushiSwapV2Factory": "0xaDe0ad525430cfe17218B679483c46B6c1d63fe2",
    "SushiSwapV2Router02": "0x027Bb5f9205360aC628C33508c3f182320A44525",
  },
  42: { // Kovan
    "WETH9": "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    "GOV_TOKEN": "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
    "GOV_TOKEN_BSC": "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
    "OAXDEX_Governance": "0xFDAecCEb806bECF079A136B008Bd9B4F5101634C",
    "OAXDEX_VotingRegistry": "0xC78705400eaa92c96916D616D1cC925E4dD31363",
    "OAXDEX_Factory": "0x13aCdFbbeeB2DcB245BFbf2993FFCe7eeab8dEdB",
    "OAXDEX_Administrator": "0x7810eC500061f5469fF6e1485Ab130045B3af6b0",
    "OAXDEX_VotingExecutor": "0x0aB2130A99Bd43494D72bD1c710922d5eaFC3689",
    "OAXDEX_VotingExecutor1": "0x1C9901dF88341e724be378Aed3aE27737c6E77a8",
    "OAXDEX_Router": "0x889460F92f51Cd0c4E66DDc707c267C55823a31b",
    "UniswapV2Factory": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UniswapV2Router02": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "SushiSwapV2Factory": "0xaDe0ad525430cfe17218B679483c46B6c1d63fe2",
    "SushiSwapV2Router02": "0x027Bb5f9205360aC628C33508c3f182320A44525",

    "OSWAP_HybridRouterRegistry": "0x95b84f0e84EFf81e5B0bF1BD4290D0637006cFf7",
    "OSWAP_HybridRouter2": "0xf612B4879ADC5713A5c0781F0f431362a69030b5",

    "OSWAP_OracleFactory": "0x02ac522Deb18156CFaE15c7c93da44bd6CC5c967",
    "OSWAP_OracleRouter": "0x000D6d0560d1525e210939CB3FCa191AE90dC34b",
    "OSWAP_OracleLiquidityProvider": "0x90ab74adDB92d589A6c4b53A8491eC0413b95680",
    "OSWAP_VotingExecutor2": "0x3E606a008e019e5604B5f1f316338a0b60A902Fb",

    "OSWAP_PeggedOracleFactory": '0x016c6d1Cee7a639D84479372EB1B4fBaDca92a5d',
    "OSWAP_PeggedOracleRouter": '0xf53f81385ca888CD77B5F839b41adB5fFBBdF963',
    "OSWAP_PeggedOracleLiquidityProvider": '0x347F4582488CBE2B84e2392d23a67da228E3B404',
    "OSWAP_PeggedVotingExecutor2": '0xAdFB5b9Ef70af5f41Bc433f0A75F1896f1CaE9Fc',

  },
  56: { // Binance Mainnet
    "GOV_TOKEN": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
    "WETH9": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",

    "OAXDEX_Governance": "0x510a179AA399672e26e54Ed8Ce0e822cc9D0a98D",
    "OAXDEX_VotingRegistry": "0x845308010C3B699150Cdd54dCf0E7C4b8653e6B2",
    "OAXDEX_Factory": "0x0625468f8F56995Ff1C27EB6FD44ac90E96C5D22",
    "OAXDEX_Administrator": "0x667AE7A348610d42d9955d1b43868683A34b1AAb",
    "OAXDEX_VotingExecutor": "0x61dD8885F8adA39ba61f04EBe3aD540bbE670d4b",
    "OAXDEX_VotingExecutor1": "0x308c0bDD77EaBcdbDE5bd5EfDf5a97Bc9b3237DC",
    "OAXDEX_Router": "0x50f5679F0CeF71287bD9C7e619960fF9C579661C",

    "OAXDEX_FactoryV1": "0x3f9744A881Aacf7573064f8B915100474d365523",
    "OAXDEX_RouterV1": "0xFae00dfA7D734CB23f935e10c2cBf139f1ab2648",
    "PancakeSwapFactoryV1": "0xbcfccbde45ce874adcb698cc183debcf17952812",
    "PancakeSwapRouterV1": "0x05ff2b0db69458a0750badebc4f9e13add608c7f",
    "PancakeSwapFactory": "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    "PancakeSwapRouter": "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    "BakerySwapFactory": "0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7",
    "BakerySwapRouter": "0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F",
    "BurgerSwapFactory": "0x8a1E9d3aEbBBd5bA2A64d3355A48dD5E9b511256",
    "BurgerSwapRouter": "0x42591f57f707739b95c5c486c014b525f19d70ca",
    "IFSwapFactoryV1": "0x918d7e714243F7d9d463C37e106235dCde294ffC",
    "IFSwapRouterV1": "0x8f2A0d8865D995364DC6843D51Cf6989001f989e",
    "IFSwapFactoryV3": "0x4233ad9b8b7c1ccf0818907908a7f0796a3df85f",
    "IFSwapRouterV3": "0x56f6ca0a3364fa3ac9f0e8e9858b2966cdf39d03",
    "BiSwapFactory": "0x858E3312ed3A876947EA49d572A7C42DE08af7EE",
    "BiSwapRouter": "0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8",

    "OSWAP_HybridRouterRegistry": "0xcc44c3617e46b2e946d61499ff8f4cda721ff178",
    "OSWAP_HybridRouter2": "0xFc7261491753C53F0aa168CDB290e47f64C713bB",

    "OSWAP_OracleFactory": "0x8CB1fEE69f7F8f00efd5d47067eb75C19cd40017",
    "OSWAP_OracleRouter": "0x8Af3e8596acE65D9c1EDE6d5356a34eAb46a46f5",
    "OSWAP_OracleLiquidityProvider": "0x1F6d550A182cA2FC5f5145De108005eA121D6539",
    "OSWAP_VotingExecutor2": "0xfA9f979e05A0E5A2F6eF08Bb8B7C36616a86c154",
    "OSWAP_RangeFactory": "0xE31e10f0f3f65a4aFe510C460Cda0f9392Fb0e99",
    "OSWAP_RangeLiquidityProvider": "0xd9C031db7D613E4977237Bd681Dd1941A36Cdb98",
    "OSWAP_VotingExecutor3": "0x22937e50C09fcb59532a379472Ab78Dc556afA3b",

    "OSWAP_ConfigStore": "0xE07526f892af09acb84E9bC5f32Df575750DaE3b",
    "OSWAP_RestrictedFactory": "0x91d137464b93caC7E2c2d4444a9D8609E4473B70",
    "OSWAP_RestrictedLiquidityProvider": "0x1c8682435DB14502857834139cB2710E902485b2",
    "OSWAP_VotingExecutor4": "0xD055df2049465293016C3AFF966b65Ad18A12054",
    "OSWAP_RestrictedOracle": "0xb1e6db5ccf8153edf9ffbaf206bb6eb2b4dff5c7",

    "OSWAP_PeggedOracleFactory": '0x6ebc906c7f657c17f021f4a3c696a4c625bfbaf0',
    "OSWAP_PeggedOracleRouter": '0xC8807382D3C8160dca4bCaA8DC7762633140e149',
    "OSWAP_PeggedOracleLiquidityProvider": '0xdE7926575002ba7A4D97504F1C54B9c13e54CE59',
    "OSWAP_PeggedVotingExecutor2": '0x1e5133700581FB8C4494B6870B5752a9BEbf778f',
    "JetSwapFactory": "0x0eb58E5c8aA63314ff5547289185cC4583DfCBD5",
    "JetSwapRouter": "0xBe65b8f75B9F20f4C522e0067a3887FADa714800"
  },
  97: { // Binance Test Chain
    "WETH9": "0xae13d989dac2f0debff460ac112a837c89baa7cd",
    "GOV_TOKEN": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
    "GOV_TOKEN_BSC": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
    "PancakeSwapWETH9": "0xae13d989dac2f0debff460ac112a837c89baa7cd",

    "OAXDEX_Governance": "0xDfC070E2dbDAdcf892aE2ed2E2C426aDa835c528",
    "OAXDEX_VotingRegistry": "0x28a5bB54A53831Db40e00a6d416FfB2dBe0Fef68",
    "OAXDEX_Factory": "0xDE5CC59535312A8ECCfdB74694C338b6231e490D",

    "OAXDEX_Administrator": "0x816196380aAc970D1C16d5804e5EE167104e50b0",
    "OAXDEX_VotingExecutor": "0x21116eC1BD0aAdD34D08C393A117039591E07C36",
    "OAXDEX_VotingExecutor1": "0xB4FB3f331da8A361C69945b1Eeb4650dB0DA36C9",
    "OAXDEX_Router": "0x8AEb7abBCfe0ED8baAfa3ddD2CdE39cDBb4d0106",

    "OAXDEX_FactoryV1": "0x83edf60a9c37972538592F184c1B59c62f028893",
    "OAXDEX_RouterV1": "0x3BCeAa9A824cE4bdFfB7942494d76D1bb145B269",
    "PancakeSwapFactory": "0x6725f303b657a9451d8ba641348b6761a6cc7a17",
    "PancakeSwapRouter": "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
    "BakerySwapWETH9": "0x094616f0bdfb0b526bd735bf66eca0ad254ca81f",
    "BakerySwapFactory": "0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7",
    "BakerySwapRouter": "0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F",
    "BurgereSwapWETH9": "0x2f8b72301c05c444585d24B93e1e06bE9D0c35b2",
    "BurgerSwapFactory": "0xEa7B5325407084A37057b422cCF69B1a56f5fBf2",
    "BurgerSwapRouter": "0x11614C8DFd440a05F92eA70d75f7dC6Ec8011bb6",

    "OSWAP_HybridRouterRegistry": "0x8e5Afed779B56888ca267284494f23aFe158EA0B",
    "OSWAP_HybridRouter2": "0x58dD8dC6EbE7AE6bbDA3ba5DA10eC08f27D52D31",

    "OSWAP_OracleFactory": "0x03843D530400cB153459d3d64f921940f88b21B2",
    "OSWAP_OracleRouter": "0x7B3Df9668AFbE5d8D3E264026c45dB37a7213d74",
    "OSWAP_OracleLiquidityProvider": "0x6034C466E063308a96b9b3F0614eF7aa1c81D2e4",
    "OSWAP_VotingExecutor2": "0x925Bdd8B0D1b9B0CeD2b37EdBce1149991105B7d",
    "OSWAP_RangeFactory": "0xbF8C49367377e1bc15faafF1A873fBc692d5411c",
    "OSWAP_RangeLiquidityProvider": "0x7c22B070f01D50FFF6534B7C08abcE05CdF09ccB",
    "OSWAP_VotingExecutor3": "0x12A8B3578A923008CcD405a1026073153323934a",

    "OSWAP_ConfigStore": "0x3349184B0b3e84094ad78176407D627F0A29bEFC",
    "OSWAP_RestrictedFactory": "0xa158FB71cA5EF59f707c6F8D0b9CC5765F97Fd60",
    "OSWAP_RestrictedLiquidityProvider": "0xdBE2111327D60DbB5376db10dD0F484E98b7d40e",
    "OSWAP_VotingExecutor4": "0x6EDE6Ab7c32D95C210f84eFedC39f80505ed4ea6",
    "OSWAP_RestrictedOracle": "0x4a10650eac83aeb59D007E1F0039B4F1BCeFe0c3",

    "OAXDEX_HybridRouter": "0x7319fE00bF986b21Aa09ACC96a5c7cBdD8bAAFEc",

    "OSWAP_PeggedOracleFactory": '0xC4539f2e431AD23ab62c5947a99750FEF0Ccf046',
    "OSWAP_PeggedOracleRouter": '0x5A8dCfc4F09Ca742b1074698BF37912F13D814C0',
    "OSWAP_PeggedOracleLiquidityProvider": '0xcCB1CA49D60a7c56ba3badFB7E759153B4c546Ef',
    "OSWAP_PeggedVotingExecutor2": '0x14BfdaDc5AD9D7B59d4663D95e101F5A69e82CDF',
  },
  137: { // Polygon
    "WETH9": "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    "SushiSwapV2Factory": "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    "SushiSwapV2Router02": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    "QuickSwapFactory": "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
    "QuickSwapRouter": "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
  },
  1287: { // Moonbeam
    "WETH9": "0xd614547c5CF8619F8F40445e51c39F93E1D48BFf",
    "GOV_TOKEN": "0x20F7407c8cbeB667991277dC1668C0922e652D9E",
    "OSWAP": "0x20F7407c8cbeB667991277dC1668C0922e652D9E",
    "GOV_TOKEN_BSC": "0x20F7407c8cbeB667991277dC1668C0922e652D9E",
    "OAXDEX_Governance": "0x29B72e5ae80D456a7c261a149De06230cFd86d68",
    "OAXDEX_VotingRegistry": "0x0F2b3A7e597ead9b37A20Ac218d366bEAaB82C79",
    "OAXDEX_Factory": "0xa5f6e01F5070a80d428320043c03a6fA05aA8F78",
    "OAXDEX_Administrator": "0xaaf3551f78CFEc7bC7F3c6763E7D1282aD0496a5",
    "OAXDEX_VotingExecutor": "0x0b4171107c1a61762490BA882aa52A1035C201B0",
    "OAXDEX_Router": "0x31F69F69C8B643546A2a69660763042C7D92a77a",
    "OAXDEX_OracleRouter": "0x6B4031C97A0bb82E3EdcfB5c406f29aaC96316Bd",
    "OAXDEX_OracleLiquidityProvider": "0xaC5a71147cCCfF7C14B0bF4C1c92c1cd36fdDFd0",
  },
  1337: {
    "WETH9": "0x5162B0a57734dd25865821b177d570827CADCb26",
    "USDT": "0x923d8C86f6bbf337714727630382b1994ae75Cfb",
    "USDC": "0x26A0a1d886e4CC255d31215f2088aF3450426d7a",
    "DAI": "0x43215B5eF6EdEbeE775030D2b92D960E039CDF3f",
    "MockChainlinkDAI": "0xe2e41Fb387F7b7ABEb3274875464EFae4dD21407",
    "MockChainlinkUSDC": "0x850e6c1802bE3b01eB23af0559Cf6C9E66748F71",
    "MockChainlinkUSDT": "0x3cE54857AAa1194909545f6ddbd6Bd9D1b8131E6",
    "OSWAP": "0xf8C8328c21Cfd5E5B626D7DeA705C643995cC14C",
    "GOV_TOKEN": "0xf8C8328c21Cfd5E5B626D7DeA705C643995cC14C",
    "OAXDEX_OracleChainlink": "0xEFA6D76C4D74E7976D34e67B55a08Cc4f3e4da87",
    "GOV_TOKEN_BSC": "0xf8C8328c21Cfd5E5B626D7DeA705C643995cC14C",
    "OAXDEX_Governance": "0x76591A8Ec8b7CeE064dD2c9857493F79F7D3266c",
    "OAXDEX_VotingRegistry": "0x6deDFD16BED7391411C6c13b805546Eb67A3433D",
    "OAXDEX_Factory": "0xB596Aa20F4E947f9A0F5d7154C07677309C308f2",
    "OAXDEX_OracleFactory": "0x2D2b45Eb0674431943c7fB72DdAA161e634FB47a",
    "OAXDEX_Administrator": "0x6619288d4376953B83C6a5a32A014d16424b8a6B",
    "OAXDEX_VotingExecutor": "0xe9d210E2Dd15470AE792d189CBdCc6889eE4Ab5f",
    "OAXDEX_VotingExecutor1": "0x5AF349A891D19eE6047D56dDa596fFe92Cd2B79F",
    "OAXDEX_VotingExecutor2": "0x3774D0F74A1955553581939685e539575761E648",
    "OAXDEX_Router": "0x6d2E47a68B8CA4F18b15c54F8a8A5d12CC7ca871",
    "OAXDEX_OracleRouter": "0x696E553017812C206355239F37Ab6Ee785Cd8Ea5",
    "OAXDEX_OracleLiquidityProvider": "0x582E56207b135a149C60Be7475A874C1924797cE",
    "OAXDEX_RangeFactory": "0x7Ad3Fbf5C81B4C347957ebe46070aF37c31E0725",
    "OAXDEX_HybridRouterRegistry": "0x5dD315f7d3f78823AdB23F66D4D18C425643DDbf",
    "OAXDEX_HybridRouter2": "0x8A8Df98d16e655BF745343bca8CC67503A2889ad",
    "OAXDEX_RangeLiquidityProvider": "0xd43838C5dC18427B80A19ECD93871D576562bC84",
    "OAXDEX_VotingExecutor3": "0xB6646AeBBB527b6DaA3EeE58413Cf0B8FF6f9ac0",
  },
  31337: {
    "GOV_TOKEN": "0x15947755FDa4BDc65F532e0d83B2710D14d98232",
    "WETH9": "0xBB04C4927A05Cf7d3e329E6333658D48A9313356",
    "OAXDEX_Factory": "0xF1AFa2C0Df79b9cf7fD40b5670382A04276DAEEF",
    "OAXDEX_Router": "0xE0B60F919E6051a5533ffa5B61CF0d5b27cD1cbf"
  },
  80001: {//polygon testnet
    "GOV_TOKEN": '0xA9d603421e2777b8BEa685272611A01fF3bc6523',
    "WETH9": '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    "OAXDEX_Governance": "0x38Ad504DE483D633fACb16904C8Ff61a0CdC4f0d",
    "OAXDEX_VotingRegistry": "0x347ff1e838d86c1adf4512dedd1550a5131e4179",
    "OAXDEX_Factory": "0x4e761D13814F69191dB9d8B12102b90CE3d1351F",
    "OAXDEX_Administrator": "0x0b02ddA212Ea3dfb111B4d18Ba72Db897305f95a",
    "OAXDEX_VotingExecutor": "0x93B337ffbaAC5848B836b84DB4194661d95C2F61",
    "OAXDEX_VotingExecutor1": "0xaA865b8c41614E327F517727Cc6af7305eDC57D6",
    "OAXDEX_Router": "0x2204beA97997678Bd35fA50BFA33994Bd31f3698",
    "OSWAP_HybridRouterRegistry": "0x7700d9f222a66ad426d3a6c6eddbe73f92f0f9d0",
    "OSWAP_HybridRouter2": "0x0304a5ca544ecf6b8cd04f07b32be10a10df2032",
  },
  43114: { //Avalanche Mainnet C-Chain
    "WETH9": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    "GOV_TOKEN": "0x29E65d6f3e7a609E0138a1331D42D23159124B8E",
    "OAXDEX_Governance": "0x845308010c3b699150cdd54dcf0e7c4b8653e6b2",
    "OAXDEX_VotingRegistry": "0x0625468f8F56995Ff1C27EB6FD44ac90E96C5D22",
    "OAXDEX_Factory": "0x667ae7a348610d42d9955d1b43868683a34b1aab",
    "OAXDEX_Administrator": "0x88087c1528fFDfF0567261cF688c7123765a5beF",
    "OAXDEX_VotingExecutor": "0x61dD8885F8adA39ba61f04EBe3aD540bbE670d4b",
    "OAXDEX_VotingExecutor1": "0xD88Bd19D64d832Cd691F19e002cc6BA081bA4768",
    "OAXDEX_Router": "0x56131021109f14E766E96a5E7c1294D351e9dFc5",
    "OSWAP_OracleFactory": "0x67c314DC938049150F4c162032bb9645c202Ba71",
    "OSWAP_OracleRouter": "0xca62Dc811D78B6760637A5E97A6021282863F0B6",
    "OSWAP_OracleLiquidityProvider": "0x26C04EadD7913e681693a42CC881536622eB4317",
    "OSWAP_VotingExecutor2": "0xb696B08893c862832a6cA1e5a4C9004deb4069A2",
    "OSWAP_RangeFactory": "0xEfeAD058e3a16272FD61D978e54D6c7039ae828E",
    "OSWAP_RangeLiquidityProvider": "0xaDDD8F7aAd6a847e547C56Af19e9d6b443c2f403",
    "OSWAP_VotingExecutor3": "0xcd3e984cdE988C24d5009296e4eDE14b89aE6e29",
    "OSWAP_ConfigStore": "0x8Ae51f1A62c4Bc0715C367bFe812c53e583aEE2f",
    "OSWAP_RestrictedFactory": "0x739f0BBcdAd415127FE8d5d6ED053e9D817BdAdb",
    "OSWAP_RestrictedLiquidityProvider": "0x629cF4235c0f6b9954698EF0aF779b9502e4853E",
    "OSWAP_VotingExecutor4": "0x646C5e3Ec40706372243accF2D457D9162553685",
    "OSWAP_RestrictedOracle": "0x510a179AA399672e26e54Ed8Ce0e822cc9D0a98D",

    "OSWAP_HybridRouterRegistry": "0xEA6A56086e66622208fa8e7B743Bad3FF47aD40c",
    "OSWAP_HybridRouter2": "0xC3F6FE3da0A69621EE9c5bBFa5507f365ad9CFf8",

    "PangolinFactory": "0xefa94DE7a4656D787667C749f7E1223D71E9FD88",
    "PangolinRouter": "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106",
    "TraderJoeFactory": "0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10",
    "TraderJoeRouter": "0x60aE616a2155Ee3d9A68541Ba4544862310933d4",
    "SushiSwapV2Factory": "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    "SushiSwapV2Router02": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    "HakuSwapFactory": "0x2Db46fEB38C57a6621BCa4d97820e1fc1de40f41",
    "HakuSwapRouter": "0x5F1FdcA239362c5b8A8Ada26a256ac5626CC33E0"
  },
  43113: {//Avalanche FUJI C-Chain                      
    "WETH9": "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    "GOV_TOKEN": "0x27eF998b96c9A66937DBAc38c405Adcd7fa5e7DB",
    "OAXDEX_Governance": "0xC025b30e6D4cBe4B6978a1A71a86e6eCB9F87F92",
    "OAXDEX_VotingRegistry": "0x05E425dD88dd7D4f725aC429D0C8C022B2004cBB",
    "OAXDEX_Factory": "0x9560fD7C36527001D3Fea2510D405F77cB6AD739",
    "OAXDEX_Administrator": "0x201c4A200B5728675A74dD4Af55870Ae1eC82CcF",
    "OAXDEX_VotingExecutor": "0xC3544B01050583e92CDA580AbfAe3ab683f458a1",
    "OAXDEX_VotingExecutor1": "0x8faeA25e1cA12152663617fA67379D7202f2B978",
    "OAXDEX_Router": "0xc9C6f026E489e0A8895F67906ef1627f1E56860d",
    "OSWAP_HybridRouterRegistry": "0xCd370BBbC84AB66a9e0Ff9F533E11DeC87704736",
    "OSWAP_HybridRouter2": "0x83445062a0685e47d8228881c594c0A8494E284a",
    "OSWAP_OracleFactory": "0x9D9491e6dF38A68181fb4c24D5c6779DdEFdd6E8",
    "OSWAP_OracleRouter": "0xD538501F67A3ad75EB941C86D939241dd4ef4394",
    "OSWAP_OracleLiquidityProvider": "0xe6f8b9fE565e3E3BA05E8ad0d1A19512901e4fbD",
    "OSWAP_VotingExecutor2": "0xFf01C7f3121d6FCCd78C56EBAf9995f5669Bb4a2",
    "OSWAP_RangeFactory": "0xEcD7f181f90aC33117ac4CfAe55514F1c62433db",
    "OSWAP_RangeLiquidityProvider": "0xa7932f346dAB7F0f387F37B8B05D5eaFA90C8b6D",
    "OSWAP_VotingExecutor3": "0x2539161cB7777aA61a7C6A4D381fEf9A38f78d49",
    "OSWAP_ConfigStore": "0x258A5309486310398Ee078217729db2f65367a92",
    "OSWAP_RestrictedFactory": "0x6C99c8E2c587706281a5B66bA7617DA7e2Ba6e48",
    "OSWAP_RestrictedLiquidityProvider": "0x6Ad6dE48e1bdBb7caD656D80fFDcA863B4614741",
    "OSWAP_VotingExecutor4": "0x5AE58EA32B231576ADE76c6f94b13F06C2B8387b",
    "OSWAP_RestrictedOracle": "0xc37B982d836b72374f5D276E60A69C66062b9Bcf",

    "OSWAP_PeggedOracleFactory": '0x728DbD968341eb7aD11bDabFE775A13aF901d6ac',
    "OSWAP_PeggedOracleRouter": '0x408aAf94BD851eb991dA146dFc7C290aA42BA70f',
    "OSWAP_PeggedOracleLiquidityProvider": '0x5A9C508ee45d417d176CddADFb151DDC1Fcd21D9',
    "OSWAP_PeggedVotingExecutor2": '0xc441538c208e38C8B8cbc1028dd270049CD73761',

    "PangolinFactory": "0xE4A575550C2b460d2307b82dCd7aFe84AD1484dd",
    "PangolinRouter": "0x2D99ABD9008Dc933ff5c0CD271B88309593aB921",

    "SushiSwapV2Factory": "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    "SushiSwapV2Router02": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
  },

  250: { // Fantom Opera
    "WETH9": "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
    "SpiritSwapFactory": "0xEF45d134b73241eDa7703fa787148D9C9F4950b0",
    "SpiritSwapRouter": "0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52",
    "SpookySwapFactory": "0x152ee697f2e276fa89e96742e9bb9ab1f2e61be3",
    "SpookySwapRouter": "0xf491e7b69e4244ad4002bc14e878a34207e38c29",
    "SushiSwapV2Factory": "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    "SushiSwapV2Router02": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
  },
  4002: { // Fantom testnet
    "WETH9": "0xf1277d1Ed8AD466beddF92ef448A132661956621",
    "GOV_TOKEN": '0xDe0399014ED809e0E5976D391013dEd315c6B778',
    "OAXDEX_Governance": '0xA9d603421e2777b8BEa685272611A01fF3bc6523',
    "OAXDEX_VotingRegistry": '0xBB04C4927A05Cf7d3e329E6333658D48A9313356',
    "OAXDEX_Factory": '0xE0B60F919E6051a5533ffa5B61CF0d5b27cD1cbf',
    "OAXDEX_Administrator": '0x21C393fADf4dC7f612DEe2DFE72410B012F045E9',
    "OAXDEX_Router": '0xDcdAFd9461c2df544F6E2165481E8174e45fEbD8',
    "OSWAP_OracleFactory": '0x28A6a9079fA8e041179cD13F4652af2B315b6fd8',
    "OSWAP_OracleRouter": '0x689200913Ca40C8c89102A3441D62d51282eAA3f',
    "OSWAP_OracleLiquidityProvider": '0x909e8e370E0B53FdA0790ead072FA6EE4112CDec',
    "OSWAP_HybridRouterRegistry": '0x93baA37dA23d507dF3F075F660584969e68ec5eb',
    "OSWAP_HybridRouter2": '0x1B0D217822719941a1ae3B38eB0A94663e9ad86E',
    "OAXDEX_VotingExecutor": '0xe06a37e298733d418b3e5a36445877A0C657414F',
    "OAXDEX_VotingExecutor1": '0x02de3A670ea1aAcF4a404A49585D619560ec1964',
    "OSWAP_VotingExecutor2": '0xA887958C66bec5da6a884936c050FeB32D67F4d3'
  },
  13370: { // Amino X Testnet
    "WETH9": "0xCb5e100fdF7d24f25865fa85673D9bD6Bb4674ab",
    "GOV_TOKEN": "0xA0AF68AB35fa4618b57C1A7CFc07A8caa0cBf07E",
    "OAXDEX_Governance": "0xB46d2C706A5F276300506E734010302D1B6e6A15",
    "OAXDEX_VotingRegistry": "0x3998E14410f26905fdAB3EddaE834f101A083975",
    "OAXDEX_Factory": "0x76c9DB339F5E0C3613bcbD309474B8b7BDf7395e",
    "OAXDEX_Administrator": "0x316a4956481b1cBb4cbcd326aC12feA63691d07F",
    "OAXDEX_VotingExecutor": "0xd72Bf3c285eBB7dA189ba46a3634a662Cae6851B",
    "OAXDEX_VotingExecutor1": "0x69556952DC7667A8B5a670A1eb60d38a89fB327B",
    "OAXDEX_Router": "0x4Dd2748168a1B60ea59990E57D70Ae1E7b9958fB",
    "OSWAP_HybridRouterRegistry": "0x9173cf0b537275eC74D075b32E73690e7d273086",
    "OSWAP_HybridRouter2": "0x567c6Af5Ec3EC2821143179DD4bBAcea5f7A9de9",

    "OSWAP_OracleFactory": "0x227C8E8C4D1baDC6665Cb31C01E0B3D65c5d04B4",
    "OSWAP_OracleRouter": "0xF51D07E7d50cA5236f0032F70D1CDc36C78aa8Be",
    "OSWAP_OracleLiquidityProvider": "0x1F9D36030d2AA6d0Ce2Bd8e8cc224d53CAC0a655",
    "OSWAP_VotingExecutor2": "0x7D003771A1b2Facb23C076194c75a1b9Ed6F0690",
    "OSWAP_RangeFactory": "0x1Db29E80e7eCc82Be98d1deE4Bf3800433212b7e",
    "OSWAP_RangeLiquidityProvider": "0x8aEc300b35Ac976318CfeD9425D09071796dA38b",
    "OSWAP_VotingExecutor3": "0x915dF121e7F95D00943Bb402b1137788E521Ea03",
    "OSWAP_ConfigStore": "0xE1B1fE44E8a9fec2Ae47065BA1d33069014d64bd",
    "OSWAP_RestrictedFactory": "0x6B9215FCa70E2972182B7BF427C4D7fCcf5C24e5",
    "OSWAP_RestrictedLiquidityProvider": "0xaaC04C77FeB88207c29f50A9a9543aFBa08C4323",
    "OSWAP_VotingExecutor4": "0xDD6cdC84840322615e6c89Cd8CA330c261bff12F",
  }
}