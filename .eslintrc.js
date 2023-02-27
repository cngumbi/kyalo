module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 12,
    },
    rules: {
        'no-console': 0,
        'indent': 4,
    },

};