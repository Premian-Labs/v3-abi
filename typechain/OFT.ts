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

export interface OFTInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DOMAIN_SEPARATOR"
      | "PT_SEND"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "circulatingSupply"
      | "decimals"
      | "decreaseAllowance"
      | "estimateSendFee"
      | "failedMessages"
      | "forceResumeReceive"
      | "getConfig"
      | "getTrustedRemoteAddress"
      | "increaseAllowance"
      | "isTrustedRemote"
      | "lzEndpoint"
      | "lzReceive"
      | "name"
      | "nonblockingLzReceive"
      | "nonces"
      | "permit"
      | "retryMessage"
      | "sendFrom"
      | "setConfig"
      | "setReceiveVersion"
      | "setSendVersion"
      | "setTrustedRemoteAddress"
      | "supportsInterface"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "MessageFailed"
      | "OwnershipTransferred"
      | "ReceiveFromChain"
      | "RetryMessageSuccess"
      | "SendToChain"
      | "SetTrustedRemoteAddress"
      | "SetUseCustomAdapterParams"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PT_SEND", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "circulatingSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateSendFee",
    values: [BigNumberish, BytesLike, BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessages",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTrustedRemoteAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedRemote",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lzEndpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nonblockingLzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retryMessage",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendFrom",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
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
  encodeFunctionData(
    functionFragment: "setTrustedRemoteAddress",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PT_SEND", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "circulatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateSendFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTrustedRemoteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nonblockingLzReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "retryMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedRemoteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MessageFailedEvent {
  export type InputTuple = [
    srcChainId: BigNumberish,
    srcAddress: BytesLike,
    nonce: BigNumberish,
    payload: BytesLike,
    reason: BytesLike
  ];
  export type OutputTuple = [
    srcChainId: bigint,
    srcAddress: string,
    nonce: bigint,
    payload: string,
    reason: string
  ];
  export interface OutputObject {
    srcChainId: bigint;
    srcAddress: string;
    nonce: bigint;
    payload: string;
    reason: string;
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

export namespace ReceiveFromChainEvent {
  export type InputTuple = [
    srcChainId: BigNumberish,
    srcAddress: BytesLike,
    toAddress: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    srcChainId: bigint,
    srcAddress: string,
    toAddress: string,
    amount: bigint
  ];
  export interface OutputObject {
    srcChainId: bigint;
    srcAddress: string;
    toAddress: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RetryMessageSuccessEvent {
  export type InputTuple = [
    srcChainId: BigNumberish,
    srcAddress: BytesLike,
    nonce: BigNumberish,
    payloadHash: BytesLike
  ];
  export type OutputTuple = [
    srcChainId: bigint,
    srcAddress: string,
    nonce: bigint,
    payloadHash: string
  ];
  export interface OutputObject {
    srcChainId: bigint;
    srcAddress: string;
    nonce: bigint;
    payloadHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SendToChainEvent {
  export type InputTuple = [
    sender: AddressLike,
    dstChainId: BigNumberish,
    toAddress: BytesLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    dstChainId: bigint,
    toAddress: string,
    amount: bigint
  ];
  export interface OutputObject {
    sender: string;
    dstChainId: bigint;
    toAddress: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetTrustedRemoteAddressEvent {
  export type InputTuple = [
    _remoteChainId: BigNumberish,
    _remoteAddress: BytesLike
  ];
  export type OutputTuple = [_remoteChainId: bigint, _remoteAddress: string];
  export interface OutputObject {
    _remoteChainId: bigint;
    _remoteAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetUseCustomAdapterParamsEvent {
  export type InputTuple = [_useCustomAdapterParams: boolean];
  export type OutputTuple = [_useCustomAdapterParams: boolean];
  export interface OutputObject {
    _useCustomAdapterParams: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OFT extends BaseContract {
  connect(runner?: ContractRunner | null): OFT;
  waitForDeployment(): Promise<this>;

  interface: OFTInterface;

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

  DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;

  PT_SEND: TypedContractMethod<[], [bigint], "view">;

  allowance: TypedContractMethod<
    [holder: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  circulatingSupply: TypedContractMethod<[], [bigint], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  estimateSendFee: TypedContractMethod<
    [
      dstChainId: BigNumberish,
      toAddress: BytesLike,
      amount: BigNumberish,
      useZro: boolean,
      adapterParams: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;

  failedMessages: TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike, nonce: BigNumberish],
    [string],
    "view"
  >;

  forceResumeReceive: TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [void],
    "nonpayable"
  >;

  getConfig: TypedContractMethod<
    [
      version: BigNumberish,
      chainId: BigNumberish,
      arg2: AddressLike,
      configType: BigNumberish
    ],
    [string],
    "view"
  >;

  getTrustedRemoteAddress: TypedContractMethod<
    [_remoteChainId: BigNumberish],
    [string],
    "view"
  >;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  isTrustedRemote: TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [boolean],
    "view"
  >;

  lzEndpoint: TypedContractMethod<[], [string], "view">;

  lzReceive: TypedContractMethod<
    [
      srcChainId: BigNumberish,
      srcAddress: BytesLike,
      nonce: BigNumberish,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  nonblockingLzReceive: TypedContractMethod<
    [
      srcChainId: BigNumberish,
      srcAddress: BytesLike,
      nonce: BigNumberish,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  nonces: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  permit: TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  retryMessage: TypedContractMethod<
    [
      srcChainId: BigNumberish,
      srcAddress: BytesLike,
      nonce: BigNumberish,
      payload: BytesLike
    ],
    [void],
    "payable"
  >;

  sendFrom: TypedContractMethod<
    [
      from: AddressLike,
      dstChainId: BigNumberish,
      toAddress: BytesLike,
      amount: BigNumberish,
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

  setTrustedRemoteAddress: TypedContractMethod<
    [remoteChainId: BigNumberish, remoteAddress: BytesLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [holder: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DOMAIN_SEPARATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PT_SEND"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [holder: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "circulatingSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "estimateSendFee"
  ): TypedContractMethod<
    [
      dstChainId: BigNumberish,
      toAddress: BytesLike,
      amount: BigNumberish,
      useZro: boolean,
      adapterParams: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "failedMessages"
  ): TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike, nonce: BigNumberish],
    [string],
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
    nameOrSignature: "getConfig"
  ): TypedContractMethod<
    [
      version: BigNumberish,
      chainId: BigNumberish,
      arg2: AddressLike,
      configType: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTrustedRemoteAddress"
  ): TypedContractMethod<[_remoteChainId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isTrustedRemote"
  ): TypedContractMethod<
    [srcChainId: BigNumberish, srcAddress: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "lzEndpoint"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "lzReceive"
  ): TypedContractMethod<
    [
      srcChainId: BigNumberish,
      srcAddress: BytesLike,
      nonce: BigNumberish,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nonblockingLzReceive"
  ): TypedContractMethod<
    [
      srcChainId: BigNumberish,
      srcAddress: BytesLike,
      nonce: BigNumberish,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "permit"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "retryMessage"
  ): TypedContractMethod<
    [
      srcChainId: BigNumberish,
      srcAddress: BytesLike,
      nonce: BigNumberish,
      payload: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sendFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      dstChainId: BigNumberish,
      toAddress: BytesLike,
      amount: BigNumberish,
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
  getFunction(
    nameOrSignature: "setTrustedRemoteAddress"
  ): TypedContractMethod<
    [remoteChainId: BigNumberish, remoteAddress: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [holder: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "MessageFailed"
  ): TypedContractEvent<
    MessageFailedEvent.InputTuple,
    MessageFailedEvent.OutputTuple,
    MessageFailedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "ReceiveFromChain"
  ): TypedContractEvent<
    ReceiveFromChainEvent.InputTuple,
    ReceiveFromChainEvent.OutputTuple,
    ReceiveFromChainEvent.OutputObject
  >;
  getEvent(
    key: "RetryMessageSuccess"
  ): TypedContractEvent<
    RetryMessageSuccessEvent.InputTuple,
    RetryMessageSuccessEvent.OutputTuple,
    RetryMessageSuccessEvent.OutputObject
  >;
  getEvent(
    key: "SendToChain"
  ): TypedContractEvent<
    SendToChainEvent.InputTuple,
    SendToChainEvent.OutputTuple,
    SendToChainEvent.OutputObject
  >;
  getEvent(
    key: "SetTrustedRemoteAddress"
  ): TypedContractEvent<
    SetTrustedRemoteAddressEvent.InputTuple,
    SetTrustedRemoteAddressEvent.OutputTuple,
    SetTrustedRemoteAddressEvent.OutputObject
  >;
  getEvent(
    key: "SetUseCustomAdapterParams"
  ): TypedContractEvent<
    SetUseCustomAdapterParamsEvent.InputTuple,
    SetUseCustomAdapterParamsEvent.OutputTuple,
    SetUseCustomAdapterParamsEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "MessageFailed(uint16,bytes,uint64,bytes,bytes)": TypedContractEvent<
      MessageFailedEvent.InputTuple,
      MessageFailedEvent.OutputTuple,
      MessageFailedEvent.OutputObject
    >;
    MessageFailed: TypedContractEvent<
      MessageFailedEvent.InputTuple,
      MessageFailedEvent.OutputTuple,
      MessageFailedEvent.OutputObject
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

    "ReceiveFromChain(uint16,bytes,address,uint256)": TypedContractEvent<
      ReceiveFromChainEvent.InputTuple,
      ReceiveFromChainEvent.OutputTuple,
      ReceiveFromChainEvent.OutputObject
    >;
    ReceiveFromChain: TypedContractEvent<
      ReceiveFromChainEvent.InputTuple,
      ReceiveFromChainEvent.OutputTuple,
      ReceiveFromChainEvent.OutputObject
    >;

    "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": TypedContractEvent<
      RetryMessageSuccessEvent.InputTuple,
      RetryMessageSuccessEvent.OutputTuple,
      RetryMessageSuccessEvent.OutputObject
    >;
    RetryMessageSuccess: TypedContractEvent<
      RetryMessageSuccessEvent.InputTuple,
      RetryMessageSuccessEvent.OutputTuple,
      RetryMessageSuccessEvent.OutputObject
    >;

    "SendToChain(address,uint16,bytes,uint256)": TypedContractEvent<
      SendToChainEvent.InputTuple,
      SendToChainEvent.OutputTuple,
      SendToChainEvent.OutputObject
    >;
    SendToChain: TypedContractEvent<
      SendToChainEvent.InputTuple,
      SendToChainEvent.OutputTuple,
      SendToChainEvent.OutputObject
    >;

    "SetTrustedRemoteAddress(uint16,bytes)": TypedContractEvent<
      SetTrustedRemoteAddressEvent.InputTuple,
      SetTrustedRemoteAddressEvent.OutputTuple,
      SetTrustedRemoteAddressEvent.OutputObject
    >;
    SetTrustedRemoteAddress: TypedContractEvent<
      SetTrustedRemoteAddressEvent.InputTuple,
      SetTrustedRemoteAddressEvent.OutputTuple,
      SetTrustedRemoteAddressEvent.OutputObject
    >;

    "SetUseCustomAdapterParams(bool)": TypedContractEvent<
      SetUseCustomAdapterParamsEvent.InputTuple,
      SetUseCustomAdapterParamsEvent.OutputTuple,
      SetUseCustomAdapterParamsEvent.OutputObject
    >;
    SetUseCustomAdapterParams: TypedContractEvent<
      SetUseCustomAdapterParamsEvent.InputTuple,
      SetUseCustomAdapterParamsEvent.OutputTuple,
      SetUseCustomAdapterParamsEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
