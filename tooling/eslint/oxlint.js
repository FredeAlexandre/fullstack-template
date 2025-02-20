import tseslint from "typescript-eslint";

import oxlint from 'eslint-plugin-oxlint';

export default tseslint.config({
    extends: [
        oxlint.configs["flat/recommended"]
    ]
})
