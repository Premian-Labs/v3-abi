export const OrderbookStream = [
  {
    "type": "function",
    "name": "add",
    "inputs": [
      {
        "name": "quotesOBWithSignature",
        "type": "tuple[]",
        "internalType": "struct OrderbookStream.QuoteOBWithSignature[]",
        "components": [
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
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "PublishQuote",
    "inputs": [
      {
        "name": "optionPair",
        "type": "tuple",
        "indexed": true,
        "internalType": "struct IOptionCSFactory.OptionCSArgs",
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
          }
        ]
      },
      {
        "name": "optionParams",
        "type": "tuple",
        "indexed": true,
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
        "name": "signature",
        "type": "tuple",
        "indexed": false,
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
    "anonymous": false
  }
] as const;