/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IPoolEvents, IPoolEventsInterface } from "../IPoolEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "contractSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "Annihilate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "quoteOBHash",
        type: "bytes32",
      },
    ],
    name: "CancelQuoteOB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "feesClaimed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "SD59x18",
        name: "lastFeeRate",
        type: "int256",
      },
    ],
    name: "ClaimFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "feeReceiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "feesClaimed",
        type: "uint256",
      },
    ],
    name: "ClaimProtocolFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "collateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "longs",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "shorts",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "SD59x18",
        name: "lastFeeRate",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "claimableFees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "marketPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "currentTick",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "contractSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "exerciseValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "settlementPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "operatorCost",
        type: "uint256",
      },
    ],
    name: "Exercise",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "quoteOBHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "contractSize",
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
        indexed: false,
        internalType: "struct Position.Delta",
        name: "deltaMaker",
        type: "tuple",
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
        indexed: false,
        internalType: "struct Position.Delta",
        name: "deltaTaker",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "premium",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "protocolFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "totalReferralRebate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
    ],
    name: "FillQuoteOB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "FlashLoan",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "contractSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "exerciseValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "settlementPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "operatorCost",
        type: "uint256",
      },
    ],
    name: "Settle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "contractSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "collateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "exerciseValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "feesClaimed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "settlementPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "operatorCost",
        type: "uint256",
      },
    ],
    name: "SettlePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "contractSize",
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
        indexed: false,
        internalType: "struct Position.Delta",
        name: "delta",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "premium",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "takerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "protocolFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "marketPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "currentTick",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "totalReferralRebate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
    ],
    name: "Trade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "srcTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destTokenId",
        type: "uint256",
      },
    ],
    name: "TransferPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "UD60x18",
        name: "tick",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "UD60x18",
        name: "prev",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "UD60x18",
        name: "next",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "SD59x18",
        name: "delta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "externalFeeRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "SD59x18",
        name: "longDelta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "SD59x18",
        name: "shortDelta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "counter",
        type: "uint256",
      },
    ],
    name: "UpdateTick",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "collateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "longs",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "shorts",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "SD59x18",
        name: "lastFeeRate",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "claimableFees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "marketPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "currentTick",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "underwriter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "longReceiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "contractSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "collateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "protocolFee",
        type: "uint256",
      },
    ],
    name: "WriteFrom",
    type: "event",
  },
] as const;

export class IPoolEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolEventsInterface {
    return new Interface(_abi) as IPoolEventsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IPoolEvents {
    return new Contract(address, _abi, runner) as unknown as IPoolEvents;
  }
}
