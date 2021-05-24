/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Authorizer } from "../Authorizer";

export class Authorizer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Authorizer> {
    return super.deploy(admin, overrides || {}) as Promise<Authorizer>;
  }
  getDeployTransaction(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin, overrides || {});
  }
  attach(address: string): Authorizer {
    return super.attach(address) as Authorizer;
  }
  connect(signer: Signer): Authorizer__factory {
    return super.connect(signer) as Authorizer__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authorizer {
    return new Contract(address, _abi, signerOrProvider) as Authorizer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
        internalType: "bytes32",
        name: "actionId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "canPerform",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "grantRolesToMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "revokeRolesFromMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c79380380610c798339818101604052602081101561003357600080fd5b5051610040600082610046565b5061013d565b6100508282610054565b5050565b6000828152602081815260409091206100769183906108036100b7821b17901c565b156100505760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60006100c3838361011c565b61011257508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b03861690811790915585549082528286019093526040902091909155610116565b5060005b92915050565b6001600160a01b031660009081526001919091016020526040902054151590565b610b2d8061014c6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063988360a31161008c578063a73cb2ab11610066578063a73cb2ab146103e7578063ca15c8731461050a578063d547741f14610527578063fcd7627e14610553576100cf565b8063988360a3146102ff5780639be2a884146103ab578063a217fddf146103df576100cf565b806318b2cde9146100d4578063248a9ca3146101f95780632f2ff15d1461022857806336568abe146102545780639010d07c1461028057806391d14854146102bf575b600080fd5b6101f7600480360360408110156100ea57600080fd5b810190602081018135600160201b81111561010457600080fd5b82018360208201111561011657600080fd5b803590602001918460208302840111600160201b8311171561013757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561018657600080fd5b82018360208201111561019857600080fd5b803590602001918460208302840111600160201b831117156101b957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506105ff945050505050565b005b6102166004803603602081101561020f57600080fd5b5035610654565b60408051918252519081900360200190f35b6101f76004803603604081101561023e57600080fd5b50803590602001356001600160a01b0316610669565b6101f76004803603604081101561026a57600080fd5b50803590602001356001600160a01b031661069f565b6102a36004803603604081101561029657600080fd5b50803590602001356106c0565b604080516001600160a01b039092168252519081900360200190f35b6102eb600480360360408110156102d557600080fd5b50803590602001356001600160a01b03166106e1565b604080519115158252519081900360200190f35b6101f76004803603604081101561031557600080fd5b810190602081018135600160201b81111561032f57600080fd5b82018360208201111561034157600080fd5b803590602001918460208302840111600160201b8311171561036257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160a01b031691506106f99050565b6102eb600480360360608110156103c157600080fd5b508035906001600160a01b036020820135811691604001351661072a565b61021661073e565b6101f7600480360360408110156103fd57600080fd5b810190602081018135600160201b81111561041757600080fd5b82018360208201111561042957600080fd5b803590602001918460208302840111600160201b8311171561044a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561049957600080fd5b8201836020820111156104ab57600080fd5b803590602001918460208302840111600160201b831117156104cc57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610743945050505050565b6102166004803603602081101561052057600080fd5b5035610793565b6101f76004803603604081101561053d57600080fd5b50803590602001356001600160a01b03166107aa565b6101f76004803603604081101561056957600080fd5b810190602081018135600160201b81111561058357600080fd5b82018360208201111561059557600080fd5b803590602001918460208302840111600160201b831117156105b657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160a01b031691506107d29050565b61060b82518251610866565b60005b825181101561064f5761064783828151811061062657fe5b602002602001015183838151811061063a57fe5b60200260200101516107aa565b60010161060e565b505050565b60009081526020819052604090206002015490565b6000828152602081905260409020600201546106919061068990336106e1565b6101a661086f565b61069b828261087d565b5050565b6106b66001600160a01b03821633146101a861086f565b61069b82826108d6565b60008281526020819052604081206106d8908361092f565b90505b92915050565b60008281526020819052604081206106d8908361094b565b60005b825181101561064f5761072283828151811061071457fe5b6020026020010151836107aa565b6001016106fc565b600061073684846106e1565b949350505050565b600081565b61074f82518251610866565b60005b825181101561064f5761078b83828151811061076a57fe5b602002602001015183838151811061077e57fe5b6020026020010151610669565b600101610752565b60008181526020819052604081206106db9061096c565b6000828152602081905260409020600201546106b6906107ca90336106e1565b6101a761086f565b60005b825181101561064f576107fb8382815181106107ed57fe5b602002602001015183610669565b6001016107d5565b600061080f838361094b565b61085e57508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b038616908117909155855490825282860190935260409020919091556106db565b5060006106db565b61069b81831460675b8161069b5761069b81610970565b60008281526020819052604090206108959082610803565b1561069b5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526020819052604090206108ee90826109c3565b1561069b5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b8154600090610941908310606461086f565b6106d88383610aca565b6001600160a01b031660009081526001919091016020526040902054151590565b5490565b62461bcd60e51b6000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b6001600160a01b03811660009081526001830160205260408120548015610ac05783546000198083019190810190600090879083908110610a0057fe5b60009182526020909120015487546001600160a01b0390911691508190889085908110610a2957fe5b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055918316815260018981019092526040902090840190558654879080610a7257fe5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03881682526001898101909152604082209190915594506106db9350505050565b60009150506106db565b6000826000018281548110610adb57fe5b6000918252602090912001546001600160a01b0316939250505056fea2646970667358221220ed8d2ef161a08d89ae879889e919ed3658a8afc9fb384d9e78cd8a81bc5d307c64736f6c63430007010033";