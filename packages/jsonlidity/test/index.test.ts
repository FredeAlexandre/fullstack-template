import { describe, expect, test } from "vitest";
import { fromAstToSolidity, fromSolidityToAst } from "../src/index";

import { format } from "./utils";
import {
  contract_definition,
  contract_storage_variables_easy,
} from "./utils/samples";

describe("jsonlidity ast to code", () => {
  test("Contract defintion", async () => {
    const ast = fromSolidityToAst(contract_definition);
    const code = fromAstToSolidity(ast);
    expect(await format(code)).to.equal(await format(contract_definition));
  });

  test("Contract storage variables easy", async () => {
    const ast = fromSolidityToAst(contract_storage_variables_easy);
    const code = fromAstToSolidity(ast);
    expect(await format(code)).to.equal(
      await format(contract_storage_variables_easy),
    );
  });
});
