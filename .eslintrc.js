module.exports = {
    extends: ["eslint:recommended"],
    plugins: [],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        es6: true,
        node: true,
        jest: true
    },
    globals: {},
    rules: {
        "no-console": "off",
        "indent": ["error", 2]
    }
}
