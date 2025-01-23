import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";
import {
  http,
  createWalletClient,
  keccak256,
  publicActions,
  toHex,
} from "viem";
import { hardhat } from "viem/chains";
import { z } from "zod";

import { deployer_abi, super_owner_abi } from "@acme/contracts/abi";
import { dev, dev_ids } from "@acme/contracts/networks";

import { deployer, super_owner } from "@acme/contracts/contracts";

import { getOwnerAccount } from "@acme/contracts/accounts";

const isOx = (str: string): str is `0x${string}` => str.startsWith("0x");

const isSupportedBlockchain = (id: number): id is (typeof dev_ids)[number] =>
  // @ts-ignore
  dev_ids.includes(id);

// Schéma pour valider les paramètres de la requête
const deployRequestBodySchema = z.object({
  salt: z.string().min(1, "salt est requis"),
  creationCode: z.string().min(1, "creationCode est requis").refine(isOx),
  blockchain: z
    .number()
    .refine(isSupportedBlockchain, { message: "Blockchain not supported" }), // Liste des blockchains supportées
});

async function getBody<S extends z.ZodTypeAny, O = z.infer<S>>({
  request,
  schema,
}: { request: Request; schema: S }): Promise<
  z.SafeParseReturnType<unknown, O>
> {
  try {
    return schema.safeParse(await request.json());
  } catch (error) {
    return schema.safeParse({});
  }
}

export const APIRoute = createAPIFileRoute("/api/deploy")({
  GET: async ({ request }) => {
    const body = await getBody({ request, schema: deployRequestBodySchema });

    if (!body.success) {
      return json({ error: body.error }, { status: 400 });
    }

    const { salt, creationCode, blockchain } = body.data;

    const deployer_address = deployer.addresses[blockchain] as
      | `0x${string}`
      | undefined;

    const super_owner_address = super_owner.addresses[blockchain] as
      | `0x${string}`
      | undefined;

    if (!deployer_address || !super_owner_address) {
      return json(
        {
          error:
            "Internal error the blockchain is not fully implemented please contact admin",
        },
        { status: 400 },
      );
    }

    try {
      const account = getOwnerAccount(process.env.MNEMONIC);

      const client = createWalletClient({
        account,
        chain: hardhat,
        transport: http(),
      }).extend(publicActions);

      const hashedSalt = keccak256(toHex(salt));

      const { request: simulatedRequest } = await client.simulateContract({
        account,
        address: deployer_address,
        abi: deployer_abi,
        functionName: "deploy",
        args: [hashedSalt, creationCode],
      });

      const hash = await client.writeContract(simulatedRequest);

      const data = await client.readContract({
        address: deployer_address,
        abi: deployer_abi,
        functionName: "getDeployed",
        args: [hashedSalt],
      });

      return json({ target_address: data, tx_hash: hash });
    } catch (error) {
      console.log(error);
      return json({ error: "Erreur interne" }, { status: 500 });
    }
  },
});
