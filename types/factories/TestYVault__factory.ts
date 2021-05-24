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

import type { TestYVault } from "../TestYVault";

export class TestYVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestYVault> {
    return super.deploy(
      _token,
      _decimals,
      overrides || {}
    ) as Promise<TestYVault>;
  }
  getDeployTransaction(
    _token: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _decimals, overrides || {});
  }
  attach(address: string): TestYVault {
    return super.attach(address) as TestYVault;
  }
  connect(signer: Signer): TestYVault__factory {
    return super.connect(signer) as TestYVault__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestYVault {
    return new Contract(address, _abi, signerOrProvider) as TestYVault;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_decimals",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "pricePerShare",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "setDepositLimit",
    outputs: [],
    stateMutability: "pure",
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
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
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
    name: "totalSupply",
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
    inputs: [],
    name: "updateShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620012c8380380620012c8833981810160405260408110156200003757600080fd5b508051602091820151604080518082018252600b81526a3a32b9ba103cba37b5b2b760a91b818601908152825180840190935260068352653caa37b5b2b760d11b9583019590955280519394929390926200009691600091906200024a565b508051620000ac9060019060208401906200024a565b506002805460ff1916601217905560036020526000197f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff8190553060009081526040902055620000fb62000232565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405180828054600181600116156101000203166002900480156200017d5780601f106200015a5761010080835404028352918201916200017d565b820191906000526020600020905b81548152906001019060200180831162000168575b50506040805191829003822082820182526001808452603160f81b602094850152825180850197909752868301919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606087015260808601523060a0808701919091528151808703909101815260c0909501905283519301929092206006555050600880546001600160a01b0319166001600160a01b038616179055506200022a90508162000234565b5050620002e6565b565b6002805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200028d57805160ff1916838001178555620002bd565b82800160010185558215620002bd579182015b82811115620002bd578251825591602001919060010190620002a0565b50620002cb929150620002cf565b5090565b5b80821115620002cb5760008155600101620002d0565b610fd280620002f66000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636e553f65116100b8578063a9059cbb1161007c578063a9059cbb14610335578063bdc8144b14610361578063d505accf1461037e578063dd62ed3e146103cf578063e63697c8146103fd578063fc0c546a1461042f57610137565b80636e553f65146102ad57806370a08231146102d95780637ecebe00146102ff57806395d89b411461032557806399530b061461032d57610137565b80632a410068116100ff5780632a4100681461025157806330adf81f1461025b578063313ce567146102635780633644e515146102815780635aa6e6751461028957610137565b806301e1d1141461013c57806306fdde0314610156578063095ea7b3146101d357806318160ddd1461021357806323b872dd1461021b575b600080fd5b610144610437565b60408051918252519081900360200190f35b61015e6104b4565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610198578181015183820152602001610180565b50505050905090810190601f1680156101c55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ff600480360360408110156101e957600080fd5b506001600160a01b038135169060200135610542565b604080519115158252519081900360200190f35b6101446105a8565b6101ff6004803603606081101561023157600080fd5b506001600160a01b038135811691602081013590911690604001356105ae565b610259610749565b005b61014461083a565b61026b61085e565b6040805160ff9092168252519081900360200190f35b610144610867565b61029161086d565b604080516001600160a01b039092168252519081900360200190f35b610144600480360360408110156102c357600080fd5b50803590602001356001600160a01b03166108ac565b610144600480360360208110156102ef57600080fd5b50356001600160a01b0316610965565b6101446004803603602081101561031557600080fd5b50356001600160a01b0316610977565b61015e610989565b6101446109e3565b6101ff6004803603604081101561034b57600080fd5b506001600160a01b038135169060200135610a92565b6102596004803603602081101561037757600080fd5b5035610a9f565b610259600480360360e081101561039457600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610adc565b610144600480360360408110156103e557600080fd5b506001600160a01b0381358116916020013516610dd4565b6101446004803603606081101561041357600080fd5b508035906001600160a01b036020820135169060400135610df1565b610291610ea8565b600854604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561048257600080fd5b505afa158015610496573d6000803e3d6000fd5b505050506040513d60208110156104ac57600080fd5b505190505b90565b6000805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561053a5780601f1061050f5761010080835404028352916020019161053a565b820191906000526020600020905b81548152906001019060200180831161051d57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60075481565b6001600160a01b0383166000908152600360205260408120548281101561061c576040805162461bcd60e51b815260206004820152601b60248201527f45524332303a20696e73756666696369656e742d62616c616e63650000000000604482015290519081900360640190fd5b6001600160a01b03851633146106d9576001600160a01b038516600090815260046020908152604080832033845290915290205460001981146106d757838110156106ae576040805162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e742d616c6c6f77616e6365000000604482015290519081900360640190fd5b6001600160a01b0386166000908152600460209081526040808320338452909152902084820390555b505b6001600160a01b0380861660008181526003602090815260408083208887039055938816808352918490208054880190558351878152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3506001949350505050565b600854604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561079457600080fd5b505afa1580156107a8573d6000803e3d6000fd5b505050506040513d60208110156107be57600080fd5b50516008549091506001600160a01b03166340c10f1930600a84046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561081f57600080fd5b505af1158015610833573d6000803e3d6000fd5b5050505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60025460ff1681565b60065481565b6040805162461bcd60e51b815260206004820152600d60248201526c155b9a5b5c1b195b595b9d1959609a1b6044820152905160009181900360640190fd5b6000806108b76109e3565b60025460ff16600a0a8502816108c957fe5b600854604080516323b872dd60e01b81523360048201523060248201526044810189905290519390920493506001600160a01b0316916323b872dd916064808201926020929091908290030181600087803b15801561092757600080fd5b505af115801561093b573d6000803e3d6000fd5b505050506040513d602081101561095157600080fd5b5061095e90508382610eb7565b9392505050565b60036020526000908152604090205481565b60056020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561053a5780601f1061050f5761010080835404028352916020019161053a565b600854604080516370a0823160e01b8152306004820152905160009283926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b158015610a3357600080fd5b505afa158015610a47573d6000803e3d6000fd5b505050506040513d6020811015610a5d57600080fd5b5051905080610a7657505060025460ff16600a0a6104b1565b60075460025460ff16600a0a820281610a8b57fe5b0491505090565b600061095e3384846105ae565b6040805162461bcd60e51b815260206004820152600d60248201526c155b9a5b5c1b195b595b9d1959609a1b604482015290519081900360640190fd5b6006546001600160a01b038089166000818152600560209081526040918290205482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981840152808401859052948c166060860152608085018b905260a085015260c08085018a90528251808603909101815260e08501835280519082012061190160f01b610100860152610102850195909552610122808501959095528151808503909501855261014290930190528251929091019190912090610be9576040805162461bcd60e51b815260206004820152601860248201527f45524332303a20696e76616c69642d616464726573732d300000000000000000604482015290519081900360640190fd5b60018185858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610c43573d6000803e3d6000fd5b505050602060405103516001600160a01b0316886001600160a01b031614610caa576040805162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881a5b9d985b1a590b5c195c9b5a5d605a1b604482015290519081900360640190fd5b841580610cb75750844211155b610d00576040805162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881c195c9b5a5d0b595e1c1a5c9959605a1b604482015290519081900360640190fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610d5f5760405162461bcd60e51b8152600401808060200182810382526022815260200180610f7b6022913960400191505060405180910390fd5b6001600160a01b0380891660008181526005602090815260408083208054600101905560048252808320948c16808452948252918290208a905581518a815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35050505050505050565b600460209081526000928352604080842090915290825290205481565b600254600090819060ff16600a0a610e076109e3565b860281610e1057fe5b049050610e1d3386610f16565b6008546040805163a9059cbb60e01b81526001600160a01b038781166004830152602482018590529151919092169163a9059cbb9160448083019260209291908290030181600087803b158015610e7357600080fd5b505af1158015610e87573d6000803e3d6000fd5b505050506040513d6020811015610e9d57600080fd5b509095945050505050565b6008546001600160a01b031681565b6001600160a01b03821660008181526003602090815260408083208054860190556007805486019055805185815290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35050565b6001600160a01b038216600081815260036020908152604080832080548690039055600780548690039055805185815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a3505056fe45524332303a20696e76616c6964207369676e6174757265202773272076616c7565a2646970667358221220c36eceaeb3c2f5fffa4ee07330ab3630e3ef0ac1cb02ff74620aac6cced97cf464736f6c63430007010033";