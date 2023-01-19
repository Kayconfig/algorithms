module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    'no-unused-vars': ['error', 'all'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['off'],
  },
  reportUnusedDisableDirectives: true,
};
