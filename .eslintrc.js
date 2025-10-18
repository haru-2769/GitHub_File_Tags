module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],

  env: {
    browser: true,
    node: true,
    webextensions: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {},
};
