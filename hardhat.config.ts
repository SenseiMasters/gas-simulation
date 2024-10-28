import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: 1000, // 15000 for eth
        mempool: {
          order: "fifo",
        },
      },
      blockGasLimit: 30000000, // 30M for eth
    },
  },
};

export default config;
