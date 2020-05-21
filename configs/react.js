module.exports = {
  extends: ['eslint:recommended', 'prettier/react', 'plugin:react/recommended'],
  env: {
    browser: true,
  },
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: ['react'],
}
