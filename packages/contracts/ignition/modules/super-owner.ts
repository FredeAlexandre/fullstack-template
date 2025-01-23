import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import { ownerAccountIndex } from "../../src/accounts";

import { zeroAddress } from "viem";

const SuperOwnerModule = buildModule("SuperOwnerModule", (m) => {
  const default_owner = m.getAccount(ownerAccountIndex);

  const owner = m.getParameter("owner", default_owner);
  const authority = m.getParameter("authority", zeroAddress);
  const SuperOwner = m.contract("SuperOwner", [owner, authority]);
  m.call(SuperOwner, "setRoleCapability", [
    0,
    "0xa1dA2140118a95Fa52379277C125087646B8BDff",
    "0xcdcb760a",
    true,
  ]);
  m.call(SuperOwner, "setUserRole", [default_owner, 0, true]);

  return { SuperOwner };
});

export default SuperOwnerModule;
