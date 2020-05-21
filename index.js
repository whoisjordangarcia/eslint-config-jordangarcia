module.exports = {
  extends: [
    './configs/non-rules-config',
    './configs/cypress',
    './configs/typescript',
    './configs/jest',
    './configs/prettier',
    './configs/jsx-a11y',
    './configs/react',
  ].map(require.resolve),
}
