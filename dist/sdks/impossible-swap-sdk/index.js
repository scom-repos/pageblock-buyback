define('@scom/impossible-swap-sdk', (require, exports)=>{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.ts
__export(exports, {
  Contracts: () => contracts_exports,
  ImpossibleSwapCore: () => swap_core_exports
});

// src/contracts/index.ts
var contracts_exports = {};
__export(contracts_exports, {
  DeflatingERC20: () => DeflatingERC20,
  ERC20: () => ERC20,
  ImpossibleERC20: () => ImpossibleERC20,
  ImpossiblePair: () => ImpossiblePair,
  ImpossibleRouter: () => ImpossibleRouter,
  ImpossibleRouterExtension: () => ImpossibleRouterExtension,
  ImpossibleSwapFactory: () => ImpossibleSwapFactory,
  ImpossibleWrappedToken: () => ImpossibleWrappedToken,
  ImpossibleWrapperFactory: () => ImpossibleWrapperFactory,
  WETH9: () => WETH9
});

// src/contracts/ImpossibleERC20.ts
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ImpossibleERC20.json.ts
var ImpossibleERC20_json_default = {
  "abi": [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60c0604052601360808190527f496d706f737369626c652053776170204c50730000000000000000000000000060a090815261003e916000919061018c565b5060408051808201909152600580825264049462d4c560dc1b602090920191825261006b9160019161018c565b5034801561007857600080fd5b50610081610086565b61022d565b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405180828054600181600116156101000203166002900480156101095780601f106100e7576101008083540402835291820191610109565b820191906000526020600020905b8154815290600101906020018083116100f5575b505060408051918290038220828201825260018352603160f81b602093840152815180840196909652858201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606086015260808501959095523060a0808601919091528551808603909101815260c090940190945250508051910120600555565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826101c25760008555610208565b82601f106101db57805160ff1916838001178555610208565b82800160010185558215610208579182015b828111156102085782518255916020019190600101906101ed565b50610214929150610218565b5090565b5b808211156102145760008155600101610219565b6108fe8061023c6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461025b578063a9059cbb14610263578063d505accf1461028f578063dd62ed3e146102e2576100cf565b80633644e5151461020757806370a082311461020f5780637ecebe0014610235576100cf565b806306fdde03146100d4578063095ea7b31461015157806318160ddd1461019157806323b872dd146101ab57806330adf81f146101e1578063313ce567146101e9575b600080fd5b6100dc610310565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101165781810151838201526020016100fe565b50505050905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561016757600080fd5b506001600160a01b03813516906020013561039e565b604080519115158252519081900360200190f35b6101996103b5565b60408051918252519081900360200190f35b61017d600480360360608110156101c157600080fd5b506001600160a01b038135811691602081013590911690604001356103bb565b61019961044f565b6101f1610473565b6040805160ff9092168252519081900360200190f35b610199610478565b6101996004803603602081101561022557600080fd5b50356001600160a01b031661047e565b6101996004803603602081101561024b57600080fd5b50356001600160a01b0316610490565b6100dc6104a2565b61017d6004803603604081101561027957600080fd5b506001600160a01b0381351690602001356104fc565b6102e0600480360360e08110156102a557600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610509565b005b610199600480360360408110156102f857600080fd5b506001600160a01b03813581169160200135166106fc565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b505050505081565b60006103ab338484610719565b5060015b92915050565b60025481565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000191461043a576001600160a01b0384166000908152600460209081526040808320338452909152902054610415908361077b565b6001600160a01b03851660009081526004602090815260408083203384529091529020555b6104458484846107cb565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60055481565b60036020526000908152604090205481565b60066020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103965780601f1061036b57610100808354040283529160200191610396565b60006103ab3384846107cb565b4284101561054c576040805162461bcd60e51b815260206004820152600b60248201526a12518e881156141254915160aa1b604482015290519081900360640190fd5b6005546001600160a01b0380891660008181526006602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015610667573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061069d5750886001600160a01b0316816001600160a01b0316145b6106e6576040805162461bcd60e51b815260206004820152601560248201527449463a20494e56414c49445f5349474e415455524560581b604482015290519081900360640190fd5b6106f1898989610719565b505050505050505050565b600460209081526000928352604080842090915290825290205481565b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b808203828111156103af576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160a01b0383166000908152600360205260409020546107ee908261077b565b6001600160a01b03808516600090815260036020526040808220939093559084168152205461081d9082610879565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b808201828110156103af576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfea2646970667358221220645aa3b54ba16eb49d0cc6b19f62594035cd8601160025fec29e6645650af5cb64736f6c63430007060033"
};

// src/contracts/ImpossibleERC20.ts
var ImpossibleERC20 = class extends import_eth_wallet.Contract {
  constructor(wallet, address) {
    super(wallet, address, ImpossibleERC20_json_default.abi, ImpossibleERC20_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      spender: result.spender,
      value: new import_eth_wallet.BigNumber(result.value),
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      value: new import_eth_wallet.BigNumber(result.value),
      _event: event
    };
  }
  assign() {
    let DOMAIN_SEPARATOR_call = async () => {
      let result = await this.call("DOMAIN_SEPARATOR");
      return result;
    };
    this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call;
    let PERMIT_TYPEHASH_call = async () => {
      let result = await this.call("PERMIT_TYPEHASH");
      return result;
    };
    this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call;
    let allowanceParams = (params) => [params.param1, params.param2];
    let allowance_call = async (params) => {
      let result = await this.call("allowance", allowanceParams(params));
      return new import_eth_wallet.BigNumber(result);
    };
    this.allowance = allowance_call;
    let balanceOf_call = async (param1) => {
      let result = await this.call("balanceOf", [param1]);
      return new import_eth_wallet.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let decimals_call = async () => {
      let result = await this.call("decimals");
      return new import_eth_wallet.BigNumber(result);
    };
    this.decimals = decimals_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let nonces_call = async (param1) => {
      let result = await this.call("nonces", [param1]);
      return new import_eth_wallet.BigNumber(result);
    };
    this.nonces = nonces_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_wallet.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let approveParams = (params) => [params.spender, import_eth_wallet.Utils.toString(params.value)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return result;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let permitParams = (params) => [params.owner, params.spender, import_eth_wallet.Utils.toString(params.value), import_eth_wallet.Utils.toString(params.deadline), import_eth_wallet.Utils.toString(params.v), import_eth_wallet.Utils.stringToBytes32(params.r), import_eth_wallet.Utils.stringToBytes32(params.s)];
    let permit_send = async (params) => {
      let result = await this.send("permit", permitParams(params));
      return result;
    };
    let permit_call = async (params) => {
      let result = await this.call("permit", permitParams(params));
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let transferParams = (params) => [params.to, import_eth_wallet.Utils.toString(params.value)];
    let transfer_send = async (params) => {
      let result = await this.send("transfer", transferParams(params));
      return result;
    };
    let transfer_call = async (params) => {
      let result = await this.call("transfer", transferParams(params));
      return result;
    };
    this.transfer = Object.assign(transfer_send, {
      call: transfer_call
    });
    let transferFromParams = (params) => [params.from, params.to, import_eth_wallet.Utils.toString(params.value)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return result;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
  }
};

// src/contracts/ImpossiblePair.ts
var import_eth_wallet2 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ImpossiblePair.json.ts
var ImpossiblePair_json_default = {
  "abi": [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Burn", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "_isXybk", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "_newBoost0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_newBoost1", "type": "uint256" }], "name": "ChangeInvariant", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256" }], "name": "Mint", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "Swap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "reserve0", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "reserve1", "type": "uint256" }], "name": "Sync", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint32", "name": "_oldBoost0", "type": "uint32" }, { "indexed": false, "internalType": "uint32", "name": "_oldBoost1", "type": "uint32" }, { "indexed": false, "internalType": "uint32", "name": "_newBoost0", "type": "uint32" }, { "indexed": false, "internalType": "uint32", "name": "_newBoost1", "type": "uint32" }, { "indexed": false, "internalType": "uint256", "name": "_start", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_end", "type": "uint256" }], "name": "UpdatedBoost", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_oldDelay", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_newDelay", "type": "uint256" }], "name": "UpdatedDelay", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_oldFee", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_newFee", "type": "uint256" }], "name": "UpdatedTradeFees", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "enum IImpossiblePair.TradeState", "name": "_tradeState", "type": "uint8" }], "name": "UpdatedTradeState", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_oldWithdrawalFee", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_newWithdrawalFee", "type": "uint256" }], "name": "UpdatedWithdrawalFeeRatio", "type": "event" },
    { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "burn", "outputs": [{ "internalType": "uint256", "name": "amount0", "type": "uint256" }, { "internalType": "uint256", "name": "amount1", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "calcBoost", "outputs": [{ "internalType": "uint256", "name": "_boost0", "type": "uint256" }, { "internalType": "uint256", "name": "_boost1", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "delay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "getPairSettings", "outputs": [{ "internalType": "uint16", "name": "_tradeFee", "type": "uint16" }, { "internalType": "enum IImpossiblePair.TradeState", "name": "_tradeState", "type": "uint8" }, { "internalType": "bool", "name": "_isXybk", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint256", "name": "_reserve0", "type": "uint256" }, { "internalType": "uint256", "name": "_reserve1", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "_token0", "type": "address" }, { "internalType": "address", "name": "_token1", "type": "address" }, { "internalType": "address", "name": "_router", "type": "address" }, { "internalType": "address", "name": "_routerExtension", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "kLast", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "makeUni", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint32", "name": "_newBoost0", "type": "uint32" }, { "internalType": "uint32", "name": "_newBoost1", "type": "uint32" }], "name": "makeXybk", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "router", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "routerExtension", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "skim", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount0Out", "type": "uint256" }, { "internalType": "uint256", "name": "amount1Out", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "sync", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "token0", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "token1", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint32", "name": "_newBoost0", "type": "uint32" }, { "internalType": "uint32", "name": "_newBoost1", "type": "uint32" }], "name": "updateBoost", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_newDelay", "type": "uint256" }], "name": "updateDelay", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint8", "name": "_newFee", "type": "uint8" }], "name": "updateTradeFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "enum IImpossiblePair.TradeState", "name": "_tradeState", "type": "uint8" }], "name": "updateTradeState", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_newFeeRatio", "type": "uint256" }], "name": "updateWithdrawalFeeRatio", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "withdrawalFeeRatio", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "60c0604052601360808190527f496d706f737369626c652053776170204c50730000000000000000000000000060a090815262000040916000919062000250565b5060408051808201909152600580825264049462d4c560dc1b60209092019182526200006f9160019162000250565b506008805461ffff1916601e179055600f805463ffffffff60a01b1963ffffffff60801b1963ffffffff60601b1963ffffffff60401b1963ffffffff60201b1963ffffffff199095166001179490941664010000000017939093166801000000000000000017929092166c010000000000000000000000001791909116600160801b1716600160a01b17905560c9601255620151806013553480156200011457600080fd5b506200011f62000146565b600160075560088054600160201b600160c01b0319163364010000000002179055620002fc565b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040518082805460018160011615610100020316600290048015620001cd5780601f10620001aa576101008083540402835291820191620001cd565b820191906000526020600020905b815481529060010190602001808311620001b8575b505060408051918290038220828201825260018352603160f81b602093840152815180840196909652858201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606086015260808501959095523060a0808601919091528551808603909101815260c090940190945250508051910120600555565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002885760008555620002d3565b82601f10620002a357805160ff1916838001178555620002d3565b82800160010185558215620002d3579182015b82811115620002d3578251825591602001919060010190620002b6565b50620002e1929150620002e5565b5090565b5b80821115620002e15760008155600101620002e6565b613d59806200030c6000396000f3fe608060405234801561001057600080fd5b50600436106102485760003560e01c80637464fc3d1161013b578063c45a0155116100b8578063dd62ed3e1161007c578063dd62ed3e146106c4578063e94e3d8d146106f2578063f887ea401461072f578063f8c8765e14610737578063fff6cae91461077557610248565b8063c45a015514610626578063d1b2664f1461062e578063d21220a71461064b578063d4f0a77714610653578063d505accf1461067357610248565b8063a9059cbb116100ff578063a9059cbb14610599578063b6b9f61b146105c5578063ba9a7a56146105cd578063bb3a19a4146105d5578063bc25cf771461060057610248565b80637464fc3d1461053557806378e979251461053d5780637ecebe001461054557806389afcb441461056b57806395d89b411461059157610248565b8063313ce567116101c95780635de879701161018d5780635de87970146104bc57806364d62353146104c45780636a42b8f8146104e15780636a627842146104e957806370a082311461050f57610248565b8063313ce5671461047e5780633197cbb61461049c57806334762d09146104a45780633644e515146104ac578063590c61f0146104b457610248565b8063112db51b11610210578063112db51b146103db57806315fc3d92146103fb57806318160ddd1461042657806323b872dd1461044057806330adf81f1461047657610248565b8063022c0d9f1461024d57806306fdde03146102d95780630902f1ac14610356578063095ea7b3146103775780630dfe1681146103b7575b600080fd5b6102d76004803603608081101561026357600080fd5b8135916020810135916001600160a01b036040830135169190810190608081016060820135600160201b81111561029957600080fd5b8201836020820111156102ab57600080fd5b803590602001918460018302840111600160201b831117156102cc57600080fd5b50909250905061077d565b005b6102e1610e3d565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561031b578181015183820152602001610303565b50505050905090810190601f1680156103485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61035e610ecb565b6040805192835260208301919091528051918290030190f35b6103a36004803603604081101561038d57600080fd5b506001600160a01b038135169060200135610ee6565b604080519115158252519081900360200190f35b6103bf610efd565b604080516001600160a01b039092168252519081900360200190f35b6102d7600480360360208110156103f157600080fd5b503560ff16610f0c565b6102d76004803603604081101561041157600080fd5b5063ffffffff813581169160200135166110de565b61042e6112bc565b60408051918252519081900360200190f35b6103a36004803603606081101561045657600080fd5b506001600160a01b038135811691602081013590911690604001356112c2565b61042e611357565b61048661137b565b6040805160ff9092168252519081900360200190f35b61042e611380565b6102d7611386565b61042e611650565b6103bf611656565b61042e611665565b6102d7600480360360208110156104da57600080fd5b503561166b565b61042e6117d3565b61042e600480360360208110156104ff57600080fd5b50356001600160a01b03166117d9565b61042e6004803603602081101561052557600080fd5b50356001600160a01b0316611ac6565b61042e611ad8565b61042e611ade565b61042e6004803603602081101561055b57600080fd5b50356001600160a01b0316611ae4565b61035e6004803603602081101561058157600080fd5b50356001600160a01b0316611af6565b6102e1611ff3565b6103a3600480360360408110156105af57600080fd5b506001600160a01b03813516906020013561204d565b61035e61205a565b61042e6120f8565b6102d7600480360360408110156105eb57600080fd5b5063ffffffff813581169160200135166120fe565b6102d76004803603602081101561061657600080fd5b50356001600160a01b0316612277565b6103bf6123d3565b6102d76004803603602081101561064457600080fd5b50356123e9565b6103bf61253e565b6102d76004803603602081101561066957600080fd5b503560ff1661254d565b6102d7600480360360e081101561068957600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561266b565b61042e600480360360408110156106da57600080fd5b506001600160a01b038135811691602001351661285e565b6106fa61287b565b604051808461ffff16815260200183600381111561071457fe5b81526020018215158152602001935050505060405180910390f35b6103bf61289a565b6102d76004803603608081101561074d57600080fd5b506001600160a01b0381358116916020810135821691604082013581169160600135166128a9565b6102d7612959565b600b546001600160a01b03163314806107a05750600c546001600160a01b031633145b6107e1576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60026007541415610827576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007558415158061083a5750600084115b61088b576040805162461bcd60e51b815260206004820152601e60248201527f49463a20494e53554646494349454e545f4f55545055545f414d4f554e540000604482015290519081900360640190fd5b600080610896610ecb565b915091508187111580156108aa5750808611155b6108fb576040805162461bcd60e51b815260206004820152601a60248201527f49463a20494e53554646494349454e545f4c4951554944495459000000000000604482015290519081900360640190fd5b6009546000908190819081906001600160a01b038a81169116148015906109305750600a546001600160a01b038a8116911614155b610972576040805162461bcd60e51b815260206004820152600e60248201526d49463a20494e56414c49445f544f60901b604482015290519081900360640190fd5b8a1561098f5760095461098f906001600160a01b03168a8d612aa4565b89156109ac57600a546109ac906001600160a01b03168a8c612aa4565b8615610a5e57886001600160a01b03166367e95e6f338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610a4557600080fd5b505af1158015610a59573d6000803e3d6000fd5b505050505b600954604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610aa957600080fd5b505afa158015610abd573d6000803e3d6000fd5b505050506040513d6020811015610ad357600080fd5b5051600a54604080516370a0823160e01b815230600482015290519296506001600160a01b03909116916370a0823191602480820192602092909190829003018186803b158015610b2357600080fd5b505afa158015610b37573d6000803e3d6000fd5b505050506040513d6020811015610b4d57600080fd5b505192508a86038411610b61576000610b67565b8a860384035b91508985038311610b79576000610b7f565b89850383035b90506000821180610b905750600081115b610be1576040805162461bcd60e51b815260206004820152601d60248201527f49463a20494e53554646494349454e545f494e5055545f414d4f554e54000000604482015290519081900360640190fd5b60085460ff63010000008204169061ffff166000610c14610c028684612c33565b610c0e89612710612c33565b90612c96565b90506000610c25610c028685612c33565b90508315610d615760085462010000900460ff166000816003811115610c4757fe5b1480610c6757506001816003811115610c5c57fe5b148015610c6757508e155b80610c8657506002816003811115610c7b57fe5b148015610c8657508f155b610ccf576040805162461bcd60e51b815260206004820152601560248201527412518e88151490511157d393d517d0531313d5d151605a1b604482015290519081900360640190fd5b600080610cda61205a565b915091506000610cf86305f5e100610cf28585612ce6565b90612c33565b9050610d078383888885612d8f565b610d58576040805162461bcd60e51b815260206004820152601760248201527f49463a20494e53554646494349454e545f5859424b5f4b000000000000000000604482015290519081900360640190fd5b50505050610dc9565b610d736305f5e100610cf28c8c612c33565b610d7d8383612c33565b1015610dc9576040805162461bcd60e51b815260206004820152601660248201527549463a20494e53554646494349454e545f554e495f4b60501b604482015290519081900360640190fd5b50505050610dd78484612e09565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600755505050505050505050565b6000805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b505050505081565b600d546001600160801b0380821692600160801b9092041690565b6000610ef3338484612e89565b5060015b92915050565b6009546001600160a01b031681565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b158015610f5a57600080fd5b505afa158015610f6e573d6000803e3d6000fd5b505050506040513d6020811015610f8457600080fd5b50516001600160a01b03163314610fd2576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60026007541415611018576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007556008546301000000900460ff16611072576040805162461bcd60e51b815260206004820152601460248201527349463a2049535f43555252454e544c595f554e4960601b604482015290519081900360640190fd5b6008805482919062ff000019166201000083600381111561108f57fe5b02179055507f804ede6198c4ba5ac5c2ab3c86f51a6418ba3592262bf932bc9cbe6a18e4c79981604051808260038111156110c657fe5b815260200191505060405180910390a1506001600755565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561112c57600080fd5b505afa158015611140573d6000803e3d6000fd5b505050506040513d602081101561115657600080fd5b50516001600160a01b031633146111a4576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600260075414156111ea576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007556008546301000000900460ff1615611244576040805162461bcd60e51b815260206004820152601360248201527249463a2049535f414c52454144595f5859424b60681b604482015290519081900360640190fd5b61124e8282612eeb565b6008805463ff0000001916630100000090811791829055604080519190920460ff161515815263ffffffff808516602083015283168183015290517fe81694441e8badb2a6bd046b401e64e8775f8055523d0263c9948f4a5b8026b39181900360600190a150506001600755565b60025481565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001914611341576001600160a01b038416600090815260046020908152604080832033845290915290205461131c9083612c96565b6001600160a01b03851660009081526004602090815260408083203384529091529020555b61134c8484846130cf565b5060015b9392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60115481565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156113d457600080fd5b505afa1580156113e8573d6000803e3d6000fd5b505050506040513d60208110156113fe57600080fd5b50516001600160a01b0316331461144c576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60026007541415611492576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007556008546301000000900460ff166114ea576040805162461bcd60e51b815260206004820152601260248201527149463a2049535f414c52454144595f554e4960701b604482015290519081900360640190fd5b601154421015611541576040805162461bcd60e51b815260206004820152601a60248201527f49463a20424f4f53545f414c52454144595f4348414e47494e47000000000000604482015290519081900360640190fd5b600f54600160401b900463ffffffff16600114801561156f5750600f54600160601b900463ffffffff166001145b6115b4576040805162461bcd60e51b815260206004820152601160248201527012518e881253959053125117d093d3d4d5607a1b604482015290519081900360640190fd5b6008805463ff000000191690819055600f805467ffffffff000000001963ffffffff1990911660011716600160201b179081905560408051630100000090930460ff1615158352600160401b820463ffffffff9081166020850152600160601b90920490911682820152517fe81694441e8badb2a6bd046b401e64e8775f8055523d0263c9948f4a5b8026b39181900360600190a16001600755565b60055481565b600c546001600160a01b031681565b60125481565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156116b957600080fd5b505afa1580156116cd573d6000803e3d6000fd5b505050506040513d60208110156116e357600080fd5b50516001600160a01b03163314611731576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6201a5e081101580156117475750621275008111155b61178c576040805162461bcd60e51b815260206004820152601160248201527049463a20494e56414c49445f44454c415960781b604482015290519081900360640190fd5b6013805490829055604080518281526020810184905281517f40abb331f787260ef2fdd0c9e0ecc9bf68758a43190094281842f10ffcc318b2929181900390910190a15050565b60135481565b600060026007541415611821576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b6002600755600080611831610ecb565b600954604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b15801561188457600080fd5b505afa158015611898573d6000803e3d6000fd5b505050506040513d60208110156118ae57600080fd5b5051600a54604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561190157600080fd5b505afa158015611915573d6000803e3d6000fd5b505050506040513d602081101561192b57600080fd5b50519050600061193b8386612c96565b905060006119498386612c96565b90506000611957878761317d565b6002549091508061198e5761197a6103e8610c0e6119758787612c33565b6132ec565b985061198960006103e861333e565b6119e1565b6119de600089116119a1576000196119b5565b886119ac8684612c33565b816119b357fe5b045b600089116119c5576000196119d9565b886119d08685612c33565b816119d757fe5b045b6133c9565b98505b60008911611a205760405162461bcd60e51b8152600401808060200182810382526021815260200180613ce26021913960400191505060405180910390fd5b611a2a8a8a61333e565b611a348686612e09565b600080611a3f6133df565b915091508315611a77576008546301000000900460ff16611a6957611a648888612c33565b611a73565b611a738282612ce6565b600e555b6040805187815260208101879052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600755509698975050505050505050565b60036020526000908152604090205481565b600e5481565b60105481565b60066020526000908152604090205481565b60008060026007541415611b3f576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b6002600755600080611b4f610ecb565b915091506000611b5f838361317d565b600954600a54604080516370a0823160e01b815230600482015290519394506001600160a01b0392831693919092169160009184916370a08231916024808301926020929190829003018186803b158015611bb957600080fd5b505afa158015611bcd573d6000803e3d6000fd5b505050506040513d6020811015611be357600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b158015611c3157600080fd5b505afa158015611c45573d6000803e3d6000fd5b505050506040513d6020811015611c5b57600080fd5b5051306000908152600360205260409020546002549192509080611c7f8386612c33565b81611c8657fe5b049a5080611c948385612c33565b81611c9b57fe5b04995060008b1180611cad575060008a115b611ce85760405162461bcd60e51b8152600401808060200182810382526021815260200180613d036021913960400191505060405180910390fd5b6000600860049054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611d3857600080fd5b505afa158015611d4c573d6000803e3d6000fd5b505050506040513d6020811015611d6257600080fd5b50519050878015611d7c5750326001600160a01b03821614155b15611e4c57601254611d8e8d8261342b565b909c039b611d9c8c8261342b565b909b039a6000611dac858361342b565b9050611e3230600860049054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611e0057600080fd5b505afa158015611e14573d6000803e3d6000fd5b505050506040513d6020811015611e2a57600080fd5b505183612aa4565b611e4530611e408784612c96565b61346d565b5050611e56565b611e56308461346d565b611e61878e8e612aa4565b611e6c868e8d612aa4565b5050604080516370a0823160e01b815230600482015290516001600160a01b038716916370a08231916024808301926020929190829003018186803b158015611eb457600080fd5b505afa158015611ec8573d6000803e3d6000fd5b505050506040513d6020811015611ede57600080fd5b5051604080516370a0823160e01b815230600482015290519194506001600160a01b038616916370a0823191602480820192602092909190829003018186803b158015611f2a57600080fd5b505afa158015611f3e573d6000803e3d6000fd5b505050506040513d6020811015611f5457600080fd5b50519150611f628383612e09565b8515611f96576008546301000000900460ff16611f8857611f838383612c33565b611f92565b611f928383612ce6565b600e555b604080518b8152602081018b905281516001600160a01b038e169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a350505050505050506001600781905550915091565b60018054604080516020600284861615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ec35780601f10610e9857610100808354040283529160200191610ec3565b6000610ef33384846130cf565b6000806000601154905080421061208f576000806120766134fe565b505063ffffffff938416985050501693506120f3915050565b6000806000806000806120a06134fe565b9550955095509550955095506120b784878961353f565b98506120c483868961353f565b9750600e546120d38a8a612ce6565b10156120ec578163ffffffff1698508063ffffffff1697505b5050505050505b509091565b6103e881565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561214c57600080fd5b505afa158015612160573d6000803e3d6000fd5b505050506040513d602081101561217657600080fd5b50516001600160a01b031633146121c4576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6002600754141561220a576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007556008546301000000900460ff16612264576040805162461bcd60e51b815260206004820152601460248201527349463a2049535f43555252454e544c595f554e4960601b604482015290519081900360640190fd5b61226e8282612eeb565b50506001600755565b600260075414156122bd576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b6002600755600954600a546001600160a01b0391821691166000806122e0610ecb565b91509150612371848661236c85886001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561233a57600080fd5b505afa15801561234e573d6000803e3d6000fd5b505050506040513d602081101561236457600080fd5b505190612c96565b612aa4565b6123c7838661236c84876001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561233a57600080fd5b50506001600755505050565b600854600160201b90046001600160a01b031681565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561243757600080fd5b505afa15801561244b573d6000803e3d6000fd5b505050506040513d602081101561246157600080fd5b50516001600160a01b031633146124af576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60648110156124f7576040805162461bcd60e51b815260206004820152600f60248201526e49463a20494e56414c49445f46454560881b604482015290519081900360640190fd5b6012805490829055604080518281526020810184905281517f985b27d3fed0c26bf4c91858b7a7bf9f3406337d65fcb519d177f56758627508929181900390910190a15050565b600a546001600160a01b031681565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561259b57600080fd5b505afa1580156125af573d6000803e3d6000fd5b505050506040513d60208110156125c557600080fd5b50516001600160a01b03163314612613576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6008805460ff831661ffff19821681179092556040805161ffff909216808352602083019390935280517f907af1ce671677e36d7827744cdc6febfa3a1124adfb2bfb5288e1ae9896dda29281900390910190a15050565b428410156126ae576040805162461bcd60e51b815260206004820152600b60248201526a12518e881156141254915160aa1b604482015290519081900360640190fd5b6005546001600160a01b0380891660008181526006602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156127c9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906127ff5750886001600160a01b0316816001600160a01b0316145b612848576040805162461bcd60e51b815260206004820152601560248201527449463a20494e56414c49445f5349474e415455524560581b604482015290519081900360640190fd5b612853898989612e89565b505050505050505050565b600460209081526000928352604080842090915290825290205481565b60085461ffff81169160ff620100008304811692630100000090041690565b600b546001600160a01b031681565b600854600160201b90046001600160a01b031633146128ff576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600b80546001600160a01b038085166001600160a01b031992831617909255600c805484841690831617905560098054878416908316179055600a80549286169290911691909117905561295384846135e4565b50505050565b6002600754141561299f576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b6002600755600954604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156129ef57600080fd5b505afa158015612a03573d6000803e3d6000fd5b505050506040513d6020811015612a1957600080fd5b5051600a54604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015612a6c57600080fd5b505afa158015612a80573d6000803e3d6000fd5b505050506040513d6020811015612a9657600080fd5b5051905061226e8282612e09565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17815292518151600094859489169392918291908083835b60208310612b505780518252601f199092019160209182019101612b31565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612bb2576040519150601f19603f3d011682016040523d82523d6000602084013e612bb7565b606091505b5091509150818015612be5575080511580612be55750808060200190516020811015612be257600080fd5b50515b612c2c576040805162461bcd60e51b815260206004820152601360248201527212518e881514905394d1915497d19052531151606a1b604482015290519081900360640190fd5b5050505050565b6000811580612c4e57505080820282828281612c4b57fe5b04145b610ef7576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610ef7576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000806000612cf3610ecb565b915091506000818311612d1057612d0b856001612c96565b612d1b565b612d1b866001612c96565b90506000612d356001612d2f846002612c33565b90613a29565b90506000612d61612d47836002612c33565b612d5b612d548888613a29565b8690612c33565b9061342b565b9050600281612d81612d7785612d5b8a8a612c33565b6002850a016132ec565b010a98975050505050505050565b600080612d9b836132ec565b90506000848611612db657612db1876001612c96565b612dc1565b612dc1886001612c96565b90506000612dcf8284612c33565b905084612dfa6002612de2856001613a29565b0a612d5b612df08a86613a29565b610cf28c87613a29565b10159998505050505050505050565b600d80546fffffffffffffffffffffffffffffffff19166001600160801b03848116919091178116600160801b8483168102919091179283905560408051848416815291909304909116602082015281517fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a929181900390910190a15050565b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60018263ffffffff1610158015612f09575060018163ffffffff1610155b8015612f1e5750620f42408263ffffffff1611155b8015612f335750620f42408163ffffffff1611155b612f78576040805162461bcd60e51b815260206004820152601160248201527012518e881253959053125117d093d3d4d5607a1b604482015290519081900360640190fd5b6011544290811015612fd1576040805162461bcd60e51b815260206004820152601a60248201527f49463a20424f4f53545f414c52454144595f4348414e47494e47000000000000604482015290519081900360640190fd5b600080612fdc610ecb565b91509150612fea828261317d565b50600f805467ffffffff0000000019600160401b80830463ffffffff90811663ffffffff1990941693909317918216600160601b928390048416600160201b908102919091176bffffffff000000000000000019168a851683021763ffffffff60601b191689851684021794859055601088905560135488016011819055604080518787168152928704861660208401529286048516828401529290940490921660608401526080830186905260a0830152517ff771495302afb2f84f43cab3d699e9548748b5154c0c8feba486d0e3e1d860799160c0908290030190a15050505050565b6001600160a01b0383166000908152600360205260409020546130f29082612c96565b6001600160a01b0380851660009081526003602052604080822093909355908416815220546131219082613a29565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600860049054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b1580156131ce57600080fd5b505afa1580156131e2573d6000803e3d6000fd5b505050506040513d60208110156131f857600080fd5b5051600e546001600160a01b0382161580159450919250906132d85780156132d3576000806132256133df565b60085491935091506000906301000000900460ff166132505761324b6119758989612c33565b61325d565b61325d6119758484612ce6565b9050600061326a856132ec565b9050808211156132ce5760006132916004610cf26132888686612c96565b60025490612c33565b905060006132aa6132a3846004612c33565b8590613a29565b905060008183816132b757fe5b04905080156132ca576132ca898261333e565b5050505b505050505b6132e4565b80156132e4576000600e555b505092915050565b6000600382111561332f575080600160028204015b818110156133295780915060028182858161331857fe5b04018161332157fe5b049050613301565b50613339565b8115613339575060015b919050565b60025461334b9082613a29565b6002556001600160a01b0382166000908152600360205260409020546133719082613a29565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106133d85781611350565b5090919050565b6000806133ea61205a565b600f805463ffffffff808416600160a01b0263ffffffff60a01b19918616600160801b0263ffffffff60801b19909316929092171617905590939092509050565b600061135083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613a78565b6001600160a01b0382166000908152600360205260409020546134909082612c96565b6001600160a01b0383166000908152600360205260409020556002546134b69082612c96565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600f5463ffffffff600160401b8204811692600160601b830482169282811692600160201b8204811692600160801b8304821692600160a01b900490911690565b60105460009063ffffffff80861690851611156135a1576135996135896135668584612c96565b612d5b6135734286612c96565b610cf263ffffffff8a811690808d1690612c9616565b63ffffffff8088169190613a2916565b915050611350565b6135996135d46135b18584612c96565b612d5b6135be4286612c96565b610cf263ffffffff8b811690808c1690612c9616565b63ffffffff8088169190612c9616565b6000826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561361f57600080fd5b505afa158015613633573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561365c57600080fd5b8101908080516040519392919084600160201b82111561367b57600080fd5b90830190602082018581111561369057600080fd5b8251600160201b8111828201881017156136a957600080fd5b82525081516020918201929091019080838360005b838110156136d65781810151838201526020016136be565b50505050905090810190601f1680156137035780820380516001836020036101000a031916815260200191505b50604052505050826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561374357600080fd5b505afa158015613757573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561378057600080fd5b8101908080516040519392919084600160201b82111561379f57600080fd5b9083019060208201858111156137b457600080fd5b8251600160201b8111828201881017156137cd57600080fd5b82525081516020918201929091019080838360005b838110156137fa5781810151838201526020016137e2565b50505050905090810190601f1680156138275780820380516001836020036101000a031916815260200191505b506040525050506040516020018083805190602001908083835b602083106138605780518252601f199092019160209182019101613841565b6001836020036101000a03801982511681845116808217855250505050505090500180602f60f81b81525060010182805190602001908083835b602083106138b95780518252601f19909201916020918201910161389a565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052905080604051602001808074024b6b837b9b9b4b136329029bbb0b8102628399d1605d1b81525060150182805190602001908083835b602083106139435780518252601f199092019160209182019101613924565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526000908051906020019061398c929190613c20565b5080604051602001808066024a316a6281d160cd1b81525060070182805190602001908083835b602083106139d25780518252601f1990920191602091820191016139b3565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260019080519060200190613a1b929190613c20565b50613a24613b1a565b505050565b80820182811015610ef7576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b60008183613b045760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613ac9578181015183820152602001613ab1565b50505050905090810190601f168015613af65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581613b1057fe5b0495945050505050565b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040518082805460018160011615610100020316600290048015613b9d5780601f10613b7b576101008083540402835291820191613b9d565b820191906000526020600020905b815481529060010190602001808311613b89575b505060408051918290038220828201825260018352603160f81b602093840152815180840196909652858201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606086015260808501959095523060a0808601919091528551808603909101815260c090940190945250508051910120600555565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282613c565760008555613c9c565b82601f10613c6f57805160ff1916838001178555613c9c565b82800160010185558215613c9c579182015b82811115613c9c578251825591602001919060010190613c81565b50613ca8929150613cac565b5090565b5b80821115613ca85760008155600101613cad56fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c0049463a20494e53554646494349454e545f4c49515549444954595f4d494e54454449463a20494e53554646494349454e545f4c49515549444954595f4255524e4544a2646970667358221220c4cecd97baa97e8c2110f0ecae011763098ffc0ace4cba4f05c92277284b7ad864736f6c63430007060033"
};

// src/contracts/ImpossiblePair.ts
var ImpossiblePair = class extends import_eth_wallet2.Contract {
  constructor(wallet, address) {
    super(wallet, address, ImpossiblePair_json_default.abi, ImpossiblePair_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      spender: result.spender,
      value: new import_eth_wallet2.BigNumber(result.value),
      _event: event
    };
  }
  parseBurnEvent(receipt) {
    return this.parseEvents(receipt, "Burn").map((e) => this.decodeBurnEvent(e));
  }
  decodeBurnEvent(event) {
    let result = event.data;
    return {
      sender: result.sender,
      amount0: new import_eth_wallet2.BigNumber(result.amount0),
      amount1: new import_eth_wallet2.BigNumber(result.amount1),
      to: result.to,
      _event: event
    };
  }
  parseChangeInvariantEvent(receipt) {
    return this.parseEvents(receipt, "ChangeInvariant").map((e) => this.decodeChangeInvariantEvent(e));
  }
  decodeChangeInvariantEvent(event) {
    let result = event.data;
    return {
      _isXybk: result._isXybk,
      _newBoost0: new import_eth_wallet2.BigNumber(result._newBoost0),
      _newBoost1: new import_eth_wallet2.BigNumber(result._newBoost1),
      _event: event
    };
  }
  parseMintEvent(receipt) {
    return this.parseEvents(receipt, "Mint").map((e) => this.decodeMintEvent(e));
  }
  decodeMintEvent(event) {
    let result = event.data;
    return {
      sender: result.sender,
      amount0: new import_eth_wallet2.BigNumber(result.amount0),
      amount1: new import_eth_wallet2.BigNumber(result.amount1),
      _event: event
    };
  }
  parseSwapEvent(receipt) {
    return this.parseEvents(receipt, "Swap").map((e) => this.decodeSwapEvent(e));
  }
  decodeSwapEvent(event) {
    let result = event.data;
    return {
      sender: result.sender,
      amount0In: new import_eth_wallet2.BigNumber(result.amount0In),
      amount1In: new import_eth_wallet2.BigNumber(result.amount1In),
      amount0Out: new import_eth_wallet2.BigNumber(result.amount0Out),
      amount1Out: new import_eth_wallet2.BigNumber(result.amount1Out),
      to: result.to,
      _event: event
    };
  }
  parseSyncEvent(receipt) {
    return this.parseEvents(receipt, "Sync").map((e) => this.decodeSyncEvent(e));
  }
  decodeSyncEvent(event) {
    let result = event.data;
    return {
      reserve0: new import_eth_wallet2.BigNumber(result.reserve0),
      reserve1: new import_eth_wallet2.BigNumber(result.reserve1),
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      value: new import_eth_wallet2.BigNumber(result.value),
      _event: event
    };
  }
  parseUpdatedBoostEvent(receipt) {
    return this.parseEvents(receipt, "UpdatedBoost").map((e) => this.decodeUpdatedBoostEvent(e));
  }
  decodeUpdatedBoostEvent(event) {
    let result = event.data;
    return {
      _oldBoost0: new import_eth_wallet2.BigNumber(result._oldBoost0),
      _oldBoost1: new import_eth_wallet2.BigNumber(result._oldBoost1),
      _newBoost0: new import_eth_wallet2.BigNumber(result._newBoost0),
      _newBoost1: new import_eth_wallet2.BigNumber(result._newBoost1),
      _start: new import_eth_wallet2.BigNumber(result._start),
      _end: new import_eth_wallet2.BigNumber(result._end),
      _event: event
    };
  }
  parseUpdatedDelayEvent(receipt) {
    return this.parseEvents(receipt, "UpdatedDelay").map((e) => this.decodeUpdatedDelayEvent(e));
  }
  decodeUpdatedDelayEvent(event) {
    let result = event.data;
    return {
      _oldDelay: new import_eth_wallet2.BigNumber(result._oldDelay),
      _newDelay: new import_eth_wallet2.BigNumber(result._newDelay),
      _event: event
    };
  }
  parseUpdatedTradeFeesEvent(receipt) {
    return this.parseEvents(receipt, "UpdatedTradeFees").map((e) => this.decodeUpdatedTradeFeesEvent(e));
  }
  decodeUpdatedTradeFeesEvent(event) {
    let result = event.data;
    return {
      _oldFee: new import_eth_wallet2.BigNumber(result._oldFee),
      _newFee: new import_eth_wallet2.BigNumber(result._newFee),
      _event: event
    };
  }
  parseUpdatedTradeStateEvent(receipt) {
    return this.parseEvents(receipt, "UpdatedTradeState").map((e) => this.decodeUpdatedTradeStateEvent(e));
  }
  decodeUpdatedTradeStateEvent(event) {
    let result = event.data;
    return {
      _tradeState: new import_eth_wallet2.BigNumber(result._tradeState),
      _event: event
    };
  }
  parseUpdatedWithdrawalFeeRatioEvent(receipt) {
    return this.parseEvents(receipt, "UpdatedWithdrawalFeeRatio").map((e) => this.decodeUpdatedWithdrawalFeeRatioEvent(e));
  }
  decodeUpdatedWithdrawalFeeRatioEvent(event) {
    let result = event.data;
    return {
      _oldWithdrawalFee: new import_eth_wallet2.BigNumber(result._oldWithdrawalFee),
      _newWithdrawalFee: new import_eth_wallet2.BigNumber(result._newWithdrawalFee),
      _event: event
    };
  }
  assign() {
    let DOMAIN_SEPARATOR_call = async () => {
      let result = await this.call("DOMAIN_SEPARATOR");
      return result;
    };
    this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call;
    let MINIMUM_LIQUIDITY_call = async () => {
      let result = await this.call("MINIMUM_LIQUIDITY");
      return new import_eth_wallet2.BigNumber(result);
    };
    this.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY_call;
    let PERMIT_TYPEHASH_call = async () => {
      let result = await this.call("PERMIT_TYPEHASH");
      return result;
    };
    this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call;
    let allowanceParams = (params) => [params.param1, params.param2];
    let allowance_call = async (params) => {
      let result = await this.call("allowance", allowanceParams(params));
      return new import_eth_wallet2.BigNumber(result);
    };
    this.allowance = allowance_call;
    let balanceOf_call = async (param1) => {
      let result = await this.call("balanceOf", [param1]);
      return new import_eth_wallet2.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let calcBoost_call = async () => {
      let result = await this.call("calcBoost");
      return {
        _boost0: new import_eth_wallet2.BigNumber(result._boost0),
        _boost1: new import_eth_wallet2.BigNumber(result._boost1)
      };
    };
    this.calcBoost = calcBoost_call;
    let decimals_call = async () => {
      let result = await this.call("decimals");
      return new import_eth_wallet2.BigNumber(result);
    };
    this.decimals = decimals_call;
    let delay_call = async () => {
      let result = await this.call("delay");
      return new import_eth_wallet2.BigNumber(result);
    };
    this.delay = delay_call;
    let endTime_call = async () => {
      let result = await this.call("endTime");
      return new import_eth_wallet2.BigNumber(result);
    };
    this.endTime = endTime_call;
    let factory_call = async () => {
      let result = await this.call("factory");
      return result;
    };
    this.factory = factory_call;
    let getPairSettings_call = async () => {
      let result = await this.call("getPairSettings");
      return {
        _tradeFee: new import_eth_wallet2.BigNumber(result._tradeFee),
        _tradeState: new import_eth_wallet2.BigNumber(result._tradeState),
        _isXybk: result._isXybk
      };
    };
    this.getPairSettings = getPairSettings_call;
    let getReserves_call = async () => {
      let result = await this.call("getReserves");
      return {
        _reserve0: new import_eth_wallet2.BigNumber(result._reserve0),
        _reserve1: new import_eth_wallet2.BigNumber(result._reserve1)
      };
    };
    this.getReserves = getReserves_call;
    let kLast_call = async () => {
      let result = await this.call("kLast");
      return new import_eth_wallet2.BigNumber(result);
    };
    this.kLast = kLast_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let nonces_call = async (param1) => {
      let result = await this.call("nonces", [param1]);
      return new import_eth_wallet2.BigNumber(result);
    };
    this.nonces = nonces_call;
    let router_call = async () => {
      let result = await this.call("router");
      return result;
    };
    this.router = router_call;
    let routerExtension_call = async () => {
      let result = await this.call("routerExtension");
      return result;
    };
    this.routerExtension = routerExtension_call;
    let startTime_call = async () => {
      let result = await this.call("startTime");
      return new import_eth_wallet2.BigNumber(result);
    };
    this.startTime = startTime_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let token0_call = async () => {
      let result = await this.call("token0");
      return result;
    };
    this.token0 = token0_call;
    let token1_call = async () => {
      let result = await this.call("token1");
      return result;
    };
    this.token1 = token1_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_wallet2.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let withdrawalFeeRatio_call = async () => {
      let result = await this.call("withdrawalFeeRatio");
      return new import_eth_wallet2.BigNumber(result);
    };
    this.withdrawalFeeRatio = withdrawalFeeRatio_call;
    let approveParams = (params) => [params.spender, import_eth_wallet2.Utils.toString(params.value)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return result;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let burn_send = async (to) => {
      let result = await this.send("burn", [to]);
      return result;
    };
    let burn_call = async (to) => {
      let result = await this.call("burn", [to]);
      return {
        amount0: new import_eth_wallet2.BigNumber(result.amount0),
        amount1: new import_eth_wallet2.BigNumber(result.amount1)
      };
    };
    this.burn = Object.assign(burn_send, {
      call: burn_call
    });
    let initializeParams = (params) => [params.token0, params.token1, params.router, params.routerExtension];
    let initialize_send = async (params) => {
      let result = await this.send("initialize", initializeParams(params));
      return result;
    };
    let initialize_call = async (params) => {
      let result = await this.call("initialize", initializeParams(params));
      return;
    };
    this.initialize = Object.assign(initialize_send, {
      call: initialize_call
    });
    let makeUni_send = async () => {
      let result = await this.send("makeUni");
      return result;
    };
    let makeUni_call = async () => {
      let result = await this.call("makeUni");
      return;
    };
    this.makeUni = Object.assign(makeUni_send, {
      call: makeUni_call
    });
    let makeXybkParams = (params) => [import_eth_wallet2.Utils.toString(params.newBoost0), import_eth_wallet2.Utils.toString(params.newBoost1)];
    let makeXybk_send = async (params) => {
      let result = await this.send("makeXybk", makeXybkParams(params));
      return result;
    };
    let makeXybk_call = async (params) => {
      let result = await this.call("makeXybk", makeXybkParams(params));
      return;
    };
    this.makeXybk = Object.assign(makeXybk_send, {
      call: makeXybk_call
    });
    let mint_send = async (to) => {
      let result = await this.send("mint", [to]);
      return result;
    };
    let mint_call = async (to) => {
      let result = await this.call("mint", [to]);
      return new import_eth_wallet2.BigNumber(result);
    };
    this.mint = Object.assign(mint_send, {
      call: mint_call
    });
    let permitParams = (params) => [params.owner, params.spender, import_eth_wallet2.Utils.toString(params.value), import_eth_wallet2.Utils.toString(params.deadline), import_eth_wallet2.Utils.toString(params.v), import_eth_wallet2.Utils.stringToBytes32(params.r), import_eth_wallet2.Utils.stringToBytes32(params.s)];
    let permit_send = async (params) => {
      let result = await this.send("permit", permitParams(params));
      return result;
    };
    let permit_call = async (params) => {
      let result = await this.call("permit", permitParams(params));
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let skim_send = async (to) => {
      let result = await this.send("skim", [to]);
      return result;
    };
    let skim_call = async (to) => {
      let result = await this.call("skim", [to]);
      return;
    };
    this.skim = Object.assign(skim_send, {
      call: skim_call
    });
    let swapParams = (params) => [import_eth_wallet2.Utils.toString(params.amount0Out), import_eth_wallet2.Utils.toString(params.amount1Out), params.to, import_eth_wallet2.Utils.stringToBytes(params.data)];
    let swap_send = async (params) => {
      let result = await this.send("swap", swapParams(params));
      return result;
    };
    let swap_call = async (params) => {
      let result = await this.call("swap", swapParams(params));
      return;
    };
    this.swap = Object.assign(swap_send, {
      call: swap_call
    });
    let sync_send = async () => {
      let result = await this.send("sync");
      return result;
    };
    let sync_call = async () => {
      let result = await this.call("sync");
      return;
    };
    this.sync = Object.assign(sync_send, {
      call: sync_call
    });
    let transferParams = (params) => [params.to, import_eth_wallet2.Utils.toString(params.value)];
    let transfer_send = async (params) => {
      let result = await this.send("transfer", transferParams(params));
      return result;
    };
    let transfer_call = async (params) => {
      let result = await this.call("transfer", transferParams(params));
      return result;
    };
    this.transfer = Object.assign(transfer_send, {
      call: transfer_call
    });
    let transferFromParams = (params) => [params.from, params.to, import_eth_wallet2.Utils.toString(params.value)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return result;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let updateBoostParams = (params) => [import_eth_wallet2.Utils.toString(params.newBoost0), import_eth_wallet2.Utils.toString(params.newBoost1)];
    let updateBoost_send = async (params) => {
      let result = await this.send("updateBoost", updateBoostParams(params));
      return result;
    };
    let updateBoost_call = async (params) => {
      let result = await this.call("updateBoost", updateBoostParams(params));
      return;
    };
    this.updateBoost = Object.assign(updateBoost_send, {
      call: updateBoost_call
    });
    let updateDelay_send = async (newDelay) => {
      let result = await this.send("updateDelay", [import_eth_wallet2.Utils.toString(newDelay)]);
      return result;
    };
    let updateDelay_call = async (newDelay) => {
      let result = await this.call("updateDelay", [import_eth_wallet2.Utils.toString(newDelay)]);
      return;
    };
    this.updateDelay = Object.assign(updateDelay_send, {
      call: updateDelay_call
    });
    let updateTradeFees_send = async (newFee) => {
      let result = await this.send("updateTradeFees", [import_eth_wallet2.Utils.toString(newFee)]);
      return result;
    };
    let updateTradeFees_call = async (newFee) => {
      let result = await this.call("updateTradeFees", [import_eth_wallet2.Utils.toString(newFee)]);
      return;
    };
    this.updateTradeFees = Object.assign(updateTradeFees_send, {
      call: updateTradeFees_call
    });
    let updateTradeState_send = async (tradeState) => {
      let result = await this.send("updateTradeState", [import_eth_wallet2.Utils.toString(tradeState)]);
      return result;
    };
    let updateTradeState_call = async (tradeState) => {
      let result = await this.call("updateTradeState", [import_eth_wallet2.Utils.toString(tradeState)]);
      return;
    };
    this.updateTradeState = Object.assign(updateTradeState_send, {
      call: updateTradeState_call
    });
    let updateWithdrawalFeeRatio_send = async (newFeeRatio) => {
      let result = await this.send("updateWithdrawalFeeRatio", [import_eth_wallet2.Utils.toString(newFeeRatio)]);
      return result;
    };
    let updateWithdrawalFeeRatio_call = async (newFeeRatio) => {
      let result = await this.call("updateWithdrawalFeeRatio", [import_eth_wallet2.Utils.toString(newFeeRatio)]);
      return;
    };
    this.updateWithdrawalFeeRatio = Object.assign(updateWithdrawalFeeRatio_send, {
      call: updateWithdrawalFeeRatio_call
    });
  }
};

// src/contracts/ImpossibleRouter.ts
var import_eth_wallet3 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ImpossibleRouter.json.ts
var ImpossibleRouter_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "address", "name": "_pairFactory", "type": "address" }, { "internalType": "address", "name": "_wrapFactory", "type": "address" }, { "internalType": "address", "name": "_utilitySettingAdmin", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "inputs": [], "name": "WETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
    { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "routerExtension", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "_WETH", "type": "address" }, { "internalType": "address", "name": "_routerExtension", "type": "address" }], "name": "setUtilities", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "wrapFactory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "stateMutability": "payable", "type": "receive" }
  ],
  "bytecode": "60c06040523480156200001157600080fd5b5060405162004a8238038062004a82833981016040819052620000349162000096565b60016000819055606093841b6001600160601b03199081166080529290931b90911660a05281546001600160a01b0319166001600160a01b03909116179055620000df565b80516001600160a01b03811681146200009157600080fd5b919050565b600080600060608486031215620000ab578283fd5b620000b68462000079565b9250620000c66020850162000079565b9150620000d66040850162000079565b90509250925092565b60805160601c60a05160601c61491062000172600039806104085280612a625280612dda5250806104ad528061074b528061080852806109a85280610ae95280610d035280610daf5280610f1852806113e452806114fd52806116b1528061186f5280611bf85280611e675280611fce528061200052806121db52806123c552806126eb528061280152506149106000f3fe6080604052600436106101395760003560e01c80638803dbee116100ab578063c45a01551161006f578063c45a01551461035c578063ded9382a14610371578063e8e3370014610391578063f305d719146103c0578063fa7de13b146103d3578063fb3bdb41146103f357610154565b80638803dbee146102d4578063ad5c4648146102f4578063af2979eb14610309578063b6f9de9514610329578063baa2abde1461033c57610154565b80634a25d94a116100fd5780634a25d94a1461021f578063590c61f01461023f5780635b0d5984146102545780635c11d79514610281578063791ac947146102a15780637ff36ab5146102c157610154565b8063017e2d551461015957806302751cec1461018457806318cbafe5146101b25780632195995c146101df57806338ed1739146101ff57610154565b36610154576003546001600160a01b0316331461015257fe5b005b600080fd5b34801561016557600080fd5b5061016e610406565b60405161017b91906144b8565b60405180910390f35b34801561019057600080fd5b506101a461019f366004614222565b61042a565b60405161017b92919061473d565b3480156101be57600080fd5b506101d26101cd3660046143d0565b610681565b60405161017b91906145d0565b3480156101eb57600080fd5b506101a46101fa3660046140fe565b61099e565b34801561020b57600080fd5b506101d261021a3660046143d0565b610a73565b34801561022b57600080fd5b506101d261023a3660046143d0565b610c39565b34801561024b57600080fd5b5061016e610d92565b34801561026057600080fd5b5061027461026f36600461427f565b610da1565b60405161017b9190614734565b34801561028d57600080fd5b5061015261029c3660046143d0565b610e7e565b3480156102ad57600080fd5b506101526102bc3660046143d0565b6110d4565b6101d26102cf366004614348565b61131c565b3480156102e057600080fd5b506101d26102ef3660046143d0565b61163b565b34801561030057600080fd5b5061016e6117e7565b34801561031557600080fd5b50610274610324366004614222565b6117f6565b610152610337366004614348565b611abd565b34801561034857600080fd5b506101a461035736600461408d565b611df1565b34801561036857600080fd5b5061016e611fcc565b34801561037d57600080fd5b506101a461038c36600461427f565b611ff0565b34801561039d57600080fd5b506103b16103ac3660046141a7565b6120d3565b60405161017b9392919061474b565b6103b16103ce366004614222565b6122b3565b3480156103df57600080fd5b506101526103ee366004614055565b6125a0565b6101d2610401366004614348565b612623565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008082428110156104575760405162461bcd60e51b815260040161044e906146fd565b60405180910390fd5b6002600054141561049d576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b600260009081556003546104dd907f0000000000000000000000000000000000000000000000000000000000000000908c906001600160a01b0316612988565b6040516323b872dd60e01b81529091506001600160a01b038216906323b872dd9061051090339085908e9060040161450d565b602060405180830381600087803b15801561052a57600080fd5b505af115801561053e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105629190614314565b5060025460035460405163e54dc2d760e01b81526001600160a01b039283169263e54dc2d7926105a0928f929091169086908e908e90600401614531565b6040805180830381600087803b1580156105b957600080fd5b505af11580156105cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f191906143ad565b90945092506106018a8786612a48565b600354604051632e1a7d4d60e01b81526001600160a01b0390911690632e1a7d4d90610631908690600401614734565b600060405180830381600087803b15801561064b57600080fd5b505af115801561065f573d6000803e3d6000fd5b5050505061066d8684612b8f565b505060016000559097909650945050505050565b606081428110156106a45760405162461bcd60e51b815260040161044e906146fd565b600260005414156106ea576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b60026000556003546001600160a01b03168686600019810181811061070b57fe5b9050602002016020810190610720919061401d565b6001600160a01b0316146107465760405162461bcd60e51b815260040161044e906146c6565b6107a47f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612c8792505050565b915086826001845103815181106107b757fe5b602002602001015110156107dd5760405162461bcd60e51b815260040161044e9061467a565b61088a868660008181106107ed57fe5b9050602002016020810190610802919061401d565b336108707f00000000000000000000000000000000000000000000000000000000000000008a8a600081811061083457fe5b9050602002016020810190610849919061401d565b8b8b600181811061085657fe5b905060200201602081019061086b919061401d565b612988565b8560008151811061087d57fe5b6020026020010151612dc0565b600254604051631a70b66160e21b81526001600160a01b03909116906369c2d984906108be9085908a908a906004016145e3565b600060405180830381600087803b1580156108d857600080fd5b505af11580156108ec573d6000803e3d6000fd5b505060035484516001600160a01b039091169250632e1a7d4d91508490600019810190811061091757fe5b60200260200101516040518263ffffffff1660e01b815260040161093b9190614734565b600060405180830381600087803b15801561095557600080fd5b505af1158015610969573d6000803e3d6000fd5b5050505061098e848360018551038151811061098157fe5b6020026020010151612b8f565b5060016000559695505050505050565b60008060006109ce7f00000000000000000000000000000000000000000000000000000000000000008f8f612988565b90506000876109dd578c6109e1565b6000195b60405163d505accf60e01b81529091506001600160a01b0383169063d505accf90610a1c903390309086908f908e908e908e906004016144cc565b600060405180830381600087803b158015610a3657600080fd5b505af1158015610a4a573d6000803e3d6000fd5b50505050610a5d8f8f8f8f8f8f8f611df1565b9350935050509b509b9950505050505050505050565b60608142811015610a965760405162461bcd60e51b815260040161044e906146fd565b60026000541415610adc576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b6002600081905550610b427f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612c8792505050565b91508682600184510381518110610b5557fe5b60200260200101511015610b7b5760405162461bcd60e51b815260040161044e9061467a565b610b8b868660008181106107ed57fe5b600254604051631a70b66160e21b81526001600160a01b03909116906369c2d98490610bbf9085908a908a906004016145e3565b600060405180830381600087803b158015610bd957600080fd5b505af1158015610bed573d6000803e3d6000fd5b5050505061098e868660018989905003818110610c0657fe5b9050602002016020810190610c1b919061401d565b8584600186510381518110610c2c57fe5b6020026020010151612a48565b60608142811015610c5c5760405162461bcd60e51b815260040161044e906146fd565b60026000541415610ca2576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b60026000556003546001600160a01b031686866000198101818110610cc357fe5b9050602002016020810190610cd8919061401d565b6001600160a01b031614610cfe5760405162461bcd60e51b815260040161044e906146c6565b610d5c7f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612fa392505050565b91508682600081518110610d6c57fe5b602002602001015111156107dd5760405162461bcd60e51b815260040161044e90614632565b6002546001600160a01b031681565b6003546000908190610ddf907f0000000000000000000000000000000000000000000000000000000000000000908e906001600160a01b0316612988565b9050600086610dee578b610df2565b6000195b60405163d505accf60e01b81529091506001600160a01b0383169063d505accf90610e2d903390309086908e908d908d908d906004016144cc565b600060405180830381600087803b158015610e4757600080fd5b505af1158015610e5b573d6000803e3d6000fd5b50505050610e6d8d8d8d8d8d8d6117f6565b9d9c50505050505050505050505050565b8042811015610e9f5760405162461bcd60e51b815260040161044e906146fd565b60026000541415610ee5576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b6002600081905550610f6c85856000818110610efd57fe5b9050602002016020810190610f12919061401d565b33610f667f000000000000000000000000000000000000000000000000000000000000000089896000818110610f4457fe5b9050602002016020810190610f59919061401d565b8a8a600181811061085657fe5b8a612dc0565b600254604051636fb0847760e01b81526001600160a01b0390911690636fb0847790610f9e90889088906004016145b4565b600060405180830381600087803b158015610fb857600080fd5b505af1158015610fcc573d6000803e3d6000fd5b505050506000858560018888905003818110610fe457fe5b9050602002016020810190610ff9919061401d565b6001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161102491906144b8565b60206040518083038186803b15801561103c57600080fd5b505afa158015611050573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110749190614330565b9050868110156110965760405162461bcd60e51b815260040161044e9061467a565b6110c5868660001981018181106110a957fe5b90506020020160208101906110be919061401d565b8583612a48565b50506001600055505050505050565b80428110156110f55760405162461bcd60e51b815260040161044e906146fd565b6002600054141561113b576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b60026000556003546001600160a01b03168585600019810181811061115c57fe5b9050602002016020810190611171919061401d565b6001600160a01b0316146111975760405162461bcd60e51b815260040161044e906146c6565b6111a785856000818110610efd57fe5b600254604051636fb0847760e01b81526001600160a01b0390911690636fb08477906111d990889088906004016145b4565b600060405180830381600087803b1580156111f357600080fd5b505af1158015611207573d6000803e3d6000fd5b50506003546040516370a0823160e01b8152600093506001600160a01b0390911691506370a082319061123e9030906004016144b8565b60206040518083038186803b15801561125657600080fd5b505afa15801561126a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128e9190614330565b9050868110156112b05760405162461bcd60e51b815260040161044e9061467a565b600354604051632e1a7d4d60e01b81526001600160a01b0390911690632e1a7d4d906112e0908490600401614734565b600060405180830381600087803b1580156112fa57600080fd5b505af115801561130e573d6000803e3d6000fd5b505050506110c58482612b8f565b6060814281101561133f5760405162461bcd60e51b815260040161044e906146fd565b60026000541415611385576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b600260009081556003546001600160a01b03169087908790816113a457fe5b90506020020160208101906113b9919061401d565b6001600160a01b0316146113df5760405162461bcd60e51b815260040161044e906146c6565b61143d7f000000000000000000000000000000000000000000000000000000000000000034888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612c8792505050565b9150868260018451038151811061145057fe5b602002602001015110156114765760405162461bcd60e51b815260040161044e9061467a565b60035482516001600160a01b039091169063d0e30db090849060009061149857fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156114cb57600080fd5b505af11580156114df573d6000803e3d6000fd5b50506003546001600160a01b0316925063a9059cbb915061152790507f00000000000000000000000000000000000000000000000000000000000000008989600081610f4457fe5b8460008151811061153457fe5b60200260200101516040518363ffffffff1660e01b815260040161155992919061459b565b602060405180830381600087803b15801561157357600080fd5b505af1158015611587573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ab9190614314565b6115b157fe5b600254604051631a70b66160e21b81526001600160a01b03909116906369c2d984906115e59085908a908a906004016145e3565b600060405180830381600087803b1580156115ff57600080fd5b505af1158015611613573d6000803e3d6000fd5b5050505061162c868660018989905003818110610c0657fe5b50600160005595945050505050565b6060814281101561165e5760405162461bcd60e51b815260040161044e906146fd565b600260005414156116a4576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b600260008190555061170a7f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612fa392505050565b9150868260008151811061171a57fe5b602002602001015111156117405760405162461bcd60e51b815260040161044e90614632565b611750868660008181106107ed57fe5b600254604051631a70b66160e21b81526001600160a01b03909116906369c2d984906117849085908a908a906004016145e3565b600060405180830381600087803b15801561179e57600080fd5b505af11580156117b2573d6000803e3d6000fd5b5050505061098e8686600189899050038181106117cb57fe5b90506020020160208101906117e0919061401d565b858a612a48565b6003546001600160a01b031681565b600081428110156118195760405162461bcd60e51b815260040161044e906146fd565b6002600054141561185f576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b6002600090815560035461189f907f0000000000000000000000000000000000000000000000000000000000000000908b906001600160a01b0316612988565b6040516323b872dd60e01b81529091506001600160a01b038216906323b872dd906118d290339085908d9060040161450d565b602060405180830381600087803b1580156118ec57600080fd5b505af1158015611900573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119249190614314565b5060025460035460405163e54dc2d760e01b81526001600160a01b039283169263e54dc2d792611962928e929091169086908d908d90600401614531565b6040805180830381600087803b15801561197b57600080fd5b505af115801561198f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119b391906143ad565b6040516370a0823160e01b8152909450611a4091508a9087906001600160a01b038316906370a08231906119eb9030906004016144b8565b60206040518083038186803b158015611a0357600080fd5b505afa158015611a17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3b9190614330565b612a48565b600354604051632e1a7d4d60e01b81526001600160a01b0390911690632e1a7d4d90611a70908690600401614734565b600060405180830381600087803b158015611a8a57600080fd5b505af1158015611a9e573d6000803e3d6000fd5b50505050611aac8584612b8f565b505060016000559695505050505050565b8042811015611ade5760405162461bcd60e51b815260040161044e906146fd565b60026000541415611b24576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b600260009081556003546001600160a01b0316908690869081611b4357fe5b9050602002016020810190611b58919061401d565b6001600160a01b031614611b7e5760405162461bcd60e51b815260040161044e906146c6565b60035460408051630d0e30db60e41b8152905134926001600160a01b03169163d0e30db091849160048082019260009290919082900301818588803b158015611bc657600080fd5b505af1158015611bda573d6000803e3d6000fd5b50506003546001600160a01b0316925063a9059cbb9150611c2290507f00000000000000000000000000000000000000000000000000000000000000008989600081610f4457fe5b836040518363ffffffff1660e01b8152600401611c4092919061459b565b602060405180830381600087803b158015611c5a57600080fd5b505af1158015611c6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c929190614314565b611c9857fe5b600254604051636fb0847760e01b81526001600160a01b0390911690636fb0847790611cca90899089906004016145b4565b600060405180830381600087803b158015611ce457600080fd5b505af1158015611cf8573d6000803e3d6000fd5b505050506000868660018989905003818110611d1057fe5b9050602002016020810190611d25919061401d565b6001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401611d5091906144b8565b60206040518083038186803b158015611d6857600080fd5b505afa158015611d7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611da09190614330565b905087811015611dc25760405162461bcd60e51b815260040161044e9061467a565b6110c587876000198101818110611dd557fe5b9050602002016020810190611dea919061401d565b8683612a48565b6000808242811015611e155760405162461bcd60e51b815260040161044e906146fd565b60026000541415611e5b576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b60026000908155611e8d7f00000000000000000000000000000000000000000000000000000000000000008c8c612988565b6040516323b872dd60e01b81529091506001600160a01b038216906323b872dd90611ec090339085908e9060040161450d565b602060405180830381600087803b158015611eda57600080fd5b505af1158015611eee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f129190614314565b5060025460405163e54dc2d760e01b81526001600160a01b039091169063e54dc2d790611f4b908e908e9086908e908e90600401614531565b6040805180830381600087803b158015611f6457600080fd5b505af1158015611f78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f9c91906143ad565b9094509250611fac8b8786612a48565b611fb78a8785612a48565b50506001600055909890975095505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60035460009081908190612030907f0000000000000000000000000000000000000000000000000000000000000000908f906001600160a01b0316612988565b905060008761203f578c612043565b6000195b60405163d505accf60e01b81529091506001600160a01b0383169063d505accf9061207e903390309086908f908e908e908e906004016144cc565b600060405180830381600087803b15801561209857600080fd5b505af11580156120ac573d6000803e3d6000fd5b505050506120be8e8e8e8e8e8e61042a565b909f909e509c50505050505050505050505050565b600080600083428110156120f95760405162461bcd60e51b815260040161044e906146fd565b6002600054141561213f576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b6002600081905554604051633351733f60e01b81526001600160a01b0390911690633351733f9061217e908f908f908f908f908f908f90600401614565565b6040805180830381600087803b15801561219757600080fd5b505af11580156121ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121cf91906143ad565b909450925060006122017f00000000000000000000000000000000000000000000000000000000000000008e8e612988565b905061220f8d338388612dc0565b61221b8c338387612dc0565b6040516335313c2160e11b81526001600160a01b03821690636a62784290612247908a906004016144b8565b602060405180830381600087803b15801561226157600080fd5b505af1158015612275573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122999190614330565b925050600160008190555050985098509895505050505050565b600080600083428110156122d95760405162461bcd60e51b815260040161044e906146fd565b6002600054141561231f576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b6002600081905554600354604051633351733f60e01b81526001600160a01b0392831692633351733f92612363928f92909116908e9034908f908f90600401614565565b6040805180830381600087803b15801561237c57600080fd5b505af1158015612390573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123b491906143ad565b60035491955093506000906123f5907f0000000000000000000000000000000000000000000000000000000000000000908d906001600160a01b0316612988565b90506124038b338388612dc0565b600360009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561245357600080fd5b505af1158015612467573d6000803e3d6000fd5b505060035460405163a9059cbb60e01b81526001600160a01b03909116935063a9059cbb925061249e91508490889060040161459b565b602060405180830381600087803b1580156124b857600080fd5b505af11580156124cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124f09190614314565b6124f657fe5b6040516335313c2160e11b81526001600160a01b03821690636a62784290612522908a906004016144b8565b602060405180830381600087803b15801561253c57600080fd5b505af1158015612550573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125749190614330565b92508334111561258a5761258a33853403612b8f565b5060016000819055505096509650969350505050565b6003546001600160a01b03161580156125c257506002546001600160a01b0316155b6125cb57600080fd5b6001546001600160a01b031633146125f55760405162461bcd60e51b815260040161044e90614613565b600380546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b606081428110156126465760405162461bcd60e51b815260040161044e906146fd565b6002600054141561268c576040805162461bcd60e51b815260206004820152601f60248201526000805160206147b4833981519152604482015290519081900360640190fd5b600260009081556003546001600160a01b03169087908790816126ab57fe5b90506020020160208101906126c0919061401d565b6001600160a01b0316146126e65760405162461bcd60e51b815260040161044e906146c6565b6127447f000000000000000000000000000000000000000000000000000000000000000088888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612fa392505050565b9150348260008151811061275457fe5b6020026020010151111561277a5760405162461bcd60e51b815260040161044e90614632565b60035482516001600160a01b039091169063d0e30db090849060009061279c57fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156127cf57600080fd5b505af11580156127e3573d6000803e3d6000fd5b50506003546001600160a01b0316925063a9059cbb915061282b90507f00000000000000000000000000000000000000000000000000000000000000008989600081610f4457fe5b8460008151811061283857fe5b60200260200101516040518363ffffffff1660e01b815260040161285d92919061459b565b602060405180830381600087803b15801561287757600080fd5b505af115801561288b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128af9190614314565b6128b557fe5b600254604051631a70b66160e21b81526001600160a01b03909116906369c2d984906128e99085908a908a906004016145e3565b600060405180830381600087803b15801561290357600080fd5b505af1158015612917573d6000803e3d6000fd5b5050505061294c86866001898990500381811061293057fe5b9050602002016020810190612945919061401d565b8589612a48565b8160008151811061295957fe5b602002602001015134111561162c5761162c338360008151811061297957fe5b60200260200101513403612b8f565b600080600061299785856130d5565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f44af417f4173c5e233fab14adb0d4835da35ecaf1f17b0458831e84a678be43d609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b604051632a4d95e760e21b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a936579c90612a979087906004016144b8565b60206040518083038186803b158015612aaf57600080fd5b505afa158015612ac3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ae79190614039565b90506001600160a01b038116612b0757612b028484846131b3565b612b89565b60405163f3fef3a360e01b81526001600160a01b0385169063f3fef3a390612b35908690869060040161459b565b602060405180830381600087803b158015612b4f57600080fd5b505af1158015612b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b879190614330565b505b50505050565b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b60208310612bdb5780518252601f199092019160209182019101612bbc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612c3d576040519150601f19603f3d011682016040523d82523d6000602084013e612c42565b606091505b5050905080612c825760405162461bcd60e51b81526004018080602001828103825260348152602001806148056034913960400191505060405180910390fd5b505050565b6060600282511015612ce0576040805162461bcd60e51b815260206004820152601f60248201527f496d706f737369626c654c6962726172793a20494e56414c49445f5041544800604482015290519081900360640190fd5b815167ffffffffffffffff81118015612cf857600080fd5b50604051908082528060200260200182016040528015612d22578160200160208202803683370190505b5090508281600081518110612d3357fe5b60200260200101818152505060005b6001835103811015612db857612d96828281518110612d5d57fe5b6020026020010151848381518110612d7157fe5b6020026020010151858460010181518110612d8857fe5b6020026020010151886132ff565b828260010181518110612da557fe5b6020908102919091010152600101612d42565b509392505050565b604051632a4d95e760e21b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a936579c90612e0f9088906004016144b8565b60206040518083038186803b158015612e2757600080fd5b505afa158015612e3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e5f9190614039565b90506001600160a01b038116612e8057612e7b85858585613668565b612b87565b604051635ac402df60e11b81526000906001600160a01b0387169063b58805be90612eaf908690600401614734565b602060405180830381600087803b158015612ec957600080fd5b505af1158015612edd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f019190614330565b9050612f0f82863084613668565b612f1a8287836137c4565b6040516311f9fbc960e21b81526001600160a01b038716906347e7ef2490612f48908790859060040161459b565b602060405180830381600087803b158015612f6257600080fd5b505af1158015612f76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f9a9190614330565b50505050505050565b6060600282511015612ffc576040805162461bcd60e51b815260206004820152601f60248201527f496d706f737369626c654c6962726172793a20494e56414c49445f5041544800604482015290519081900360640190fd5b815167ffffffffffffffff8111801561301457600080fd5b5060405190808252806020026020018201604052801561303e578160200160208202803683370190505b509050828160018351038151811061305257fe5b60209081029190910101528151600019015b8015612db8576130b282828151811061307957fe5b602002602001015184600184038151811061309057fe5b60200260200101518584815181106130a457fe5b602002602001015188613910565b8260018303815181106130c157fe5b602090810291909101015260001901613064565b600080826001600160a01b0316846001600160a01b031614156131295760405162461bcd60e51b81526004018080602001828103825260268152602001806148b56026913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b03161061314957828461314c565b83835b90925090506001600160a01b0382166131ac576040805162461bcd60e51b815260206004820152601f60248201527f496d706f737369626c654c6962726172793a205a45524f5f4144445245535300604482015290519081900360640190fd5b9250929050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1781529251825160009485949389169392918291908083835b6020831061322f5780518252601f199092019160209182019101613210565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613291576040519150601f19603f3d011682016040523d82523d6000602084013e613296565b606091505b50915091508180156132c45750805115806132c457508080602001905160208110156132c157600080fd5b50515b612b875760405162461bcd60e51b815260040180806020018281038252602d815260200180614888602d913960400191505060405180910390fd5b600080851161333f5760405162461bcd60e51b815260040180806020018281038252602c815260200180614788602c913960400191505060405180910390fd5b6000806000806000806133528a8a6130d5565b509050806001600160a01b03168a6001600160a01b0316149150613377888b8b613c2b565b80955081975082985050505050600080600080856001600160a01b031663e94e3d8d6040518163ffffffff1660e01b815260040160606040518083038186803b1580156133c357600080fd5b505afa1580156133d7573d6000803e3d6000fd5b505050506040513d60608110156133ed57600080fd5b5080516020820151604090920151945061ffff16925090506134148e612710849003613ced565b9650600081600381111561342457fe5b14806134445750600181600381111561343957fe5b148015613444575084155b806134625750600281600381111561345857fe5b1480156134625750845b61349d5760405162461bcd60e51b81526004018080602001828103825260248152602001806148396024913960400191505060405180910390fd5b505080156135f157600080856001600160a01b031663b6b9f61b6040518163ffffffff1660e01b8152600401604080518083038186803b1580156134e057600080fd5b505afa1580156134f4573d6000803e3d6000fd5b505050506040513d604081101561350a57600080fd5b5080516020909101519092509050600061354661354184848961352d578c61352f565b8d5b8a61353a578e61353c565b8d5b613d56565b613de3565b905061355481612710613ced565b61356a6135638c612710613ced565b8a90613e35565b106135d5576135858661357d578261357f565b835b82613e84565b9450808a1080156135965750818314155b156135d0576135a58982613e9b565b9a506135c76135c06127106135ba848e613e9b565b90613ced565b8990613e9b565b97508099508098505b6135ed565b6135ea866135e3578361357f565b8282613e84565b94505b5050505b60006136076136008885613e35565b8790613ced565b905060006136258761361f6127106135ba8d89613e35565b90613e35565b9050600081838161363257fe5b04905088811161364b57613646818c613e35565b613655565b613655898c613e35565b9f9e505050505050505050505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b178152925182516000948594938a169392918291908083835b602083106136ec5780518252601f1990920191602091820191016136cd565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461374e576040519150601f19603f3d011682016040523d82523d6000602084013e613753565b606091505b5091509150818015613781575080511580613781575080806020019051602081101561377e57600080fd5b50515b6137bc5760405162461bcd60e51b81526004018080602001828103825260318152602001806147d46031913960400191505060405180910390fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b1781529251825160009485949389169392918291908083835b602083106138405780518252601f199092019160209182019101613821565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146138a2576040519150601f19603f3d011682016040523d82523d6000602084013e6138a7565b606091505b50915091508180156138d55750805115806138d557508080602001905160208110156138d257600080fd5b50515b612b875760405162461bcd60e51b815260040180806020018281038252602b81526020018061485d602b913960400191505060405180910390fd5b60008085116139505760405162461bcd60e51b815260040180806020018281038252602c815260200180614788602c913960400191505060405180910390fd5b60008060008060008060008060006139688d8d6130d5565b506001600160a01b038e81169116149450600090506139888b8e8e613c2b565b809350819a50829b505050506000816001600160a01b031663e94e3d8d6040518163ffffffff1660e01b815260040160606040518083038186803b1580156139cf57600080fd5b505afa1580156139e3573d6000803e3d6000fd5b505050506040513d60608110156139f957600080fd5b508051602082015160409092015161ffff9091169850955090506000816003811115613a2157fe5b1480613a4157506001816003811115613a3657fe5b148015613a41575085155b80613a5f57506002816003811115613a5557fe5b148015613a5f5750855b613a9a5760405162461bcd60e51b81526004018080602001828103825260248152602001806148396024913960400191505060405180910390fd5b816001600160a01b031663b6b9f61b6040518163ffffffff1660e01b8152600401604080518083038186803b158015613ad257600080fd5b505afa158015613ae6573d6000803e3d6000fd5b505050506040513d6040811015613afc57600080fd5b50805160209091015190945092505083159050613bc0576000613b3b613541848488613b28578b613b2a565b8c5b89613b35578d61353c565b8c613d56565b905080613b518f8a613e9b90919063ffffffff16565b10613b6b57613b64856135e3578361357f565b9650613bbe565b613b798561357d578261357f565b96508088118015613b8a5750818314155b15613bbe57613b9f6127106135ba838c613e9b565b9950613bb5613bae8983613e9b565b8f90613e9b565b9d508097508098505b505b5060009150613bd990506127106135ba8d818a89613e35565b90506000613bf18c613beb8888613e35565b90613e9b565b9050613c1b600161361f8661271003613c15858781613c0c57fe5b8e919004613e35565b90613eeb565b9c9b505050505050505050505050565b600080600080613c3b86866130d5565b509050613c49878787612988565b9150600080836001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401604080518083038186803b158015613c8657600080fd5b505afa158015613c9a573d6000803e3d6000fd5b505050506040513d6040811015613cb057600080fd5b50805160209091015190925090506001600160a01b0388811690841614613cd8578082613cdb565b81815b909a9099509397509295505050505050565b6000811580613d0857505080820282828281613d0557fe5b04145b613d50576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b92915050565b600080828411613d7057613d6b856001613e9b565b613d7b565b613d7b866001613e9b565b90506000613d8f600161361f846002613ced565b90506000613db5613da1836002613ced565b613c15613dae8989613e35565b8690613ced565b9050600281613dd5613dcb85613c158b8b613ced565b6002850a01613de3565b010a98975050505050505050565b60006003821115613e26575080600160028204015b81811015613e2057809150600281828581613e0f57fe5b040181613e1857fe5b049050613df8565b50613e30565b8115613e30575060015b919050565b80820182811015613d50576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b6000613e94600019840183613ced565b9392505050565b80820382811115613d50576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000613e9483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060008183613fb45760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613f79578181015183820152602001613f61565b50505050905090810190601f168015613fa65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581613fc057fe5b0495945050505050565b60008083601f840112613fdb578182fd5b50813567ffffffffffffffff811115613ff2578182fd5b60208301915083602080830285010111156131ac57600080fd5b803560ff81168114613e3057600080fd5b60006020828403121561402e578081fd5b8135613e9481614761565b60006020828403121561404a578081fd5b8151613e9481614761565b60008060408385031215614067578081fd5b823561407281614761565b9150602083013561408281614761565b809150509250929050565b600080600080600080600060e0888a0312156140a7578283fd5b87356140b281614761565b965060208801356140c281614761565b955060408801359450606088013593506080880135925060a08801356140e781614761565b8092505060c0880135905092959891949750929550565b60008060008060008060008060008060006101608c8e03121561411f578384fd5b8b3561412a81614761565b9a5060208c013561413a81614761565b995060408c0135985060608c0135975060808c0135965060a08c013561415f81614761565b955060c08c0135945060e08c013561417681614779565b93506141856101008d0161400c565b92506101208c013591506101408c013590509295989b509295989b9093969950565b600080600080600080600080610100898b0312156141c3578384fd5b88356141ce81614761565b975060208901356141de81614761565b965060408901359550606089013594506080890135935060a0890135925060c089013561420a81614761565b8092505060e089013590509295985092959890939650565b60008060008060008060c0878903121561423a578182fd5b863561424581614761565b9550602087013594506040870135935060608701359250608087013561426a81614761565b8092505060a087013590509295509295509295565b6000806000806000806000806000806101408b8d03121561429e578384fd5b8a356142a981614761565b995060208b0135985060408b0135975060608b0135965060808b01356142ce81614761565b955060a08b0135945060c08b01356142e581614779565b93506142f360e08c0161400c565b92506101008b013591506101208b013590509295989b9194979a5092959850565b600060208284031215614325578081fd5b8151613e9481614779565b600060208284031215614341578081fd5b5051919050565b60008060008060006080868803121561435f578283fd5b85359450602086013567ffffffffffffffff81111561437c578384fd5b61438888828901613fca565b909550935050604086013561439c81614761565b949793965091946060013592915050565b600080604083850312156143bf578182fd5b505080516020909101519092909150565b60008060008060008060a087890312156143e8578384fd5b8635955060208701359450604087013567ffffffffffffffff81111561440c578485fd5b61441889828a01613fca565b909550935050606087013561442c81614761565b80925050608087013590509295509295509295565b60008284526020808501945082825b8581101561447e57813561446381614761565b6001600160a01b031687529582019590820190600101614450565b509495945050505050565b6000815180845260208085019450808401835b8381101561447e5781518752958201959082019060010161449c565b6001600160a01b0391909116815260200190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03958616815293851660208501529190931660408301526060820192909252608081019190915260a00190565b6001600160a01b03968716815294909516602085015260408401929092526060830152608082015260a081019190915260c00190565b6001600160a01b03929092168252602082015260400190565b6000602082526145c8602083018486614441565b949350505050565b600060208252613e946020830184614489565b6000604082526145f66040830186614489565b8281036020840152614609818587614441565b9695505050505050565b60208082526005908201526449463a203f60d81b604082015260600190565b60208082526028908201527f496d706f737369626c65526f757465723a204558434553534956455f494e50556040820152671517d05353d5539560c21b606082015260800190565b6020808252602c908201527f496d706f737369626c65526f757465723a20494e53554646494349454e545f4f60408201526b155514155517d05353d5539560a21b606082015260800190565b6020808252601e908201527f496d706f737369626c65526f757465723a20494e56414c49445f504154480000604082015260600190565b60208082526019908201527f496d706f737369626c65526f757465723a204558504952454400000000000000604082015260600190565b90815260200190565b918252602082015260400190565b9283526020830191909152604082015260600190565b6001600160a01b038116811461477657600080fd5b50565b801515811461477657600080fdfe496d706f737369626c654c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e545265656e7472616e637947756172643a207265656e7472616e742063616c6c005472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c65645472616e7366657248656c7065723a3a736166655472616e736665724554483a20455448207472616e73666572206661696c6564496d706f737369626c654c6962726172793a2054524144455f4e4f545f414c4c4f5745445472616e7366657248656c7065723a3a73616665417070726f76653a20617070726f7665206661696c65645472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564496d706f737369626c654c6962726172793a204944454e544943414c5f414444524553534553a2646970667358221220b2c11143edd0daa562b8399bc0107c60cef5546ff9a21d1a2d1e69621f9a8afb64736f6c63430007060033"
};

// src/contracts/ImpossibleRouter.ts
var ImpossibleRouter = class extends import_eth_wallet3.Contract {
  constructor(wallet, address) {
    super(wallet, address, ImpossibleRouter_json_default.abi, ImpossibleRouter_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.pairFactory, params.wrapFactory, params.utilitySettingAdmin]);
  }
  assign() {
    let WETH_call = async () => {
      let result = await this.call("WETH");
      return result;
    };
    this.WETH = WETH_call;
    let factory_call = async () => {
      let result = await this.call("factory");
      return result;
    };
    this.factory = factory_call;
    let routerExtension_call = async () => {
      let result = await this.call("routerExtension");
      return result;
    };
    this.routerExtension = routerExtension_call;
    let wrapFactory_call = async () => {
      let result = await this.call("wrapFactory");
      return result;
    };
    this.wrapFactory = wrapFactory_call;
    let addLiquidityParams = (params) => [params.tokenA, params.tokenB, import_eth_wallet3.Utils.toString(params.amountADesired), import_eth_wallet3.Utils.toString(params.amountBDesired), import_eth_wallet3.Utils.toString(params.amountAMin), import_eth_wallet3.Utils.toString(params.amountBMin), params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let addLiquidity_send = async (params) => {
      let result = await this.send("addLiquidity", addLiquidityParams(params));
      return result;
    };
    let addLiquidity_call = async (params) => {
      let result = await this.call("addLiquidity", addLiquidityParams(params));
      return {
        amountA: new import_eth_wallet3.BigNumber(result.amountA),
        amountB: new import_eth_wallet3.BigNumber(result.amountB),
        liquidity: new import_eth_wallet3.BigNumber(result.liquidity)
      };
    };
    this.addLiquidity = Object.assign(addLiquidity_send, {
      call: addLiquidity_call
    });
    let addLiquidityETHParams = (params) => [params.token, import_eth_wallet3.Utils.toString(params.amountTokenDesired), import_eth_wallet3.Utils.toString(params.amountTokenMin), import_eth_wallet3.Utils.toString(params.amountETHMin), params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let addLiquidityETH_send = async (params, _value) => {
      let result = await this.send("addLiquidityETH", addLiquidityETHParams(params), { value: _value });
      return result;
    };
    let addLiquidityETH_call = async (params, _value) => {
      let result = await this.call("addLiquidityETH", addLiquidityETHParams(params), { value: _value });
      return {
        amountToken: new import_eth_wallet3.BigNumber(result.amountToken),
        amountETH: new import_eth_wallet3.BigNumber(result.amountETH),
        liquidity: new import_eth_wallet3.BigNumber(result.liquidity)
      };
    };
    this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
      call: addLiquidityETH_call
    });
    let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, import_eth_wallet3.Utils.toString(params.liquidity), import_eth_wallet3.Utils.toString(params.amountAMin), import_eth_wallet3.Utils.toString(params.amountBMin), params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let removeLiquidity_send = async (params) => {
      let result = await this.send("removeLiquidity", removeLiquidityParams(params));
      return result;
    };
    let removeLiquidity_call = async (params) => {
      let result = await this.call("removeLiquidity", removeLiquidityParams(params));
      return {
        amountA: new import_eth_wallet3.BigNumber(result.amountA),
        amountB: new import_eth_wallet3.BigNumber(result.amountB)
      };
    };
    this.removeLiquidity = Object.assign(removeLiquidity_send, {
      call: removeLiquidity_call
    });
    let removeLiquidityETHParams = (params) => [params.token, import_eth_wallet3.Utils.toString(params.liquidity), import_eth_wallet3.Utils.toString(params.amountTokenMin), import_eth_wallet3.Utils.toString(params.amountETHMin), params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let removeLiquidityETH_send = async (params) => {
      let result = await this.send("removeLiquidityETH", removeLiquidityETHParams(params));
      return result;
    };
    let removeLiquidityETH_call = async (params) => {
      let result = await this.call("removeLiquidityETH", removeLiquidityETHParams(params));
      return {
        amountToken: new import_eth_wallet3.BigNumber(result.amountToken),
        amountETH: new import_eth_wallet3.BigNumber(result.amountETH)
      };
    };
    this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
      call: removeLiquidityETH_call
    });
    let removeLiquidityETHSupportingFeeOnTransferTokensParams = (params) => [params.token, import_eth_wallet3.Utils.toString(params.liquidity), import_eth_wallet3.Utils.toString(params.amountTokenMin), import_eth_wallet3.Utils.toString(params.amountETHMin), params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let removeLiquidityETHSupportingFeeOnTransferTokens_send = async (params) => {
      let result = await this.send("removeLiquidityETHSupportingFeeOnTransferTokens", removeLiquidityETHSupportingFeeOnTransferTokensParams(params));
      return result;
    };
    let removeLiquidityETHSupportingFeeOnTransferTokens_call = async (params) => {
      let result = await this.call("removeLiquidityETHSupportingFeeOnTransferTokens", removeLiquidityETHSupportingFeeOnTransferTokensParams(params));
      return new import_eth_wallet3.BigNumber(result);
    };
    this.removeLiquidityETHSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHSupportingFeeOnTransferTokens_send, {
      call: removeLiquidityETHSupportingFeeOnTransferTokens_call
    });
    let removeLiquidityETHWithPermitParams = (params) => [params.token, import_eth_wallet3.Utils.toString(params.liquidity), import_eth_wallet3.Utils.toString(params.amountTokenMin), import_eth_wallet3.Utils.toString(params.amountETHMin), params.to, import_eth_wallet3.Utils.toString(params.deadline), params.approveMax, import_eth_wallet3.Utils.toString(params.v), import_eth_wallet3.Utils.stringToBytes32(params.r), import_eth_wallet3.Utils.stringToBytes32(params.s)];
    let removeLiquidityETHWithPermit_send = async (params) => {
      let result = await this.send("removeLiquidityETHWithPermit", removeLiquidityETHWithPermitParams(params));
      return result;
    };
    let removeLiquidityETHWithPermit_call = async (params) => {
      let result = await this.call("removeLiquidityETHWithPermit", removeLiquidityETHWithPermitParams(params));
      return {
        amountToken: new import_eth_wallet3.BigNumber(result.amountToken),
        amountETH: new import_eth_wallet3.BigNumber(result.amountETH)
      };
    };
    this.removeLiquidityETHWithPermit = Object.assign(removeLiquidityETHWithPermit_send, {
      call: removeLiquidityETHWithPermit_call
    });
    let removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams = (params) => [params.token, import_eth_wallet3.Utils.toString(params.liquidity), import_eth_wallet3.Utils.toString(params.amountTokenMin), import_eth_wallet3.Utils.toString(params.amountETHMin), params.to, import_eth_wallet3.Utils.toString(params.deadline), params.approveMax, import_eth_wallet3.Utils.toString(params.v), import_eth_wallet3.Utils.stringToBytes32(params.r), import_eth_wallet3.Utils.stringToBytes32(params.s)];
    let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send = async (params) => {
      let result = await this.send("removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params));
      return result;
    };
    let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call = async (params) => {
      let result = await this.call("removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params));
      return new import_eth_wallet3.BigNumber(result);
    };
    this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send, {
      call: removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call
    });
    let removeLiquidityWithPermitParams = (params) => [params.tokenA, params.tokenB, import_eth_wallet3.Utils.toString(params.liquidity), import_eth_wallet3.Utils.toString(params.amountAMin), import_eth_wallet3.Utils.toString(params.amountBMin), params.to, import_eth_wallet3.Utils.toString(params.deadline), params.approveMax, import_eth_wallet3.Utils.toString(params.v), import_eth_wallet3.Utils.stringToBytes32(params.r), import_eth_wallet3.Utils.stringToBytes32(params.s)];
    let removeLiquidityWithPermit_send = async (params) => {
      let result = await this.send("removeLiquidityWithPermit", removeLiquidityWithPermitParams(params));
      return result;
    };
    let removeLiquidityWithPermit_call = async (params) => {
      let result = await this.call("removeLiquidityWithPermit", removeLiquidityWithPermitParams(params));
      return {
        amountA: new import_eth_wallet3.BigNumber(result.amountA),
        amountB: new import_eth_wallet3.BigNumber(result.amountB)
      };
    };
    this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
      call: removeLiquidityWithPermit_call
    });
    let setUtilitiesParams = (params) => [params.WETH, params.routerExtension];
    let setUtilities_send = async (params) => {
      let result = await this.send("setUtilities", setUtilitiesParams(params));
      return result;
    };
    let setUtilities_call = async (params) => {
      let result = await this.call("setUtilities", setUtilitiesParams(params));
      return;
    };
    this.setUtilities = Object.assign(setUtilities_send, {
      call: setUtilities_call
    });
    let swapETHForExactTokensParams = (params) => [import_eth_wallet3.Utils.toString(params.amountOut), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapETHForExactTokens_send = async (params, _value) => {
      let result = await this.send("swapETHForExactTokens", swapETHForExactTokensParams(params), { value: _value });
      return result;
    };
    let swapETHForExactTokens_call = async (params, _value) => {
      let result = await this.call("swapETHForExactTokens", swapETHForExactTokensParams(params), { value: _value });
      return result.map((e) => new import_eth_wallet3.BigNumber(e));
    };
    this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
      call: swapETHForExactTokens_call
    });
    let swapExactETHForTokensParams = (params) => [import_eth_wallet3.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapExactETHForTokens_send = async (params, _value) => {
      let result = await this.send("swapExactETHForTokens", swapExactETHForTokensParams(params), { value: _value });
      return result;
    };
    let swapExactETHForTokens_call = async (params, _value) => {
      let result = await this.call("swapExactETHForTokens", swapExactETHForTokensParams(params), { value: _value });
      return result.map((e) => new import_eth_wallet3.BigNumber(e));
    };
    this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
      call: swapExactETHForTokens_call
    });
    let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params) => [import_eth_wallet3.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapExactETHForTokensSupportingFeeOnTransferTokens_send = async (params, _value) => {
      let result = await this.send("swapExactETHForTokensSupportingFeeOnTransferTokens", swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
      return result;
    };
    let swapExactETHForTokensSupportingFeeOnTransferTokens_call = async (params, _value) => {
      let result = await this.call("swapExactETHForTokensSupportingFeeOnTransferTokens", swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
      return;
    };
    this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactETHForTokensSupportingFeeOnTransferTokens_send, {
      call: swapExactETHForTokensSupportingFeeOnTransferTokens_call
    });
    let swapExactTokensForETHParams = (params) => [import_eth_wallet3.Utils.toString(params.amountIn), import_eth_wallet3.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapExactTokensForETH_send = async (params) => {
      let result = await this.send("swapExactTokensForETH", swapExactTokensForETHParams(params));
      return result;
    };
    let swapExactTokensForETH_call = async (params) => {
      let result = await this.call("swapExactTokensForETH", swapExactTokensForETHParams(params));
      return result.map((e) => new import_eth_wallet3.BigNumber(e));
    };
    this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
      call: swapExactTokensForETH_call
    });
    let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params) => [import_eth_wallet3.Utils.toString(params.amountIn), import_eth_wallet3.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapExactTokensForETHSupportingFeeOnTransferTokens_send = async (params) => {
      let result = await this.send("swapExactTokensForETHSupportingFeeOnTransferTokens", swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
      return result;
    };
    let swapExactTokensForETHSupportingFeeOnTransferTokens_call = async (params) => {
      let result = await this.call("swapExactTokensForETHSupportingFeeOnTransferTokens", swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
      return;
    };
    this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForETHSupportingFeeOnTransferTokens_send, {
      call: swapExactTokensForETHSupportingFeeOnTransferTokens_call
    });
    let swapExactTokensForTokensParams = (params) => [import_eth_wallet3.Utils.toString(params.amountIn), import_eth_wallet3.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapExactTokensForTokens_send = async (params) => {
      let result = await this.send("swapExactTokensForTokens", swapExactTokensForTokensParams(params));
      return result;
    };
    let swapExactTokensForTokens_call = async (params) => {
      let result = await this.call("swapExactTokensForTokens", swapExactTokensForTokensParams(params));
      return result.map((e) => new import_eth_wallet3.BigNumber(e));
    };
    this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
      call: swapExactTokensForTokens_call
    });
    let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [import_eth_wallet3.Utils.toString(params.amountIn), import_eth_wallet3.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params) => {
      let result = await this.send("swapExactTokensForTokensSupportingFeeOnTransferTokens", swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
      return result;
    };
    let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params) => {
      let result = await this.call("swapExactTokensForTokensSupportingFeeOnTransferTokens", swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
      return;
    };
    this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
      call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call
    });
    let swapTokensForExactETHParams = (params) => [import_eth_wallet3.Utils.toString(params.amountOut), import_eth_wallet3.Utils.toString(params.amountInMax), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapTokensForExactETH_send = async (params) => {
      let result = await this.send("swapTokensForExactETH", swapTokensForExactETHParams(params));
      return result;
    };
    let swapTokensForExactETH_call = async (params) => {
      let result = await this.call("swapTokensForExactETH", swapTokensForExactETHParams(params));
      return result.map((e) => new import_eth_wallet3.BigNumber(e));
    };
    this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
      call: swapTokensForExactETH_call
    });
    let swapTokensForExactTokensParams = (params) => [import_eth_wallet3.Utils.toString(params.amountOut), import_eth_wallet3.Utils.toString(params.amountInMax), params.path, params.to, import_eth_wallet3.Utils.toString(params.deadline)];
    let swapTokensForExactTokens_send = async (params) => {
      let result = await this.send("swapTokensForExactTokens", swapTokensForExactTokensParams(params));
      return result;
    };
    let swapTokensForExactTokens_call = async (params) => {
      let result = await this.call("swapTokensForExactTokens", swapTokensForExactTokensParams(params));
      return result.map((e) => new import_eth_wallet3.BigNumber(e));
    };
    this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
      call: swapTokensForExactTokens_call
    });
  }
};

// src/contracts/ImpossibleRouterExtension.ts
var import_eth_wallet4 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ImpossibleRouterExtension.json.ts
var ImpossibleRouterExtension_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address", "name": "tokenIn", "type": "address" }, { "internalType": "address", "name": "tokenOut", "type": "address" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address", "name": "tokenIn", "type": "address" }, { "internalType": "address", "name": "tokenOut", "type": "address" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "address", "name": "pair", "type": "address" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "swapSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60a060405234801561001057600080fd5b506040516123343803806123348339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b03166122916100a36000398061057d52806105b052806105ef52806106a8528061075b5280610895528061096852806109ab5280610b405280610b805280610bb65280610d0c5280610d3552506122916000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80636fb08477116100665780636fb084771461039b578063ad615dec1461043c578063c45a015514610465578063d06ca61f14610489578063e54dc2d7146105315761009e565b80630a9a2b72146100a35780631f00ca74146100e95780633351733f146101e15780635e1e63251461024257806369c2d98414610276575b600080fd5b6100d7600480360360608110156100b957600080fd5b508035906001600160a01b0360208201358116916040013516610573565b60408051918252519081900360200190f35b610191600480360360408110156100ff57600080fd5b81359190810190604081016020820135600160201b81111561012057600080fd5b82018360208201111561013257600080fd5b803590602001918460208302840111600160201b8311171561015357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506105a9945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101cd5781810151838201526020016101b5565b505050509050019250505060405180910390f35b610229600480360360c08110156101f757600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a001356105df565b6040805192835260208301919091528051918290030190f35b6100d76004803603606081101561025857600080fd5b508035906001600160a01b036020820135811691604001351661088b565b6103996004803603604081101561028c57600080fd5b810190602081018135600160201b8111156102a657600080fd5b8201836020820111156102b857600080fd5b803590602001918460208302840111600160201b831117156102d957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561032857600080fd5b82018360208201111561033a57600080fd5b803590602001918460208302840111600160201b8311171561035b57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506108b9945050505050565b005b610399600480360360208110156103b157600080fd5b810190602081018135600160201b8111156103cb57600080fd5b8201836020820111156103dd57600080fd5b803590602001918460208302840111600160201b831117156103fe57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610af5945050505050565b6100d76004803603606081101561045257600080fd5b5080359060208101359060400135610cfd565b61046d610d0a565b604080516001600160a01b039092168252519081900360200190f35b6101916004803603604081101561049f57600080fd5b81359190810190604081016020820135600160201b8111156104c057600080fd5b8201836020820111156104d257600080fd5b803590602001918460208302840111600160201b831117156104f357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610d2e945050505050565b610229600480360360a081101561054757600080fd5b506001600160a01b03813581169160208101358216916040820135169060608101359060800135610d5b565b60006105a18484847f0000000000000000000000000000000000000000000000000000000000000000610ea9565b949350505050565b60606105d67f000000000000000000000000000000000000000000000000000000000000000084846111e5565b90505b92915050565b60008060006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a439058a8a6040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b15801561066b57600080fd5b505afa15801561067f573d6000803e3d6000fd5b505050506040513d602081101561069557600080fd5b50516001600160a01b03161415610753577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c9c6539689896040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050602060405180830381600087803b15801561072657600080fd5b505af115801561073a573d6000803e3d6000fd5b505050506040513d602081101561075057600080fd5b50505b6000806107817f00000000000000000000000000000000000000000000000000000000000000008b8b61131f565b5091509150816000148015610794575080155b156107a45787935086925061087e565b816107b15786925061087e565b806107be5787935061087e565b60006107cb8984846113e1565b905087811161081e57858110156108135760405162461bcd60e51b81526004018080602001828103825260278152602001806121e66027913960400191505060405180910390fd5b88945092508261087c565b600061082b8984866113e1565b90508981111561083757fe5b878110156108765760405162461bcd60e51b81526004018080602001828103825260278152602001806121756027913960400191505060405180910390fd5b94508793505b505b5050965096945050505050565b60006105a18484847f0000000000000000000000000000000000000000000000000000000000000000611487565b60005b6001825103811015610af0576000808383815181106108d757fe5b60200260200101518484600101815181106108ee57fe5b602002602001015191509150600061090683836117cf565b509050600086856001018151811061091a57fe5b60200260200101519050600080836001600160a01b0316866001600160a01b0316146109485782600061094c565b6000835b9150915060006002895103881061096357336109a4565b6109a47f0000000000000000000000000000000000000000000000000000000000000000878b8b6002018151811061099757fe5b60200260200101516118ad565b90506109d17f000000000000000000000000000000000000000000000000000000000000000088886118ad565b6001600160a01b031663022c0d9f84848460006040519080825280601f01601f191660200182016040528015610a0e576020820181803683370190505b506040518563ffffffff1660e01b815260040180858152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a76578181015183820152602001610a5e565b50505050905090810190601f168015610aa35780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610ac557600080fd5b505af1158015610ad9573d6000803e3d6000fd5b5050600190990198506108bc975050505050505050565b505050565b60005b6001825103811015610cf957600080838381518110610b1357fe5b6020026020010151848460010181518110610b2a57fe5b602002602001015191509150600080610b6484847f000000000000000000000000000000000000000000000000000000000000000061196d565b91509150600060028751038610610b7b5733610baf565b610baf7f00000000000000000000000000000000000000000000000000000000000000008589896002018151811061099757fe5b9050610bdc7f000000000000000000000000000000000000000000000000000000000000000086866118ad565b6001600160a01b031663022c0d9f84848460006040519080825280601f01601f191660200182016040528015610c19576020820181803683370190505b506040518563ffffffff1660e01b815260040180858152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c81578181015183820152602001610c69565b50505050905090810190601f168015610cae5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610cd057600080fd5b505af1158015610ce4573d6000803e3d6000fd5b505060019097019650610af895505050505050565b5050565b60006105a18484846113e1565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606105d67f00000000000000000000000000000000000000000000000000000000000000008484611d4b565b600080600080866001600160a01b03166389afcb44336040518263ffffffff1660e01b815260040180826001600160a01b031681526020019150506040805180830381600087803b158015610daf57600080fd5b505af1158015610dc3573d6000803e3d6000fd5b505050506040513d6040811015610dd957600080fd5b50805160209091015190925090506000610df38a8a6117cf565b509050806001600160a01b03168a6001600160a01b031614610e16578183610e19565b82825b909550935086851015610e5d5760405162461bcd60e51b81526004018080602001828103825260278152602001806121756027913960400191505060405180910390fd5b85841015610e9c5760405162461bcd60e51b81526004018080602001828103825260278152602001806121e66027913960400191505060405180910390fd5b5050509550959350505050565b6000808511610ee95760405162461bcd60e51b815260040180806020018281038252602c815260200180612149602c913960400191505060405180910390fd5b6000806000806000806000806000610f018d8d6117cf565b506001600160a01b038e8116911614945060009050610f218b8e8e61131f565b809350819a50829b505050506000816001600160a01b031663e94e3d8d6040518163ffffffff1660e01b815260040160606040518083038186803b158015610f6857600080fd5b505afa158015610f7c573d6000803e3d6000fd5b505050506040513d6060811015610f9257600080fd5b508051602082015160409092015161ffff9091169850955090506000816003811115610fba57fe5b1480610fda57506001816003811115610fcf57fe5b148015610fda575085155b80610ff857506002816003811115610fee57fe5b148015610ff85750855b6110335760405162461bcd60e51b81526004018080602001828103825260248152602001806121c26024913960400191505060405180910390fd5b816001600160a01b031663b6b9f61b6040518163ffffffff1660e01b8152600401604080518083038186803b15801561106b57600080fd5b505afa15801561107f573d6000803e3d6000fd5b505050506040513d604081101561109557600080fd5b508051602090910151909450925050831590506111745760006110da6110d58484886110c1578b6110c3565b8c5b896110ce578d6110d0565b8c5b611e7c565b611f09565b9050806110f08f8a611f5b90919063ffffffff16565b106111125761110b856111035783611105565b825b82611fab565b9650611172565b611127856111205782611105565b8382611fab565b965080881180156111385750818314155b156111725761115361271061114d838c611f5b565b90611fb7565b99506111696111628983611f5b565b8f90611f5b565b9d508097508098505b505b506000915061118d905061271061114d8d818a8961201a565b905060006111a58c61119f888861201a565b90611f5b565b90506111d560016111cf86612710036111c98587816111c057fe5b8e91900461201a565b90612069565b9061201a565b9c9b505050505050505050505050565b606060028251101561123e576040805162461bcd60e51b815260206004820152601f60248201527f496d706f737369626c654c6962726172793a20494e56414c49445f5041544800604482015290519081900360640190fd5b815167ffffffffffffffff8111801561125657600080fd5b50604051908082528060200260200182016040528015611280578160200160208202803683370190505b509050828160018351038151811061129457fe5b60209081029190910101528151600019015b8015611317576112f48282815181106112bb57fe5b60200260200101518460018403815181106112d257fe5b60200260200101518584815181106112e657fe5b602002602001015188610ea9565b82600183038151811061130357fe5b6020908102919091010152600019016112a6565b509392505050565b60008060008061132f86866117cf565b50905061133d8787876118ad565b9150600080836001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401604080518083038186803b15801561137a57600080fd5b505afa15801561138e573d6000803e3d6000fd5b505050506040513d60408110156113a457600080fd5b50805160209091015190925090506001600160a01b03888116908416146113cc5780826113cf565b81815b909a9099509397509295505050505050565b60008084116114215760405162461bcd60e51b815260040180806020018281038252602681526020018061219c6026913960400191505060405180910390fd5b6000831180156114315750600082115b61146c5760405162461bcd60e51b81526004018080602001828103825260298152602001806122336029913960400191505060405180910390fd5b826114778584611fb7565b8161147e57fe5b04949350505050565b60008085116114c75760405162461bcd60e51b815260040180806020018281038252602c815260200180612149602c913960400191505060405180910390fd5b6000806000806000806114da8a8a6117cf565b509050806001600160a01b03168a6001600160a01b03161491506114ff888b8b61131f565b80955081975082985050505050600080600080856001600160a01b031663e94e3d8d6040518163ffffffff1660e01b815260040160606040518083038186803b15801561154b57600080fd5b505afa15801561155f573d6000803e3d6000fd5b505050506040513d606081101561157557600080fd5b5080516020820151604090920151945061ffff169250905061159c8e612710849003611fb7565b965060008160038111156115ac57fe5b14806115cc575060018160038111156115c157fe5b1480156115cc575084155b806115ea575060028160038111156115e057fe5b1480156115ea5750845b6116255760405162461bcd60e51b81526004018080602001828103825260248152602001806121c26024913960400191505060405180910390fd5b5050801561175e57600080856001600160a01b031663b6b9f61b6040518163ffffffff1660e01b8152600401604080518083038186803b15801561166857600080fd5b505afa15801561167c573d6000803e3d6000fd5b505050506040513d604081101561169257600080fd5b508051602090910151909250905060006116c86110d58484896116b5578c6116b7565b8d5b8a6116c2578e6110d0565b8d611e7c565b90506116d681612710611fb7565b6116ec6116e58c612710611fb7565b8a9061201a565b10611749576116ff866111205782611105565b9450808a1080156117105750818314155b156117445761171f8982611f5b565b9a5061173b61173461271061114d848e611f5b565b8990611f5b565b97508099508098505b61175a565b611757866111035783611105565b94505b5050505b600061177461176d888561201a565b8790611fb7565b9050600061178c876111cf61271061114d8d8961201a565b9050600081838161179957fe5b0490508881116117b2576117ad818c61201a565b6117bc565b6117bc898c61201a565b9f9e505050505050505050505050505050565b600080826001600160a01b0316846001600160a01b031614156118235760405162461bcd60e51b815260040180806020018281038252602681526020018061220d6026913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610611843578284611846565b83835b90925090506001600160a01b0382166118a6576040805162461bcd60e51b815260206004820152601f60248201527f496d706f737369626c654c6962726172793a205a45524f5f4144445245535300604482015290519081900360640190fd5b9250929050565b60008060006118bc85856117cf565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f44af417f4173c5e233fab14adb0d4835da35ecaf1f17b0458831e84a678be43d609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b60008060008060008060006119828a8a6117cf565b509050806001600160a01b03168a6001600160a01b03161491506119a7888b8b61131f565b809550819650829750505050506000806000806000808e6001600160a01b03166370a08231896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015611a0a57600080fd5b505afa158015611a1e573d6000803e3d6000fd5b505050506040513d6020811015611a3457600080fd5b50519050898111611a765760405162461bcd60e51b815260040180806020018281038252602c815260200180612149602c913960400191505060405180910390fd5b6000886001600160a01b031663e94e3d8d6040518163ffffffff1660e01b815260040160606040518083038186803b158015611ab157600080fd5b505afa158015611ac5573d6000803e3d6000fd5b505050506040513d6060811015611adb57600080fd5b5080516020820151604090920151955061ffff16935090506000816003811115611b0157fe5b1480611b2157506001816003811115611b1657fe5b148015611b21575087155b80611b3f57506002816003811115611b3557fe5b148015611b3f5750875b611b7a5760405162461bcd60e51b81526004018080602001828103825260248152602001806121c26024913960400191505060405180910390fd5b611b8d61271084900361114d848e611f5b565b94505050508015611cc357600080876001600160a01b031663b6b9f61b6040518163ffffffff1660e01b8152600401604080518083038186803b158015611bd357600080fd5b505afa158015611be7573d6000803e3d6000fd5b505050506040513d6040811015611bfd57600080fd5b50805160209091015190925090506000611c336110d584848b611c20578d611c22565b8e5b8c611c2d578f6110d0565b8e611e7c565b9050611c4181612710611fb7565b611c57611c508d612710611fb7565b879061201a565b10611cae57611c6a886111205782611105565b9550808b108015611c7b5750818314155b15611ca957611c8a8a82611f5b565b9650611ca0611c99828d611f5b565b8690611f5b565b9450809950809a505b611cbf565b611cbc886111035783611105565b95505b5050505b6000611cd9611cd2898661201a565b8490611fb7565b90506000611cf1846111cf61271061114d8e8a61201a565b90506000818381611cfe57fe5b049050898111611d1757611d12818861201a565b611d21565b611d218a8861201a565b965087611d3057866000611d34565b6000875b9c509c505050505050505050505050935093915050565b6060600282511015611da4576040805162461bcd60e51b815260206004820152601f60248201527f496d706f737369626c654c6962726172793a20494e56414c49445f5041544800604482015290519081900360640190fd5b815167ffffffffffffffff81118015611dbc57600080fd5b50604051908082528060200260200182016040528015611de6578160200160208202803683370190505b5090508281600081518110611df757fe5b60200260200101818152505060005b600183510381101561131757611e5a828281518110611e2157fe5b6020026020010151848381518110611e3557fe5b6020026020010151858460010181518110611e4c57fe5b602002602001015188611487565b828260010181518110611e6957fe5b6020908102919091010152600101611e06565b600080828411611e9657611e91856001611f5b565b611ea1565b611ea1866001611f5b565b90506000611eb560016111cf846002611fb7565b90506000611edb611ec7836002611fb7565b6111c9611ed4898961201a565b8690611fb7565b9050600281611efb611ef1856111c98b8b611fb7565b6002850a01611f09565b010a98975050505050505050565b60006003821115611f4c575080600160028204015b81811015611f4657809150600281828581611f3557fe5b040181611f3e57fe5b049050611f1e565b50611f56565b8115611f56575060015b919050565b808203828111156105d9576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b60006105d66000198401835b6000811580611fd257505080820282828281611fcf57fe5b04145b6105d9576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b808201828110156105d9576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b60006105d683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081836121325760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156120f75781810151838201526020016120df565b50505050905090810190601f1680156121245780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161213e57fe5b049594505050505056fe496d706f737369626c654c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54496d706f737369626c65526f757465723a20494e53554646494349454e545f415f414d4f554e54496d706f737369626c654c6962726172793a20494e53554646494349454e545f414d4f554e54496d706f737369626c654c6962726172793a2054524144455f4e4f545f414c4c4f574544496d706f737369626c65526f757465723a20494e53554646494349454e545f425f414d4f554e54496d706f737369626c654c6962726172793a204944454e544943414c5f414444524553534553496d706f737369626c654c6962726172793a20494e53554646494349454e545f4c4951554944495459a26469706673582212208f54a5b2ec0820ce6721e4cff18de4429842d1c0e47b4b0ed8ce01deb299527c64736f6c63430007060033"
};

// src/contracts/ImpossibleRouterExtension.ts
var ImpossibleRouterExtension = class extends import_eth_wallet4.Contract {
  constructor(wallet, address) {
    super(wallet, address, ImpossibleRouterExtension_json_default.abi, ImpossibleRouterExtension_json_default.bytecode);
    this.assign();
  }
  deploy(factory) {
    return this.__deploy([factory]);
  }
  assign() {
    let factory_call = async () => {
      let result = await this.call("factory");
      return result;
    };
    this.factory = factory_call;
    let getAmountInParams = (params) => [import_eth_wallet4.Utils.toString(params.amountOut), params.tokenIn, params.tokenOut];
    let getAmountIn_call = async (params) => {
      let result = await this.call("getAmountIn", getAmountInParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.getAmountIn = getAmountIn_call;
    let getAmountOutParams = (params) => [import_eth_wallet4.Utils.toString(params.amountIn), params.tokenIn, params.tokenOut];
    let getAmountOut_call = async (params) => {
      let result = await this.call("getAmountOut", getAmountOutParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.getAmountOut = getAmountOut_call;
    let getAmountsInParams = (params) => [import_eth_wallet4.Utils.toString(params.amountOut), params.path];
    let getAmountsIn_call = async (params) => {
      let result = await this.call("getAmountsIn", getAmountsInParams(params));
      return result.map((e) => new import_eth_wallet4.BigNumber(e));
    };
    this.getAmountsIn = getAmountsIn_call;
    let getAmountsOutParams = (params) => [import_eth_wallet4.Utils.toString(params.amountIn), params.path];
    let getAmountsOut_call = async (params) => {
      let result = await this.call("getAmountsOut", getAmountsOutParams(params));
      return result.map((e) => new import_eth_wallet4.BigNumber(e));
    };
    this.getAmountsOut = getAmountsOut_call;
    let quoteParams = (params) => [import_eth_wallet4.Utils.toString(params.amountA), import_eth_wallet4.Utils.toString(params.reserveA), import_eth_wallet4.Utils.toString(params.reserveB)];
    let quote_call = async (params) => {
      let result = await this.call("quote", quoteParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.quote = quote_call;
    let addLiquidityParams = (params) => [params.tokenA, params.tokenB, import_eth_wallet4.Utils.toString(params.amountADesired), import_eth_wallet4.Utils.toString(params.amountBDesired), import_eth_wallet4.Utils.toString(params.amountAMin), import_eth_wallet4.Utils.toString(params.amountBMin)];
    let addLiquidity_send = async (params) => {
      let result = await this.send("addLiquidity", addLiquidityParams(params));
      return result;
    };
    let addLiquidity_call = async (params) => {
      let result = await this.call("addLiquidity", addLiquidityParams(params));
      return {
        amountA: new import_eth_wallet4.BigNumber(result.amountA),
        amountB: new import_eth_wallet4.BigNumber(result.amountB)
      };
    };
    this.addLiquidity = Object.assign(addLiquidity_send, {
      call: addLiquidity_call
    });
    let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, params.pair, import_eth_wallet4.Utils.toString(params.amountAMin), import_eth_wallet4.Utils.toString(params.amountBMin)];
    let removeLiquidity_send = async (params) => {
      let result = await this.send("removeLiquidity", removeLiquidityParams(params));
      return result;
    };
    let removeLiquidity_call = async (params) => {
      let result = await this.call("removeLiquidity", removeLiquidityParams(params));
      return {
        amountA: new import_eth_wallet4.BigNumber(result.amountA),
        amountB: new import_eth_wallet4.BigNumber(result.amountB)
      };
    };
    this.removeLiquidity = Object.assign(removeLiquidity_send, {
      call: removeLiquidity_call
    });
    let swapParams = (params) => [import_eth_wallet4.Utils.toString(params.amounts), params.path];
    let swap_send = async (params) => {
      let result = await this.send("swap", swapParams(params));
      return result;
    };
    let swap_call = async (params) => {
      let result = await this.call("swap", swapParams(params));
      return;
    };
    this.swap = Object.assign(swap_send, {
      call: swap_call
    });
    let swapSupportingFeeOnTransferTokens_send = async (path) => {
      let result = await this.send("swapSupportingFeeOnTransferTokens", [path]);
      return result;
    };
    let swapSupportingFeeOnTransferTokens_call = async (path) => {
      let result = await this.call("swapSupportingFeeOnTransferTokens", [path]);
      return;
    };
    this.swapSupportingFeeOnTransferTokens = Object.assign(swapSupportingFeeOnTransferTokens_send, {
      call: swapSupportingFeeOnTransferTokens_call
    });
  }
};

// src/contracts/ImpossibleSwapFactory.ts
var import_eth_wallet5 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ImpossibleSwapFactory.json.ts
var ImpossibleSwapFactory_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "address", "name": "_governance", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "token0", "type": "address" }, { "indexed": true, "internalType": "address", "name": "token1", "type": "address" }, { "indexed": false, "internalType": "address", "name": "pair", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" }], "name": "PairCreated", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "governance", "type": "address" }], "name": "UpdatedGovernance", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "allPairs", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "allPairsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedTokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "bool", "name": "allowed", "type": "bool" }], "name": "changeTokenAccess", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }], "name": "createPair", "outputs": [{ "internalType": "address", "name": "pair", "type": "address" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "feeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "getPair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "governance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "router", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "routerExtension", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "_feeTo", "type": "address" }], "name": "setFeeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "_governance", "type": "address" }], "name": "setGovernance", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "_router", "type": "address" }, { "internalType": "address", "name": "_routerExtension", "type": "address" }], "name": "setRouterAndExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bool", "name": "b", "type": "bool" }], "name": "setWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "whitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50604051614a99380380614a998339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b03909216919091179055614a36806100636000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806393e59dc111610097578063e6a4390511610066578063e6a4390514610259578063f46901ed14610287578063f887ea40146102ad578063f958a657146102b5576100f5565b806393e59dc1146101cf578063ab033ea9146101d7578063c9c65396146101fd578063d6c7a7b41461022b576100f5565b8063574f2ba3116100d3578063574f2ba31461016b578063590c61f0146101855780635aa6e6751461018d5780636d1ea3fa14610195576100f5565b8063017e7e58146100fa5780631dae47eb1461011e5780631e3dd18b1461014e575b600080fd5b6101026102d4565b604080516001600160a01b039092168252519081900360200190f35b61014c6004803603604081101561013457600080fd5b506001600160a01b03813516906020013515156102e3565b005b6101026004803603602081101561016457600080fd5b503561035d565b610173610387565b60408051918252519081900360200190f35b61010261038d565b61010261039c565b6101bb600480360360208110156101ab57600080fd5b50356001600160a01b03166103ab565b604080519115158252519081900360200190f35b6101bb6103c0565b61014c600480360360208110156101ed57600080fd5b50356001600160a01b03166103d0565b6101026004803603604081101561021357600080fd5b506001600160a01b0381358116916020013516610441565b61014c6004803603604081101561024157600080fd5b506001600160a01b03813581169160200135166107fd565b6101026004803603604081101561026f57600080fd5b506001600160a01b038135811691602001351661087a565b61014c6004803603602081101561029d57600080fd5b50356001600160a01b03166108a0565b610102610911565b61014c600480360360208110156102cb57600080fd5b50351515610920565b6000546001600160a01b031681565b6001546001600160a01b03163314610332576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6001600160a01b03919091166000908152600460205260409020805460ff1916911515919091179055565b6006818154811061036d57600080fd5b6000918252602090912001546001600160a01b0316905081565b60065490565b6003546001600160a01b031681565b6001546001600160a01b031681565b60046020526000908152604090205460ff1681565b600354600160a01b900460ff1681565b6001546001600160a01b0316331461041f576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600354600090600160a01b900460ff16156104df576001600160a01b03831660009081526004602052604090205460ff16801561049657506001600160a01b03821660009081526004602052604090205460ff165b6104df576040805162461bcd60e51b815260206004820152601560248201527449463a20524553545249435445445f544f4b454e5360581b604482015290519081900360640190fd5b816001600160a01b0316836001600160a01b03161415610546576040805162461bcd60e51b815260206004820152601760248201527f49463a204944454e544943414c5f414444524553534553000000000000000000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b03161061056957838561056c565b84845b90925090506001600160a01b0382166105bf576040805162461bcd60e51b815260206004820152601060248201526f49463a205a45524f5f4144445245535360801b604482015290519081900360640190fd5b6001600160a01b0382811660009081526005602090815260408083208585168452909152902054161561062b576040805162461bcd60e51b815260206004820152600f60248201526e49463a20504149525f45584953545360881b604482015290519081900360640190fd5b60006040518060200161063d9061098d565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b031660601b8152601401826001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f560025460035460408051637c643b2f60e11b81526001600160a01b038981166004830152888116602483015293841660448201529183166064830152519297509087169163f8c8765e9160848082019260009290919082900301818387803b15801561071357600080fd5b505af1158015610727573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526005602081815260408084208987168086529083528185208054978d166001600160a01b031998891681179091559383528185208686528352818520805488168517905560068054600181018255958190527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b6001546001600160a01b0316331461084c576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600280546001600160a01b039384166001600160a01b03199182161790915560038054929093169116179055565b60056020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b031633146108ef576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b6001546001600160a01b0316331461096f576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60038054911515600160a01b0260ff60a01b19909216919091179055565b614065806200099c8339019056fe60c0604052601360808190527f496d706f737369626c652053776170204c50730000000000000000000000000060a090815262000040916000919062000250565b5060408051808201909152600580825264049462d4c560dc1b60209092019182526200006f9160019162000250565b506008805461ffff1916601e179055600f805463ffffffff60a01b1963ffffffff60801b1963ffffffff60601b1963ffffffff60401b1963ffffffff60201b1963ffffffff199095166001179490941664010000000017939093166801000000000000000017929092166c010000000000000000000000001791909116600160801b1716600160a01b17905560c9601255620151806013553480156200011457600080fd5b506200011f62000146565b600160075560088054600160201b600160c01b0319163364010000000002179055620002fc565b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040518082805460018160011615610100020316600290048015620001cd5780601f10620001aa576101008083540402835291820191620001cd565b820191906000526020600020905b815481529060010190602001808311620001b8575b505060408051918290038220828201825260018352603160f81b602093840152815180840196909652858201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606086015260808501959095523060a0808601919091528551808603909101815260c090940190945250508051910120600555565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002885760008555620002d3565b82601f10620002a357805160ff1916838001178555620002d3565b82800160010185558215620002d3579182015b82811115620002d3578251825591602001919060010190620002b6565b50620002e1929150620002e5565b5090565b5b80821115620002e15760008155600101620002e6565b613d59806200030c6000396000f3fe608060405234801561001057600080fd5b50600436106102485760003560e01c80637464fc3d1161013b578063c45a0155116100b8578063dd62ed3e1161007c578063dd62ed3e146106c4578063e94e3d8d146106f2578063f887ea401461072f578063f8c8765e14610737578063fff6cae91461077557610248565b8063c45a015514610626578063d1b2664f1461062e578063d21220a71461064b578063d4f0a77714610653578063d505accf1461067357610248565b8063a9059cbb116100ff578063a9059cbb14610599578063b6b9f61b146105c5578063ba9a7a56146105cd578063bb3a19a4146105d5578063bc25cf771461060057610248565b80637464fc3d1461053557806378e979251461053d5780637ecebe001461054557806389afcb441461056b57806395d89b411461059157610248565b8063313ce567116101c95780635de879701161018d5780635de87970146104bc57806364d62353146104c45780636a42b8f8146104e15780636a627842146104e957806370a082311461050f57610248565b8063313ce5671461047e5780633197cbb61461049c57806334762d09146104a45780633644e515146104ac578063590c61f0146104b457610248565b8063112db51b11610210578063112db51b146103db57806315fc3d92146103fb57806318160ddd1461042657806323b872dd1461044057806330adf81f1461047657610248565b8063022c0d9f1461024d57806306fdde03146102d95780630902f1ac14610356578063095ea7b3146103775780630dfe1681146103b7575b600080fd5b6102d76004803603608081101561026357600080fd5b8135916020810135916001600160a01b036040830135169190810190608081016060820135600160201b81111561029957600080fd5b8201836020820111156102ab57600080fd5b803590602001918460018302840111600160201b831117156102cc57600080fd5b50909250905061077d565b005b6102e1610e3d565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561031b578181015183820152602001610303565b50505050905090810190601f1680156103485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61035e610ecb565b6040805192835260208301919091528051918290030190f35b6103a36004803603604081101561038d57600080fd5b506001600160a01b038135169060200135610ee6565b604080519115158252519081900360200190f35b6103bf610efd565b604080516001600160a01b039092168252519081900360200190f35b6102d7600480360360208110156103f157600080fd5b503560ff16610f0c565b6102d76004803603604081101561041157600080fd5b5063ffffffff813581169160200135166110de565b61042e6112bc565b60408051918252519081900360200190f35b6103a36004803603606081101561045657600080fd5b506001600160a01b038135811691602081013590911690604001356112c2565b61042e611357565b61048661137b565b6040805160ff9092168252519081900360200190f35b61042e611380565b6102d7611386565b61042e611650565b6103bf611656565b61042e611665565b6102d7600480360360208110156104da57600080fd5b503561166b565b61042e6117d3565b61042e600480360360208110156104ff57600080fd5b50356001600160a01b03166117d9565b61042e6004803603602081101561052557600080fd5b50356001600160a01b0316611ac6565b61042e611ad8565b61042e611ade565b61042e6004803603602081101561055b57600080fd5b50356001600160a01b0316611ae4565b61035e6004803603602081101561058157600080fd5b50356001600160a01b0316611af6565b6102e1611ff3565b6103a3600480360360408110156105af57600080fd5b506001600160a01b03813516906020013561204d565b61035e61205a565b61042e6120f8565b6102d7600480360360408110156105eb57600080fd5b5063ffffffff813581169160200135166120fe565b6102d76004803603602081101561061657600080fd5b50356001600160a01b0316612277565b6103bf6123d3565b6102d76004803603602081101561064457600080fd5b50356123e9565b6103bf61253e565b6102d76004803603602081101561066957600080fd5b503560ff1661254d565b6102d7600480360360e081101561068957600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561266b565b61042e600480360360408110156106da57600080fd5b506001600160a01b038135811691602001351661285e565b6106fa61287b565b604051808461ffff16815260200183600381111561071457fe5b81526020018215158152602001935050505060405180910390f35b6103bf61289a565b6102d76004803603608081101561074d57600080fd5b506001600160a01b0381358116916020810135821691604082013581169160600135166128a9565b6102d7612959565b600b546001600160a01b03163314806107a05750600c546001600160a01b031633145b6107e1576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60026007541415610827576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007558415158061083a5750600084115b61088b576040805162461bcd60e51b815260206004820152601e60248201527f49463a20494e53554646494349454e545f4f55545055545f414d4f554e540000604482015290519081900360640190fd5b600080610896610ecb565b915091508187111580156108aa5750808611155b6108fb576040805162461bcd60e51b815260206004820152601a60248201527f49463a20494e53554646494349454e545f4c4951554944495459000000000000604482015290519081900360640190fd5b6009546000908190819081906001600160a01b038a81169116148015906109305750600a546001600160a01b038a8116911614155b610972576040805162461bcd60e51b815260206004820152600e60248201526d49463a20494e56414c49445f544f60901b604482015290519081900360640190fd5b8a1561098f5760095461098f906001600160a01b03168a8d612aa4565b89156109ac57600a546109ac906001600160a01b03168a8c612aa4565b8615610a5e57886001600160a01b03166367e95e6f338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610a4557600080fd5b505af1158015610a59573d6000803e3d6000fd5b505050505b600954604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610aa957600080fd5b505afa158015610abd573d6000803e3d6000fd5b505050506040513d6020811015610ad357600080fd5b5051600a54604080516370a0823160e01b815230600482015290519296506001600160a01b03909116916370a0823191602480820192602092909190829003018186803b158015610b2357600080fd5b505afa158015610b37573d6000803e3d6000fd5b505050506040513d6020811015610b4d57600080fd5b505192508a86038411610b61576000610b67565b8a860384035b91508985038311610b79576000610b7f565b89850383035b90506000821180610b905750600081115b610be1576040805162461bcd60e51b815260206004820152601d60248201527f49463a20494e53554646494349454e545f494e5055545f414d4f554e54000000604482015290519081900360640190fd5b60085460ff63010000008204169061ffff166000610c14610c028684612c33565b610c0e89612710612c33565b90612c96565b90506000610c25610c028685612c33565b90508315610d615760085462010000900460ff166000816003811115610c4757fe5b1480610c6757506001816003811115610c5c57fe5b148015610c6757508e155b80610c8657506002816003811115610c7b57fe5b148015610c8657508f155b610ccf576040805162461bcd60e51b815260206004820152601560248201527412518e88151490511157d393d517d0531313d5d151605a1b604482015290519081900360640190fd5b600080610cda61205a565b915091506000610cf86305f5e100610cf28585612ce6565b90612c33565b9050610d078383888885612d8f565b610d58576040805162461bcd60e51b815260206004820152601760248201527f49463a20494e53554646494349454e545f5859424b5f4b000000000000000000604482015290519081900360640190fd5b50505050610dc9565b610d736305f5e100610cf28c8c612c33565b610d7d8383612c33565b1015610dc9576040805162461bcd60e51b815260206004820152601660248201527549463a20494e53554646494349454e545f554e495f4b60501b604482015290519081900360640190fd5b50505050610dd78484612e09565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600755505050505050505050565b6000805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b505050505081565b600d546001600160801b0380821692600160801b9092041690565b6000610ef3338484612e89565b5060015b92915050565b6009546001600160a01b031681565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b158015610f5a57600080fd5b505afa158015610f6e573d6000803e3d6000fd5b505050506040513d6020811015610f8457600080fd5b50516001600160a01b03163314610fd2576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60026007541415611018576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007556008546301000000900460ff16611072576040805162461bcd60e51b815260206004820152601460248201527349463a2049535f43555252454e544c595f554e4960601b604482015290519081900360640190fd5b6008805482919062ff000019166201000083600381111561108f57fe5b02179055507f804ede6198c4ba5ac5c2ab3c86f51a6418ba3592262bf932bc9cbe6a18e4c79981604051808260038111156110c657fe5b815260200191505060405180910390a1506001600755565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561112c57600080fd5b505afa158015611140573d6000803e3d6000fd5b505050506040513d602081101561115657600080fd5b50516001600160a01b031633146111a4576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600260075414156111ea576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007556008546301000000900460ff1615611244576040805162461bcd60e51b815260206004820152601360248201527249463a2049535f414c52454144595f5859424b60681b604482015290519081900360640190fd5b61124e8282612eeb565b6008805463ff0000001916630100000090811791829055604080519190920460ff161515815263ffffffff808516602083015283168183015290517fe81694441e8badb2a6bd046b401e64e8775f8055523d0263c9948f4a5b8026b39181900360600190a150506001600755565b60025481565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001914611341576001600160a01b038416600090815260046020908152604080832033845290915290205461131c9083612c96565b6001600160a01b03851660009081526004602090815260408083203384529091529020555b61134c8484846130cf565b5060015b9392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60115481565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156113d457600080fd5b505afa1580156113e8573d6000803e3d6000fd5b505050506040513d60208110156113fe57600080fd5b50516001600160a01b0316331461144c576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60026007541415611492576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007556008546301000000900460ff166114ea576040805162461bcd60e51b815260206004820152601260248201527149463a2049535f414c52454144595f554e4960701b604482015290519081900360640190fd5b601154421015611541576040805162461bcd60e51b815260206004820152601a60248201527f49463a20424f4f53545f414c52454144595f4348414e47494e47000000000000604482015290519081900360640190fd5b600f54600160401b900463ffffffff16600114801561156f5750600f54600160601b900463ffffffff166001145b6115b4576040805162461bcd60e51b815260206004820152601160248201527012518e881253959053125117d093d3d4d5607a1b604482015290519081900360640190fd5b6008805463ff000000191690819055600f805467ffffffff000000001963ffffffff1990911660011716600160201b179081905560408051630100000090930460ff1615158352600160401b820463ffffffff9081166020850152600160601b90920490911682820152517fe81694441e8badb2a6bd046b401e64e8775f8055523d0263c9948f4a5b8026b39181900360600190a16001600755565b60055481565b600c546001600160a01b031681565b60125481565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156116b957600080fd5b505afa1580156116cd573d6000803e3d6000fd5b505050506040513d60208110156116e357600080fd5b50516001600160a01b03163314611731576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6201a5e081101580156117475750621275008111155b61178c576040805162461bcd60e51b815260206004820152601160248201527049463a20494e56414c49445f44454c415960781b604482015290519081900360640190fd5b6013805490829055604080518281526020810184905281517f40abb331f787260ef2fdd0c9e0ecc9bf68758a43190094281842f10ffcc318b2929181900390910190a15050565b60135481565b600060026007541415611821576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b6002600755600080611831610ecb565b600954604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b15801561188457600080fd5b505afa158015611898573d6000803e3d6000fd5b505050506040513d60208110156118ae57600080fd5b5051600a54604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561190157600080fd5b505afa158015611915573d6000803e3d6000fd5b505050506040513d602081101561192b57600080fd5b50519050600061193b8386612c96565b905060006119498386612c96565b90506000611957878761317d565b6002549091508061198e5761197a6103e8610c0e6119758787612c33565b6132ec565b985061198960006103e861333e565b6119e1565b6119de600089116119a1576000196119b5565b886119ac8684612c33565b816119b357fe5b045b600089116119c5576000196119d9565b886119d08685612c33565b816119d757fe5b045b6133c9565b98505b60008911611a205760405162461bcd60e51b8152600401808060200182810382526021815260200180613ce26021913960400191505060405180910390fd5b611a2a8a8a61333e565b611a348686612e09565b600080611a3f6133df565b915091508315611a77576008546301000000900460ff16611a6957611a648888612c33565b611a73565b611a738282612ce6565b600e555b6040805187815260208101879052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600755509698975050505050505050565b60036020526000908152604090205481565b600e5481565b60105481565b60066020526000908152604090205481565b60008060026007541415611b3f576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b6002600755600080611b4f610ecb565b915091506000611b5f838361317d565b600954600a54604080516370a0823160e01b815230600482015290519394506001600160a01b0392831693919092169160009184916370a08231916024808301926020929190829003018186803b158015611bb957600080fd5b505afa158015611bcd573d6000803e3d6000fd5b505050506040513d6020811015611be357600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b158015611c3157600080fd5b505afa158015611c45573d6000803e3d6000fd5b505050506040513d6020811015611c5b57600080fd5b5051306000908152600360205260409020546002549192509080611c7f8386612c33565b81611c8657fe5b049a5080611c948385612c33565b81611c9b57fe5b04995060008b1180611cad575060008a115b611ce85760405162461bcd60e51b8152600401808060200182810382526021815260200180613d036021913960400191505060405180910390fd5b6000600860049054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611d3857600080fd5b505afa158015611d4c573d6000803e3d6000fd5b505050506040513d6020811015611d6257600080fd5b50519050878015611d7c5750326001600160a01b03821614155b15611e4c57601254611d8e8d8261342b565b909c039b611d9c8c8261342b565b909b039a6000611dac858361342b565b9050611e3230600860049054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611e0057600080fd5b505afa158015611e14573d6000803e3d6000fd5b505050506040513d6020811015611e2a57600080fd5b505183612aa4565b611e4530611e408784612c96565b61346d565b5050611e56565b611e56308461346d565b611e61878e8e612aa4565b611e6c868e8d612aa4565b5050604080516370a0823160e01b815230600482015290516001600160a01b038716916370a08231916024808301926020929190829003018186803b158015611eb457600080fd5b505afa158015611ec8573d6000803e3d6000fd5b505050506040513d6020811015611ede57600080fd5b5051604080516370a0823160e01b815230600482015290519194506001600160a01b038616916370a0823191602480820192602092909190829003018186803b158015611f2a57600080fd5b505afa158015611f3e573d6000803e3d6000fd5b505050506040513d6020811015611f5457600080fd5b50519150611f628383612e09565b8515611f96576008546301000000900460ff16611f8857611f838383612c33565b611f92565b611f928383612ce6565b600e555b604080518b8152602081018b905281516001600160a01b038e169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a350505050505050506001600781905550915091565b60018054604080516020600284861615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ec35780601f10610e9857610100808354040283529160200191610ec3565b6000610ef33384846130cf565b6000806000601154905080421061208f576000806120766134fe565b505063ffffffff938416985050501693506120f3915050565b6000806000806000806120a06134fe565b9550955095509550955095506120b784878961353f565b98506120c483868961353f565b9750600e546120d38a8a612ce6565b10156120ec578163ffffffff1698508063ffffffff1697505b5050505050505b509091565b6103e881565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561214c57600080fd5b505afa158015612160573d6000803e3d6000fd5b505050506040513d602081101561217657600080fd5b50516001600160a01b031633146121c4576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6002600754141561220a576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b60026007556008546301000000900460ff16612264576040805162461bcd60e51b815260206004820152601460248201527349463a2049535f43555252454e544c595f554e4960601b604482015290519081900360640190fd5b61226e8282612eeb565b50506001600755565b600260075414156122bd576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b6002600755600954600a546001600160a01b0391821691166000806122e0610ecb565b91509150612371848661236c85886001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561233a57600080fd5b505afa15801561234e573d6000803e3d6000fd5b505050506040513d602081101561236457600080fd5b505190612c96565b612aa4565b6123c7838661236c84876001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561233a57600080fd5b50506001600755505050565b600854600160201b90046001600160a01b031681565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561243757600080fd5b505afa15801561244b573d6000803e3d6000fd5b505050506040513d602081101561246157600080fd5b50516001600160a01b031633146124af576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b60648110156124f7576040805162461bcd60e51b815260206004820152600f60248201526e49463a20494e56414c49445f46454560881b604482015290519081900360640190fd5b6012805490829055604080518281526020810184905281517f985b27d3fed0c26bf4c91858b7a7bf9f3406337d65fcb519d177f56758627508929181900390910190a15050565b600a546001600160a01b031681565b600860049054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561259b57600080fd5b505afa1580156125af573d6000803e3d6000fd5b505050506040513d60208110156125c557600080fd5b50516001600160a01b03163314612613576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6008805460ff831661ffff19821681179092556040805161ffff909216808352602083019390935280517f907af1ce671677e36d7827744cdc6febfa3a1124adfb2bfb5288e1ae9896dda29281900390910190a15050565b428410156126ae576040805162461bcd60e51b815260206004820152600b60248201526a12518e881156141254915160aa1b604482015290519081900360640190fd5b6005546001600160a01b0380891660008181526006602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156127c9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906127ff5750886001600160a01b0316816001600160a01b0316145b612848576040805162461bcd60e51b815260206004820152601560248201527449463a20494e56414c49445f5349474e415455524560581b604482015290519081900360640190fd5b612853898989612e89565b505050505050505050565b600460209081526000928352604080842090915290825290205481565b60085461ffff81169160ff620100008304811692630100000090041690565b600b546001600160a01b031681565b600854600160201b90046001600160a01b031633146128ff576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600b80546001600160a01b038085166001600160a01b031992831617909255600c805484841690831617905560098054878416908316179055600a80549286169290911691909117905561295384846135e4565b50505050565b6002600754141561299f576040805162461bcd60e51b815260206004820152601f6024820152600080516020613cc2833981519152604482015290519081900360640190fd5b6002600755600954604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156129ef57600080fd5b505afa158015612a03573d6000803e3d6000fd5b505050506040513d6020811015612a1957600080fd5b5051600a54604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015612a6c57600080fd5b505afa158015612a80573d6000803e3d6000fd5b505050506040513d6020811015612a9657600080fd5b5051905061226e8282612e09565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17815292518151600094859489169392918291908083835b60208310612b505780518252601f199092019160209182019101612b31565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612bb2576040519150601f19603f3d011682016040523d82523d6000602084013e612bb7565b606091505b5091509150818015612be5575080511580612be55750808060200190516020811015612be257600080fd5b50515b612c2c576040805162461bcd60e51b815260206004820152601360248201527212518e881514905394d1915497d19052531151606a1b604482015290519081900360640190fd5b5050505050565b6000811580612c4e57505080820282828281612c4b57fe5b04145b610ef7576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610ef7576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000806000612cf3610ecb565b915091506000818311612d1057612d0b856001612c96565b612d1b565b612d1b866001612c96565b90506000612d356001612d2f846002612c33565b90613a29565b90506000612d61612d47836002612c33565b612d5b612d548888613a29565b8690612c33565b9061342b565b9050600281612d81612d7785612d5b8a8a612c33565b6002850a016132ec565b010a98975050505050505050565b600080612d9b836132ec565b90506000848611612db657612db1876001612c96565b612dc1565b612dc1886001612c96565b90506000612dcf8284612c33565b905084612dfa6002612de2856001613a29565b0a612d5b612df08a86613a29565b610cf28c87613a29565b10159998505050505050505050565b600d80546fffffffffffffffffffffffffffffffff19166001600160801b03848116919091178116600160801b8483168102919091179283905560408051848416815291909304909116602082015281517fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a929181900390910190a15050565b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60018263ffffffff1610158015612f09575060018163ffffffff1610155b8015612f1e5750620f42408263ffffffff1611155b8015612f335750620f42408163ffffffff1611155b612f78576040805162461bcd60e51b815260206004820152601160248201527012518e881253959053125117d093d3d4d5607a1b604482015290519081900360640190fd5b6011544290811015612fd1576040805162461bcd60e51b815260206004820152601a60248201527f49463a20424f4f53545f414c52454144595f4348414e47494e47000000000000604482015290519081900360640190fd5b600080612fdc610ecb565b91509150612fea828261317d565b50600f805467ffffffff0000000019600160401b80830463ffffffff90811663ffffffff1990941693909317918216600160601b928390048416600160201b908102919091176bffffffff000000000000000019168a851683021763ffffffff60601b191689851684021794859055601088905560135488016011819055604080518787168152928704861660208401529286048516828401529290940490921660608401526080830186905260a0830152517ff771495302afb2f84f43cab3d699e9548748b5154c0c8feba486d0e3e1d860799160c0908290030190a15050505050565b6001600160a01b0383166000908152600360205260409020546130f29082612c96565b6001600160a01b0380851660009081526003602052604080822093909355908416815220546131219082613a29565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600860049054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b1580156131ce57600080fd5b505afa1580156131e2573d6000803e3d6000fd5b505050506040513d60208110156131f857600080fd5b5051600e546001600160a01b0382161580159450919250906132d85780156132d3576000806132256133df565b60085491935091506000906301000000900460ff166132505761324b6119758989612c33565b61325d565b61325d6119758484612ce6565b9050600061326a856132ec565b9050808211156132ce5760006132916004610cf26132888686612c96565b60025490612c33565b905060006132aa6132a3846004612c33565b8590613a29565b905060008183816132b757fe5b04905080156132ca576132ca898261333e565b5050505b505050505b6132e4565b80156132e4576000600e555b505092915050565b6000600382111561332f575080600160028204015b818110156133295780915060028182858161331857fe5b04018161332157fe5b049050613301565b50613339565b8115613339575060015b919050565b60025461334b9082613a29565b6002556001600160a01b0382166000908152600360205260409020546133719082613a29565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106133d85781611350565b5090919050565b6000806133ea61205a565b600f805463ffffffff808416600160a01b0263ffffffff60a01b19918616600160801b0263ffffffff60801b19909316929092171617905590939092509050565b600061135083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613a78565b6001600160a01b0382166000908152600360205260409020546134909082612c96565b6001600160a01b0383166000908152600360205260409020556002546134b69082612c96565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600f5463ffffffff600160401b8204811692600160601b830482169282811692600160201b8204811692600160801b8304821692600160a01b900490911690565b60105460009063ffffffff80861690851611156135a1576135996135896135668584612c96565b612d5b6135734286612c96565b610cf263ffffffff8a811690808d1690612c9616565b63ffffffff8088169190613a2916565b915050611350565b6135996135d46135b18584612c96565b612d5b6135be4286612c96565b610cf263ffffffff8b811690808c1690612c9616565b63ffffffff8088169190612c9616565b6000826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561361f57600080fd5b505afa158015613633573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561365c57600080fd5b8101908080516040519392919084600160201b82111561367b57600080fd5b90830190602082018581111561369057600080fd5b8251600160201b8111828201881017156136a957600080fd5b82525081516020918201929091019080838360005b838110156136d65781810151838201526020016136be565b50505050905090810190601f1680156137035780820380516001836020036101000a031916815260200191505b50604052505050826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561374357600080fd5b505afa158015613757573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561378057600080fd5b8101908080516040519392919084600160201b82111561379f57600080fd5b9083019060208201858111156137b457600080fd5b8251600160201b8111828201881017156137cd57600080fd5b82525081516020918201929091019080838360005b838110156137fa5781810151838201526020016137e2565b50505050905090810190601f1680156138275780820380516001836020036101000a031916815260200191505b506040525050506040516020018083805190602001908083835b602083106138605780518252601f199092019160209182019101613841565b6001836020036101000a03801982511681845116808217855250505050505090500180602f60f81b81525060010182805190602001908083835b602083106138b95780518252601f19909201916020918201910161389a565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052905080604051602001808074024b6b837b9b9b4b136329029bbb0b8102628399d1605d1b81525060150182805190602001908083835b602083106139435780518252601f199092019160209182019101613924565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526000908051906020019061398c929190613c20565b5080604051602001808066024a316a6281d160cd1b81525060070182805190602001908083835b602083106139d25780518252601f1990920191602091820191016139b3565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260019080519060200190613a1b929190613c20565b50613a24613b1a565b505050565b80820182811015610ef7576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b60008183613b045760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613ac9578181015183820152602001613ab1565b50505050905090810190601f168015613af65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581613b1057fe5b0495945050505050565b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040518082805460018160011615610100020316600290048015613b9d5780601f10613b7b576101008083540402835291820191613b9d565b820191906000526020600020905b815481529060010190602001808311613b89575b505060408051918290038220828201825260018352603160f81b602093840152815180840196909652858201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606086015260808501959095523060a0808601919091528551808603909101815260c090940190945250508051910120600555565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282613c565760008555613c9c565b82601f10613c6f57805160ff1916838001178555613c9c565b82800160010185558215613c9c579182015b82811115613c9c578251825591602001919060010190613c81565b50613ca8929150613cac565b5090565b5b80821115613ca85760008155600101613cad56fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c0049463a20494e53554646494349454e545f4c49515549444954595f4d494e54454449463a20494e53554646494349454e545f4c49515549444954595f4255524e4544a2646970667358221220c4cecd97baa97e8c2110f0ecae011763098ffc0ace4cba4f05c92277284b7ad864736f6c63430007060033a264697066735822122037e4e2901d81e2205e0b67de780db514bf594ca4c24e7a3191859333cbe0e71464736f6c63430007060033"
};

// src/contracts/ImpossibleSwapFactory.ts
var ImpossibleSwapFactory = class extends import_eth_wallet5.Contract {
  constructor(wallet, address) {
    super(wallet, address, ImpossibleSwapFactory_json_default.abi, ImpossibleSwapFactory_json_default.bytecode);
    this.assign();
  }
  deploy(governance) {
    return this.__deploy([governance]);
  }
  parsePairCreatedEvent(receipt) {
    return this.parseEvents(receipt, "PairCreated").map((e) => this.decodePairCreatedEvent(e));
  }
  decodePairCreatedEvent(event) {
    let result = event.data;
    return {
      token0: result.token0,
      token1: result.token1,
      pair: result.pair,
      param4: new import_eth_wallet5.BigNumber(result[3]),
      _event: event
    };
  }
  parseUpdatedGovernanceEvent(receipt) {
    return this.parseEvents(receipt, "UpdatedGovernance").map((e) => this.decodeUpdatedGovernanceEvent(e));
  }
  decodeUpdatedGovernanceEvent(event) {
    let result = event.data;
    return {
      governance: result.governance,
      _event: event
    };
  }
  assign() {
    let allPairs_call = async (param1) => {
      let result = await this.call("allPairs", [import_eth_wallet5.Utils.toString(param1)]);
      return result;
    };
    this.allPairs = allPairs_call;
    let allPairsLength_call = async () => {
      let result = await this.call("allPairsLength");
      return new import_eth_wallet5.BigNumber(result);
    };
    this.allPairsLength = allPairsLength_call;
    let approvedTokens_call = async (param1) => {
      let result = await this.call("approvedTokens", [param1]);
      return result;
    };
    this.approvedTokens = approvedTokens_call;
    let feeTo_call = async () => {
      let result = await this.call("feeTo");
      return result;
    };
    this.feeTo = feeTo_call;
    let getPairParams = (params) => [params.param1, params.param2];
    let getPair_call = async (params) => {
      let result = await this.call("getPair", getPairParams(params));
      return result;
    };
    this.getPair = getPair_call;
    let governance_call = async () => {
      let result = await this.call("governance");
      return result;
    };
    this.governance = governance_call;
    let router_call = async () => {
      let result = await this.call("router");
      return result;
    };
    this.router = router_call;
    let routerExtension_call = async () => {
      let result = await this.call("routerExtension");
      return result;
    };
    this.routerExtension = routerExtension_call;
    let whitelist_call = async () => {
      let result = await this.call("whitelist");
      return result;
    };
    this.whitelist = whitelist_call;
    let changeTokenAccessParams = (params) => [params.token, params.allowed];
    let changeTokenAccess_send = async (params) => {
      let result = await this.send("changeTokenAccess", changeTokenAccessParams(params));
      return result;
    };
    let changeTokenAccess_call = async (params) => {
      let result = await this.call("changeTokenAccess", changeTokenAccessParams(params));
      return;
    };
    this.changeTokenAccess = Object.assign(changeTokenAccess_send, {
      call: changeTokenAccess_call
    });
    let createPairParams = (params) => [params.tokenA, params.tokenB];
    let createPair_send = async (params) => {
      let result = await this.send("createPair", createPairParams(params));
      return result;
    };
    let createPair_call = async (params) => {
      let result = await this.call("createPair", createPairParams(params));
      return result;
    };
    this.createPair = Object.assign(createPair_send, {
      call: createPair_call
    });
    let setFeeTo_send = async (feeTo) => {
      let result = await this.send("setFeeTo", [feeTo]);
      return result;
    };
    let setFeeTo_call = async (feeTo) => {
      let result = await this.call("setFeeTo", [feeTo]);
      return;
    };
    this.setFeeTo = Object.assign(setFeeTo_send, {
      call: setFeeTo_call
    });
    let setGovernance_send = async (governance) => {
      let result = await this.send("setGovernance", [governance]);
      return result;
    };
    let setGovernance_call = async (governance) => {
      let result = await this.call("setGovernance", [governance]);
      return;
    };
    this.setGovernance = Object.assign(setGovernance_send, {
      call: setGovernance_call
    });
    let setRouterAndExtensionParams = (params) => [params.router, params.routerExtension];
    let setRouterAndExtension_send = async (params) => {
      let result = await this.send("setRouterAndExtension", setRouterAndExtensionParams(params));
      return result;
    };
    let setRouterAndExtension_call = async (params) => {
      let result = await this.call("setRouterAndExtension", setRouterAndExtensionParams(params));
      return;
    };
    this.setRouterAndExtension = Object.assign(setRouterAndExtension_send, {
      call: setRouterAndExtension_call
    });
    let setWhitelist_send = async (b) => {
      let result = await this.send("setWhitelist", [b]);
      return result;
    };
    let setWhitelist_call = async (b) => {
      let result = await this.call("setWhitelist", [b]);
      return;
    };
    this.setWhitelist = Object.assign(setWhitelist_send, {
      call: setWhitelist_call
    });
  }
};

// src/contracts/ImpossibleWrappedToken.ts
var import_eth_wallet6 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ImpossibleWrappedToken.json.ts
var ImpossibleWrappedToken_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "address", "name": "_underlying", "type": "address" }, { "internalType": "uint256", "name": "_ratioNum", "type": "uint256" }, { "internalType": "uint256", "name": "_ratioDenom", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amt", "type": "uint256" }], "name": "amtToUnderlyingAmt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "guy", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "sendAmt", "type": "uint256" }], "name": "deposit", "outputs": [{ "internalType": "uint256", "name": "wad", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "ratioDenom", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "ratioNum", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "src", "type": "address" }, { "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "underlying", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "underlyingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [{ "internalType": "uint256", "name": "transferAmt", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040526003805460ff191660121790553480156200001e57600080fd5b50604051620013bb380380620013bb833981810160405260608110156200004457600080fd5b508051602082015160409283015160016000908155600580546001600160a01b0319166001600160a01b0380871691909117918290556007859055600884905586516395d89b4160e01b8152965195969495939492939116916395d89b419160048083019286929190829003018186803b158015620000c257600080fd5b505afa158015620000d7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156200010157600080fd5b81019080805160405193929190846401000000008211156200012257600080fd5b9083019060208201858111156200013857600080fd5b82516401000000008111828201881017156200015357600080fd5b82525081516020918201929091019080838360005b838110156200018257818101518382015260200162000168565b50505050905090810190601f168015620001b05780820380516001836020036101000a031916815260200191505b506040525050506040516020018082805190602001908083835b60208310620001eb5780518252601f199092019160209182019101620001ca565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405290508060405160200180806a024a316abb930b83832b2160ad1b815250600b0182805190602001908083835b602083106200026c5780518252601f1990920191602091820191016200024b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260019080519060200190620002b792919062000352565b508060405160200180806302ba4a3160e51b81525060040182805190602001908083835b60208310620002fc5780518252601f199092019160209182019101620002db565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052600290805190602001906200034792919062000352565b5050505050620003fe565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200038a5760008555620003d5565b82601f10620003a557805160ff1916838001178555620003d5565b82800160010185558215620003d5579182015b82811115620003d5578251825591602001919060010190620003b8565b50620003e3929150620003e7565b5090565b5b80821115620003e35760008155600101620003e8565b610fad806200040e6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636f307dc311610097578063b58805be11610066578063b58805be146102ea578063cc91dcbb14610307578063dd62ed3e1461030f578063f3fef3a31461033d57610100565b80636f307dc31461026c57806370a082311461029057806395d89b41146102b6578063a9059cbb146102be57610100565b806323b872dd116100d357806323b872dd146101e4578063313ce5671461021a57806347e7ef241461023857806359356c5c1461026457610100565b806306fdde0314610105578063095ea7b3146101825780630b3ff1cf146101c257806318160ddd146101dc575b600080fd5b61010d610369565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ae6004803603604081101561019857600080fd5b506001600160a01b0381351690602001356103f6565b604080519115158252519081900360200190f35b6101ca61045d565b60408051918252519081900360200190f35b6101ca610463565b6101ae600480360360608110156101fa57600080fd5b506001600160a01b03813581169160208101359091169060400135610469565b610222610646565b6040805160ff9092168252519081900360200190f35b6101ca6004803603604081101561024e57600080fd5b506001600160a01b03813516906020013561064f565b6101ca61081e565b610274610824565b604080516001600160a01b039092168252519081900360200190f35b6101ca600480360360208110156102a657600080fd5b50356001600160a01b0316610833565b61010d610845565b6101ae600480360360408110156102d457600080fd5b506001600160a01b03813516906020013561089d565b6101ca6004803603602081101561030057600080fd5b5035610906565b6101ca610923565b6101ca6004803603604081101561032557600080fd5b506001600160a01b0381358116916020013516610929565b6101ca6004803603604081101561035357600080fd5b506001600160a01b038135169060200135610946565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103ee5780601f106103c3576101008083540402835291602001916103ee565b820191906000526020600020905b8154815290600101906020018083116103d157829003601f168201915b505050505081565b336000818152600a602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60085481565b60045481565b6001600160a01b0383166000908152600960205260408120548211156104b0576040805162461bcd60e51b8152602060048201526000602482015290519081900360440190fd5b6001600160a01b038316610505576040805162461bcd60e51b815260206004820152601760248201527612518815dc985c1c195c8e881253959053125117d114d5604a1b604482015290519081900360640190fd5b6001600160a01b038416331480159061054357506001600160a01b0384166000908152600a6020908152604080832033845290915290205460001914155b156105d5576001600160a01b0384166000908152600a602090815260408083203384529091529020548211156105aa5760405162461bcd60e51b8152600401808060200182810382526023815260200180610f286023913960400191505060405180910390fd5b6001600160a01b0384166000908152600a602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260096020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b60035460ff1681565b6000600260005414156106a9576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556005546106c6906001600160a01b0316333085610a61565b600654600554604080516370a0823160e01b8152306004820152905160009361074f9390926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b15801561071d57600080fd5b505afa158015610731573d6000803e3d6000fd5b505050506040513d602081101561074757600080fd5b505190610bbd565b905061077260085461076c60075484610c0d90919063ffffffff16565b90610c70565b6001600160a01b0385166000908152600960205260409020549092506107989083610cb2565b6001600160a01b0385166000908152600960205260409020556004546107be9083610cb2565b6004556006546107ce9082610cb2565b6006556040805183815290516001600160a01b038616916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a350600160005592915050565b60065481565b6005546001600160a01b031681565b60096020526000908152604090205481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156103ee5780601f106103c3576101008083540402835291602001916103ee565b60006001600160a01b0383166108f4576040805162461bcd60e51b815260206004820152601760248201527612518815dc985c1c195c8e881253959053125117d114d5604a1b604482015290519081900360640190fd5b6108ff338484610469565b9392505050565b600061045760075461076c60085485610c0d90919063ffffffff16565b60075481565b600a60209081526000928352604080842090915290825290205481565b6000600260005414156109a0576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000908155338152600960205260409020546109be9083610bbd565b336000908152600960205260409020556004546109db9083610bbd565b6004556007546008546109f4919061076c908590610c0d565b600554909150610a0e906001600160a01b03168483610d01565b600654610a1b9082610bbd565b60065560408051838152905160009133917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600160005592915050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b178152925182516000948594938a169392918291908083835b60208310610ae55780518252601f199092019160209182019101610ac6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b47576040519150601f19603f3d011682016040523d82523d6000602084013e610b4c565b606091505b5091509150818015610b7a575080511580610b7a5750808060200190516020811015610b7757600080fd5b50515b610bb55760405162461bcd60e51b8152600401808060200182810382526031815260200180610ef76031913960400191505060405180910390fd5b505050505050565b80820382811115610457576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000811580610c2857505080820282828281610c2557fe5b04145b610457576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b60006108ff83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610e54565b80820182811015610457576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1781529251825160009485949389169392918291908083835b60208310610d7d5780518252601f199092019160209182019101610d5e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ddf576040519150601f19603f3d011682016040523d82523d6000602084013e610de4565b606091505b5091509150818015610e12575080511580610e125750808060200190516020811015610e0f57600080fd5b50515b610e4d5760405162461bcd60e51b815260040180806020018281038252602d815260200180610f4b602d913960400191505060405180910390fd5b5050505050565b60008183610ee05760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ea5578181015183820152602001610e8d565b50505050905090810190601f168015610ed25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610eec57fe5b049594505050505056fe5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c6564496d706f737369626c65577261707065723a20494e535546465f414c4c4f57414e43455472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564a2646970667358221220adcec3f7fc903a704c8d18ea04f31cfa7285187855651e5227ff822dd249330964736f6c63430007060033"
};

// src/contracts/ImpossibleWrappedToken.ts
var ImpossibleWrappedToken = class extends import_eth_wallet6.Contract {
  constructor(wallet, address) {
    super(wallet, address, ImpossibleWrappedToken_json_default.abi, ImpossibleWrappedToken_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.underlying, import_eth_wallet6.Utils.toString(params.ratioNum), import_eth_wallet6.Utils.toString(params.ratioDenom)]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      spender: result.spender,
      value: new import_eth_wallet6.BigNumber(result.value),
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      value: new import_eth_wallet6.BigNumber(result.value),
      _event: event
    };
  }
  assign() {
    let allowanceParams = (params) => [params.param1, params.param2];
    let allowance_call = async (params) => {
      let result = await this.call("allowance", allowanceParams(params));
      return new import_eth_wallet6.BigNumber(result);
    };
    this.allowance = allowance_call;
    let amtToUnderlyingAmt_call = async (amt) => {
      let result = await this.call("amtToUnderlyingAmt", [import_eth_wallet6.Utils.toString(amt)]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.amtToUnderlyingAmt = amtToUnderlyingAmt_call;
    let balanceOf_call = async (param1) => {
      let result = await this.call("balanceOf", [param1]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let decimals_call = async () => {
      let result = await this.call("decimals");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.decimals = decimals_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let ratioDenom_call = async () => {
      let result = await this.call("ratioDenom");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.ratioDenom = ratioDenom_call;
    let ratioNum_call = async () => {
      let result = await this.call("ratioNum");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.ratioNum = ratioNum_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let underlying_call = async () => {
      let result = await this.call("underlying");
      return result;
    };
    this.underlying = underlying_call;
    let underlyingBalance_call = async () => {
      let result = await this.call("underlyingBalance");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.underlyingBalance = underlyingBalance_call;
    let approveParams = (params) => [params.guy, import_eth_wallet6.Utils.toString(params.wad)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return result;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let depositParams = (params) => [params.dst, import_eth_wallet6.Utils.toString(params.sendAmt)];
    let deposit_send = async (params) => {
      let result = await this.send("deposit", depositParams(params));
      return result;
    };
    let deposit_call = async (params) => {
      let result = await this.call("deposit", depositParams(params));
      return new import_eth_wallet6.BigNumber(result);
    };
    this.deposit = Object.assign(deposit_send, {
      call: deposit_call
    });
    let transferParams = (params) => [params.dst, import_eth_wallet6.Utils.toString(params.wad)];
    let transfer_send = async (params) => {
      let result = await this.send("transfer", transferParams(params));
      return result;
    };
    let transfer_call = async (params) => {
      let result = await this.call("transfer", transferParams(params));
      return result;
    };
    this.transfer = Object.assign(transfer_send, {
      call: transfer_call
    });
    let transferFromParams = (params) => [params.src, params.dst, import_eth_wallet6.Utils.toString(params.wad)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return result;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let withdrawParams = (params) => [params.dst, import_eth_wallet6.Utils.toString(params.wad)];
    let withdraw_send = async (params) => {
      let result = await this.send("withdraw", withdrawParams(params));
      return result;
    };
    let withdraw_call = async (params) => {
      let result = await this.call("withdraw", withdrawParams(params));
      return new import_eth_wallet6.BigNumber(result);
    };
    this.withdraw = Object.assign(withdraw_send, {
      call: withdraw_call
    });
  }
};

// src/contracts/ImpossibleWrapperFactory.ts
var import_eth_wallet7 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ImpossibleWrapperFactory.json.ts
var ImpossibleWrapperFactory_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "address", "name": "_governance", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "", "type": "address" }, { "indexed": false, "internalType": "address", "name": "", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" }], "name": "WrapCreated", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "", "type": "address" }, { "indexed": false, "internalType": "address", "name": "", "type": "address" }], "name": "WrapDeleted", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "uint256", "name": "ratioNumerator", "type": "uint256" }, { "internalType": "uint256", "name": "ratioDenominator", "type": "uint256" }], "name": "createPairing", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "wrapper", "type": "address" }], "name": "deletePairing", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "governance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "_governance", "type": "address" }], "name": "setGovernance", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "tokensToWrappedTokens", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "wrappedTokensToTokens", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50604051611b1a380380611b1a8339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055611ab5806100656000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806326c9c320146100675780635aa6e6751461008f5780636b95b0dc146100b3578063a37a826f146100d9578063a936579c1461010b578063ab033ea914610131575b600080fd5b61008d6004803603602081101561007d57600080fd5b50356001600160a01b0316610157565b005b6100976103f8565b604080516001600160a01b039092168252519081900360200190f35b610097600480360360208110156100c957600080fd5b50356001600160a01b0316610407565b610097600480360360608110156100ef57600080fd5b506001600160a01b038135169060208101359060400135610422565b6100976004803603602081101561012157600080fd5b50356001600160a01b031661062b565b61008d6004803603602081101561014757600080fd5b50356001600160a01b0316610646565b6000546001600160a01b031633146101a6576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b806001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101df57600080fd5b505afa1580156101f3573d6000803e3d6000fd5b505050506040513d602081101561020957600080fd5b505115610252576040805162461bcd60e51b815260206004820152601260248201527149463a204e4f4e5a45524f5f535550504c5960701b604482015290519081900360640190fd5b6001600160a01b03808216600081815260026020908152604091829020548251636f307dc360e01b81529251941693849392636f307dc3926004808301939192829003018186803b1580156102a657600080fd5b505afa1580156102ba573d6000803e3d6000fd5b505050506040513d60208110156102d057600080fd5b50516001600160a01b031614610321576040805162461bcd60e51b815260206004820152601160248201527024a31d1024a72b20a624a22faa27a5a2a760791b604482015290519081900360640190fd5b6001600160a01b03811661037c576040805162461bcd60e51b815260206004820152601a60248201527f49463a2041646472657373206d75737420686176652070616972000000000000604482015290519081900360640190fd5b6001600160a01b03808216600081815260016020908152604080832080546001600160a01b031990811690915594871680845260028352928190208054909516909455835192835282015281517f8fe58a4ccd7daf45d844d35e2022c5d89b70f4c8a8465c1f9d9b0e65680f5b8b929181900390910190a15050565b6000546001600160a01b031681565b6001602052600090815260409020546001600160a01b031681565b600080546001600160a01b03163314610472576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b6001600160a01b03848116600090815260016020526040902054161580156104b257506001600160a01b0384811660009081526002602052604090205416155b6104f5576040805162461bcd60e51b815260206004820152600f60248201526e49463a20504149525f45584953545360881b604482015290519081900360640190fd5b821580159061050357508115155b610548576040805162461bcd60e51b815260206004820152601160248201527049463a20494e56414c49445f524154494f60781b604482015290519081900360640190fd5b6000848484604051610559906106b7565b80846001600160a01b031681526020018381526020018281526020019350505050604051809103906000f080158015610596573d6000803e3d6000fd5b506001600160a01b03808716600081815260016020908152604080832080549587166001600160a01b0319968716811790915580845260028352928190208054909516841790945583519283528201528082018790526060810186905290519192507fd51e90b2371b8ef8f763b59dd4ca7088c28e2fdc4dc5010461d49f3240ed1497919081900360800190a1949350505050565b6002602052600090815260409020546001600160a01b031681565b6000546001600160a01b03163314610695576040805162461bcd60e51b815260206004820152600d60248201526c24a31d102327a92124a22222a760991b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6113bb806106c58339019056fe60806040526003805460ff191660121790553480156200001e57600080fd5b50604051620013bb380380620013bb833981810160405260608110156200004457600080fd5b508051602082015160409283015160016000908155600580546001600160a01b0319166001600160a01b0380871691909117918290556007859055600884905586516395d89b4160e01b8152965195969495939492939116916395d89b419160048083019286929190829003018186803b158015620000c257600080fd5b505afa158015620000d7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156200010157600080fd5b81019080805160405193929190846401000000008211156200012257600080fd5b9083019060208201858111156200013857600080fd5b82516401000000008111828201881017156200015357600080fd5b82525081516020918201929091019080838360005b838110156200018257818101518382015260200162000168565b50505050905090810190601f168015620001b05780820380516001836020036101000a031916815260200191505b506040525050506040516020018082805190602001908083835b60208310620001eb5780518252601f199092019160209182019101620001ca565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405290508060405160200180806a024a316abb930b83832b2160ad1b815250600b0182805190602001908083835b602083106200026c5780518252601f1990920191602091820191016200024b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260019080519060200190620002b792919062000352565b508060405160200180806302ba4a3160e51b81525060040182805190602001908083835b60208310620002fc5780518252601f199092019160209182019101620002db565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052600290805190602001906200034792919062000352565b5050505050620003fe565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200038a5760008555620003d5565b82601f10620003a557805160ff1916838001178555620003d5565b82800160010185558215620003d5579182015b82811115620003d5578251825591602001919060010190620003b8565b50620003e3929150620003e7565b5090565b5b80821115620003e35760008155600101620003e8565b610fad806200040e6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636f307dc311610097578063b58805be11610066578063b58805be146102ea578063cc91dcbb14610307578063dd62ed3e1461030f578063f3fef3a31461033d57610100565b80636f307dc31461026c57806370a082311461029057806395d89b41146102b6578063a9059cbb146102be57610100565b806323b872dd116100d357806323b872dd146101e4578063313ce5671461021a57806347e7ef241461023857806359356c5c1461026457610100565b806306fdde0314610105578063095ea7b3146101825780630b3ff1cf146101c257806318160ddd146101dc575b600080fd5b61010d610369565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ae6004803603604081101561019857600080fd5b506001600160a01b0381351690602001356103f6565b604080519115158252519081900360200190f35b6101ca61045d565b60408051918252519081900360200190f35b6101ca610463565b6101ae600480360360608110156101fa57600080fd5b506001600160a01b03813581169160208101359091169060400135610469565b610222610646565b6040805160ff9092168252519081900360200190f35b6101ca6004803603604081101561024e57600080fd5b506001600160a01b03813516906020013561064f565b6101ca61081e565b610274610824565b604080516001600160a01b039092168252519081900360200190f35b6101ca600480360360208110156102a657600080fd5b50356001600160a01b0316610833565b61010d610845565b6101ae600480360360408110156102d457600080fd5b506001600160a01b03813516906020013561089d565b6101ca6004803603602081101561030057600080fd5b5035610906565b6101ca610923565b6101ca6004803603604081101561032557600080fd5b506001600160a01b0381358116916020013516610929565b6101ca6004803603604081101561035357600080fd5b506001600160a01b038135169060200135610946565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103ee5780601f106103c3576101008083540402835291602001916103ee565b820191906000526020600020905b8154815290600101906020018083116103d157829003601f168201915b505050505081565b336000818152600a602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b60085481565b60045481565b6001600160a01b0383166000908152600960205260408120548211156104b0576040805162461bcd60e51b8152602060048201526000602482015290519081900360440190fd5b6001600160a01b038316610505576040805162461bcd60e51b815260206004820152601760248201527612518815dc985c1c195c8e881253959053125117d114d5604a1b604482015290519081900360640190fd5b6001600160a01b038416331480159061054357506001600160a01b0384166000908152600a6020908152604080832033845290915290205460001914155b156105d5576001600160a01b0384166000908152600a602090815260408083203384529091529020548211156105aa5760405162461bcd60e51b8152600401808060200182810382526023815260200180610f286023913960400191505060405180910390fd5b6001600160a01b0384166000908152600a602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260096020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b60035460ff1681565b6000600260005414156106a9576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556005546106c6906001600160a01b0316333085610a61565b600654600554604080516370a0823160e01b8152306004820152905160009361074f9390926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b15801561071d57600080fd5b505afa158015610731573d6000803e3d6000fd5b505050506040513d602081101561074757600080fd5b505190610bbd565b905061077260085461076c60075484610c0d90919063ffffffff16565b90610c70565b6001600160a01b0385166000908152600960205260409020549092506107989083610cb2565b6001600160a01b0385166000908152600960205260409020556004546107be9083610cb2565b6004556006546107ce9082610cb2565b6006556040805183815290516001600160a01b038616916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a350600160005592915050565b60065481565b6005546001600160a01b031681565b60096020526000908152604090205481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156103ee5780601f106103c3576101008083540402835291602001916103ee565b60006001600160a01b0383166108f4576040805162461bcd60e51b815260206004820152601760248201527612518815dc985c1c195c8e881253959053125117d114d5604a1b604482015290519081900360640190fd5b6108ff338484610469565b9392505050565b600061045760075461076c60085485610c0d90919063ffffffff16565b60075481565b600a60209081526000928352604080842090915290825290205481565b6000600260005414156109a0576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000908155338152600960205260409020546109be9083610bbd565b336000908152600960205260409020556004546109db9083610bbd565b6004556007546008546109f4919061076c908590610c0d565b600554909150610a0e906001600160a01b03168483610d01565b600654610a1b9082610bbd565b60065560408051838152905160009133917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600160005592915050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b178152925182516000948594938a169392918291908083835b60208310610ae55780518252601f199092019160209182019101610ac6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b47576040519150601f19603f3d011682016040523d82523d6000602084013e610b4c565b606091505b5091509150818015610b7a575080511580610b7a5750808060200190516020811015610b7757600080fd5b50515b610bb55760405162461bcd60e51b8152600401808060200182810382526031815260200180610ef76031913960400191505060405180910390fd5b505050505050565b80820382811115610457576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000811580610c2857505080820282828281610c2557fe5b04145b610457576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b60006108ff83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610e54565b80820182811015610457576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1781529251825160009485949389169392918291908083835b60208310610d7d5780518252601f199092019160209182019101610d5e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ddf576040519150601f19603f3d011682016040523d82523d6000602084013e610de4565b606091505b5091509150818015610e12575080511580610e125750808060200190516020811015610e0f57600080fd5b50515b610e4d5760405162461bcd60e51b815260040180806020018281038252602d815260200180610f4b602d913960400191505060405180910390fd5b5050505050565b60008183610ee05760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ea5578181015183820152602001610e8d565b50505050905090810190601f168015610ed25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610eec57fe5b049594505050505056fe5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c6564496d706f737369626c65577261707065723a20494e535546465f414c4c4f57414e43455472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c6564a2646970667358221220adcec3f7fc903a704c8d18ea04f31cfa7285187855651e5227ff822dd249330964736f6c63430007060033a2646970667358221220cc6d8463ccbc5d05e0594114b38f4d5ec1eb02c533baea319550aa109a40ebaf64736f6c63430007060033"
};

// src/contracts/ImpossibleWrapperFactory.ts
var ImpossibleWrapperFactory = class extends import_eth_wallet7.Contract {
  constructor(wallet, address) {
    super(wallet, address, ImpossibleWrapperFactory_json_default.abi, ImpossibleWrapperFactory_json_default.bytecode);
    this.assign();
  }
  deploy(governance) {
    return this.__deploy([governance]);
  }
  parseWrapCreatedEvent(receipt) {
    return this.parseEvents(receipt, "WrapCreated").map((e) => this.decodeWrapCreatedEvent(e));
  }
  decodeWrapCreatedEvent(event) {
    let result = event.data;
    return {
      param1: result[0],
      param2: result[1],
      param3: new import_eth_wallet7.BigNumber(result[2]),
      param4: new import_eth_wallet7.BigNumber(result[3]),
      _event: event
    };
  }
  parseWrapDeletedEvent(receipt) {
    return this.parseEvents(receipt, "WrapDeleted").map((e) => this.decodeWrapDeletedEvent(e));
  }
  decodeWrapDeletedEvent(event) {
    let result = event.data;
    return {
      param1: result[0],
      param2: result[1],
      _event: event
    };
  }
  assign() {
    let governance_call = async () => {
      let result = await this.call("governance");
      return result;
    };
    this.governance = governance_call;
    let tokensToWrappedTokens_call = async (param1) => {
      let result = await this.call("tokensToWrappedTokens", [param1]);
      return result;
    };
    this.tokensToWrappedTokens = tokensToWrappedTokens_call;
    let wrappedTokensToTokens_call = async (param1) => {
      let result = await this.call("wrappedTokensToTokens", [param1]);
      return result;
    };
    this.wrappedTokensToTokens = wrappedTokensToTokens_call;
    let createPairingParams = (params) => [params.underlying, import_eth_wallet7.Utils.toString(params.ratioNumerator), import_eth_wallet7.Utils.toString(params.ratioDenominator)];
    let createPairing_send = async (params) => {
      let result = await this.send("createPairing", createPairingParams(params));
      return result;
    };
    let createPairing_call = async (params) => {
      let result = await this.call("createPairing", createPairingParams(params));
      return result;
    };
    this.createPairing = Object.assign(createPairing_send, {
      call: createPairing_call
    });
    let deletePairing_send = async (wrapper) => {
      let result = await this.send("deletePairing", [wrapper]);
      return result;
    };
    let deletePairing_call = async (wrapper) => {
      let result = await this.call("deletePairing", [wrapper]);
      return;
    };
    this.deletePairing = Object.assign(deletePairing_send, {
      call: deletePairing_call
    });
    let setGovernance_send = async (governance) => {
      let result = await this.send("setGovernance", [governance]);
      return result;
    };
    let setGovernance_call = async (governance) => {
      let result = await this.call("setGovernance", [governance]);
      return;
    };
    this.setGovernance = Object.assign(setGovernance_send, {
      call: setGovernance_call
    });
  }
};

// src/contracts/test/DeflatingERC20.ts
var import_eth_wallet8 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/test/DeflatingERC20.json.ts
var DeflatingERC20_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "uint256", "name": "_totalSupply", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50604051610b49380380610b498339818101604052602081101561003357600080fd5b5051604080518082018252601481527f4465666c6174696e67205465737420546f6b656e0000000000000000000000006020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527ff89e31130e6fd3d87d62a1ac2770fba58bed5a06c47ce70fa97f8218b1b2743a818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015246608082018190523060a0808401919091528451808403909101815260c09092019093528051910120600355610125338361012c565b505061022c565b610145816000546101ce60201b6106781790919060201c565b60009081556001600160a01b0383168152600160209081526040909120546101769183906106786101ce821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b80820182811015610226576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b92915050565b61090e8061023b6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461025b578063a9059cbb14610263578063d505accf1461028f578063dd62ed3e146102e2576100cf565b80633644e5151461020757806370a082311461020f5780637ecebe0014610235576100cf565b806306fdde03146100d4578063095ea7b31461015157806318160ddd1461019157806323b872dd146101ab57806330adf81f146101e1578063313ce567146101e9575b600080fd5b6100dc610310565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101165781810151838201526020016100fe565b50505050905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561016757600080fd5b506001600160a01b038135169060200135610340565b604080519115158252519081900360200190f35b610199610357565b60408051918252519081900360200190f35b61017d600480360360608110156101c157600080fd5b506001600160a01b0381358116916020810135909116906040013561035d565b6101996103f1565b6101f1610415565b6040805160ff9092168252519081900360200190f35b61019961041a565b6101996004803603602081101561022557600080fd5b50356001600160a01b0316610420565b6101996004803603602081101561024b57600080fd5b50356001600160a01b0316610432565b6100dc610444565b61017d6004803603604081101561027957600080fd5b506001600160a01b038135169060200135610463565b6102e0600480360360e08110156102a557600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610470565b005b610199600480360360408110156102f857600080fd5b506001600160a01b038135811691602001351661065b565b604051806040016040528060148152602001732232b33630ba34b733902a32b9ba102a37b5b2b760611b81525081565b600061034d3384846106c7565b5060015b92915050565b60005481565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019146103dc576001600160a01b03841660009081526002602090815260408083203384529091529020546103b79083610729565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b6103e7848484610779565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b60016020526000908152604090205481565b60046020526000908152604090205481565b6040518060400160405280600381526020016211151560ea1b81525081565b600061034d338484610779565b428410156104af576040805162461bcd60e51b81526020600482015260076024820152661156141254915160ca1b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156105ca573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906106005750886001600160a01b0316816001600160a01b0316145b610645576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015290519081900360640190fd5b6106508989896106c7565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b80820182811015610351576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b80820382811115610351576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b606481046107878482610846565b60006107938383610729565b6001600160a01b0386166000908152600160205260409020549091506107b99082610729565b6001600160a01b0380871660009081526001602052604080822093909355908616815220546107e89082610678565b6001600160a01b0380861660008181526001602090815260409182902094909455805185815290519193928916927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35050505050565b6001600160a01b0382166000908152600160205260409020546108699082610729565b6001600160a01b038316600090815260016020526040812091909155546108909082610729565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a3505056fea264697066735822122018cd9643b73b6793754948b4169462ea56cc743ca8df3707af7e49364cb2b7c264736f6c63430007060033"
};

// src/contracts/test/DeflatingERC20.ts
var DeflatingERC20 = class extends import_eth_wallet8.Contract {
  constructor(wallet, address) {
    super(wallet, address, DeflatingERC20_json_default.abi, DeflatingERC20_json_default.bytecode);
    this.assign();
  }
  deploy(totalSupply) {
    return this.__deploy([import_eth_wallet8.Utils.toString(totalSupply)]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      spender: result.spender,
      value: new import_eth_wallet8.BigNumber(result.value),
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      value: new import_eth_wallet8.BigNumber(result.value),
      _event: event
    };
  }
  assign() {
    let DOMAIN_SEPARATOR_call = async () => {
      let result = await this.call("DOMAIN_SEPARATOR");
      return result;
    };
    this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call;
    let PERMIT_TYPEHASH_call = async () => {
      let result = await this.call("PERMIT_TYPEHASH");
      return result;
    };
    this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call;
    let allowanceParams = (params) => [params.param1, params.param2];
    let allowance_call = async (params) => {
      let result = await this.call("allowance", allowanceParams(params));
      return new import_eth_wallet8.BigNumber(result);
    };
    this.allowance = allowance_call;
    let balanceOf_call = async (param1) => {
      let result = await this.call("balanceOf", [param1]);
      return new import_eth_wallet8.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let decimals_call = async () => {
      let result = await this.call("decimals");
      return new import_eth_wallet8.BigNumber(result);
    };
    this.decimals = decimals_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let nonces_call = async (param1) => {
      let result = await this.call("nonces", [param1]);
      return new import_eth_wallet8.BigNumber(result);
    };
    this.nonces = nonces_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_wallet8.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let approveParams = (params) => [params.spender, import_eth_wallet8.Utils.toString(params.value)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return result;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let permitParams = (params) => [params.owner, params.spender, import_eth_wallet8.Utils.toString(params.value), import_eth_wallet8.Utils.toString(params.deadline), import_eth_wallet8.Utils.toString(params.v), import_eth_wallet8.Utils.stringToBytes32(params.r), import_eth_wallet8.Utils.stringToBytes32(params.s)];
    let permit_send = async (params) => {
      let result = await this.send("permit", permitParams(params));
      return result;
    };
    let permit_call = async (params) => {
      let result = await this.call("permit", permitParams(params));
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let transferParams = (params) => [params.to, import_eth_wallet8.Utils.toString(params.value)];
    let transfer_send = async (params) => {
      let result = await this.send("transfer", transferParams(params));
      return result;
    };
    let transfer_call = async (params) => {
      let result = await this.call("transfer", transferParams(params));
      return result;
    };
    this.transfer = Object.assign(transfer_send, {
      call: transfer_call
    });
    let transferFromParams = (params) => [params.from, params.to, import_eth_wallet8.Utils.toString(params.value)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return result;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
  }
};

// src/contracts/test/ERC20.ts
var import_eth_wallet9 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/test/ERC20.json.ts
var ERC20_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "uint256", "name": "_totalSupply", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60c0604052601360808190527f496d706f737369626c652053776170204c50730000000000000000000000000060a0908152620000409160009190620002d4565b5060408051808201909152600580825264049462d4c560dc1b60209092019182526200006f91600191620002d4565b503480156200007d57600080fd5b5060405162000c8e38038062000c8e83398181016040526020811015620000a357600080fd5b5051620000af620000c2565b620000bb3382620001cc565b5062000380565b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040518082805460018160011615610100020316600290048015620001495780601f106200012657610100808354040283529182019162000149565b820191906000526020600020905b81548152906001019060200180831162000134575b505060408051918290038220828201825260018352603160f81b602093840152815180840196909652858201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606086015260808501959095523060a0808601919091528551808603909101815260c090940190945250508051910120600555565b620001e8816002546200027560201b620007191790919060201c565b6002556001600160a01b0382166000908152600360209081526040909120546200021d9183906200071962000275821b17901c565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b80820182811015620002ce576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b92915050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200030c576000855562000357565b82601f106200032757805160ff191683800117855562000357565b8280016001018555821562000357579182015b82811115620003575782518255916020019190600101906200033a565b506200036592915062000369565b5090565b5b808211156200036557600081556001016200036a565b6108fe80620003906000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461025b578063a9059cbb14610263578063d505accf1461028f578063dd62ed3e146102e2576100cf565b80633644e5151461020757806370a082311461020f5780637ecebe0014610235576100cf565b806306fdde03146100d4578063095ea7b31461015157806318160ddd1461019157806323b872dd146101ab57806330adf81f146101e1578063313ce567146101e9575b600080fd5b6100dc610310565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101165781810151838201526020016100fe565b50505050905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561016757600080fd5b506001600160a01b03813516906020013561039e565b604080519115158252519081900360200190f35b6101996103b5565b60408051918252519081900360200190f35b61017d600480360360608110156101c157600080fd5b506001600160a01b038135811691602081013590911690604001356103bb565b61019961044f565b6101f1610473565b6040805160ff9092168252519081900360200190f35b610199610478565b6101996004803603602081101561022557600080fd5b50356001600160a01b031661047e565b6101996004803603602081101561024b57600080fd5b50356001600160a01b0316610490565b6100dc6104a2565b61017d6004803603604081101561027957600080fd5b506001600160a01b0381351690602001356104fc565b6102e0600480360360e08110156102a557600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610509565b005b610199600480360360408110156102f857600080fd5b506001600160a01b03813581169160200135166106fc565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b505050505081565b60006103ab338484610768565b5060015b92915050565b60025481565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000191461043a576001600160a01b038416600090815260046020908152604080832033845290915290205461041590836107ca565b6001600160a01b03851660009081526004602090815260408083203384529091529020555b61044584848461081a565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60055481565b60036020526000908152604090205481565b60066020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103965780601f1061036b57610100808354040283529160200191610396565b60006103ab33848461081a565b4284101561054c576040805162461bcd60e51b815260206004820152600b60248201526a12518e881156141254915160aa1b604482015290519081900360640190fd5b6005546001600160a01b0380891660008181526006602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015610667573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061069d5750886001600160a01b0316816001600160a01b0316145b6106e6576040805162461bcd60e51b815260206004820152601560248201527449463a20494e56414c49445f5349474e415455524560581b604482015290519081900360640190fd5b6106f1898989610768565b505050505050505050565b600460209081526000928352604080842090915290825290205481565b808201828110156103af576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b6001600160a01b03808416600081815260046020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b808203828111156103af576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160a01b03831660009081526003602052604090205461083d90826107ca565b6001600160a01b03808516600090815260036020526040808220939093559084168152205461086c9082610719565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350505056fea264697066735822122024af71125e0f0464b6baa312f79123a50b2f0b241f5d2fb71f166a157028a87164736f6c63430007060033"
};

// src/contracts/test/ERC20.ts
var ERC20 = class extends import_eth_wallet9.Contract {
  constructor(wallet, address) {
    super(wallet, address, ERC20_json_default.abi, ERC20_json_default.bytecode);
    this.assign();
  }
  deploy(totalSupply) {
    return this.__deploy([import_eth_wallet9.Utils.toString(totalSupply)]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      spender: result.spender,
      value: new import_eth_wallet9.BigNumber(result.value),
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      value: new import_eth_wallet9.BigNumber(result.value),
      _event: event
    };
  }
  assign() {
    let DOMAIN_SEPARATOR_call = async () => {
      let result = await this.call("DOMAIN_SEPARATOR");
      return result;
    };
    this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call;
    let PERMIT_TYPEHASH_call = async () => {
      let result = await this.call("PERMIT_TYPEHASH");
      return result;
    };
    this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call;
    let allowanceParams = (params) => [params.param1, params.param2];
    let allowance_call = async (params) => {
      let result = await this.call("allowance", allowanceParams(params));
      return new import_eth_wallet9.BigNumber(result);
    };
    this.allowance = allowance_call;
    let balanceOf_call = async (param1) => {
      let result = await this.call("balanceOf", [param1]);
      return new import_eth_wallet9.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let decimals_call = async () => {
      let result = await this.call("decimals");
      return new import_eth_wallet9.BigNumber(result);
    };
    this.decimals = decimals_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let nonces_call = async (param1) => {
      let result = await this.call("nonces", [param1]);
      return new import_eth_wallet9.BigNumber(result);
    };
    this.nonces = nonces_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_wallet9.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let approveParams = (params) => [params.spender, import_eth_wallet9.Utils.toString(params.value)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return result;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let permitParams = (params) => [params.owner, params.spender, import_eth_wallet9.Utils.toString(params.value), import_eth_wallet9.Utils.toString(params.deadline), import_eth_wallet9.Utils.toString(params.v), import_eth_wallet9.Utils.stringToBytes32(params.r), import_eth_wallet9.Utils.stringToBytes32(params.s)];
    let permit_send = async (params) => {
      let result = await this.send("permit", permitParams(params));
      return result;
    };
    let permit_call = async (params) => {
      let result = await this.call("permit", permitParams(params));
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let transferParams = (params) => [params.to, import_eth_wallet9.Utils.toString(params.value)];
    let transfer_send = async (params) => {
      let result = await this.send("transfer", transferParams(params));
      return result;
    };
    let transfer_call = async (params) => {
      let result = await this.call("transfer", transferParams(params));
      return result;
    };
    this.transfer = Object.assign(transfer_send, {
      call: transfer_call
    });
    let transferFromParams = (params) => [params.from, params.to, import_eth_wallet9.Utils.toString(params.value)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return result;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
  }
};

// src/contracts/test/WETH9.ts
var import_eth_wallet10 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/test/WETH9.json.ts
var WETH9_json_default = {
  "abi": [
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "src", "type": "address" }, { "indexed": true, "internalType": "address", "name": "guy", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "dst", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "src", "type": "address" }, { "indexed": true, "internalType": "address", "name": "dst", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "src", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "guy", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "src", "type": "address" }, { "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60c0604052600d60808190526c2bb930b83832b21022ba3432b960991b60a090815261002e916000919061007a565b50604080518082019091526004808252630ae8aa8960e31b602090920191825261005a9160019161007a565b506002805460ff1916601217905534801561007457600080fd5b5061011b565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826100b057600085556100f6565b82601f106100c957805160ff19168380011785556100f6565b828001600101855582156100f6579182015b828111156100f65782518255916020019190600101906100db565b50610102929150610106565b5090565b5b808211156101025760008155600101610107565b61074f8061012a6000396000f3fe60806040526004361061009c5760003560e01c8063313ce56711610064578063313ce5671461020e57806370a082311461023957806395d89b411461026c578063a9059cbb14610281578063d0e30db0146102ba578063dd62ed3e146102c25761009c565b806306fdde03146100a1578063095ea7b31461012b57806318160ddd1461017857806323b872dd1461019f5780632e1a7d4d146101e2575b600080fd5b3480156100ad57600080fd5b506100b66102fd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100f05781810151838201526020016100d8565b50505050905090810190601f16801561011d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013757600080fd5b506101646004803603604081101561014e57600080fd5b506001600160a01b03813516906020013561038b565b604080519115158252519081900360200190f35b34801561018457600080fd5b5061018d6103f1565b60408051918252519081900360200190f35b3480156101ab57600080fd5b50610164600480360360608110156101c257600080fd5b506001600160a01b038135811691602081013590911690604001356103f5565b3480156101ee57600080fd5b5061020c6004803603602081101561020557600080fd5b503561056d565b005b34801561021a57600080fd5b50610223610624565b6040805160ff9092168252519081900360200190f35b34801561024557600080fd5b5061018d6004803603602081101561025c57600080fd5b50356001600160a01b031661062d565b34801561027857600080fd5b506100b661063f565b34801561028d57600080fd5b50610164600480360360408110156102a457600080fd5b506001600160a01b038135169060200135610699565b61020c6106ad565b3480156102ce57600080fd5b5061018d600480360360408110156102e557600080fd5b506001600160a01b03813581169160200135166106fc565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b4790565b6001600160a01b03831660009081526003602052604081205482111561043c576040805162461bcd60e51b8152602060048201526000602482015290519081900360440190fd5b6001600160a01b038416331480159061047a57506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b156104fc576001600160a01b03841660009081526004602090815260408083203384529091529020548211156104d1576040805162461bcd60e51b8152602060048201526000602482015290519081900360440190fd5b6001600160a01b03841660009081526004602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260036020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b336000908152600360205260409020548111156105ab576040805162461bcd60e51b8152602060048201526000602482015290519081900360440190fd5b33600081815260036020526040808220805485900390555183156108fc0291849190818181858888f193505050501580156105ea573d6000803e3d6000fd5b5060408051828152905133917f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65919081900360200190a250565b60025460ff1681565b60036020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103835780601f1061035857610100808354040283529160200191610383565b60006106a63384846103f5565b9392505050565b33600081815260036020908152604091829020805434908101909155825190815291517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9281900390910190a2565b60046020908152600092835260408084209091529082529020548156fea26469706673582212209584d2250cc41ccedf49c261804e086d651dac730664b0b4dbdd5764b3eba27064736f6c63430007060033"
};

// src/contracts/test/WETH9.ts
var WETH9 = class extends import_eth_wallet10.Contract {
  constructor(wallet, address) {
    super(wallet, address, WETH9_json_default.abi, WETH9_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      src: result.src,
      guy: result.guy,
      wad: new import_eth_wallet10.BigNumber(result.wad),
      _event: event
    };
  }
  parseDepositEvent(receipt) {
    return this.parseEvents(receipt, "Deposit").map((e) => this.decodeDepositEvent(e));
  }
  decodeDepositEvent(event) {
    let result = event.data;
    return {
      dst: result.dst,
      wad: new import_eth_wallet10.BigNumber(result.wad),
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      src: result.src,
      dst: result.dst,
      wad: new import_eth_wallet10.BigNumber(result.wad),
      _event: event
    };
  }
  parseWithdrawalEvent(receipt) {
    return this.parseEvents(receipt, "Withdrawal").map((e) => this.decodeWithdrawalEvent(e));
  }
  decodeWithdrawalEvent(event) {
    let result = event.data;
    return {
      src: result.src,
      wad: new import_eth_wallet10.BigNumber(result.wad),
      _event: event
    };
  }
  assign() {
    let allowanceParams = (params) => [params.param1, params.param2];
    let allowance_call = async (params) => {
      let result = await this.call("allowance", allowanceParams(params));
      return new import_eth_wallet10.BigNumber(result);
    };
    this.allowance = allowance_call;
    let balanceOf_call = async (param1) => {
      let result = await this.call("balanceOf", [param1]);
      return new import_eth_wallet10.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let decimals_call = async () => {
      let result = await this.call("decimals");
      return new import_eth_wallet10.BigNumber(result);
    };
    this.decimals = decimals_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_wallet10.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let approveParams = (params) => [params.guy, import_eth_wallet10.Utils.toString(params.wad)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return result;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let deposit_send = async (_value) => {
      let result = await this.send("deposit", [], { value: _value });
      return result;
    };
    let deposit_call = async (_value) => {
      let result = await this.call("deposit", [], { value: _value });
      return;
    };
    this.deposit = Object.assign(deposit_send, {
      call: deposit_call
    });
    let transferParams = (params) => [params.dst, import_eth_wallet10.Utils.toString(params.wad)];
    let transfer_send = async (params) => {
      let result = await this.send("transfer", transferParams(params));
      return result;
    };
    let transfer_call = async (params) => {
      let result = await this.call("transfer", transferParams(params));
      return result;
    };
    this.transfer = Object.assign(transfer_send, {
      call: transfer_call
    });
    let transferFromParams = (params) => [params.src, params.dst, import_eth_wallet10.Utils.toString(params.wad)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return result;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let withdraw_send = async (wad) => {
      let result = await this.send("withdraw", [import_eth_wallet10.Utils.toString(wad)]);
      return result;
    };
    let withdraw_call = async (wad) => {
      let result = await this.call("withdraw", [import_eth_wallet10.Utils.toString(wad)]);
      return;
    };
    this.withdraw = Object.assign(withdraw_send, {
      call: withdraw_call
    });
  }
};

// src/swap-core.ts
var swap_core_exports = {};
__markAsModule(swap_core_exports);

})