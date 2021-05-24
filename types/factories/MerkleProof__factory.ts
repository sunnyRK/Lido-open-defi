/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MerkleProof } from "../MerkleProof";

export class MerkleProof__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleProof> {
    return super.deploy(overrides || {}) as Promise<MerkleProof>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MerkleProof {
    return super.attach(address) as MerkleProof;
  }
  connect(signer: Signer): MerkleProof__factory {
    return super.connect(signer) as MerkleProof__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleProof {
    return new Contract(address, _abi, signerOrProvider) as MerkleProof;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101e0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806321fb335c14610030575b600080fd5b6100de6004803603608081101561004657600080fd5b81019060208101813564010000000081111561006157600080fd5b82018360208201111561007357600080fd5b8035906020019184602083028401116401000000008311171561009557600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050823593505050602081013590604001356100f2565b604080519115158252519081900360200190f35b600082815b865181101561019e57600087828151811061010e57fe5b602002602001015190506002858161012257fe5b0661015d578281604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120925061018f565b808360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092505b600285049450506001016100f7565b5090931494935050505056fea2646970667358221220447c97eab9bc2e70c1628b021fee9f870900207b29e232e7359816edbb15d61964736f6c63430007010033";