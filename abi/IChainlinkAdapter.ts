export const IChainlinkAdapter__abi = [
  {
    "type": "function",
    "name": "batchRegisterFeedMappings",
    "inputs": [
      {
        "name": "args",
        "type": "tuple[]",
        "internalType": "struct IFeedRegistry.FeedMappingArgs[]",
        "components": [
          {
            "name": "token",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "denomination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "feed",
            "type": "address",
            "internalType": "address"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "describePricingPath",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "adapterType",
        "type": "uint8",
        "internalType": "enum IOracleAdapter.AdapterType"
      },
      {
        "name": "path",
        "type": "address[][]",
        "internalType": "address[][]"
      },
      {
        "name": "decimals",
        "type": "uint8[]",
        "internalType": "uint8[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "feed",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "denomination",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPrice",
    "inputs": [
      {
        "name": "tokenIn",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenOut",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPriceAt",
    "inputs": [
      {
        "name": "tokenIn",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenOut",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "target",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isPairSupported",
    "inputs": [
      {
        "name": "tokenA",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenB",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "isCached",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "hasPath",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pricingPath",
    "inputs": [
      {
        "name": "tokenA",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenB",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "enum IChainlinkAdapter.PricingPath"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setTokenPriceAt",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "denomination",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "price",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "upsertPair",
    "inputs": [
      {
        "name": "tokenA",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenB",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "FeedMappingsRegistered",
    "inputs": [
      {
        "name": "args",
        "type": "tuple[]",
        "indexed": false,
        "internalType": "struct IFeedRegistry.FeedMappingArgs[]",
        "components": [
          {
            "name": "token",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "denomination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "feed",
            "type": "address",
            "internalType": "address"
          }
        ]
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PriceUpdate",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "denomination",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "price",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UpdatedPathForPair",
    "inputs": [
      {
        "name": "tokenA",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "tokenB",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "path",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IChainlinkAdapter.PricingPath"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "ChainlinkAdapter__GetRoundDataCallReverted",
    "inputs": [
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "error",
    "name": "ChainlinkAdapter__InvalidDenomination",
    "inputs": [
      {
        "name": "denomination",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ChainlinkAdapter__LatestRoundDataCallReverted",
    "inputs": [
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "error",
    "name": "ChainlinkAdapter__PriceAtOrLeftOfTargetNotFound",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "denomination",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "target",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ChainlinkAdapter__PriceLeftOfTargetStale",
    "inputs": [
      {
        "name": "updatedAt",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "target",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OracleAdapter__ArrayCannotExpand",
    "inputs": [
      {
        "name": "arrayLength",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OracleAdapter__InvalidPrice",
    "inputs": [
      {
        "name": "price",
        "type": "int256",
        "internalType": "int256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OracleAdapter__InvalidTarget",
    "inputs": [
      {
        "name": "target",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "blockTimestamp",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OracleAdapter__PairCannotBeSupported",
    "inputs": [
      {
        "name": "tokenA",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenB",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OracleAdapter__PairNotSupported",
    "inputs": [
      {
        "name": "tokenA",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenB",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OracleAdapter__TokensAreSame",
    "inputs": [
      {
        "name": "tokenA",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenB",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OracleAdapter__ZeroAddress",
    "inputs": []
  }
] as const;