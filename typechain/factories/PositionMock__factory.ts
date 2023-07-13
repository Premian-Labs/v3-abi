/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { PositionMock, PositionMockInterface } from "../PositionMock";

const _abi = [
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
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "PRBMath_MulDiv_Overflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PRBMath_SD59x18_Abs_MinSD59x18",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "SD59x18",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMath_SD59x18_IntoUD60x18_Underflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PRBMath_SD59x18_Mul_InputTooSmall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "SD59x18",
        name: "x",
        type: "int256",
      },
      {
        internalType: "SD59x18",
        name: "y",
        type: "int256",
      },
    ],
    name: "PRBMath_SD59x18_Mul_Overflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMath_UD60x18_IntoSD59x18_Overflow",
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
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "bid",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
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
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "calculatePositionUpdate",
    outputs: [
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "collateral",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "_collateral",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "strike",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCall",
        type: "bool",
      },
    ],
    name: "collateralToContracts",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "contracts",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "_collateral",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "strike",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCall",
        type: "bool",
      },
    ],
    name: "contractsToCollateral",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Position.OrderType",
        name: "orderType",
        type: "uint8",
      },
    ],
    name: "isLong",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Position.OrderType",
        name: "orderType",
        type: "uint8",
      },
    ],
    name: "isShort",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
    ],
    name: "keyHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
    ],
    name: "liquidityPerTick",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "long",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "pieceWiseLinear",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "pieceWiseQuadratic",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "enum Position.OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCall",
            type: "bool",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
        ],
        internalType: "struct Position.KeyInternal",
        name: "self",
        type: "tuple",
      },
      {
        internalType: "UD60x18",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "price",
        type: "uint256",
      },
    ],
    name: "short",
    outputs: [
      {
        internalType: "UD60x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class PositionMock__factory {
  static readonly abi = _abi;
  static createInterface(): PositionMockInterface {
    return new Interface(_abi) as PositionMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PositionMock {
    return new Contract(address, _abi, runner) as unknown as PositionMock;
  }
}
