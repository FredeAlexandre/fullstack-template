import { super_owner_abi } from "../abi";
import type { SupportedNetworkId } from "../networks";

export const name = "SuperOwner";

export const source = "contracts/super-owner.sol";

export const abi = super_owner_abi;

export const addresses = {
  "1": undefined,
  "31337": "0xA7c9Ac0FD26A3B4A35f2bb1fBd46Ec082Be31A54",
  "10": undefined,
  "137": undefined,
  "42161": undefined,
  "421614": undefined,
  "42220": undefined,
  "43114": undefined,
  "480": undefined,
  "534352": undefined,
  "56": undefined,
  "59144": undefined,
  "7777777": undefined,
  "81457": undefined,
  "8453": undefined,
} as const satisfies Record<SupportedNetworkId, string | undefined>;
