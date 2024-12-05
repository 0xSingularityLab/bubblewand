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
    "name": "NewDestinyDiceUSDT",
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
    "stateMutability": "nonpayable",
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
        "internalType": "address",
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
  },
  {
    "inputs": [],
    "name": "usdtToken",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const networkConfig = {
  base: {
      chainId: 8453, // Base network chainId
      address: "0xA811771F1BAeBb596886ff5775A89929121d104F",
      frontendCodePath: "./downloads/base_usdt.zip",
      usdtContractAddress: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
      usdtContractABI: [{
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{
          "name": "",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "_upgradedAddress",
          "type": "address"
        }],
        "name": "deprecate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "_spender",
          "type": "address"
        }, {
          "name": "_value",
          "type": "uint256"
        }],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "deprecated",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "_evilUser",
          "type": "address"
        }],
        "name": "addBlackList",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "_from",
          "type": "address"
        }, {
          "name": "_to",
          "type": "address"
        }, {
          "name": "_value",
          "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "upgradedAddress",
        "outputs": [{
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "name": "",
          "type": "address"
        }],
        "name": "balances",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "maximumFee",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "_totalSupply",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "name": "_maker",
          "type": "address"
        }],
        "name": "getBlackListStatus",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "name": "",
          "type": "address"
        }, {
          "name": "",
          "type": "address"
        }],
        "name": "allowed",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "paused",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "name": "who",
          "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [{
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{
          "name": "",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "_to",
          "type": "address"
        }, {
          "name": "_value",
          "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "newBasisPoints",
          "type": "uint256"
        }, {
          "name": "newMaxFee",
          "type": "uint256"
        }],
        "name": "setParams",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "amount",
          "type": "uint256"
        }],
        "name": "issue",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "amount",
          "type": "uint256"
        }],
        "name": "redeem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "name": "_owner",
          "type": "address"
        }, {
          "name": "_spender",
          "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
          "name": "remaining",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "basisPointsRate",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "name": "",
          "type": "address"
        }],
        "name": "isBlackListed",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "_clearedUser",
          "type": "address"
        }],
        "name": "removeBlackList",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "MAX_UINT",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "newOwner",
          "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "name": "_blackListedUser",
          "type": "address"
        }],
        "name": "destroyBlackFunds",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [{
          "name": "_initialSupply",
          "type": "uint256"
        }, {
          "name": "_name",
          "type": "string"
        }, {
          "name": "_symbol",
          "type": "string"
        }, {
          "name": "_decimals",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }],
        "name": "Issue",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }],
        "name": "Redeem",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "name": "newAddress",
          "type": "address"
        }],
        "name": "Deprecate",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "name": "feeBasisPoints",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "maxFee",
          "type": "uint256"
        }],
        "name": "Params",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "name": "_blackListedUser",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_balance",
          "type": "uint256"
        }],
        "name": "DestroyedBlackFunds",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "name": "_user",
          "type": "address"
        }],
        "name": "AddedBlackList",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "name": "_user",
          "type": "address"
        }],
        "name": "RemovedBlackList",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "name": "owner",
          "type": "address"
        }, {
          "indexed": true,
          "name": "spender",
          "type": "address"
        }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "name": "from",
          "type": "address"
        }, {
          "indexed": true,
          "name": "to",
          "type": "address"
        }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }],
        "name": "Transfer",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [],
        "name": "Pause",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [],
        "name": "Unpause",
        "type": "event"
      }]

  },
  optimism: {
      chainId: 10, // Optimism network chainId
      address: "",
      frontendCodePath: "./downloads/op_usdt.zip",
      usdtContractAddress: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
      usdtContractABI: [{
        "inputs": [{
          "internalType": "address",
          "name": "_l2Bridge",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "_l1Token",
          "type": "address"
        }],
        "stateMutability": "nonpayable",
        "type": "constructor"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }],
        "name": "Burn",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }],
        "name": "Mint",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }],
        "name": "Transfer",
        "type": "event"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }],
        "name": "approve",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "account",
          "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "_from",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [],
        "name": "decimals",
        "outputs": [{
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }],
        "name": "decreaseAllowance",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }],
        "name": "increaseAllowance",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [],
        "name": "l1Token",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
      }, {
        "inputs": [],
        "name": "l2Bridge",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [],
        "name": "name",
        "outputs": [{
          "internalType": "string",
          "name": "",
          "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "bytes4",
          "name": "_interfaceId",
          "type": "bytes4"
        }],
        "name": "supportsInterface",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "stateMutability": "pure",
        "type": "function"
      }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
          "internalType": "string",
          "name": "",
          "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
      }, {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
      }]
  },
  arb: {
      chainId: 42161, // Arbitrum network chainId
      address: "",
      frontendCodePath: "./downloads/arb_usdt.zip",
      usdtContractAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      usdtContractABI: [{
        "inputs": [{
          "internalType": "address",
          "name": "_logic",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "admin_",
          "type": "address"
        }, {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }],
        "stateMutability": "payable",
        "type": "constructor"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }],
        "name": "AdminChanged",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }],
        "name": "BeaconUpgraded",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }],
        "name": "Upgraded",
        "type": "event"
      }, {
        "stateMutability": "payable",
        "type": "fallback"
      }, {
        "inputs": [],
        "name": "admin",
        "outputs": [{
          "internalType": "address",
          "name": "admin_",
          "type": "address"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }],
        "name": "changeAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [],
        "name": "implementation",
        "outputs": [{
          "internalType": "address",
          "name": "implementation_",
          "type": "address"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "inputs": [{
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }, {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }, {
        "stateMutability": "payable",
        "type": "receive"
      }]
  },
  polygon: {
      chainId: 137, // Polygon network chainId
      address: "0xA811771F1BAeBb596886ff5775A89929121d104F",
      frontendCodePath: "./downloads/polygon_usdt.zip",
      usdtContractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      usdtContractABI: [{
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_proxyTo",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "_new",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "address",
          "name": "_old",
          "type": "address"
        }],
        "name": "ProxyOwnerUpdate",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_new",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "_old",
          "type": "address"
        }],
        "name": "ProxyUpdated",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "payable": false,
        "stateMutability": "payable",
        "type": "fallback"
      }, {
        "constant": false,
        "inputs": [],
        "name": "implementation",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [],
        "name": "proxyOwner",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [],
        "name": "proxyType",
        "outputs": [{
          "internalType": "uint256",
          "name": "proxyTypeId",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }],
        "name": "transferProxyOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_newProxyTo",
          "type": "address"
        }, {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }],
        "name": "updateAndCall",
        "outputs": [],
        "payable": false,
        "stateMutability": "payable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_newProxyTo",
          "type": "address"
        }],
        "name": "updateImplementation",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "payable": false,
        "stateMutability": "payable",
        "type": "receive"
      }]
  },
  bsc: {
      chainId: 56, // BSC network chainId
      address: "0x36106B35E408ec1Eb5cc3c115aae2A562eB4b00C",
      frontendCodePath: "./downloads/bsc_usdt.zip",
      usdtContractAddress: "0x55d398326f99059fF775485246999027B3197955",
      usdtContractABI: [{
        "constant": false,
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }],
        "name": "Approval",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }],
        "name": "OwnershipTransferred",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }],
        "name": "Transfer",
        "payable": false,
        "type": "event"
      }, {
        "constant": true,
        "inputs": [],
        "name": "_decimals",
        "outputs": [{
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "_name",
        "outputs": [{
          "internalType": "string",
          "name": "",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "_symbol",
        "outputs": [{
          "internalType": "string",
          "name": "",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }],
        "name": "approve",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }],
        "name": "burn",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }],
        "name": "decreaseAllowance",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }],
        "name": "increaseAllowance",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }],
        "name": "mint",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{
          "internalType": "string",
          "name": "",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{
          "internalType": "string",
          "name": "",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }]
  },
  eth: {
      chainId: 1, // Ethereum mainnet chainId
      address: "",
      frontendCodePath: "./downloads/eth_usdt.zip",
      usdtContractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      usdtContractABI: [{
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{
          "name": "",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_upgradedAddress",
          "type": "address"
        }],
        "name": "deprecate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_spender",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "deprecated",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_evilUser",
          "type": "address"
        }],
        "name": "addBlackList",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_from",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_to",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "upgradedAddress",
        "outputs": [{
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "indexed": false,
          "name": "",
          "type": "address"
        }],
        "name": "balances",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "maximumFee",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "_totalSupply",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "indexed": false,
          "name": "_maker",
          "type": "address"
        }],
        "name": "getBlackListStatus",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "indexed": false,
          "name": "",
          "type": "address"
        }, {
          "indexed": false,
          "name": "",
          "type": "address"
        }],
        "name": "allowed",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "paused",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "indexed": false,
          "name": "who",
          "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [{
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{
          "name": "",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_to",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "newBasisPoints",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "newMaxFee",
          "type": "uint256"
        }],
        "name": "setParams",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }],
        "name": "issue",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }],
        "name": "redeem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "indexed": false,
          "name": "_owner",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_spender",
          "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
          "name": "remaining",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "basisPointsRate",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "indexed": false,
          "name": "",
          "type": "address"
        }],
        "name": "isBlackListed",
        "outputs": [{
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_clearedUser",
          "type": "address"
        }],
        "name": "removeBlackList",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "MAX_UINT",
        "outputs": [{
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "newOwner",
          "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_blackListedUser",
          "type": "address"
        }],
        "name": "destroyBlackFunds",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_initialSupply",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "_name",
          "type": "string"
        }, {
          "indexed": false,
          "name": "_symbol",
          "type": "string"
        }, {
          "indexed": false,
          "name": "_decimals",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }],
        "name": "Issue",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }],
        "name": "Redeem",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "newAddress",
          "type": "address"
        }],
        "name": "Deprecate",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "feeBasisPoints",
          "type": "uint256"
        }, {
          "indexed": false,
          "name": "maxFee",
          "type": "uint256"
        }],
        "name": "Params",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_blackListedUser",
          "type": "address"
        }, {
          "indexed": false,
          "name": "_balance",
          "type": "uint256"
        }],
        "name": "DestroyedBlackFunds",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_user",
          "type": "address"
        }],
        "name": "AddedBlackList",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": false,
          "name": "_user",
          "type": "address"
        }],
        "name": "RemovedBlackList",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": true,
          "name": "owner",
          "type": "address"
        }, {
          "indexed": true,
          "name": "spender",
          "type": "address"
        }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }],
        "name": "Approval",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "indexed": true,
          "name": "from",
          "type": "address"
        }, {
          "indexed": true,
          "name": "to",
          "type": "address"
        }, {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }],
        "name": "Transfer",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [],
        "name": "Pause",
        "payable": false,
        "type": "event"
      }, {
        "constant": false,
        "inputs": [],
        "name": "Unpause",
        "payable": false,
        "type": "event"
      }]
  },
};
