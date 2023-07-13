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
}

export declare namespace IPoolInternal {
  export type TickStruct = {
    delta: BigNumberish;
    externalFeeRate: BigNumberish;
    longDelta: BigNumberish;
    shortDelta: BigNumberish;
    counter: BigNumberish;
  };

  export type TickStructOutput = [
    delta: bigint,
    externalFeeRate: bigint,
    longDelta: bigint,
    shortDelta: bigint,
    counter: bigint
  ] & {
    delta: bigint;
    externalFeeRate: bigint;
    longDelta: bigint;
    shortDelta: bigint;
    counter: bigint;
  };

  export type TickWithRatesStruct = {
    tick: IPoolInternal.TickStruct;
    price: BigNumberish;
    longRate: BigNumberish;
    shortRate: BigNumberish;
  };

  export type TickWithRatesStructOutput = [
    tick: IPoolInternal.TickStructOutput,
    price: bigint,
    longRate: bigint,
    shortRate: bigint
  ] & {
    tick: IPoolInternal.TickStructOutput;
    price: bigint;
    longRate: bigint;
    shortRate: bigint;
  };
}

export interface IPoolCoreInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_takerFeeLowLevel"
      | "annihilate"
      | "annihilateFor"
      | "claim"
      | "exercise"
      | "exerciseFor"
      | "getClaimableFees"
      | "getPoolSettings"
      | "getSettlementPrice"
      | "getStrandedArea"
      | "getTokenIds"
      | "marketPrice"
      | "settle"
      | "settleFor"
      | "settlePosition"
      | "settlePositionFor"
      | "takerFee"
      | "ticks"
      | "transferPosition"
      | "writeFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_takerFeeLowLevel",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "annihilate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "annihilateFor",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [Position.KeyStruct]
  ): string;
  encodeFunctionData(functionFragment: "exercise", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exerciseFor",
    values: [AddressLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableFees",
    values: [Position.KeyStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolSettings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSettlementPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStrandedArea",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "settle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "settleFor",
    values: [AddressLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settlePosition",
    values: [Position.KeyStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "settlePositionFor",
    values: [Position.KeyStruct[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "takerFee",
    values: [AddressLike, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "ticks", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferPosition",
    values: [Position.KeyStruct, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "writeFrom",
    values: [AddressLike, AddressLike, BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "_takerFeeLowLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "annihilate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "annihilateFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exercise", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exerciseFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolSettings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSettlementPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStrandedArea",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settleFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "settlePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlePositionFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "takerFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "writeFrom", data: BytesLike): Result;
}

export interface IPoolCore extends BaseContract {
  connect(runner?: ContractRunner | null): IPoolCore;
  waitForDeployment(): Promise<this>;

  interface: IPoolCoreInterface;

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

  _takerFeeLowLevel: TypedContractMethod<
    [
      taker: AddressLike,
      size: BigNumberish,
      premium: BigNumberish,
      isPremiumNormalized: boolean,
      strike: BigNumberish,
      isCallPool: boolean
    ],
    [bigint],
    "view"
  >;

  annihilate: TypedContractMethod<[size: BigNumberish], [void], "nonpayable">;

  annihilateFor: TypedContractMethod<
    [owner: AddressLike, size: BigNumberish],
    [void],
    "nonpayable"
  >;

  claim: TypedContractMethod<[p: Position.KeyStruct], [bigint], "nonpayable">;

  exercise: TypedContractMethod<
    [],
    [[bigint, bigint] & { exerciseValue: bigint; exerciseFee: bigint }],
    "nonpayable"
  >;

  exerciseFor: TypedContractMethod<
    [holders: AddressLike[], costPerHolder: BigNumberish],
    [
      [bigint[], bigint[]] & {
        exerciseValues: bigint[];
        exerciseFees: bigint[];
      }
    ],
    "nonpayable"
  >;

  getClaimableFees: TypedContractMethod<
    [p: Position.KeyStruct],
    [bigint],
    "view"
  >;

  getPoolSettings: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, bigint, boolean] & {
        base: string;
        quote: string;
        oracleAdapter: string;
        strike: bigint;
        maturity: bigint;
        isCallPool: boolean;
      }
    ],
    "view"
  >;

  getSettlementPrice: TypedContractMethod<[], [bigint], "view">;

  getStrandedArea: TypedContractMethod<
    [],
    [[bigint, bigint] & { lower: bigint; upper: bigint }],
    "view"
  >;

  getTokenIds: TypedContractMethod<[], [bigint[]], "view">;

  marketPrice: TypedContractMethod<[], [bigint], "view">;

  settle: TypedContractMethod<[], [bigint], "nonpayable">;

  settleFor: TypedContractMethod<
    [holders: AddressLike[], costPerHolder: BigNumberish],
    [bigint[]],
    "nonpayable"
  >;

  settlePosition: TypedContractMethod<
    [p: Position.KeyStruct],
    [bigint],
    "nonpayable"
  >;

  settlePositionFor: TypedContractMethod<
    [p: Position.KeyStruct[], costPerHolder: BigNumberish],
    [bigint[]],
    "nonpayable"
  >;

  takerFee: TypedContractMethod<
    [
      taker: AddressLike,
      size: BigNumberish,
      premium: BigNumberish,
      isPremiumNormalized: boolean
    ],
    [bigint],
    "view"
  >;

  ticks: TypedContractMethod<
    [],
    [IPoolInternal.TickWithRatesStructOutput[]],
    "view"
  >;

  transferPosition: TypedContractMethod<
    [
      srcP: Position.KeyStruct,
      newOwner: AddressLike,
      newOperator: AddressLike,
      size: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  writeFrom: TypedContractMethod<
    [
      underwriter: AddressLike,
      longReceiver: AddressLike,
      size: BigNumberish,
      referrer: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_takerFeeLowLevel"
  ): TypedContractMethod<
    [
      taker: AddressLike,
      size: BigNumberish,
      premium: BigNumberish,
      isPremiumNormalized: boolean,
      strike: BigNumberish,
      isCallPool: boolean
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "annihilate"
  ): TypedContractMethod<[size: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "annihilateFor"
  ): TypedContractMethod<
    [owner: AddressLike, size: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[p: Position.KeyStruct], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "exercise"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { exerciseValue: bigint; exerciseFee: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "exerciseFor"
  ): TypedContractMethod<
    [holders: AddressLike[], costPerHolder: BigNumberish],
    [
      [bigint[], bigint[]] & {
        exerciseValues: bigint[];
        exerciseFees: bigint[];
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getClaimableFees"
  ): TypedContractMethod<[p: Position.KeyStruct], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPoolSettings"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, bigint, boolean] & {
        base: string;
        quote: string;
        oracleAdapter: string;
        strike: bigint;
        maturity: bigint;
        isCallPool: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSettlementPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStrandedArea"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { lower: bigint; upper: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenIds"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "marketPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "settle"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "settleFor"
  ): TypedContractMethod<
    [holders: AddressLike[], costPerHolder: BigNumberish],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "settlePosition"
  ): TypedContractMethod<[p: Position.KeyStruct], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "settlePositionFor"
  ): TypedContractMethod<
    [p: Position.KeyStruct[], costPerHolder: BigNumberish],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "takerFee"
  ): TypedContractMethod<
    [
      taker: AddressLike,
      size: BigNumberish,
      premium: BigNumberish,
      isPremiumNormalized: boolean
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "ticks"
  ): TypedContractMethod<
    [],
    [IPoolInternal.TickWithRatesStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferPosition"
  ): TypedContractMethod<
    [
      srcP: Position.KeyStruct,
      newOwner: AddressLike,
      newOperator: AddressLike,
      size: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "writeFrom"
  ): TypedContractMethod<
    [
      underwriter: AddressLike,
      longReceiver: AddressLike,
      size: BigNumberish,
      referrer: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
