/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUniswapV3ChainlinkAdapter,
  IUniswapV3ChainlinkAdapterInterface,
} from "../IUniswapV3ChainlinkAdapter";

const _abi = [
  {
    inputs: [],
    name: "UniswapV3ChainlinkAdapter__TokenCannotBeWrappedNative",
    type: "error",
  },
] as const;

export class IUniswapV3ChainlinkAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3ChainlinkAdapterInterface {
    return new Interface(_abi) as IUniswapV3ChainlinkAdapterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IUniswapV3ChainlinkAdapter {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IUniswapV3ChainlinkAdapter;
  }
}
