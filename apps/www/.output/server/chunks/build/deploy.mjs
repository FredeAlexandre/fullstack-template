import { D } from '../nitro/nitro.mjs';
import { createWalletClient, http, publicActions, keccak256, toHex } from 'viem';
import { hardhat } from 'viem/chains';
import { z as z$1 } from 'zod';
import { mnemonicToAccount } from 'viem/accounts';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:async_hooks';
import '@tanstack/react-router';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import 'drizzle-orm/node-postgres';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'better-auth/plugins';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import 'drizzle-orm/mysql-core';
import 'drizzle-orm/sqlite-core';
import '@tanstack/react-query';
import 'react/jsx-runtime';
import 'react';
import 'react-dom/server';
import '@tanstack/react-router-with-query';
import '@tanstack/router-devtools';
import 'sonner';
import 'usehooks-ts';

function C(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function B(...e) {
  return e.reduce((t, r) => {
    const d = C(r);
    for (const [s, n] of d.entries()) t.set(s, n);
    return t;
  }, new Headers());
}
function i(e, t) {
  return new Response(JSON.stringify(e), { ...t, headers: B({ "content-type": "application/json" }, t == null ? void 0 : t.headers) });
}
const p = [{ inputs: [{ internalType: "address", name: "_owner", type: "address" }, { internalType: "contract Authority", name: "_authority", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "user", type: "address" }, { indexed: true, internalType: "contract Authority", name: "newAuthority", type: "address" }], name: "AuthorityUpdated", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "user", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { inputs: [], name: "authority", outputs: [{ internalType: "contract Authority", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "salt", type: "bytes32" }, { internalType: "bytes", name: "creationCode", type: "bytes" }], name: "deploy", outputs: [{ internalType: "address", name: "deployed", type: "address" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "salt", type: "bytes32" }], name: "getDeployed", outputs: [{ internalType: "address", name: "deployed", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract Authority", name: "newAuthority", type: "address" }], name: "setAuthority", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }], H = [31337, 421614], M = { 1: void 0, 31337: "0xa1dA2140118a95Fa52379277C125087646B8BDff", 10: void 0, 137: void 0, 42161: void 0, 421614: void 0, 42220: void 0, 43114: void 0, 480: void 0, 534352: void 0, 56: void 0, 59144: void 0, 7777777: void 0, 81457: void 0, 8453: void 0 }, _ = { 1: void 0, 31337: "0xA7c9Ac0FD26A3B4A35f2bb1fBd46Ec082Be31A54", 10: void 0, 137: void 0, 42161: void 0, 421614: void 0, 42220: void 0, 43114: void 0, 480: void 0, 534352: void 0, 56: void 0, 59144: void 0, 7777777: void 0, 81457: void 0, 8453: void 0 }, k = 0, I = (e) => mnemonicToAccount(e, { addressIndex: k }), O = (e) => e.startsWith("0x"), j = (e) => H.includes(e), q = z$1.object({ salt: z$1.string().min(1, "salt est requis"), creationCode: z$1.string().min(1, "creationCode est requis").refine(O), blockchain: z$1.number().refine(j, { message: "Blockchain not supported" }) });
async function N({ request: e, schema: t }) {
  try {
    return t.safeParse(await e.json());
  } catch {
    return t.safeParse({});
  }
}
const z = D("/api/deploy")({ GET: async ({ request: e }) => {
  const t = await N({ request: e, schema: q });
  if (!t.success) return i({ error: t.error }, { status: 400 });
  const { salt: r, creationCode: d, blockchain: s } = t.data, n = M[s], y = _[s];
  if (!n || !y) return i({ error: "Internal error the blockchain is not fully implemented please contact admin" }, { status: 400 });
  try {
    const a = I(process.env.MNEMONIC), c = createWalletClient({ account: a, chain: hardhat, transport: http() }).extend(publicActions), u = keccak256(toHex(r)), { request: l } = await c.simulateContract({ account: a, address: n, abi: p, functionName: "deploy", args: [u, d] }), m = await c.writeContract(l), f = await c.readContract({ address: n, abi: p, functionName: "getDeployed", args: [u] });
    return i({ target_address: f, tx_hash: m });
  } catch (a) {
    return console.log(a), i({ error: "Erreur interne" }, { status: 500 });
  }
} });

export { z as APIRoute };
//# sourceMappingURL=deploy.mjs.map
