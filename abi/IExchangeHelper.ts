export const IExchangeHelper__abi = [
  {
    "type": "function",
    "name": "swapWithToken",
    "inputs": [
      {
        "name": "sourceToken",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "targetToken",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "sourceTokenAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "allowanceTarget",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "refundAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "amountOut",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "sourceLeft",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  }
] as const;