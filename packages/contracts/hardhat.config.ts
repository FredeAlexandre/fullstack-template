import { subtask, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";
import type {
  EthereumProvider,
  HardhatUserConfig,
  JsonRpcServer,
  NetworkUserConfig,
} from "hardhat/types";

import { getOwnerAccount } from "./src/accounts";
import { dev, prod } from "./src/networks";

import type { Chain } from "viem";
import DeployerModule from "./ignition/modules/deployer";

task(
  "dev:backend",
  "Launch a development environement and deploy the contracts to it",
).setAction(async (args, hre) => {
  subtask("node:server-ready").setAction(
    async (
      {
        address,
        port,
      }: {
        address: string;
        port: number;
        provider: EthereumProvider;
        server: JsonRpcServer;
      },
      { config },
    ) => {
      console.log(
        `Started HTTP and WebSocket JSON-RPC server at http://${address}:${port}/`,
      );
      console.log();
      const networkConfig = config.networks.hardhat;

      if (Array.isArray(networkConfig.accounts)) {
        throw new Error(
          "You should use a mnemonic instead of an array of private keys",
        );
      }
      const ownerAccount = getOwnerAccount(networkConfig.accounts.mnemonic);
      console.log(`Owner account: ${ownerAccount.address}`);

      console.log("Deploying contracts !");
      const { Deployer } = await hre.ignition.deploy(DeployerModule);
      const SuperOwnerAdress = await Deployer.read.authority();

      console.log("Deployment done !");
      console.log("Deployer: ", Deployer.address);
      console.log("SuperOwner: ", SuperOwnerAdress);
    },
  );

  const node_process = hre.run("node");

  await node_process;
});

const toHardhatNetworks = (networks: readonly Chain[]) => {
  const result: Record<string, NetworkUserConfig> = {};

  let mnemonic: string;

  if (!process.env.MNEMONIC) {
    console.log(
      "/!\\ MNEMONIC NOT FOUND IN ENVIRONEMENT USING DEFAULT HARDHAT MNEMONIC /!\\",
    );
    mnemonic = "test test test test test test test test test test test junk";
  } else {
    mnemonic = process.env.MNEMONIC;
  }

  for (const network of networks) {
    if (network.name === "Hardhat") {
      result.hardhat = {
        accounts: {
          mnemonic,
        },
      };
    } else {
      result[network.name.toLowerCase()] = {
        url: network.rpcUrls.default.http[0],
        chainId: network.id,
        accounts: {
          mnemonic,
        },
      };
    }
  }
  return result;
};

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: { ...toHardhatNetworks(dev), ...toHardhatNetworks(prod) },
};

export default config;
