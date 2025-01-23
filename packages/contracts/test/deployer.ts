import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { assert, expect } from "chai";
import hre from "hardhat";
import {
  BaseError,
  ContractFunctionRevertedError,
  keccak256,
  toHex,
} from "viem";

const ZERO_ADRESS = "0x0000000000000000000000000000000000000000" as const;

import {
  abi as STORAGE_CONTRACT_ABI,
  bytecode as STORAGE_CONTRACT_BYTECODE,
  abi,
} from "./artifacts/storage";

async function deploy() {
  const [owner, alice, bob] = await hre.viem.getWalletClients();

  const authority = await hre.viem.deployContract("SuperOwner", [
    owner.account.address,
    ZERO_ADRESS,
  ]);

  const deployer = await hre.viem.deployContract("Deployer", [
    owner.account.address,
    authority.address,
  ]);

  const publicClient = await hre.viem.getPublicClient();

  return {
    authority,
    deployer,
    owner,
    alice,
    bob,
    publicClient,
  };
}

describe("Contract Deployer", () => {
  it("Should require auth to deploy", async () => {
    // Setup fixture
    const { deployer, alice } = await loadFixture(deploy);

    const salt = keccak256(toHex("a unique salt for this deployment"));
    const creationCode = STORAGE_CONTRACT_BYTECODE;

    try {
      await deployer.simulate.deploy([salt, creationCode], {
        account: alice.account.address,
      });
      assert.fail("The deploy should have failed");
    } catch (error) {
      if (error instanceof BaseError) {
        const revertError = error.walk(
          (err) => err instanceof ContractFunctionRevertedError,
        );
        if (revertError instanceof ContractFunctionRevertedError) {
          expect(revertError).to.be.equal("UNAUTHORIZED");
        } else {
          assert.fail("No reason found");
        }
      } else {
        assert.fail("Unkown error");
      }
    }
  });

  // TODO create a "Should be possible to deploy a contract with contract creation code and salt" test
  it("Should be possible to deploy a contract with contract creation code and salt", async () => {
    // Setup fixture
    const { deployer, publicClient } = await loadFixture(deploy);

    // Test case: Should be possible to deploy a contract with contract creation code and salt
    const salt = keccak256(toHex("a unique salt for this deployment"));
    const creationCode = STORAGE_CONTRACT_BYTECODE;

    const { result: address } = await deployer.simulate.deploy([
      salt,
      creationCode,
    ]);
    await deployer.write.deploy([salt, creationCode]);

    const data = await publicClient.readContract({
      address,
      abi: STORAGE_CONTRACT_ABI,
      functionName: "number",
    });

    expect(data).to.equal(BigInt(42));
  });

  // TODO create a "Should deploy teh contract at the predicted adrress" test
  it("Should deploy the contract at the predicted adrress", async () => {
    // Setup fixture
    const { deployer, publicClient } = await loadFixture(deploy);

    // Test case: Should be possible to deploy a contract with contract creation code and salt
    const salt = keccak256(toHex("a unique salt for this deployment"));
    const creationCode = STORAGE_CONTRACT_BYTECODE;

    const pretictedGuessed = await deployer.read.getDeployed([salt]);

    const { result: addressDeployedAt } = await deployer.simulate.deploy([
      salt,
      creationCode,
    ]);

    expect(pretictedGuessed).to.equal(addressDeployedAt);
  });

  // TODO create a "Should be possible to use the contract as a normal contract" test
  it("Should be possible to use the contract as a normal contract", async () => {
    // Setup fixture
    const { deployer, publicClient, alice } = await loadFixture(deploy);

    // Test case: Should be possible to deploy a contract with contract creation code and salt
    const salt = keccak256(toHex("a unique salt for this deployment"));
    const creationCode = STORAGE_CONTRACT_BYTECODE;

    const { result: address } = await deployer.simulate.deploy([
      salt,
      creationCode,
    ]);
    await deployer.write.deploy([salt, creationCode]);

    expect(
      await publicClient.readContract({
        address,
        abi: STORAGE_CONTRACT_ABI,
        functionName: "number",
      }),
    ).to.equal(BigInt(42));

    await alice.writeContract({
      address,
      abi: STORAGE_CONTRACT_ABI,
      functionName: "store",
      args: [BigInt(69)],
    });

    expect(
      await publicClient.readContract({
        address,
        abi: STORAGE_CONTRACT_ABI,
        functionName: "number",
      }),
    ).to.equal(BigInt(69));
  });
});

// ? To get the bytecode of a contract you can run "pnpm run compile" and check the `artifacts/contracts/<contract you want>` folder and in his json file you will find the `bytecode` field
