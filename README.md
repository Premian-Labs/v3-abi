# Premia V3 ABI

This package contains Premia V3 contract deployment metadata, ABIs for the protocol smart contracts, and [Typechain](https://githubcom/dethcrypto/TypeChain) classes with ethers-v6 target. Further details pertaining to smart contract 
functionality can be found in our [Smart Contract Docs](https://docs-solidity.premia.finance/)

Below are examples of how to access package resources in Typescript.

```typescript
import {Contract, Wallet} from 'ethers'
// Importing of Typechain contract bindings
import {IPool__factory} from "@premia/v3-abi/typechain";
// Import of ABIs (json)
import {IPool__abi, IPoolFactory__abi} from "@premia/v3-abi/abi"
// Importing all deployment related contract addresses
import {arbitrum} from '@premia/v3-abi/deployment'

// Getting a token address on arbitrum
const WETH = arbitrum.tokens.WETH

// Example signer instance (ethers)
const signer = new Wallet(DUMMY_PRIVATE_KEY, DUMMY_PROVIDER)

// Getting poolFactory contract address
// NOTE: Be sure to use the proxy of a contract and not its implementation
const poolFactoryAddr = arbitrum.core.PoolFactoryProxy.address
// Creating a contract instance for the factory contract
const poolFactory = new Contract(poolFactoryAddr, IPoolFactory__abi, signer);
// NOTE: poolKey object is not covered here. Please see contract docs for details
const poolAddress = await poolFactory.getPoolAddress(DUMMY_POOLKEY)

// Creating a contract instance for a pool
// Using typechain or ethers Contract class to create a pool instance
const iPool = IPool__factory.connect(poolAddress, signer)
// OR
const pool = new Contract(poolAddress, IPool__abi, signer)
```