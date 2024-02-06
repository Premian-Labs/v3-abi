export const IOrderbook = [
  {
    "type": "function",
    "name": "cancelQuotesOB",
    "inputs": [
      {
        "name": "hashes",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fillQuoteOB",
    "inputs": [
      {
        "name": "quoteOB",
        "type": "tuple",
        "internalType": "struct IOrderbook.QuoteOB",
        "components": [
          {
            "name": "base",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "quote",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracleAdapter",
            "type": "address",
            "internalType": "address"
          },
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
          },
          {
            "name": "provider",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "taker",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "price",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "size",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "isBuy",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "salt",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "nonce",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "signature",
        "type": "tuple",
        "internalType": "struct IOrderbook.Signature",
        "components": [
          {
            "name": "r",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "yParityAndS",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ]
      },
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "premiumTaker",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getNonce",
    "inputs": [
      {
        "name": "provider",
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
    "name": "getQuoteOBFilledAmount",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "quoteOBHash",
        "type": "bytes32",
        "internalType": "bytes32"
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
    "name": "incrementNonce",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isQuoteOBValid",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "quoteOB",
        "type": "tuple",
        "internalType": "struct IOrderbook.QuoteOB",
        "components": [
          {
            "name": "base",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "quote",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracleAdapter",
            "type": "address",
            "internalType": "address"
          },
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
          },
          {
            "name": "provider",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "taker",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "price",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "size",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "isBuy",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "salt",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "nonce",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "sig",
        "type": "tuple",
        "internalType": "struct IOrderbook.Signature",
        "components": [
          {
            "name": "r",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "yParityAndS",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "",
        "type": "uint8",
        "internalType": "enum IOrderbook.InvalidQuoteOBError"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "CancelQuoteOB",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "quoteOBHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FillQuoteOB",
    "inputs": [
      {
        "name": "quoteOBHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "quoteOB",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct IOrderbook.QuoteOB",
        "components": [
          {
            "name": "base",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "quote",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracleAdapter",
            "type": "address",
            "internalType": "address"
          },
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
          },
          {
            "name": "provider",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "taker",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "price",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "size",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "isBuy",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "salt",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "nonce",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "premium",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "protocolFee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "totalReferralRebate",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "IncrementNonce",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newNonce",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "Orderbook__AboveQuoteSize",
    "inputs": [
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "quoteSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ]
  },
  {
    "type": "error",
    "name": "Orderbook__InvalidQuoteOBSignature",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__InvalidQuoteOBTaker",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__OptionExpired",
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
    "name": "Orderbook__OptionNotDeployed",
    "inputs": [
      {
        "name": "base",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "quote",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "oracleAdapter",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "Orderbook__OutOfBoundsPrice",
    "inputs": [
      {
        "name": "price",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ]
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteOBCancelled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteOBExpired",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteOBInvalidNonce",
    "inputs": [
      {
        "name": "quoteNonce",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "currentNonce",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteOBOverfilled",
    "inputs": [
      {
        "name": "filledAmount",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "size",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "quoteOBSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ]
  }
] as const;