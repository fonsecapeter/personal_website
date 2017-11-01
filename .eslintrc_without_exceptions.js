module.exports = {
    env: {
        browser: true,
        jquery: true,
        mocha: true,
    },

    extends: 'airbnb-base',

    globals: {
        _: true,
        Backbone: true,
        TTAM: true,
    },

    // Always enforce rules with 'error'. We want the build to break on style violations.
    rules: {
        // Rules we're deliberately changing
        'func-names': 'off',
        indent: ['error', 4],
        'no-underscore-dangle': 'off',
        'quote-props': 'off',
    },
};
