/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { DateString } from "../DateString";

export class DateString__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DateString> {
    return super.deploy(overrides || {}) as Promise<DateString>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DateString {
    return super.attach(address) as DateString;
  }
  connect(signer: Signer): DateString__factory {
    return super.connect(signer) as DateString__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DateString {
    return new Contract(address, _abi, signerOrProvider) as DateString;
  }
}

const _abi = [
  {
    inputs: [],
    name: "OFFSET19700101",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SECONDS_PER_DAY",
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
    name: "SECONDS_PER_HOUR",
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
    name: "SECONDS_PER_MINUTE",
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
];

const _bytecode =
  "0x610c4e610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c80634df861261461007157806374f0314f1461008b578063a3f144ae14610093578063bcb4f29a1461009b578063e9556430146100cd578063f40ce946146100d5575b600080fd5b61007961018d565b60408051918252519081900360200190f35b610079610193565b61007961019a565b8180156100a757600080fd5b506100cb600480360360408110156100be57600080fd5b50803590602001356101a1565b005b6100796101af565b8180156100e157600080fd5b506100cb600480360360608110156100f857600080fd5b81019060208101813564010000000081111561011357600080fd5b82018360208201111561012557600080fd5b8035906020019184600183028401116401000000008311171561014757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050823593505050602001356101b4565b610e1081565b6201518081565b62253d8c81565b6101ab82826101c4565b5050565b603c81565b6101bf83838361085b565b505050565b80600080806101d76201518087046109c3565b9250925092506000600a82816101e957fe5b0490508481600360fc1b60f81c0160f81b90808054603f811680603e811461022b576002830184556001831661021d578192505b600160028404019350610243565b600084815260209081902060ff198516905560419094555b505050600190038154600116156102695790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a838161029757fe5b0690508581600360fc1b60f81c0160f81b90808054603f811680603e81146102d957600283018455600183166102cb578192505b6001600284040193506102f1565b600084815260209081902060ff198516905560419094555b505050600190038154600116156103175790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550505083602d60f81b90808054603f811680603e81146103725760028301845560018316610364578192505b60016002840401935061038a565b600084815260209081902060ff198516905560419094555b505050600190038154600116156103b05790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555081600114156103f8576103f384602560f91b604160f81b602760f91b610a59565b6105a6565b8160021415610419576103f384602360f91b604560f81b602160f91b610a59565b816003141561043a576103f384604d60f81b604160f81b602960f91b610a59565b816004141561045b576103f384604160f81b600560fc1b602960f91b610a59565b816005141561047c576103f384604d60f81b604160f81b605960f81b610a59565b816006141561049d576103f384602560f91b605560f81b602760f91b610a59565b81600714156104be576103f384602560f91b605560f81b601360fa1b610a59565b81600814156104df576103f384604160f81b605560f81b604760f81b610a59565b8160091415610500576103f384605360f81b604560f81b600560fc1b610a59565b81600a1415610521576103f384604f60f81b604360f81b601560fa1b610a59565b81600b1415610542576103f384602760f91b604f60f81b602b60f91b610a59565b81600c1415610563576103f384601160fa1b604560f81b604360f81b610a59565b6040805162461bcd60e51b81526020600482015260136024820152723230ba32903232b1b7b234b7339032b93937b960691b604482015290519081900360640190fd5b83602d60f81b90808054603f811680603e81146105dd57600283018455600183166105cf578192505b6001600284040193506105f5565b600084815260209081902060ff198516905560419094555b5050506001900381546001161561061b5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555060006064848161064957fe5b0690506000600a820490508581600360fc1b60f81c0160f81b90808054603f811680603e81146106935760028301845560018316610685578192505b6001600284040193506106ab565b600084815260209081902060ff198516905560419094555b505050600190038154600116156106d15790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506000600a83816106ff57fe5b0690508681600360fc1b60f81c0160f81b90808054603f811680603e81146107415760028301845560018316610733578192505b600160028404019350610759565b600084815260209081902060ff198516905560419094555b5050506001900381546001161561077f5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555050505083602d60f81b90808054603f811680603e81146107db57600283018455600183166107cd578192505b6001600284040193506107f3565b600084815260209081902060ff198516905560419094555b505050600190038154600116156108195790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b8404021790555061085384604760f81b604d60f81b601560fa1b610a59565b505050505050565b828160005b825181101561091a578183828151811061087657fe5b602001015160f81c60f81b90808054603f811680603e81146108b257600283018455600183166108a4578192505b6001600284040193506108ca565b600084815260209081902060ff198516905560419094555b505050600190038154600116156108f05790600052602060002090602091828204019190065b815460ff601f929092036101000a9182021916600160f81b90930402919091179055600101610860565b5080601d60f91b90808054603f811680603e81146109525760028301845560018316610944578192505b60016002840401935061096a565b600084815260209081902060ff198516905560419094555b505050600190038154600116156109905790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055506109bc84846101a1565b5050505050565b60008080836226496581018262023ab1600483020590506004600362023ab18302010590910390600062164b09610fa0600185010205905060046105b58202058303601f019250600061098f8460500281610a1a57fe5b0590506000605061098f83020585039050600b820560301994909401606402929092018301996002600c90940290910392909201975095509350505050565b838390808054603f811680603e8114610a8c5760028301845560018316610a7e578192505b600160028404019350610aa4565b600084815260209081902060ff198516905560419094555b50505060019003815460011615610aca5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550838290808054603f811680603e8114610b1f5760028301845560018316610b11578192505b600160028404019350610b37565b600084815260209081902060ff198516905560419094555b50505060019003815460011615610b5d5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b84040217905550838190808054603f811680603e8114610bb25760028301845560018316610ba4578192505b600160028404019350610bca565b600084815260209081902060ff198516905560419094555b50505060019003815460011615610bf05790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff02191690600160f81b840402179055505050505056fea26469706673582212204656a4b469f559d221e5ce4640f5b6467d855a6191600bb96b9b1e2af7f5270c64736f6c63430007010033";