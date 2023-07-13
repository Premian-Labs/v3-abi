/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace IFeedRegistry {
  export type FeedMappingArgsStruct = {
    token: AddressLike;
    denomination: AddressLike;
    feed: AddressLike;
  };

  export type FeedMappingArgsStructOutput = [
    token: string,
    denomination: string,
    feed: string
  ] & { token: string; denomination: string; feed: string };
}

export interface FeedRegistryInterface extends Interface {
  getFunction(
    nameOrSignature: "batchRegisterFeedMappings" | "feed"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "FeedMappingsRegistered" | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "batchRegisterFeedMappings",
    values: [IFeedRegistry.FeedMappingArgsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "feed",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchRegisterFeedMappings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feed", data: BytesLike): Result;
}

export namespace FeedMappingsRegisteredEvent {
  export type InputTuple = [args: IFeedRegistry.FeedMappingArgsStruct[]];
  export type OutputTuple = [args: IFeedRegistry.FeedMappingArgsStructOutput[]];
  export interface OutputObject {
    args: IFeedRegistry.FeedMappingArgsStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FeedRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): FeedRegistry;
  waitForDeployment(): Promise<this>;

  interface: FeedRegistryInterface;

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

  batchRegisterFeedMappings: TypedContractMethod<
    [args: IFeedRegistry.FeedMappingArgsStruct[]],
    [void],
    "nonpayable"
  >;

  feed: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchRegisterFeedMappings"
  ): TypedContractMethod<
    [args: IFeedRegistry.FeedMappingArgsStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "feed"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike],
    [string],
    "view"
  >;

  getEvent(
    key: "FeedMappingsRegistered"
  ): TypedContractEvent<
    FeedMappingsRegisteredEvent.InputTuple,
    FeedMappingsRegisteredEvent.OutputTuple,
    FeedMappingsRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "FeedMappingsRegistered(tuple[])": TypedContractEvent<
      FeedMappingsRegisteredEvent.InputTuple,
      FeedMappingsRegisteredEvent.OutputTuple,
      FeedMappingsRegisteredEvent.OutputObject
    >;
    FeedMappingsRegistered: TypedContractEvent<
      FeedMappingsRegisteredEvent.InputTuple,
      FeedMappingsRegisteredEvent.OutputTuple,
      FeedMappingsRegisteredEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
