export const IOrderbook__abi = [
  {
    "type": "function",
    "name": "cancelQuoteGroup",
    "inputs": [
      {
        "name": "groupId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "cancelQuotes",
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
    "name": "fillMatchedQuote",
    "inputs": [
      {
        "name": "quoteTaker",
        "type": "tuple",
        "internalType": "struct IOrderbook.Quote",
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
            "name": "groupId",
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
        "name": "signatureUser",
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
        "name": "quotes",
        "type": "tuple[]",
        "internalType": "struct IOrderbook.Quote[]",
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
            "name": "groupId",
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
        "name": "signatures",
        "type": "tuple[]",
        "internalType": "struct IOrderbook.Signature[]",
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
        "name": "gasRebate",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "filledQuoteAmounts",
        "type": "uint256[]",
        "internalType": "UD60x18[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fillMultiQuotes",
    "inputs": [
      {
        "name": "quotes",
        "type": "tuple[]",
        "internalType": "struct IOrderbook.Quote[]",
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
            "name": "groupId",
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
        "name": "signatures",
        "type": "tuple[]",
        "internalType": "struct IOrderbook.Signature[]",
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
        "name": "premiumLimit",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fillQuote",
    "inputs": [
      {
        "name": "quote",
        "type": "tuple",
        "internalType": "struct IOrderbook.Quote",
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
            "name": "groupId",
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
      },
      {
        "name": "premiumMaker",
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
    "name": "getQuoteFilledAmount",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "quoteHash",
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
    "name": "getTakerPremiumLimit",
    "inputs": [
      {
        "name": "quote",
        "type": "tuple",
        "internalType": "struct IOrderbook.Quote",
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
            "name": "groupId",
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
        "name": "taker",
        "type": "address",
        "internalType": "address"
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
        "internalType": "uint256"
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
    "name": "isQuoteGroupCanceled",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "groupId",
        "type": "uint256",
        "internalType": "uint256"
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
    "name": "isQuoteValid",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "quote",
        "type": "tuple",
        "internalType": "struct IOrderbook.Quote",
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
            "name": "groupId",
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
        "internalType": "enum IOrderbook.InvalidQuoteError"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isQuotesSizeFillable",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "quotes",
        "type": "tuple[]",
        "internalType": "struct IOrderbook.Quote[]",
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
            "name": "groupId",
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
        "name": "signatures",
        "type": "tuple[]",
        "internalType": "struct IOrderbook.Signature[]",
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
        "name": "isFilled",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "totalPremium",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "CancelQuote",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "quoteHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CancelQuoteGroup",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "nonce",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "groupId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FillMatchedQuote",
    "inputs": [
      {
        "name": "quoteTakerHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "quoteTaker",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct IOrderbook.Quote",
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
            "name": "groupId",
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
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FillQuote",
    "inputs": [
      {
        "name": "quoteHash",
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
        "name": "quote",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct IOrderbook.Quote",
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
            "name": "groupId",
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
        "name": "premiumTaker",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "premiumMaker",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "totalTradeFee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "fillType",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IOrderbook.FillType"
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
    "name": "Orderbook__ArrayLengthMismatch",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__GasRebateExceedsPremiumSpread",
    "inputs": [
      {
        "name": "gasRebate",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "premiumSpread",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Orderbook__InvalidQuoteSignature",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__InvalidQuoteTaker",
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
    "name": "Orderbook__QuoteAskExceedsBid",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteCanceled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteDuplicateHash",
    "inputs": [
      {
        "name": "quoteHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteExpired",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteGroupCanceled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteInvalidNonce",
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
    "name": "Orderbook__QuoteNotBestExecution",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteOverfilled",
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
        "name": "quoteSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ]
  },
  {
    "type": "error",
    "name": "Orderbook__QuoteTradeSideMismatch",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__QuotesAreDissimilar",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__SizeNotFilled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Orderbook__TotalTakerPremiumAboveLimit",
    "inputs": [
      {
        "name": "totalTakerPremium",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "premiumLimit",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Orderbook__TotalTakerPremiumBelowLimit",
    "inputs": [
      {
        "name": "totalTakerPremium",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "premiumLimit",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  }
] as const;