/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Position {
  export type KeyStruct = {
    owner: AddressLike;
    operator: AddressLike;
    lower: BigNumberish;
    upper: BigNumberish;
    orderType: BigNumberish;
  };

  export type KeyStructOutput = [
    owner: string,
    operator: string,
    lower: bigint,
    upper: bigint,
    orderType: bigint
  ] & {
    owner: string;
    operator: string;
    lower: bigint;
    upper: bigint;
    orderType: bigint;
  };

  export type DeltaStruct = {
    collateral: BigNumberish;
    longs: BigNumberish;
    shorts: BigNumberish;
  };

  export type DeltaStructOutput = [
    collateral: bigint,
    longs: bigint,
    shorts: bigint
  ] & { collateral: bigint; longs: bigint; shorts: bigint };
}

export interface IPoolDepositWithdrawInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256)"
      | "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256,bool)"
      | "getNearestTicksBelow"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256)",
    values: [
      Position.KeyStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256,bool)",
    values: [
      Position.KeyStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getNearestTicksBelow",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [Position.KeyStruct, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNearestTicksBelow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export interface IPoolDepositWithdraw extends BaseContract {
  connect(runner?: ContractRunner | null): IPoolDepositWithdraw;
  waitForDeployment(): Promise<this>;

  interface: IPoolDepositWithdrawInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256)": TypedContractMethod<
    [
      p: Position.KeyStruct,
      belowLower: BigNumberish,
      belowUpper: BigNumberish,
      size: BigNumberish,
      minMarketPrice: BigNumberish,
      maxMarketPrice: BigNumberish
    ],
    [Position.DeltaStructOutput],
    "nonpayable"
  >;

  "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256,bool)": TypedContractMethod<
    [
      p: Position.KeyStruct,
      belowLower: BigNumberish,
      belowUpper: BigNumberish,
      size: BigNumberish,
      minMarketPrice: BigNumberish,
      maxMarketPrice: BigNumberish,
      isBidIfStrandedMarketPrice: boolean
    ],
    [Position.DeltaStructOutput],
    "nonpayable"
  >;

  getNearestTicksBelow: TypedContractMethod<
    [lower: BigNumberish, upper: BigNumberish],
    [
      [bigint, bigint] & {
        nearestBelowLower: bigint;
        nearestBelowUpper: bigint;
      }
    ],
    "view"
  >;

  withdraw: TypedContractMethod<
    [
      p: Position.KeyStruct,
      size: BigNumberish,
      minMarketPrice: BigNumberish,
      maxMarketPrice: BigNumberish
    ],
    [Position.DeltaStructOutput],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256)"
  ): TypedContractMethod<
    [
      p: Position.KeyStruct,
      belowLower: BigNumberish,
      belowUpper: BigNumberish,
      size: BigNumberish,
      minMarketPrice: BigNumberish,
      maxMarketPrice: BigNumberish
    ],
    [Position.DeltaStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit((address,address,uint256,uint256,uint8),uint256,uint256,uint256,uint256,uint256,bool)"
  ): TypedContractMethod<
    [
      p: Position.KeyStruct,
      belowLower: BigNumberish,
      belowUpper: BigNumberish,
      size: BigNumberish,
      minMarketPrice: BigNumberish,
      maxMarketPrice: BigNumberish,
      isBidIfStrandedMarketPrice: boolean
    ],
    [Position.DeltaStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getNearestTicksBelow"
  ): TypedContractMethod<
    [lower: BigNumberish, upper: BigNumberish],
    [
      [bigint, bigint] & {
        nearestBelowLower: bigint;
        nearestBelowUpper: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [
      p: Position.KeyStruct,
      size: BigNumberish,
      minMarketPrice: BigNumberish,
      maxMarketPrice: BigNumberish
    ],
    [Position.DeltaStructOutput],
    "nonpayable"
  >;

  filters: {};
}
