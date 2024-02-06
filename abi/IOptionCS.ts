export const IOptionCS__abi = [
  {
    "type": "function",
    "name": "accountsByToken",
    "inputs": [
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "annihilate",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "annihilateFor",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "balanceOfBatch",
    "inputs": [
      {
        "name": "accounts",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "ids",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "calculateExerciseValue",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
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
    "name": "exercise",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "exerciseValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "exerciseFee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "exerciseFor",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "holders",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "costPerHolder",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "exerciseValues",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "exerciseFees",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "flashFee",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "flashLoan",
    "inputs": [
      {
        "name": "receiver",
        "type": "address",
        "internalType": "contract IERC3156FlashBorrower"
      },
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getLastTokenIdCreated",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSettlementPrice",
    "inputs": [
      {
        "name": "maturity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "settlementPrice",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getStrategy",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.Strategy",
        "components": [
          {
            "name": "elements",
            "type": "tuple[]",
            "internalType": "struct IOptionCSInternal.StrategyElement[]",
            "components": [
              {
                "name": "strike",
                "type": "uint256",
                "internalType": "UD60x18"
              },
              {
                "name": "maturity",
                "type": "uint64",
                "internalType": "uint64"
              },
              {
                "name": "ratio",
                "type": "int64",
                "internalType": "int64"
              }
            ]
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTokenId",
    "inputs": [
      {
        "name": "strategy",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.Strategy",
        "components": [
          {
            "name": "elements",
            "type": "tuple[]",
            "internalType": "struct IOptionCSInternal.StrategyElement[]",
            "components": [
              {
                "name": "strike",
                "type": "uint256",
                "internalType": "UD60x18"
              },
              {
                "name": "maturity",
                "type": "uint64",
                "internalType": "uint64"
              },
              {
                "name": "ratio",
                "type": "int64",
                "internalType": "int64"
              }
            ]
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTokenIdFromParams",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "isLong",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "maxFlashLoan",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "multicall",
    "inputs": [
      {
        "name": "data",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "name": "results",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "previewWriteFrom",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "underwriter",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "longReceiver",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "applyFee",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "underwriterDelta",
        "type": "tuple",
        "internalType": "struct OptionMath.Delta",
        "components": [
          {
            "name": "collateral",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "longs",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "shorts",
            "type": "int256",
            "internalType": "SD59x18"
          }
        ]
      },
      {
        "name": "longReceiverDelta",
        "type": "tuple",
        "internalType": "struct OptionMath.Delta",
        "components": [
          {
            "name": "collateral",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "longs",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "shorts",
            "type": "int256",
            "internalType": "SD59x18"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "safeBatchTransferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "ids",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "amounts",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "status",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "settle",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "collateral",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "settleFor",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "holders",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "costPerHolder",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "takerFee",
    "inputs": [
      {
        "name": "strike",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "isCall",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "taker",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "premium",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "isPremiumNormalized",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "isOrderbook",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokensByAccount",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalHolders",
    "inputs": [
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tryCacheSettlementPrice",
    "inputs": [
      {
        "name": "maturity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "upsertTokenId",
    "inputs": [
      {
        "name": "strategy",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.Strategy",
        "components": [
          {
            "name": "elements",
            "type": "tuple[]",
            "internalType": "struct IOptionCSInternal.StrategyElement[]",
            "components": [
              {
                "name": "strike",
                "type": "uint256",
                "internalType": "UD60x18"
              },
              {
                "name": "maturity",
                "type": "uint64",
                "internalType": "uint64"
              },
              {
                "name": "ratio",
                "type": "int64",
                "internalType": "int64"
              }
            ]
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "upsertTokenIdFromParams",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "isLong",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "writeFrom",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "underwriter",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "longReceiver",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "underwriterDelta",
        "type": "tuple",
        "internalType": "struct OptionMath.Delta",
        "components": [
          {
            "name": "collateral",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "longs",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "shorts",
            "type": "int256",
            "internalType": "SD59x18"
          }
        ]
      },
      {
        "name": "longReceiverDelta",
        "type": "tuple",
        "internalType": "struct OptionMath.Delta",
        "components": [
          {
            "name": "collateral",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "longs",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "shorts",
            "type": "int256",
            "internalType": "SD59x18"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "writeFromNoFee",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.OptionParams",
        "components": [
          {
            "name": "strike",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "maturity",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "underwriter",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "longReceiver",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "underwriterDelta",
        "type": "tuple",
        "internalType": "struct OptionMath.Delta",
        "components": [
          {
            "name": "collateral",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "longs",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "shorts",
            "type": "int256",
            "internalType": "SD59x18"
          }
        ]
      },
      {
        "name": "longReceiverDelta",
        "type": "tuple",
        "internalType": "struct OptionMath.Delta",
        "components": [
          {
            "name": "collateral",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "longs",
            "type": "int256",
            "internalType": "SD59x18"
          },
          {
            "name": "shorts",
            "type": "int256",
            "internalType": "SD59x18"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Annihilate",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "fee",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "approved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CreateTokenId",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "strategy",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct IOptionCSInternal.Strategy",
        "components": [
          {
            "name": "elements",
            "type": "tuple[]",
            "internalType": "struct IOptionCSInternal.StrategyElement[]",
            "components": [
              {
                "name": "strike",
                "type": "uint256",
                "internalType": "UD60x18"
              },
              {
                "name": "maturity",
                "type": "uint64",
                "internalType": "uint64"
              },
              {
                "name": "ratio",
                "type": "int64",
                "internalType": "int64"
              }
            ]
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Exercise",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "holder",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "exerciseValue",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "settlementPrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "fee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "operatorCost",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FlashLoan",
    "inputs": [
      {
        "name": "initiator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "receiver",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "fee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Settle",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "holder",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "exerciseValue",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "settlementPrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "fee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "operatorCost",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SettlementPriceCached",
    "inputs": [
      {
        "name": "maturity",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "settlementPrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferBatch",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "ids",
        "type": "uint256[]",
        "indexed": false,
        "internalType": "uint256[]"
      },
      {
        "name": "values",
        "type": "uint256[]",
        "indexed": false,
        "internalType": "uint256[]"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferSingle",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "WriteFrom",
    "inputs": [
      {
        "name": "underwriter",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "longReceiver",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "taker",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "collateral",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "protocolFee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "ERC1155Base__ArrayLengthMismatch",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__BalanceQueryZeroAddress",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__BurnExceedsBalance",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__BurnFromZeroAddress",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__ERC1155ReceiverNotImplemented",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__ERC1155ReceiverRejected",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__MintToZeroAddress",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__NotOwnerOrApproved",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__SelfApproval",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__TransferExceedsBalance",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155Base__TransferToZeroAddress",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__ActionNotAuthorized",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "action",
        "type": "uint8",
        "internalType": "enum IUserSettings.Action"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__AutoAnnihilateDisabled",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__CostExceedsPayout",
    "inputs": [
      {
        "name": "cost",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "payout",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__CostNotAuthorized",
    "inputs": [
      {
        "name": "costInWrappedNative",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "authorizedCostInWrappedNative",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__FlashLoanCallbackFailed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__FlashLoanNotRepayed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__GreaterThanOneLeg",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__InsufficientFunds",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__InvalidStrategyElementsLength",
    "inputs": [
      {
        "name": "length",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__InvalidToken",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__NotAuthorized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__OptionExpired",
    "inputs": [
      {
        "name": "maturity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__OptionNotExpired",
    "inputs": [
      {
        "name": "maturity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__OptionTokenIdDoesNotExist",
    "inputs": [
      {
        "name": "strategy",
        "type": "tuple",
        "internalType": "struct IOptionCSInternal.Strategy",
        "components": [
          {
            "name": "elements",
            "type": "tuple[]",
            "internalType": "struct IOptionCSInternal.StrategyElement[]",
            "components": [
              {
                "name": "strike",
                "type": "uint256",
                "internalType": "UD60x18"
              },
              {
                "name": "maturity",
                "type": "uint64",
                "internalType": "uint64"
              },
              {
                "name": "ratio",
                "type": "int64",
                "internalType": "int64"
              }
            ]
          },
          {
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__RatiosMustBeCoprime",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__RatiosMustNotEqualZero",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__SettlementFailed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__SettlementPriceAlreadyCached",
    "inputs": [
      {
        "name": "maturity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__SettlementPriceNotCached",
    "inputs": [
      {
        "name": "maturity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionCS__StrikesMustBeStrictlyIncreasing",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionCS__ZeroSize",
    "inputs": []
  }
] as const;