module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'airbnb-base',
    'airbnb-typescript',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    'comma-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/comma-dangle': 'warn',
  },
  reportUnusedDisableDirectives: true,
};
