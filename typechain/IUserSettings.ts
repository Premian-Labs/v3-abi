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

export interface IUserSettingsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getActionAuthorization"
      | "getAuthorizedCost"
      | "isActionAuthorized"
      | "multicall"
      | "setActionAuthorization"
      | "setAuthorizedCost"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ActionAuthorizationUpdated"
      | "AuthorizedCostUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getActionAuthorization",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizedCost",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isActionAuthorized",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setActionAuthorization",
    values: [AddressLike, BigNumberish[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizedCost",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getActionAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizedCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isActionAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setActionAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizedCost",
    data: BytesLike
  ): Result;
}

export namespace ActionAuthorizationUpdatedEvent {
  export type InputTuple = [
    user: AddressLike,
    operator: AddressLike,
    actions: BigNumberish[],
    authorization: boolean[]
  ];
  export type OutputTuple = [
    user: string,
    operator: string,
    actions: bigint[],
    authorization: boolean[]
  ];
  export interface OutputObject {
    user: string;
    operator: string;
    actions: bigint[];
    authorization: boolean[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AuthorizedCostUpdatedEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IUserSettings extends BaseContract {
  connect(runner?: ContractRunner | null): IUserSettings;
  waitForDeployment(): Promise<this>;

  interface: IUserSettingsInterface;

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

  getActionAuthorization: TypedContractMethod<
    [user: AddressLike, operator: AddressLike],
    [[bigint[], boolean[]] & { actions: bigint[]; authorization: boolean[] }],
    "view"
  >;

  getAuthorizedCost: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  isActionAuthorized: TypedContractMethod<
    [user: AddressLike, operator: AddressLike, action: BigNumberish],
    [boolean],
    "view"
  >;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  setActionAuthorization: TypedContractMethod<
    [operator: AddressLike, actions: BigNumberish[], authorization: boolean[]],
    [void],
    "nonpayable"
  >;

  setAuthorizedCost: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getActionAuthorization"
  ): TypedContractMethod<
    [user: AddressLike, operator: AddressLike],
    [[bigint[], boolean[]] & { actions: bigint[]; authorization: boolean[] }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAuthorizedCost"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "isActionAuthorized"
  ): TypedContractMethod<
    [user: AddressLike, operator: AddressLike, action: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "setActionAuthorization"
  ): TypedContractMethod<
    [operator: AddressLike, actions: BigNumberish[], authorization: boolean[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAuthorizedCost"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "ActionAuthorizationUpdated"
  ): TypedContractEvent<
    ActionAuthorizationUpdatedEvent.InputTuple,
    ActionAuthorizationUpdatedEvent.OutputTuple,
    ActionAuthorizationUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "AuthorizedCostUpdated"
  ): TypedContractEvent<
    AuthorizedCostUpdatedEvent.InputTuple,
    AuthorizedCostUpdatedEvent.OutputTuple,
    AuthorizedCostUpdatedEvent.OutputObject
  >;

  filters: {
    "ActionAuthorizationUpdated(address,address,uint8[],bool[])": TypedContractEvent<
      ActionAuthorizationUpdatedEvent.InputTuple,
      ActionAuthorizationUpdatedEvent.OutputTuple,
      ActionAuthorizationUpdatedEvent.OutputObject
    >;
    ActionAuthorizationUpdated: TypedContractEvent<
      ActionAuthorizationUpdatedEvent.InputTuple,
      ActionAuthorizationUpdatedEvent.OutputTuple,
      ActionAuthorizationUpdatedEvent.OutputObject
    >;

    "AuthorizedCostUpdated(address,uint256)": TypedContractEvent<
      AuthorizedCostUpdatedEvent.InputTuple,
      AuthorizedCostUpdatedEvent.OutputTuple,
      AuthorizedCostUpdatedEvent.OutputObject
    >;
    AuthorizedCostUpdated: TypedContractEvent<
      AuthorizedCostUpdatedEvent.InputTuple,
      AuthorizedCostUpdatedEvent.OutputTuple,
      AuthorizedCostUpdatedEvent.OutputObject
    >;
  };
}
