import baseConfig from "@acme/eslint-config/base";
import reactConfig from "@acme/eslint-config/react";
import oxlintConfig from "@acme/eslint-config/oxlint";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".ouput/**", ".vinxi/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...oxlintConfig
];