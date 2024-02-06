export const IOptionCSFactory__abi = [
  {
    "type": "function",
    "name": "deployProxy",
    "inputs": [
      {
        "name": "args",
        "type": "tuple",
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
    "name": "getProxyAddress",
    "inputs": [
      {
        "name": "args",
        "type": "tuple",
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
      }
    ],
    "outputs": [
      {
        "name": "proxy",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "isDeployed",
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
    "type": "event",
    "name": "ProxyDeployed",
    "inputs": [
      {
        "name": "base",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "quote",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "oracleAdapter",
        "type": "address",
        "indexed": true,
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
    "name": "OptionCSFactory__ProxyAlreadyDeployed",
    "inputs": [
      {
        "name": "proxy",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
] as const;