import "module-alias/register";
import {
	deployMockContract
} from 'ethereum-waffle';
import { Signer } from "ethers";

import { Vault__factory } from "../../types/factories/Vault__factory";
// import VaultAbi from "../../artifacts/contracts/balancer-core-v2/vault/Vault.sol/Vault.json";
// import { Vault__factory } from "../../types";

export async function deployBalancerVault(signer: Signer, wethAddress: string) {
  const signerAddress = await signer.getAddress();
  const vaultDeployer = new Vault__factory(signer);
  const vaultContract = await vaultDeployer.deploy(
    signerAddress,
    wethAddress,
    0,
    0
  );

  await vaultContract.deployed();

  return vaultContract;
}
