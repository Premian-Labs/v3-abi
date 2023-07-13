/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { FlashLoanMock, FlashLoanMockInterface } from "../FlashLoanMock";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pool",
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
        ],
        internalType: "struct FlashLoanMock.FlashLoan[]",
        name: "loans",
        type: "tuple[]",
      },
    ],
    name: "multiFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
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
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pool",
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
        ],
        internalType: "struct FlashLoanMock.FlashLoan",
        name: "loan",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "repayFull",
        type: "bool",
      },
    ],
    name: "singleFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class FlashLoanMock__factory {
  static readonly abi = _abi;
  static createInterface(): FlashLoanMockInterface {
    return new Interface(_abi) as FlashLoanMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FlashLoanMock {
    return new Contract(address, _abi, runner) as unknown as FlashLoanMock;
  }
}
