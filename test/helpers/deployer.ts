import "module-alias/register";

import { Signer } from "ethers";
import { ethers } from "hardhat";
import { TestERC20 } from "../../types/TestERC20";
import { TestYVault } from "../../types/TestYVault";
import { TestERC20__factory } from "../../types/factories/TestERC20__factory";
import { TestYVault__factory } from "../../types/factories/TestYVault__factory";
import { IERC20__factory } from "../../types/factories/IERC20__factory";
import { IWETH__factory } from "../../types/factories/IWETH__factory";
import { IYearnVault__factory } from "../../types/factories/IYearnVault__factory";
import { IERC20 } from "../../types/IERC20";
import { IWETH } from "../../types/IWETH";
import { IYearnVault } from "../../types/IYearnVault";
import { DateString__factory } from "../../types/factories/DateString__factory";

export interface FixtureInterface {
  signer: Signer;
  usdc: TestERC20;
  yusdc: TestYVault;
}

export interface EthPoolMainnetInterface {
  signer: Signer;
  weth: IWETH;
  yweth: IYearnVault;
}


const deployUsdc = async (signer: Signer, owner: string) => {
  const deployer = new TestERC20__factory(signer);
  return await deployer.deploy(owner, "tUSDC", 6);
};

const deployYusdc = async (
  signer: Signer,
  usdcAddress: string,
  decimals: number
) => {
  const deployer = new TestYVault__factory(signer);
  return await deployer.deploy(usdcAddress, decimals);
};


export async function loadFixture() {
  // The mainnet weth address won't work unless mainnet deployed
  const wethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const [signer] = await ethers.getSigners();
  const signerAddress = (await signer.getAddress()) as string;
  const usdc = await deployUsdc(signer, signerAddress);
  const yusdc = await deployYusdc(signer, usdc.address, 6);
  
  return {
    signer,
    usdc,
    yusdc,
  };
}

export async function loadEthPoolMainnetFixture() {
  const wethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const ywethAddress = "0xac333895ce1A73875CF7B4Ecdc5A743C12f3d82B";
  const [signer] = await ethers.getSigners();

  const weth = IWETH__factory.connect(wethAddress, signer);
  const yweth = IYearnVault__factory.connect(ywethAddress, signer);
  return {
    signer,
    weth,
    yweth,
    // position,
    // tranche,
    // proxy,
  };
}

