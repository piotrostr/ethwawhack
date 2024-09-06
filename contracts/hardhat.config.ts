import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    local: {
      url: "http://localhost:8545",
      forking: {
        url: "https://opt-mainnet.g.alchemy.com/v2/DKcxTa77_1R4Q5wcDZ6BYiRYRXTrJoPO",
      },
    },
  },
};

export default config;
