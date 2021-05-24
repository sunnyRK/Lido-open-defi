/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MerkleProofInterface extends ethers.utils.Interface {
  functions: {
    "verify(bytes32[],bytes32,bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "verify",
    values: [BytesLike[], BytesLike, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {};
}

export class MerkleProof extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MerkleProofInterface;

  functions: {
    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verify(bytes32[],bytes32,bytes32,uint256)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  verify(
    proof: BytesLike[],
    root: BytesLike,
    leaf: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verify(bytes32[],bytes32,bytes32,uint256)"(
    proof: BytesLike[],
    root: BytesLike,
    leaf: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verify(bytes32[],bytes32,bytes32,uint256)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verify(bytes32[],bytes32,bytes32,uint256)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verify(bytes32[],bytes32,bytes32,uint256)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
