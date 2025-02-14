import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default [
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ),
  {
    plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [['module', '/^next/'], '/^@/styles/', '/^@/components/', '/@/lib/', ['parent', 'sibling', 'index']],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
  },
]
