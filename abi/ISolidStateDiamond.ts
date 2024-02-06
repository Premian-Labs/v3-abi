export const ISolidStateDiamond = [
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "acceptOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "diamondCut",
    "inputs": [
      {
        "name": "facetCuts",
        "type": "tuple[]",
        "internalType": "struct IDiamondWritableInternal.FacetCut[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "action",
            "type": "uint8",
            "internalType": "enum IDiamondWritableInternal.FacetCutAction"
          },
          {
            "name": "selectors",
            "type": "bytes4[]",
            "internalType": "bytes4[]"
          }
        ]
      },
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
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
    "name": "facetAddress",
    "inputs": [
      {
        "name": "selector",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "name": "facet",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "facetAddresses",
    "inputs": [],
    "outputs": [
      {
        "name": "addresses",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "facetFunctionSelectors",
    "inputs": [
      {
        "name": "facet",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "selectors",
        "type": "bytes4[]",
        "internalType": "bytes4[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "facets",
    "inputs": [],
    "outputs": [
      {
        "name": "diamondFacets",
        "type": "tuple[]",
        "internalType": "struct IDiamondReadable.Facet[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "selectors",
            "type": "bytes4[]",
            "internalType": "bytes4[]"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getFallbackAddress",
    "inputs": [],
    "outputs": [
      {
        "name": "fallbackAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nomineeOwner",
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
    "name": "owner",
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
    "name": "setFallbackAddress",
    "inputs": [
      {
        "name": "fallbackAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
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
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "DiamondCut",
    "inputs": [
      {
        "name": "facetCuts",
        "type": "tuple[]",
        "indexed": false,
        "internalType": "struct IDiamondWritableInternal.FacetCut[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "action",
            "type": "uint8",
            "internalType": "enum IDiamondWritableInternal.FacetCutAction"
          },
          {
            "name": "selectors",
            "type": "bytes4[]",
            "internalType": "bytes4[]"
          }
        ]
      },
      {
        "name": "target",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "DiamondWritable__InvalidInitializationParameters",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DiamondWritable__RemoveTargetNotZeroAddress",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DiamondWritable__ReplaceTargetIsIdentical",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DiamondWritable__SelectorAlreadyAdded",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DiamondWritable__SelectorIsImmutable",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DiamondWritable__SelectorNotFound",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DiamondWritable__SelectorNotSpecified",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DiamondWritable__TargetHasNoCode",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Ownable__NotOwner",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Ownable__NotTransitiveOwner",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Proxy__ImplementationIsNotContract",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SafeOwnable__NotNomineeOwner",
    "inputs": []
  }
] as const;