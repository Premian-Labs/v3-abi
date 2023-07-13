/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { DiamondBase, DiamondBaseInterface } from "../DiamondBase";

const _abi = [
  {
    inputs: [],
    name: "Proxy__ImplementationIsNotContract",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
] as const;

export class DiamondBase__factory {
  static readonly abi = _abi;
  static createInterface(): DiamondBaseInterface {
    return new Interface(_abi) as DiamondBaseInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DiamondBase {
    return new Contract(address, _abi, runner) as unknown as DiamondBase;
  }
}
