// Importation des modules
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

// Variables d'environnement
const SEPOLIA_URL = process.env.SEPOLIA_URL || "";
const ETH_PRIVATE_KEY = process.env.ETH_PRIVATE_KEY || "";
const ETHERSCAN_PRIVATE_KEY = process.env.ETHERSCAN_PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */

// Configuration de Hardhat pour le déploiement
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      chainId: 11155111,
      accounts: [`0x${ETH_PRIVATE_KEY}`]
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    },
    hardhat: {
      forking: {
        url: SEPOLIA_URL,
      },
    },
  },
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_PRIVATE_KEY
  }
};
// End of hardhat.config.js