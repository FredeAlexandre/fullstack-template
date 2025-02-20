// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import oxlint from 'eslint-plugin-oxlint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  oxlint.configs['flat/recommended']
);
