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

export interface ILayerZeroEndpointInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "estimateFees"
      | "forceResumeReceive"
      | "getChainId"
      | "getConfig"
      | "getInboundNonce"
      | "getOutboundNonce"
      | "getReceiveLibraryAddress"
      | "getReceiveVersion"
      | "getSendLibraryAddress"
      | "getSendVersion"
      | "hasStoredPayload"
      | "isReceivingPayload"
      | "isSendingPayload"
      | "receivePayload"
      | "retryPayload"
      | "send"
      | "setConfig"
      | "setReceiveVersion"
      | "setSendVersion"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "estimateFees",
    values: [BigNumberish, AddressLike, BytesLike, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInboundNonce",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutboundNonce",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveLibraryAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveVersion",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendLibraryAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendVersion",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasStoredPayload",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReceivingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSendingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivePayload",
    values: [
      BigNumberish,
      BytesLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retryPayload",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      BigNumberish,
      BytesLike,
      BytesLike,
      AddressLike,
      AddressLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiveVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendVersion",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasStoredPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReceivingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSendingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;
}

export interface ILayerZeroEndpoint extends BaseContract {
  connect(runner?: ContractRunner | null): ILayerZeroEndpoint;
  waitForDeployment(): Promise<this>;

  interface: ILayerZeroEndpointInterface;

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

  estimateFees: TypedContractMethod<
    [
      dstChainId: BigNumberish,
      userApplication: AddressLike,
      payload: BytesLike,
      payInZRO: boolean,
      adapterParam: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;

  forceResumeReceive: TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [void],
    "nonpayable"
  >;

  getChainId: TypedContractMethod<[], [bigint], "view">;

  getConfig: TypedContractMethod<
    [
      version: BigNumberish,
      chainId: BigNumberish,
      userApplication: AddressLike,
      configType: BigNumberish
    ],
    [string],
    "view"
  >;

  getInboundNonce: TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [bigint],
    "view"
  >;

  getOutboundNonce: TypedContractMethod<
    [dstChainId: BigNumberish, srcAddress: AddressLike],
    [bigint],
    "view"
  >;

  getReceiveLibraryAddress: TypedContractMethod<
    [userApplication: AddressLike],
    [string],
    "view"
  >;

  getReceiveVersion: TypedContractMethod<
    [userApplication: AddressLike],
    [bigint],
    "view"
  >;

  getSendLibraryAddress: TypedContractMethod<
    [userApplication: AddressLike],
    [string],
    "view"
  >;

  getSendVersion: TypedContractMethod<
    [userApplication: AddressLike],
    [bigint],
    "view"
  >;

  hasStoredPayload: TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [boolean],
    "view"
  >;

  isReceivingPayload: TypedContractMethod<[], [boolean], "view">;

  isSendingPayload: TypedContractMethod<[], [boolean], "view">;

  receivePayload: TypedContractMethod<
    [
      srcChainId: BigNumberish,
      srcAddress: BytesLike,
      dstAddress: AddressLike,
      nonce: BigNumberish,
      gasLimit: BigNumberish,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  retryPayload: TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike, payload: BytesLike],
    [void],
    "nonpayable"
  >;

  send: TypedContractMethod<
    [
      dstChainId: BigNumberish,
      destination: BytesLike,
      payload: BytesLike,
      refundAddress: AddressLike,
      zroPaymentAddress: AddressLike,
      adapterParams: BytesLike
    ],
    [void],
    "payable"
  >;

  setConfig: TypedContractMethod<
    [
      version: BigNumberish,
      chainId: BigNumberish,
      configType: BigNumberish,
      config: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  setReceiveVersion: TypedContractMethod<
    [version: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSendVersion: TypedContractMethod<
    [version: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "estimateFees"
  ): TypedContractMethod<
    [
      dstChainId: BigNumberish,
      userApplication: AddressLike,
      payload: BytesLike,
      payInZRO: boolean,
      adapterParam: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "forceResumeReceive"
  ): TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getConfig"
  ): TypedContractMethod<
    [
      version: BigNumberish,
      chainId: BigNumberish,
      userApplication: AddressLike,
      configType: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getInboundNonce"
  ): TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOutboundNonce"
  ): TypedContractMethod<
    [dstChainId: BigNumberish, srcAddress: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReceiveLibraryAddress"
  ): TypedContractMethod<[userApplication: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getReceiveVersion"
  ): TypedContractMethod<[userApplication: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSendLibraryAddress"
  ): TypedContractMethod<[userApplication: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getSendVersion"
  ): TypedContractMethod<[userApplication: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasStoredPayload"
  ): TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isReceivingPayload"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSendingPayload"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "receivePayload"
  ): TypedContractMethod<
    [
      srcChainId: BigNumberish,
      srcAddress: BytesLike,
      dstAddress: AddressLike,
      nonce: BigNumberish,
      gasLimit: BigNumberish,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "retryPayload"
  ): TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike, payload: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "send"
  ): TypedContractMethod<
    [
      dstChainId: BigNumberish,
      destination: BytesLike,
      payload: BytesLike,
      refundAddress: AddressLike,
      zroPaymentAddress: AddressLike,
      adapterParams: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setConfig"
  ): TypedContractMethod<
    [
      version: BigNumberish,
      chainId: BigNumberish,
      configType: BigNumberish,
      config: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setReceiveVersion"
  ): TypedContractMethod<[version: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSendVersion"
  ): TypedContractMethod<[version: BigNumberish], [void], "nonpayable">;

  filters: {};
}
