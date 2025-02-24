// Main contract 0x5642722df0D957B0FF5C746cc68601ef92916452
// Test contract 
export const bitlandConfig = {
  address: "0x8386A770622dd745fEdca7d27E4392Da067AD440",
  abi: [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_inpWallet","type":"address"},{"internalType":"address","name":"_withdrawalWallet","type":"address"},{"internalType":"address","name":"_teamWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"USDTtoCRYPTO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"activity","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"mode","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"addIdToRoyaltyPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_ref","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimLevelIncome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimROIIncome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRoyaltyIncome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimSalaryIncome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"claimStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cryptoToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyInvRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultRefer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributeRoyalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllUsers","outputs":[{"components":[{"internalType":"address","name":"acct","type":"address"},{"internalType":"uint256","name":"ref","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"totalDepositUSDT","type":"uint256"},{"internalType":"uint256","name":"ceilingLimit","type":"uint256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"salaryStartedAt","type":"uint256"},{"internalType":"uint256","name":"salaryRank","type":"uint256"},{"internalType":"uint256","name":"salaryLastCheckDate","type":"uint256"},{"internalType":"uint256","name":"roiLastcheckDate","type":"uint256"},{"internalType":"uint256","name":"rewardRank","type":"uint256"},{"internalType":"uint256","name":"salaryNo","type":"uint256"},{"internalType":"uint256","name":"roiNo","type":"uint256"}],"internalType":"struct lumexInv.User[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_page","type":"uint256"}],"name":"getRecentActivities","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"mode","type":"uint256"}],"internalType":"struct lumexInv.Activity[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getRewardRank","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getSalaryRank","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getUserActivitiesLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserDetail","outputs":[{"components":[{"internalType":"address","name":"acct","type":"address"},{"internalType":"uint256","name":"ref","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"totalDepositUSDT","type":"uint256"},{"internalType":"uint256","name":"ceilingLimit","type":"uint256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"salaryStartedAt","type":"uint256"},{"internalType":"uint256","name":"salaryRank","type":"uint256"},{"internalType":"uint256","name":"salaryLastCheckDate","type":"uint256"},{"internalType":"uint256","name":"roiLastcheckDate","type":"uint256"},{"internalType":"uint256","name":"rewardRank","type":"uint256"},{"internalType":"uint256","name":"salaryNo","type":"uint256"},{"internalType":"uint256","name":"roiNo","type":"uint256"}],"internalType":"struct lumexInv.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"globalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inputDepositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inputWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roiMaxDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"royaltyDistTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"royaltyEligible","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"royaltyLastDist","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"royaltyPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"royaltyUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"royaltyWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"salaryDistTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setCryptoToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setDailyInvRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setInputDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setInputWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setLevelIncomeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMinClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setRewardSelfInvestment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setRewardTeamSales","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_days","type":"uint256"}],"name":"setRoiMaxDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_days","type":"uint256"}],"name":"setRoyaltyDistTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setRoyaltyWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_days","type":"uint256"}],"name":"setSalaryDistTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setSalaryTeamMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"_days","type":"uint256"}],"name":"setSalaryTeamMonth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"_months","type":"uint256"}],"name":"setSalaryTeamMonthMax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setSalaryTeamSalary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setSalaryTeamSales","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setTeamDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setTeamWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setTeamWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setUserWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setWithdrawWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setWithdrawalDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"teamDepositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamsBiz","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamsCnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvestmentsUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalTeamsBiz","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userActivities","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"userWithdrawalfee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"usersIncome","outputs":[{"internalType":"uint256","name":"levelIncomeUSDT","type":"uint256"},{"internalType":"uint256","name":"roiIncomeUSDT","type":"uint256"},{"internalType":"uint256","name":"salaryIncomeUSDT","type":"uint256"},{"internalType":"uint256","name":"royaltyIncomeUSDT","type":"uint256"},{"internalType":"uint256","name":"totalIncomeUSDT","type":"uint256"},{"internalType":"uint256","name":"missedIncomeUSDT","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"usersIncomeToClaim","outputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"roi","type":"uint256"},{"internalType":"uint256","name":"salary","type":"uint256"},{"internalType":"uint256","name":"royalty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"usersInfo","outputs":[{"internalType":"address","name":"acct","type":"address"},{"internalType":"uint256","name":"ref","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"totalDepositUSDT","type":"uint256"},{"internalType":"uint256","name":"ceilingLimit","type":"uint256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"salaryStartedAt","type":"uint256"},{"internalType":"uint256","name":"salaryRank","type":"uint256"},{"internalType":"uint256","name":"salaryLastCheckDate","type":"uint256"},{"internalType":"uint256","name":"roiLastcheckDate","type":"uint256"},{"internalType":"uint256","name":"rewardRank","type":"uint256"},{"internalType":"uint256","name":"salaryNo","type":"uint256"},{"internalType":"uint256","name":"roiNo","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawalDepositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}] as const
};

// Main Contract 0x55d398326f99059fF775485246999027B3197955
// Test Contract 
export const tokenConfig = {
  address: "0xaFc0369d838203a9F5cBa2C2204703BF3f8c3339",
  abi:[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "Approval",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "Transfer",
      "anonymous": false
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "spender", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "allowance",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "approve",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "balanceOf",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "totalSupply",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "transfer",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "transferFrom",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    }
  ]
}
