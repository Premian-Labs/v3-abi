/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { ReferralMock, ReferralMockInterface } from "../ReferralMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressUtils__NotContract",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "PRBMath_MulDiv18_Overflow",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuard__ReentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "Referral__PoolNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "SafeERC20__OperationFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimRebate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        indexed: true,
        internalType: "address",
        name: "primaryReferrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "secondaryReferrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "tier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "primaryRebate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "secondaryRebate",
        type: "uint256",
      },
    ],
    name: "Refer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum IReferral.RebateTier",
        name: "tier",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "oldPercent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "newPercent",
        type: "uint256",
      },
    ],
    name: "SetPrimaryRebatePercent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IReferral.RebateTier",
        name: "oldTier",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum IReferral.RebateTier",
        name: "newTier",
        type: "uint8",
      },
    ],
    name: "SetRebateTier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UD60x18",
        name: "oldPercent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "newPercent",
        type: "uint256",
      },
    ],
    name: "SetSecondaryRebatePercent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "__trySetReferrer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "claimRebate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "referrer",
        type: "address",
      },
      {
        internalType: "UD60x18",
        name: "tradingFee",
        type: "uint256",
      },
    ],
    name: "getRebateAmounts",
    outputs: [
      {
        internalType: "UD60x18",
        name: "primaryRebate",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "secondaryRebate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRebatePercents",
    outputs: [
      {
        internalType: "UD60x18[]",
        name: "primaryRebatePercents",
        type: "uint256[]",
      },
      {
        internalType: "UD60x18",
        name: "secondaryRebatePercent",
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
        name: "referrer",
        type: "address",
      },
    ],
    name: "getRebatePercents",
    outputs: [
      {
        internalType: "UD60x18",
        name: "primaryRebatePercents",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "secondaryRebatePercent",
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
        name: "referrer",
        type: "address",
      },
    ],
    name: "getRebateTier",
    outputs: [
      {
        internalType: "enum IReferral.RebateTier",
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
        name: "referrer",
        type: "address",
      },
    ],
    name: "getRebates",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getReferrer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "percent",
        type: "uint256",
      },
      {
        internalType: "enum IReferral.RebateTier",
        name: "tier",
        type: "uint8",
      },
    ],
    name: "setPrimaryRebatePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        internalType: "enum IReferral.RebateTier",
        name: "tier",
        type: "uint8",
      },
    ],
    name: "setRebateTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "percent",
        type: "uint256",
      },
    ],
    name: "setSecondaryRebatePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "referrer",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "UD60x18",
        name: "primaryRebate",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "secondaryRebate",
        type: "uint256",
      },
    ],
    name: "useReferral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ReferralMock__factory {
  static readonly abi = _abi;
  static createInterface(): ReferralMockInterface {
    return new Interface(_abi) as ReferralMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ReferralMock {
    return new Contract(address, _abi, runner) as unknown as ReferralMock;
  }
}
