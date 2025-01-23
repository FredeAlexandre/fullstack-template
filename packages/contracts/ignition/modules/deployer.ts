import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import { zeroAddress } from "viem";

import SuperOwnerModule from "./super-owner";

const DeployerModule = buildModule("DeployerModule", (m) => {
  const owner = m.getParameter("owner", zeroAddress);
  const { SuperOwner } = m.useModule(SuperOwnerModule);

  const Deployer = m.contract("Deployer", [owner, SuperOwner]);

  return { Deployer };
});

export default DeployerModule;
