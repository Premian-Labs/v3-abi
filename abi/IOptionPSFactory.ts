export const IOptionPSFactory = [
  {
    "type": "function",
    "name": "deployProxy",
    "inputs": [
      {
        "name": "args",
        "type": "tuple",
        "internalType": "struct IOptionPSFactory.OptionPSArgs",
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
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
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
        "internalType": "struct IOptionPSFactory.OptionPSArgs",
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
            "name": "isCall",
            "type": "bool",
            "internalType": "bool"
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
        "name": "isCall",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
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
    "name": "OptionPSFactory__ProxyAlreadyDeployed",
    "inputs": [
      {
        "name": "proxy",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
] as const;