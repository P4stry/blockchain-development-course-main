import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";
require('dotenv').config()

const { INFURA_SEPOLIA_KEY, ACCOUNT_PRIVATE_KEY, ETHERSCAN_KEY } = process.env;


const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_SEPOLIA_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY]
    }
  },

  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },

  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY,
    }
  }
};

export default config;


