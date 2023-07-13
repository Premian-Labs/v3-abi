/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUnderwriterVault,
  IUnderwriterVaultInterface,
} from "../IUnderwriterVault";

const _abi = [
  {
    inputs: [],
    name: "ERC20Base__ApproveFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__ApproveToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__BurnExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__BurnFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__TransferExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__TransferFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Extended__ExcessiveAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Extended__InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Permit__ExpiredDeadline",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Permit__InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC4626Base__AllowanceExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC4626Base__MaximumAmountExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "totalPremium",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "premiumLimit",
        type: "uint256",
      },
    ],
    name: "Vault__AboveMaxSlippage",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__AddressZero",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__InsufficientFunds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UD60x18",
        name: "maximum",
        type: "uint256",
      },
      {
        internalType: "UD60x18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Vault__MaximumAmountExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturity",
        type: "uint256",
      },
    ],
    name: "Vault__OptionExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__OptionPoolNotListed",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__OptionTypeMismatchWithVault",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__OutOfDTEBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__OutOfDeltaBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__SettingsNotFromRegistry",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__SettingsUpdateIsEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__StrikeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__TradeMustBeBuy",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Vault__TransferExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__UtilisationOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__ZeroAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__ZeroShares",
    type: "error",
  },
  {
    inputs: [],
    name: "Vault__ZeroSize",
    type: "error",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "borrowId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrowToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "sizeBorrowed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "collateralLocked",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "borrowFee",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "borrowId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "collateralLiquidated",
        type: "uint256",
      },
    ],
    name: "BorrowLiquidated",
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
        internalType: "uint256",
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
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
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
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "managementFee",
        type: "uint256",
      },
    ],
    name: "ManagementFeePaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "performanceFee",
        type: "uint256",
      },
    ],
    name: "PerformanceFeePaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "borrowId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrowToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "amountRepaid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "collateralUnlocked",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "repayFee",
        type: "uint256",
      },
    ],
    name: "RepayBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "amountOut",
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
        name: "makerRebate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "vaultFee",
        type: "uint256",
      },
    ],
    name: "Swap",
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
        name: "pool",
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
        internalType: "bool",
        name: "isBuy",
        type: "bool",
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
        name: "makerRebate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UD60x18",
        name: "vaultFee",
        type: "uint256",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "UpdateQuotes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "domainSeparator",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [],
    name: "asset",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
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
            name: "base",
            type: "address",
          },
          {
            internalType: "address",
            name: "quote",
            type: "address",
          },
          {
            internalType: "address",
            name: "oracleAdapter",
            type: "address",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maturity",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isCallPool",
            type: "bool",
          },
        ],
        internalType: "struct IPoolFactory.PoolKey",
        name: "poolKey",
        type: "tuple",
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
        internalType: "address",
        name: "taker",
        type: "address",
      },
    ],
    name: "getQuote",
    outputs: [
      {
        internalType: "uint256",
        name: "premium",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "receiver",
        type: "address",
      },
    ],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAssets",
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
        name: "receiver",
        type: "address",
      },
    ],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "maxShares",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "maxShares",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAssets",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
    ],
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
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
    inputs: [],
    name: "totalSupply",
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
        components: [
          {
            internalType: "address",
            name: "base",
            type: "address",
          },
          {
            internalType: "address",
            name: "quote",
            type: "address",
          },
          {
            internalType: "address",
            name: "oracleAdapter",
            type: "address",
          },
          {
            internalType: "UD60x18",
            name: "strike",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maturity",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isCallPool",
            type: "bool",
          },
        ],
        internalType: "struct IPoolFactory.PoolKey",
        name: "poolKey",
        type: "tuple",
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
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
        internalType: "bytes",
        name: "settings",
        type: "bytes",
      },
    ],
    name: "updateSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IUnderwriterVault__factory {
  static readonly abi = _abi;
  static createInterface(): IUnderwriterVaultInterface {
    return new Interface(_abi) as IUnderwriterVaultInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IUnderwriterVault {
    return new Contract(address, _abi, runner) as unknown as IUnderwriterVault;
  }
}
