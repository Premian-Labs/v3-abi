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

export declare namespace IVaultRegistry {
  export type TokenPairStruct = {
    base: AddressLike;
    quote: AddressLike;
    oracleAdapter: AddressLike;
  };

  export type TokenPairStructOutput = [
    base: string,
    quote: string,
    oracleAdapter: string
  ] & { base: string; quote: string; oracleAdapter: string };

  export type VaultStruct = {
    vault: AddressLike;
    asset: AddressLike;
    vaultType: BytesLike;
    side: BigNumberish;
    optionType: BigNumberish;
  };

  export type VaultStructOutput = [
    vault: string,
    asset: string,
    vaultType: string,
    side: bigint,
    optionType: bigint
  ] & {
    vault: string;
    asset: string;
    vaultType: string;
    side: bigint;
    optionType: bigint;
  };
}

export interface IVaultRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addSupportedTokenPairs"
      | "addVault"
      | "getImplementation"
      | "getNumberOfVaults"
      | "getSettings"
      | "getSupportedTokenPairs"
      | "getVault"
      | "getVaults"
      | "getVaultsByAsset"
      | "getVaultsByFilter"
      | "getVaultsByOptionType"
      | "getVaultsByTokenPair"
      | "getVaultsByTradeSide"
      | "getVaultsByType"
      | "isVault"
      | "removeSupportedTokenPairs"
      | "removeVault"
      | "setImplementation"
      | "updateSettings"
      | "updateVault"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "SupportedTokenPairAdded"
      | "SupportedTokenPairRemoved"
      | "VaultAdded"
      | "VaultRemoved"
      | "VaultUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addSupportedTokenPairs",
    values: [AddressLike, IVaultRegistry.TokenPairStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addVault",
    values: [AddressLike, AddressLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfVaults",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSettings",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedTokenPairs",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVault",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "getVaults", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVaultsByAsset",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultsByFilter",
    values: [AddressLike[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultsByOptionType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultsByTokenPair",
    values: [IVaultRegistry.TokenPairStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultsByTradeSide",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultsByType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isVault",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSupportedTokenPairs",
    values: [AddressLike, IVaultRegistry.TokenPairStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeVault",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setImplementation",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSettings",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateVault",
    values: [AddressLike, AddressLike, BytesLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addSupportedTokenPairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSettings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedTokenPairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVaults", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVaultsByAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultsByFilter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultsByOptionType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultsByTokenPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultsByTradeSide",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultsByType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeSupportedTokenPairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSettings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateVault",
    data: BytesLike
  ): Result;
}

export namespace SupportedTokenPairAddedEvent {
  export type InputTuple = [
    vault: AddressLike,
    base: AddressLike,
    quote: AddressLike,
    oracleAdapter: AddressLike
  ];
  export type OutputTuple = [
    vault: string,
    base: string,
    quote: string,
    oracleAdapter: string
  ];
  export interface OutputObject {
    vault: string;
    base: string;
    quote: string;
    oracleAdapter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SupportedTokenPairRemovedEvent {
  export type InputTuple = [
    vault: AddressLike,
    base: AddressLike,
    quote: AddressLike,
    oracleAdapter: AddressLike
  ];
  export type OutputTuple = [
    vault: string,
    base: string,
    quote: string,
    oracleAdapter: string
  ];
  export interface OutputObject {
    vault: string;
    base: string;
    quote: string;
    oracleAdapter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VaultAddedEvent {
  export type InputTuple = [
    vault: AddressLike,
    asset: AddressLike,
    vaultType: BytesLike,
    side: BigNumberish,
    optionType: BigNumberish
  ];
  export type OutputTuple = [
    vault: string,
    asset: string,
    vaultType: string,
    side: bigint,
    optionType: bigint
  ];
  export interface OutputObject {
    vault: string;
    asset: string;
    vaultType: string;
    side: bigint;
    optionType: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VaultRemovedEvent {
  export type InputTuple = [vault: AddressLike];
  export type OutputTuple = [vault: string];
  export interface OutputObject {
    vault: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VaultUpdatedEvent {
  export type InputTuple = [
    vault: AddressLike,
    asset: AddressLike,
    vaultType: BytesLike,
    side: BigNumberish,
    optionType: BigNumberish
  ];
  export type OutputTuple = [
    vault: string,
    asset: string,
    vaultType: string,
    side: bigint,
    optionType: bigint
  ];
  export interface OutputObject {
    vault: string;
    asset: string;
    vaultType: string;
    side: bigint;
    optionType: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IVaultRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): IVaultRegistry;
  waitForDeployment(): Promise<this>;

  interface: IVaultRegistryInterface;

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

  addSupportedTokenPairs: TypedContractMethod<
    [vault: AddressLike, tokenPairs: IVaultRegistry.TokenPairStruct[]],
    [void],
    "nonpayable"
  >;

  addVault: TypedContractMethod<
    [
      vault: AddressLike,
      asset: AddressLike,
      vaultType: BytesLike,
      side: BigNumberish,
      optionType: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getImplementation: TypedContractMethod<
    [vaultType: BytesLike],
    [string],
    "view"
  >;

  getNumberOfVaults: TypedContractMethod<[], [bigint], "view">;

  getSettings: TypedContractMethod<[vaultType: BytesLike], [string], "view">;

  getSupportedTokenPairs: TypedContractMethod<
    [vault: AddressLike],
    [IVaultRegistry.TokenPairStructOutput[]],
    "view"
  >;

  getVault: TypedContractMethod<
    [vault: AddressLike],
    [IVaultRegistry.VaultStructOutput],
    "view"
  >;

  getVaults: TypedContractMethod<
    [],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;

  getVaultsByAsset: TypedContractMethod<
    [asset: AddressLike],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;

  getVaultsByFilter: TypedContractMethod<
    [assets: AddressLike[], side: BigNumberish, optionType: BigNumberish],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;

  getVaultsByOptionType: TypedContractMethod<
    [optionType: BigNumberish],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;

  getVaultsByTokenPair: TypedContractMethod<
    [tokenPair: IVaultRegistry.TokenPairStruct],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;

  getVaultsByTradeSide: TypedContractMethod<
    [side: BigNumberish],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;

  getVaultsByType: TypedContractMethod<
    [vaultType: BytesLike],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;

  isVault: TypedContractMethod<[vault: AddressLike], [boolean], "view">;

  removeSupportedTokenPairs: TypedContractMethod<
    [vault: AddressLike, tokenPairsToRemove: IVaultRegistry.TokenPairStruct[]],
    [void],
    "nonpayable"
  >;

  removeVault: TypedContractMethod<[vault: AddressLike], [void], "nonpayable">;

  setImplementation: TypedContractMethod<
    [vaultType: BytesLike, implementation: AddressLike],
    [void],
    "nonpayable"
  >;

  updateSettings: TypedContractMethod<
    [vaultType: BytesLike, updatedSettings: BytesLike],
    [void],
    "nonpayable"
  >;

  updateVault: TypedContractMethod<
    [
      vault: AddressLike,
      asset: AddressLike,
      vaultType: BytesLike,
      side: BigNumberish,
      optionType: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addSupportedTokenPairs"
  ): TypedContractMethod<
    [vault: AddressLike, tokenPairs: IVaultRegistry.TokenPairStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addVault"
  ): TypedContractMethod<
    [
      vault: AddressLike,
      asset: AddressLike,
      vaultType: BytesLike,
      side: BigNumberish,
      optionType: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getImplementation"
  ): TypedContractMethod<[vaultType: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getNumberOfVaults"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSettings"
  ): TypedContractMethod<[vaultType: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getSupportedTokenPairs"
  ): TypedContractMethod<
    [vault: AddressLike],
    [IVaultRegistry.TokenPairStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVault"
  ): TypedContractMethod<
    [vault: AddressLike],
    [IVaultRegistry.VaultStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVaults"
  ): TypedContractMethod<[], [IVaultRegistry.VaultStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getVaultsByAsset"
  ): TypedContractMethod<
    [asset: AddressLike],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVaultsByFilter"
  ): TypedContractMethod<
    [assets: AddressLike[], side: BigNumberish, optionType: BigNumberish],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVaultsByOptionType"
  ): TypedContractMethod<
    [optionType: BigNumberish],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVaultsByTokenPair"
  ): TypedContractMethod<
    [tokenPair: IVaultRegistry.TokenPairStruct],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVaultsByTradeSide"
  ): TypedContractMethod<
    [side: BigNumberish],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVaultsByType"
  ): TypedContractMethod<
    [vaultType: BytesLike],
    [IVaultRegistry.VaultStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "isVault"
  ): TypedContractMethod<[vault: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeSupportedTokenPairs"
  ): TypedContractMethod<
    [vault: AddressLike, tokenPairsToRemove: IVaultRegistry.TokenPairStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeVault"
  ): TypedContractMethod<[vault: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setImplementation"
  ): TypedContractMethod<
    [vaultType: BytesLike, implementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateSettings"
  ): TypedContractMethod<
    [vaultType: BytesLike, updatedSettings: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateVault"
  ): TypedContractMethod<
    [
      vault: AddressLike,
      asset: AddressLike,
      vaultType: BytesLike,
      side: BigNumberish,
      optionType: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "SupportedTokenPairAdded"
  ): TypedContractEvent<
    SupportedTokenPairAddedEvent.InputTuple,
    SupportedTokenPairAddedEvent.OutputTuple,
    SupportedTokenPairAddedEvent.OutputObject
  >;
  getEvent(
    key: "SupportedTokenPairRemoved"
  ): TypedContractEvent<
    SupportedTokenPairRemovedEvent.InputTuple,
    SupportedTokenPairRemovedEvent.OutputTuple,
    SupportedTokenPairRemovedEvent.OutputObject
  >;
  getEvent(
    key: "VaultAdded"
  ): TypedContractEvent<
    VaultAddedEvent.InputTuple,
    VaultAddedEvent.OutputTuple,
    VaultAddedEvent.OutputObject
  >;
  getEvent(
    key: "VaultRemoved"
  ): TypedContractEvent<
    VaultRemovedEvent.InputTuple,
    VaultRemovedEvent.OutputTuple,
    VaultRemovedEvent.OutputObject
  >;
  getEvent(
    key: "VaultUpdated"
  ): TypedContractEvent<
    VaultUpdatedEvent.InputTuple,
    VaultUpdatedEvent.OutputTuple,
    VaultUpdatedEvent.OutputObject
  >;

  filters: {
    "SupportedTokenPairAdded(address,address,address,address)": TypedContractEvent<
      SupportedTokenPairAddedEvent.InputTuple,
      SupportedTokenPairAddedEvent.OutputTuple,
      SupportedTokenPairAddedEvent.OutputObject
    >;
    SupportedTokenPairAdded: TypedContractEvent<
      SupportedTokenPairAddedEvent.InputTuple,
      SupportedTokenPairAddedEvent.OutputTuple,
      SupportedTokenPairAddedEvent.OutputObject
    >;

    "SupportedTokenPairRemoved(address,address,address,address)": TypedContractEvent<
      SupportedTokenPairRemovedEvent.InputTuple,
      SupportedTokenPairRemovedEvent.OutputTuple,
      SupportedTokenPairRemovedEvent.OutputObject
    >;
    SupportedTokenPairRemoved: TypedContractEvent<
      SupportedTokenPairRemovedEvent.InputTuple,
      SupportedTokenPairRemovedEvent.OutputTuple,
      SupportedTokenPairRemovedEvent.OutputObject
    >;

    "VaultAdded(address,address,bytes32,uint8,uint8)": TypedContractEvent<
      VaultAddedEvent.InputTuple,
      VaultAddedEvent.OutputTuple,
      VaultAddedEvent.OutputObject
    >;
    VaultAdded: TypedContractEvent<
      VaultAddedEvent.InputTuple,
      VaultAddedEvent.OutputTuple,
      VaultAddedEvent.OutputObject
    >;

    "VaultRemoved(address)": TypedContractEvent<
      VaultRemovedEvent.InputTuple,
      VaultRemovedEvent.OutputTuple,
      VaultRemovedEvent.OutputObject
    >;
    VaultRemoved: TypedContractEvent<
      VaultRemovedEvent.InputTuple,
      VaultRemovedEvent.OutputTuple,
      VaultRemovedEvent.OutputObject
    >;

    "VaultUpdated(address,address,bytes32,uint8,uint8)": TypedContractEvent<
      VaultUpdatedEvent.InputTuple,
      VaultUpdatedEvent.OutputTuple,
      VaultUpdatedEvent.OutputObject
    >;
    VaultUpdated: TypedContractEvent<
      VaultUpdatedEvent.InputTuple,
      VaultUpdatedEvent.OutputTuple,
      VaultUpdatedEvent.OutputObject
    >;
  };
}
