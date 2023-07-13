/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IPoolTrade, IPoolTradeInterface } from "../IPoolTrade";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maximum",
        type: "uint256",
      },
    ],
    name: "Pool__AboveMaxSlippage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "quoteSize",
        type: "uint256",
      },
    ],
    name: "Pool__AboveQuoteSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "enum IUserSettings.Action",
        name: "action",
        type: "uint8",
      },
    ],
    name: "Pool__ActionNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__AgentNotAuthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "cost",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "payout",
        type: "uint256",
      },
    ],
    name: "Pool__CostExceedsPayout",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "costInWrappedNative",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "authorizedCost",
        type: "uint256",
      },
    ],
    name: "Pool__CostNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__FlashLoanCallbackFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__FlashLoanNotRepayed",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__InsufficientAskLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__InsufficientBidLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__InsufficientLiquidity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "SD59x18",
        name: "deltaLongs",
        type: "int256",
      },
      {
        internalType: "SD59x18",
        name: "deltaShorts",
        type: "int256",
      },
    ],
    name: "Pool__InvalidAssetUpdate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "priceBelow",
        type: "uint256",
      },
    ],
    name: "Pool__InvalidBelowPrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
    ],
    name: "Pool__InvalidMonth",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__InvalidQuoteOBSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__InvalidQuoteOBTaker",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "lower",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "upper",
        type: "uint256",
      },
    ],
    name: "Pool__InvalidRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "crossings",
        type: "uint256",
      },
    ],
    name: "Pool__InvalidReconciliation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "lower",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "upper",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "depositSize",
        type: "uint256",
      },
    ],
    name: "Pool__InvalidSize",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__InvalidTickPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__InvalidTickUpdate",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__InvalidTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
    ],
    name: "Pool__NotEnoughTokens",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "Pool__NotPoolToken",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__NotWrappedNativeTokenPool",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Pool__OperatorNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__OptionExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__OptionNotExpired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Pool__OutOfBoundsPrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "longs",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "shorts",
        type: "uint256",
      },
    ],
    name: "Pool__PositionCantHoldLongAndShort",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Pool__PositionDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__QuoteOBCancelled",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__QuoteOBExpired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "filledAmount",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "quoteOBSize",
        type: "uint256",
      },
    ],
    name: "Pool__QuoteOBOverfilled",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__SettlementFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "SD59x18",
        name: "tickDelta",
        type: "int256",
      },
    ],
    name: "Pool__TickDeltaNotZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Pool__TickNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Pool__TickOutOfRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Pool__TickWidthInvalid",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256",
      },
    ],
    name: "Pool__WithdrawalDelayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "Pool__ZeroSize",
    type: "error",
  },
  {
    inputs: [],
    name: "Position__InvalidOrderType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "currentBalance",
        type: "uint256",
      },
      {
        internalType: "SD59x18",
        name: "amount",
        type: "int256",
      },
    ],
    name: "Position__InvalidPositionUpdate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "lower",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "upper",
        type: "uint256",
      },
    ],
    name: "Position__LowerGreaterOrEqualUpper",
    type: "error",
  },
  {
    inputs: [],
    name: "Pricing__PriceCannotBeComputedWithinTickRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "lower",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "upper",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "marketPrice",
        type: "uint256",
      },
    ],
    name: "Pricing__PriceOutOfRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "lower",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "upper",
        type: "uint256",
      },
    ],
    name: "Pricing__UpperNotGreaterThanLower",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "hashes",
        type: "bytes32[]",
      },
    ],
    name: "cancelQuotesOB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "provider",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "UD60x18",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "UD60x18",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isBuy",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct IPoolInternal.QuoteOB",
        name: "quoteOB",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct IPoolInternal.Signature",
        name: "signature",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "fillQuoteOB",
    outputs: [
      {
        internalType: "uint256",
        name: "premiumTaker",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "SD59x18",
            name: "collateral",
            type: "int256",
          },
          {
            internalType: "SD59x18",
            name: "longs",
            type: "int256",
          },
          {
            internalType: "SD59x18",
            name: "shorts",
            type: "int256",
          },
        ],
        internalType: "struct Position.Delta",
        name: "delta",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
    ],
    name: "getQuoteAMM",
    outputs: [
      {
        internalType: "uint256",
        name: "premiumNet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "quoteOBHash",
        type: "bytes32",
      },
    ],
    name: "getQuoteOBFilledAmount",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "provider",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "UD60x18",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "UD60x18",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isBuy",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct IPoolInternal.QuoteOB",
        name: "quoteOB",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct IPoolInternal.Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "isQuoteOBValid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "enum IPoolInternal.InvalidQuoteOBError",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "premiumLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "trade",
    outputs: [
      {
        internalType: "uint256",
        name: "totalPremium",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "SD59x18",
            name: "collateral",
            type: "int256",
          },
          {
            internalType: "SD59x18",
            name: "longs",
            type: "int256",
          },
          {
            internalType: "SD59x18",
            name: "shorts",
            type: "int256",
          },
        ],
        internalType: "struct Position.Delta",
        name: "delta",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPoolTrade__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolTradeInterface {
    return new Interface(_abi) as IPoolTradeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IPoolTrade {
    return new Contract(address, _abi, runner) as unknown as IPoolTrade;
  }
}
