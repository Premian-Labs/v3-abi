export const IVaultRegistry = [
  {
    "type": "function",
    "name": "addSupportedTokenPairs",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenPairs",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.TokenPair[]",
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
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "addVault",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "vaultType",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "side",
        "type": "uint8",
        "internalType": "enum IVaultRegistry.TradeSide"
      },
      {
        "name": "optionType",
        "type": "uint8",
        "internalType": "enum IVaultRegistry.OptionType"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getImplementation",
    "inputs": [
      {
        "name": "vaultType",
        "type": "bytes32",
        "internalType": "bytes32"
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
    "name": "getNumberOfVaults",
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
    "name": "getSupportedTokenPairs",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.TokenPair[]",
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
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVault",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IVaultRegistry.Vault",
        "components": [
          {
            "name": "vault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "vaultType",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "side",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.TradeSide"
          },
          {
            "name": "optionType",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.OptionType"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVaults",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.Vault[]",
        "components": [
          {
            "name": "vault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "vaultType",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "side",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.TradeSide"
          },
          {
            "name": "optionType",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.OptionType"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVaultsByAsset",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.Vault[]",
        "components": [
          {
            "name": "vault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "vaultType",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "side",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.TradeSide"
          },
          {
            "name": "optionType",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.OptionType"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVaultsByFilter",
    "inputs": [
      {
        "name": "assets",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "side",
        "type": "uint8",
        "internalType": "enum IVaultRegistry.TradeSide"
      },
      {
        "name": "optionType",
        "type": "uint8",
        "internalType": "enum IVaultRegistry.OptionType"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.Vault[]",
        "components": [
          {
            "name": "vault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "vaultType",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "side",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.TradeSide"
          },
          {
            "name": "optionType",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.OptionType"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVaultsByOptionType",
    "inputs": [
      {
        "name": "optionType",
        "type": "uint8",
        "internalType": "enum IVaultRegistry.OptionType"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.Vault[]",
        "components": [
          {
            "name": "vault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "vaultType",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "side",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.TradeSide"
          },
          {
            "name": "optionType",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.OptionType"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVaultsByTokenPair",
    "inputs": [
      {
        "name": "tokenPair",
        "type": "tuple",
        "internalType": "struct IVaultRegistry.TokenPair",
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
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.Vault[]",
        "components": [
          {
            "name": "vault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "vaultType",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "side",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.TradeSide"
          },
          {
            "name": "optionType",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.OptionType"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVaultsByTradeSide",
    "inputs": [
      {
        "name": "side",
        "type": "uint8",
        "internalType": "enum IVaultRegistry.TradeSide"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.Vault[]",
        "components": [
          {
            "name": "vault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "vaultType",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "side",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.TradeSide"
          },
          {
            "name": "optionType",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.OptionType"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVaultsByType",
    "inputs": [
      {
        "name": "vaultType",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.Vault[]",
        "components": [
          {
            "name": "vault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "vaultType",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "side",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.TradeSide"
          },
          {
            "name": "optionType",
            "type": "uint8",
            "internalType": "enum IVaultRegistry.OptionType"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isVault",
    "inputs": [
      {
        "name": "vault",
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
    "name": "removeSupportedTokenPairs",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenPairsToRemove",
        "type": "tuple[]",
        "internalType": "struct IVaultRegistry.TokenPair[]",
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
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "removeVault",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setImplementation",
    "inputs": [
      {
        "name": "vaultType",
        "type": "bytes32",
        "internalType": "bytes32"
      },
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
    "type": "function",
    "name": "updateVault",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "vaultType",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "side",
        "type": "uint8",
        "internalType": "enum IVaultRegistry.TradeSide"
      },
      {
        "name": "optionType",
        "type": "uint8",
        "internalType": "enum IVaultRegistry.OptionType"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "SupportedTokenPairAdded",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
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
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SupportedTokenPairRemoved",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
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
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "VaultAdded",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "vaultType",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "side",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IVaultRegistry.TradeSide"
      },
      {
        "name": "optionType",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IVaultRegistry.OptionType"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "VaultImplementationSet",
    "inputs": [
      {
        "name": "vaultType",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
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
    "name": "VaultRemoved",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "VaultUpdated",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "vaultType",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "side",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IVaultRegistry.TradeSide"
      },
      {
        "name": "optionType",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IVaultRegistry.OptionType"
      }
    ],
    "anonymous": false
  }
] as const;