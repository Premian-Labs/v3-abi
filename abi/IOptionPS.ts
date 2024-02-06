export const IOptionPS__abi = [
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
        "name": "contractSize",
        "type": "uint256",
        "internalType": "UD60x18"
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
    "name": "cancelExercise",
    "inputs": [
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
        "name": "contractSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "exercise",
    "inputs": [
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
        "name": "contractSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getExerciseCost",
    "inputs": [
      {
        "name": "strike",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [
      {
        "name": "totalExerciseCost",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "fee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getExerciseValue",
    "inputs": [
      {
        "name": "strike",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "contractSize",
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
    "name": "getSettings",
    "inputs": [],
    "outputs": [
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
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTokenIds",
    "inputs": [],
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
    "name": "settleLong",
    "inputs": [
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
        "name": "contractSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [
      {
        "name": "exerciseValue",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "settleShort",
    "inputs": [
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
        "name": "contractSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [
      {
        "name": "collateralAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "exerciseTokenAmount",
        "type": "uint256",
        "internalType": "uint256"
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
    "name": "underwrite",
    "inputs": [
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
        "name": "longReceiver",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Annihilate",
    "inputs": [
      {
        "name": "annihilator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "strike",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
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
    "name": "CancelExercise",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "strike",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "exerciseCostRefunded",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Exercise",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "strike",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "exerciseCost",
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
    "name": "SettleLong",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "strike",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
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
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SettleShort",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "strike",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "collateralAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "exerciseTokenAmount",
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
    "name": "Underwrite",
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
        "name": "strike",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
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
    "name": "OptionPS__OptionExpired",
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
    "name": "OptionPS__OptionMaturityNot8UTC",
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
    "name": "OptionPS__OptionNotExpired",
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
    "name": "OptionPS__StrikeNotMultipleOfStrikeInterval",
    "inputs": [
      {
        "name": "strike",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "strikeInterval",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ]
  }
] as const;