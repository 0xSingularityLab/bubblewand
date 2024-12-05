//const factoryAddress = "";

const factoryABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newFee",
        "type": "uint256"
      }
    ],
    "name": "CreateFeeUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newContract",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "NewDestinyDice",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "minimumBet",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumWithdraw",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxShareholders",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxDeposit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "adminFee",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "admin",
        "type": "address"
      }
    ],
    "name": "createDestinyDice",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "createFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeRecipient",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCreateFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newFee",
        "type": "uint256"
      }
    ],
    "name": "updateCreateFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const networkConfig = {
  base: {
      chainId: "8453", // Base network chainId
      address: "0x896157AA973f7091886b88bea965cA890eD4258A",
      frontendCodePath: "./downloads/base.zip",
  },
  optimism: {
      chainId: "10", // Optimism network chainId 10
      address: "",
      frontendCodePath: "./downloads/op.zip",
  },
  arb: {
      chainId: "42161", // Arbitrum network chainId
      address: "",
      frontendCodePath: "./downloads/arb.zip",
  },
  polygon: {
      chainId: "137", // Polygon network chainId
      address: "0x896157AA973f7091886b88bea965cA890eD4258A",
      frontendCodePath: "./downloads/polygon.zip",
  },
  bsc: {
      chainId: "56", // BSC network chainId
      address: "0x896157AA973f7091886b88bea965cA890eD4258A",
      frontendCodePath: "./downloads/bsc.zip",
  },
  eth: {
      chainId: "1", // Ethereum mainnet chainId
      address: "",
      frontendCodePath: "./downloads/eth.zip",
  },
};
