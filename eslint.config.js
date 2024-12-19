import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      import: eslintPluginImport,
      unicorn: eslintPluginUnicorn,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-warning-comments': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'jsx-a11y/alt-text': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
)
