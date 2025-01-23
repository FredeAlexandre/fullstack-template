import * as prettier from "prettier";

export async function format(code: string) {
  return await prettier.format(code, {
    plugins: ["prettier-plugin-solidity"],
    parser: "solidity-parse",
  });
}
