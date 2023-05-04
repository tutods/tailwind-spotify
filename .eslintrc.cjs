const fs = require('fs');

const srcFolders = fs
  .readdirSync('./src', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory() && !['styles'].includes(dirent.name))
  .map((dirent) => dirent.name);

module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier', 'plugin:storybook/recommended'],

  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { usePrettierrc: true }],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        extraFileExtensions: ['.css'],
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
        'simple-import-sort',
        'import',
        'unused-imports',
      ],
      rules: {
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-restricted-imports': 'off',
        // warning for now, until solve everything
        '@typescript-eslint/no-restricted-imports': [
          'warn',
          {
            patterns: ['../*', './*'],
          },
        ],
        'prefer-rest-params': 'warn',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'unused-imports/no-unused-imports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                '^react',
                '^react\\/([a-z0-9]+)',
                '^react([a-zA-Z0-9\\-]+)?',
                '^next',
                '^next([a-zA-Z0-9\\-]+)?\\/([a-z0-9]+)',
                '^@storybook\\/([a-z0-0]+)',
                '^@?\\w',
              ],
              [
                `^(${srcFolders.join('|')})(/.*|$)`, // for folders without @
                `^(${srcFolders
                  .map((folder) => `@${folder}`)
                  .join('|')})(/.*|$)`, // for tsconfig paths (with @)
                '^@enums/',
                '^@constants/',
                '^@/', // path to src folder
                '^\\.',
                '^@\\/([a-z0-9]+)',
              ],
              ['^styles', 'styles', './styles', '^.+\\.s?css$'],
              ['^'], // if not match on other groups
            ],
          },
        ],
      },
    },
    {
      files: ['**/*.tsx', '**/*.jsx', '**/*.spec.tsx', '**/*.test.tsx'],
      extends: ['plugin:react/recommended'],
      plugins: ['react'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'jsx-quotes': ['error', 'prefer-double'],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/jsx-curly-brace-presence': ['error', { props: 'never' }],
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-sort-props': [
          'error',
          {
            shorthandFirst: true,
            multiline: 'last',
            reservedFirst: ['key'],
          },
        ],
      },
    },
    {
      files: ['**/*.js?(x)'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
