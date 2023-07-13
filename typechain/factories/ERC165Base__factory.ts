/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { ERC165Base, ERC165BaseInterface } from "../ERC165Base";

const _abi = [
  {
    inputs: [],
    name: "ERC165Base__InvalidInterfaceId",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ERC165Base__factory {
  static readonly abi = _abi;
  static createInterface(): ERC165BaseInterface {
    return new Interface(_abi) as ERC165BaseInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC165Base {
    return new Contract(address, _abi, runner) as unknown as ERC165Base;
  }
}
