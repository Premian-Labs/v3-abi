export const IReferral__abi = [
  {
    "type": "function",
    "name": "claimRebate",
    "inputs": [
      {
        "name": "tokens",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getRebateAmounts",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tradingFee",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [
      {
        "name": "primaryRebate",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "secondaryRebate",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRebatePercents",
    "inputs": [],
    "outputs": [
      {
        "name": "primaryRebatePercents",
        "type": "uint256[]",
        "internalType": "UD60x18[]"
      },
      {
        "name": "secondaryRebatePercent",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRebatePercents",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "primaryRebatePercent",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "secondaryRebatePercent",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRebateTier",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "tier",
        "type": "uint8",
        "internalType": "enum IReferral.RebateTier"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRebates",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "tokens",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "rebates",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getReferrer",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setPrimaryRebatePercent",
    "inputs": [
      {
        "name": "percent",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "tier",
        "type": "uint8",
        "internalType": "enum IReferral.RebateTier"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRebateTier",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tier",
        "type": "uint8",
        "internalType": "enum IReferral.RebateTier"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setSecondaryRebatePercent",
    "inputs": [
      {
        "name": "percent",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "useReferral",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "referrer",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "primaryRebate",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "secondaryRebate",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "ClaimRebate",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "token",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Refer",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "primaryReferrer",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "secondaryReferrer",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "token",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "primaryRebatePercent",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "primaryRebate",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "secondaryRebate",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SetPrimaryRebatePercent",
    "inputs": [
      {
        "name": "tier",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IReferral.RebateTier"
      },
      {
        "name": "oldPercent",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "newPercent",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SetRebateTier",
    "inputs": [
      {
        "name": "referrer",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "oldTier",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IReferral.RebateTier"
      },
      {
        "name": "newTier",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum IReferral.RebateTier"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SetSecondaryRebatePercent",
    "inputs": [
      {
        "name": "oldPercent",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "newPercent",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "Referral__NotAuthorized",
    "inputs": []
  }
] as const;