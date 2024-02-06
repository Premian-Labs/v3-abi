export const IOptionReward = [
  {
    "type": "function",
    "name": "claimRewards",
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
      }
    ],
    "outputs": [
      {
        "name": "baseAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getRedeemableLongs",
    "inputs": [
      {
        "name": "user",
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
        "type": "uint64",
        "internalType": "uint64"
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
    "name": "getRewardPerContract",
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
    "name": "getSettings",
    "inputs": [],
    "outputs": [
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
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTotalBaseReserved",
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
    "name": "releaseRewardsNotClaimed",
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
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "settle",
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
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "underwrite",
    "inputs": [
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
    "name": "RewardsClaimed",
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
        "type": "uint64",
        "indexed": false,
        "internalType": "uint64"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "baseAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RewardsNotClaimedReleased",
    "inputs": [
      {
        "name": "strike",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint64",
        "indexed": false,
        "internalType": "uint64"
      },
      {
        "name": "baseAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Settled",
    "inputs": [
      {
        "name": "strike",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint64",
        "indexed": false,
        "internalType": "uint64"
      },
      {
        "name": "contractSize",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "intrinsicValuePerContract",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "maxRedeemableLongs",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "baseAmountPaid",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "baseAmountFee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "quoteAmountPaid",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "quoteAmountFee",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      },
      {
        "name": "baseAmountReserved",
        "type": "uint256",
        "indexed": false,
        "internalType": "UD60x18"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Underwrite",
    "inputs": [
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
        "type": "uint64",
        "indexed": false,
        "internalType": "uint64"
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
    "name": "OptionReward__ClaimPeriodEnded",
    "inputs": [
      {
        "name": "claimEnd",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionReward__ClaimPeriodNotEnded",
    "inputs": [
      {
        "name": "claimEnd",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionReward__InvalidSettlement",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionReward__LockupNotExpired",
    "inputs": [
      {
        "name": "lockupEnd",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionReward__NoBaseReserved",
    "inputs": [
      {
        "name": "strike",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionReward__NoRedeemableLongs",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionReward__NotCallOption",
    "inputs": [
      {
        "name": "option",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionReward__OptionNotExpired",
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
    "name": "OptionReward__PriceIsZero",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OptionReward__UnderwriterNotAuthorized",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OptionReward__ZeroRewardPerContract",
    "inputs": [
      {
        "name": "strike",
        "type": "uint256",
        "internalType": "UD60x18"
      },
      {
        "name": "maturity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  }
] as const;