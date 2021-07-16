module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    mocha: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'cypress/no-assigning-return-values': 'off',
    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
