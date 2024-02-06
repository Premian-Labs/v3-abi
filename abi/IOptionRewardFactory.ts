export const IOptionRewardFactory__abi = [
  {
    "type": "function",
    "name": "deployProxy",
    "inputs": [
      {
        "name": "args",
        "type": "tuple",
        "internalType": "struct IOptionRewardFactory.OptionRewardArgs",
        "components": [
          {
            "name": "option",
            "type": "address",
            "internalType": "contract IOptionPS"
          },
          {
            "name": "oracleAdapter",
            "type": "address",
            "internalType": "contract IOracleAdapter"
          },
          {
            "name": "paymentSplitter",
            "type": "address",
            "internalType": "contract IPaymentSplitter"
          },
          {
            "name": "percentOfSpot",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "penalty",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "optionDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lockupDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "claimDuration",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getDefaultFee",
    "inputs": [],
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
    "name": "getDefaultFeeReceiver",
    "inputs": [],
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
    "name": "getManagedProxyImplementation",
    "inputs": [],
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
    "name": "getProxyAddress",
    "inputs": [
      {
        "name": "args",
        "type": "tuple",
        "internalType": "struct IOptionRewardFactory.OptionRewardKey",
        "components": [
          {
            "name": "option",
            "type": "address",
            "internalType": "contract IOptionPS"
          },
          {
            "name": "oracleAdapter",
            "type": "address",
            "internalType": "contract IOracleAdapter"
          },
          {
            "name": "paymentSplitter",
            "type": "address",
            "internalType": "contract IPaymentSplitter"
          },
          {
            "name": "percentOfSpot",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "penalty",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "optionDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lockupDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "claimDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "fee",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "feeReceiver",
            "type": "address",
            "internalType": "address"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
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
    "name": "isProxyDeployed",
    "inputs": [
      {
        "name": "proxy",
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
    "name": "setManagedProxyImplementation",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "ManagedImplementationSet",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PricingPath",
    "inputs": [
      {
        "name": "option",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "basePath",
        "type": "address[][]",
        "indexed": false,
        "internalType": "address[][]"
      },
      {
        "name": "basePathDecimals",
        "type": "uint8[]",
        "indexed": false,
        "internalType": "uint8[]"
      },
      {
        "name": "baseAdapterType",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IOracleAdapter.AdapterType"
      },
      {
        "name": "quotePath",
        "type": "address[][]",
        "indexed": false,
        "internalType": "address[][]"
      },
      {
        "name": "quotePathDecimals",
        "type": "uint8[]",
        "indexed": false,
        "internalType": "uint8[]"
      },
      {
        "name": "quoteAdapterType",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IOracleAdapter.AdapterType"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ProxyDeployed",
    "inputs": [
      {
        "name": "option",
        "type": "address",
        "indexed": true,
        "internalType": "contract IOptionPS"
      },
      {
        "name": "oracleAdapter",
        "type": "address",
        "indexed": false,
        "internalType": "contract IOracleAdapter"
      },
      {
        "name": "paymentSplitter",
        "type": "address",
        "indexed": false,
        "internalType": "contract IPaymentSplitter"
      },
      {
        "name": "percentOfSpot",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "penalty",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "optionDuration",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "lockupDuration",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "claimDuration",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "fee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "feeReceiver",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "proxy",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "OptionRewardFactory__ProxyAlreadyDeployed",
    "inputs": [
      {
        "name": "proxy",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
] as const;