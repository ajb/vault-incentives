require("dotenv").config();

import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "tsconfig-paths/register";
import "@nomiclabs/hardhat-web3";

import "@nomiclabs/hardhat-etherscan";

import "./scripts/generate-eqi-disperse";

const config: HardhatUserConfig = {
  defaultNetwork: "mainnet",
  solidity: {
    compilers: [
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.5.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.7.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC_URL,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 80001,
    },
    mainnet: {
      url: `https://polygon-rpc.com`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 137,
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 56,
    },
    avax: {
      url: `https://api.avax.network/ext/bc/C/rpc`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 43114,
    },
    ftm: {
      url: `https://rpc.ftm.tools/`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 250,
    },
    arb: {
      url: `https://arb1.arbitrum.io/rpc`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 42161,
    },
    movr: {
      url: `https://rpc.moonriver.moonbeam.network`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 1285,
    },
    one: {
      url: `https://api.harmony.one`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 1666600000,
    },
    cro: {
      url: `https://evm-cronos.crypto.org/`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 25,
    },
    gc: {
      url: `https://rpc.gnosischain.com/`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 100,
    },
    metis: {
      url: `https://andromeda.metis.io/?owner=1088`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 1088,
    },
    iotex: {
      url: `https://babel-api.mainnet.iotex.io`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 4689,
    },
    gno: {
      url: `https://rpc.xdaichain.com/`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 100,
    },
    celo: {
      url: `https://forno.celo.org/`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 42220,
    },
    aurora: {
      url: `https://mainnet.aurora.dev`,
      accounts: [String(process.env.MATIC_KEY)],
      chainId: 1313161554,
    },
    sys: {
      url: "https://rpc.syscoin.org",
      hardfork: "london",
      chainId: 57,
      accounts: [String(process.env.MATIC_KEY)],
    },
    milky: {
      url: "https://rpc-mainnet-cardano-evm.c1.milkomeda.com",
      chainId: 2001,
      accounts: [String(process.env.MATIC_KEY)],
    },
    klay: {
      url: "https://public-node-api.klaytnapi.com/v1/cypress",
      chainId: 8217,
      accounts: [String(process.env.MATIC_KEY)],
    },
    op: {
      url: "https://mainnet.optimism.io",
      chainId: 10,
      accounts: [String(process.env.MATIC_KEY)],
    },
    moonbeam: {
      url: "https://rpc.api.moonbeam.network",
      chainId: 1284,
      accounts: [String(process.env.MATIC_KEY)],
    },
    hardhat: {
      forking: {
        enabled: true,
        url: `https://polygon-rpc.com`,
        // url: `https://rpc.ftm.tools`,
        // url: 'https://polygon-rpc.com'
      },
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      mainnet: process.env.ETHERSCAN_KEY,
      ropsten: process.env.ETHERSCAN_KEY,
      rinkeby: process.env.ETHERSCAN_KEY,
      goerli: process.env.ETHERSCAN_KEY,
      kovan: process.env.ETHERSCAN_KEY,
      // binance smart chain
      bsc: process.env.BSCSCAN_KEY,
      bscTestnet: process.env.BSCSCAN_KEY,
      // huobi eco chain
      heco: process.env.HECOINFO_KEY,
      hecoTestnet: process.env.HECOINFO_KEY,
      // fantom mainnet
      opera: process.env.FTMSCAN_KEY,
      ftmTestnet: process.env.FTMSCAN_KEY,
      // optimism
      optimisticEthereum: process.env.OPTIMISTIC_ETHERSCAN_KEY,
      optimisticKovan: process.env.OPTIMISTIC_ETHERSCAN_KEY,
      // polygon
      polygon: process.env.POLYGONSCAN_KEY,
      polygonMumbai: process.env.POLYGONSCAN_KEY,
      // arbitrum
      arbitrumOne: process.env.ARBISCAN_KEY,
      arbitrumTestnet: process.env.ARBISCAN_KEY,
      // avalanche
      avalanche: process.env.SNOWTRACE_KEY,
      avalancheFujiTestnet: process.env.SNOWTRACE_KEY,
      // moonriver
      moonriver: process.env.MOONRIVER_MOONSCAN_KEY,
      moonbaseAlpha: process.env.MOONRIVER_MOONSCAN_KEY,
      // xdai and sokol don't need an API key, but you still need
      // to specify one; any string placeholder will work
      xdai: "api-key",
      sokol: "api-key",
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
export default config;
