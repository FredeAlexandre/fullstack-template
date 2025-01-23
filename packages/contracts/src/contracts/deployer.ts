import { deployer_abi } from "../abi";
import type { SupportedNetworkId } from "../networks";

export const name = "Deployer";

export const source = "contracts/deployer.sol";

export const abi = deployer_abi;

export const addresses = {
  "1": undefined,
  "31337": "0xa1dA2140118a95Fa52379277C125087646B8BDff",
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
