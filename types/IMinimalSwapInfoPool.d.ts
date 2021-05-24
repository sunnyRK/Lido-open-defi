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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IMinimalSwapInfoPoolInterface extends ethers.utils.Interface {
  functions: {
    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "onSwap(tuple,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onExitPool",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onJoinPool",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onSwap",
    values: [
      {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "onExitPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onJoinPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onSwap", data: BytesLike): Result;

  events: {};
}

export class IMinimalSwapInfoPool extends Contract {
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

  interface: IMinimalSwapInfoPoolInterface;

  functions: {
    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onSwap(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)"(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  onExitPool(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onJoinPool(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    balances: BigNumberish[],
    lastChangeBlock: BigNumberish,
    protocolSwapFeePercentage: BigNumberish,
    userData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onSwap(
    swapRequest: {
      kind: BigNumberish;
      tokenIn: string;
      tokenOut: string;
      amount: BigNumberish;
      poolId: BytesLike;
      lastChangeBlock: BigNumberish;
      from: string;
      to: string;
      userData: BytesLike;
    },
    currentBalanceTokenIn: BigNumberish,
    currentBalanceTokenOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)"(
    swapRequest: {
      kind: BigNumberish;
      tokenIn: string;
      tokenOut: string;
      amount: BigNumberish;
      poolId: BytesLike;
      lastChangeBlock: BigNumberish;
      from: string;
      to: string;
      userData: BytesLike;
    },
    currentBalanceTokenIn: BigNumberish,
    currentBalanceTokenOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsOut: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsOut: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsIn: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsIn: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    onSwap(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)"(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onSwap(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)"(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onExitPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onJoinPool(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      balances: BigNumberish[],
      lastChangeBlock: BigNumberish,
      protocolSwapFeePercentage: BigNumberish,
      userData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onSwap(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)"(
      swapRequest: {
        kind: BigNumberish;
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        poolId: BytesLike;
        lastChangeBlock: BigNumberish;
        from: string;
        to: string;
        userData: BytesLike;
      },
      currentBalanceTokenIn: BigNumberish,
      currentBalanceTokenOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
