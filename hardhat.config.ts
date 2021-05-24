import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
// import "hardhat-typechain";
import '@typechain/hardhat';
import 'hardhat-abi-exporter';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
require("solidity-coverage");
import networks from './hardhat.network';

import * as dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  mocha: {
    timeout: 30000000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks,
  solidity: {
    version: '0.7.1',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'istanbul',
    },
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
};

export default config;
