module.exports = {
  env: {
    browser: true,
  },

  extends: 'airbnb',

  // Always enforce rules with 'error'. We want the build to break on style violations.
  rules: {
    // Rules we're deliberately changing
    'func-names': 'off',
    'indent': ['error', 2],
    'no-underscore-dangle': 'off',
    'quote-props': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/extensions': ['off', 'never'],
  },
};
