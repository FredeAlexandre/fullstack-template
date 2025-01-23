import { parse } from "@solidity-parser/parser";
import type { ASTNode } from "@solidity-parser/parser/dist/src/ast-types";

export const fromAstToSolidity = (node: ASTNode): string => {
  switch (node.type) {
    case "SourceUnit": {
      const header = "// SPDX-License-Identifier: GPL-3.0";
      const code = node.children
        .map((child) => fromAstToSolidity(child))
        .join("\n");
      return `${header}\n${code}`;
    }
    case "PragmaDirective":
      return `pragma solidity ${node.value};`;
    case "ContractDefinition":
      return `contract ${node.name} {\n${node.subNodes.map((subNode) => fromAstToSolidity(subNode as ASTNode)).join("\n")}\n}`;
    case "StateVariableDeclaration":
      return node.variables
        .map((variable) => {
          if (variable.typeName && "name" in variable.typeName) {
            return `${variable.typeName.name} ${variable.name};`;
          }
          throw new Error(
            "this variable case is not yet implemented in fromAstToSolidity",
          );
        })
        .join("\n");
    case "ElementaryTypeName":
      return node.name;
    default:
      return "";
  }
};

export const fromSolidityToAst = (code: string) => {
  return parse(code);
};
