import {
  arbitrum,
  arbitrumSepolia,
  avalanche,
  base,
  blast,
  bsc,
  celo,
  hardhat,
  linea,
  mainnet,
  optimism,
  polygon,
  scroll,
  worldchain,
  zora,
} from "viem/chains";

const dev = [hardhat, arbitrumSepolia] as const;

const dev_ids = [31337, 421614] as const;

const prod = [
  mainnet,
  polygon,
  arbitrum,
  base,
  blast,
  scroll,
  linea,
  optimism,
  avalanche,
  celo,
  zora,
  worldchain,
  bsc,
] as const;

const prod_ids = [
  1, 137, 42161, 8453, 81457, 534352, 59144, 10, 43114, 42220, 7777777, 480, 56,
] as const;

export type SupportedNetworkId =
  | (typeof dev)[number]["id"]
  | (typeof prod)[number]["id"];

export { dev, prod, dev_ids, prod_ids };
