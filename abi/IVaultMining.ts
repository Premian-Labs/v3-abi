export const IVaultMining = [
  {
    "type": "function",
    "name": "addRewards",
    "inputs": [
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claim",
    "inputs": [
      {
        "name": "vaults",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimAll",
    "inputs": [
      {
        "name": "vaults",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getDualMiningPools",
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
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPendingUserRewardsFromVault",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "vault",
        "type": "address",
        "internalType": "address"
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
    "name": "getPendingVaultRewards",
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
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRewardsAvailable",
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
    "name": "getRewardsPerYear",
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
    "name": "getTotalUserRewards",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
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
    "name": "getTotalVotes",
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
    "name": "getUserInfo",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
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
        "internalType": "struct IVaultMining.UserInfo",
        "components": [
          {
            "name": "shares",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "__deprecated_reward",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "rewardDebt",
            "type": "uint256",
            "internalType": "UD60x18"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUserRewards",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
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
    "name": "getVaultInfo",
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
        "internalType": "struct IVaultMining.VaultInfo",
        "components": [
          {
            "name": "totalShares",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "votes",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "__deprecated_lastRewardTimestamp",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "accRewardsPerShare",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "rewardDebt",
            "type": "uint256",
            "internalType": "UD60x18"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVoteMultiplier",
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
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "previewOptionParams",
    "inputs": [],
    "outputs": [
      {
        "name": "strike",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updateUser",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
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
    "name": "updateUser",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newUserShares",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "newTotalShares",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "utilisationRate",
        "type": "uint256",
        "internalType": "UD60x18"
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
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateVaults",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "AddDualMiningPool",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "dualMiningPool",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "AllocateRewards",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "rewardAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Claim",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "rewardAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RemoveDualMiningPool",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "dualMiningPool",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SetRewardsPerYear",
    "inputs": [
      {
        "name": "rewardsPerYear",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SetVoteMultiplier",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "voteMultiplier",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UpdateVaultVotes",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "votes",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "voteMultiplier",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "VaultMining__InsufficientRewards",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "rewardsAvailable",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "rewardsRequested",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ]
  },
  {
    "type": "error",
    "name": "VaultMining__NotVault",
    "inputs": [
      {
        "name": "caller",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
] as const;