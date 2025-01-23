import { mnemonicToAccount } from "viem/accounts";

const ownerAccountIndex = 0 as const;

const getOwnerAccount = (mnemonic: string) => {
  return mnemonicToAccount(mnemonic, {
    addressIndex: ownerAccountIndex,
  });
};

export { ownerAccountIndex, getOwnerAccount };
