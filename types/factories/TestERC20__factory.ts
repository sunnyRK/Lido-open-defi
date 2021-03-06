/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TestERC20 } from "../TestERC20";

export class TestERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC20> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<TestERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "uncheckedTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f3038038062000f30833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405260209081015185519093508592508491620001bd9160009185019062000358565b508051620001d390600190602084019062000358565b506002805460ff1916601217905560036020526000197f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff81905530600090815260409020556200022262000340565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040518082805460018160011615610100020316600290048015620002a45780601f1062000281576101008083540402835291820191620002a4565b820191906000526020600020905b8154815290600101906020018083116200028f575b50506040805191829003822082820182526001808452603160f81b602094850152825180850197909752868301919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606087015260808601523060a0808701919091528151808703909101815260c090950190528351930192909220600655506200033792508391505062000342565b505050620003f4565b565b6002805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039b57805160ff1916838001178555620003cb565b82800160010185558215620003cb579182015b82811115620003cb578251825591602001919060010190620003ae565b50620003d9929150620003dd565b5090565b5b80821115620003d95760008155600101620003de565b610b2c80620004046000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063d505accf11610066578063d505accf146102db578063dd62ed3e1461032c578063e22f03c11461035a578063e30443bc14610386576100f5565b806370a082311461025b5780637ecebe001461028157806395d89b41146102a7578063a9059cbb146102af576100f5565b806330adf81f116100d357806330adf81f146101ed578063313ce567146102075780633644e5151461022557806340c10f191461022d576100f5565b806306fdde03146100fa578063095ea7b31461017757806323b872dd146101b7575b600080fd5b6101026103b2565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561013c578181015183820152602001610124565b50505050905090810190601f1680156101695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a36004803603604081101561018d57600080fd5b506001600160a01b038135169060200135610440565b604080519115158252519081900360200190f35b6101a3600480360360608110156101cd57600080fd5b506001600160a01b038135811691602081013590911690604001356104a6565b6101f5610641565b60408051918252519081900360200190f35b61020f610665565b6040805160ff9092168252519081900360200190f35b6101f561066e565b6102596004803603604081101561024357600080fd5b506001600160a01b038135169060200135610674565b005b6101f56004803603602081101561027157600080fd5b50356001600160a01b0316610682565b6101f56004803603602081101561029757600080fd5b50356001600160a01b0316610694565b6101026106a6565b6101a3600480360360408110156102c557600080fd5b506001600160a01b038135169060200135610700565b610259600480360360e08110156102f157600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610714565b6101f56004803603604081101561034257600080fd5b506001600160a01b0381358116916020013516610a0c565b6102596004803603604081101561037057600080fd5b506001600160a01b038135169060200135610a29565b6102596004803603604081101561039c57600080fd5b506001600160a01b038135169060200135610a80565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104385780601f1061040d57610100808354040283529160200191610438565b820191906000526020600020905b81548152906001019060200180831161041b57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b6001600160a01b03831660009081526003602052604081205482811015610514576040805162461bcd60e51b815260206004820152601b60248201527f45524332303a20696e73756666696369656e742d62616c616e63650000000000604482015290519081900360640190fd5b6001600160a01b03851633146105d1576001600160a01b038516600090815260046020908152604080832033845290915290205460001981146105cf57838110156105a6576040805162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e742d616c6c6f77616e6365000000604482015290519081900360640190fd5b6001600160a01b0386166000908152600460209081526040808320338452909152902084820390555b505b6001600160a01b0380861660008181526003602090815260408083208887039055938816808352918490208054880190558351878152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3506001949350505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60025460ff1681565b60065481565b61067e8282610a29565b5050565b60036020526000908152604090205481565b60056020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104385780601f1061040d57610100808354040283529160200191610438565b600061070d3384846104a6565b9392505050565b6006546001600160a01b038089166000818152600560209081526040918290205482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981840152808401859052948c166060860152608085018b905260a085015260c08085018a90528251808603909101815260e08501835280519082012061190160f01b610100860152610102850195909552610122808501959095528151808503909501855261014290930190528251929091019190912090610821576040805162461bcd60e51b815260206004820152601860248201527f45524332303a20696e76616c69642d616464726573732d300000000000000000604482015290519081900360640190fd5b60018185858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561087b573d6000803e3d6000fd5b505050602060405103516001600160a01b0316886001600160a01b0316146108e2576040805162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881a5b9d985b1a590b5c195c9b5a5d605a1b604482015290519081900360640190fd5b8415806108ef5750844211155b610938576040805162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881c195c9b5a5d0b595e1c1a5c9959605a1b604482015290519081900360640190fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156109975760405162461bcd60e51b8152600401808060200182810382526022815260200180610ad56022913960400191505060405180910390fd5b6001600160a01b0380891660008181526005602090815260408083208054600101905560048252808320948c16808452948252918290208a905581518a815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35050505050505050565b600460209081526000928352604080842090915290825290205481565b6001600160a01b0382166000818152600360209081526040808320805486019055805185815290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35050565b6001600160a01b0382166000818152600360209081526040808320859055805185815290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a3505056fe45524332303a20696e76616c6964207369676e6174757265202773272076616c7565a2646970667358221220a7b6f2396fbc9b82911a90a025fa2e46fa3d3f4980d77b5c0273f1f36f13ec9464736f6c63430007010033";
