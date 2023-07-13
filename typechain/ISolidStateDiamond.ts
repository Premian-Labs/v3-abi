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

export declare namespace IDiamondWritableInternal {
  export type FacetCutStruct = {
    target: AddressLike;
    action: BigNumberish;
    selectors: BytesLike[];
  };

  export type FacetCutStructOutput = [
    target: string,
    action: bigint,
    selectors: string[]
  ] & { target: string; action: bigint; selectors: string[] };
}

export declare namespace IDiamondReadable {
  export type FacetStruct = { target: AddressLike; selectors: BytesLike[] };

  export type FacetStructOutput = [target: string, selectors: string[]] & {
    target: string;
    selectors: string[];
  };
}

export interface ISolidStateDiamondInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "diamondCut"
      | "facetAddress"
      | "facetAddresses"
      | "facetFunctionSelectors"
      | "facets"
      | "getFallbackAddress"
      | "nomineeOwner"
      | "owner"
      | "setFallbackAddress"
      | "supportsInterface"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "DiamondCut" | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "diamondCut",
    values: [IDiamondWritableInternal.FacetCutStruct[], AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "facetFunctionSelectors",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "facets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFallbackAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nomineeOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFallbackAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "facetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nomineeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace DiamondCutEvent {
  export type InputTuple = [
    facetCuts: IDiamondWritableInternal.FacetCutStruct[],
    target: AddressLike,
    data: BytesLike
  ];
  export type OutputTuple = [
    facetCuts: IDiamondWritableInternal.FacetCutStructOutput[],
    target: string,
    data: string
  ];
  export interface OutputObject {
    facetCuts: IDiamondWritableInternal.FacetCutStructOutput[];
    target: string;
    data: string;
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

export interface ISolidStateDiamond extends BaseContract {
  connect(runner?: ContractRunner | null): ISolidStateDiamond;
  waitForDeployment(): Promise<this>;

  interface: ISolidStateDiamondInterface;

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

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  diamondCut: TypedContractMethod<
    [
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  facetAddress: TypedContractMethod<[selector: BytesLike], [string], "view">;

  facetAddresses: TypedContractMethod<[], [string[]], "view">;

  facetFunctionSelectors: TypedContractMethod<
    [facet: AddressLike],
    [string[]],
    "view"
  >;

  facets: TypedContractMethod<
    [],
    [IDiamondReadable.FacetStructOutput[]],
    "view"
  >;

  getFallbackAddress: TypedContractMethod<[], [string], "view">;

  nomineeOwner: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  setFallbackAddress: TypedContractMethod<
    [fallbackAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "diamondCut"
  ): TypedContractMethod<
    [
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "facetAddress"
  ): TypedContractMethod<[selector: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "facetAddresses"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "facetFunctionSelectors"
  ): TypedContractMethod<[facet: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "facets"
  ): TypedContractMethod<[], [IDiamondReadable.FacetStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getFallbackAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nomineeOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFallbackAddress"
  ): TypedContractMethod<[fallbackAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "DiamondCut"
  ): TypedContractEvent<
    DiamondCutEvent.InputTuple,
    DiamondCutEvent.OutputTuple,
    DiamondCutEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "DiamondCut(tuple[],address,bytes)": TypedContractEvent<
      DiamondCutEvent.InputTuple,
      DiamondCutEvent.OutputTuple,
      DiamondCutEvent.OutputObject
    >;
    DiamondCut: TypedContractEvent<
      DiamondCutEvent.InputTuple,
      DiamondCutEvent.OutputTuple,
      DiamondCutEvent.OutputObject
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
