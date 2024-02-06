export const IDualMining__abi = [
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
        "name": "user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getPendingUserRewards",
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
    "name": "getUserInfo",
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
        "type": "tuple",
        "internalType": "struct IDualMining.UserInfo",
        "components": [
          {
            "name": "lastUpdateTimestamp",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lastParentAccTotalRewards",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "lastAccTotalRewards",
            "type": "uint256",
            "internalType": "UD60x18"
          },
          {
            "name": "reward",
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
    "name": "init",
    "inputs": [
      {
        "name": "initialParentAccRewardsPerShare",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updatePool",
    "inputs": [
      {
        "name": "poolRewards",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "accRewardsPerShare",
        "type": "uint256",
        "internalType": "UD60x18"
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
        "name": "oldShares",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "oldRewardDebt",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "poolRewards",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "userRewards",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "accRewardsPerShare",
        "type": "uint256",
        "internalType": "UD60x18"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
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
    "name": "Initialized",
    "inputs": [
      {
        "name": "caller",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "initialParentAccRewardsPerShare",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MiningEnded",
    "inputs": [
      {
        "name": "finalParentAccRewardsPerShare",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "DualMining__AlreadyInitialized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DualMining__MiningEnded",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DualMining__NoMiningRewards",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DualMining__NoShareSupply",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DualMining__NotAuthorized",
    "inputs": [
      {
        "name": "caller",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "DualMining__NotInitialized",
    "inputs": []
  }
] as const;