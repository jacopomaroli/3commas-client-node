module.exports = {
  parser: '@typescript-eslint/parser', // https://stackoverflow.com/questions/63386866/parsing-error-the-keyword-enum-is-reserved
  plugins: [
    '@typescript-eslint' // https://github.com/typescript-eslint/typescript-eslint/issues/379
  ],
  extends: [
    'standard',
    'plugin:mocha/recommended',
    'plugin:chai-friendly/recommended'
  ],
  rules: {
    'mocha/no-hooks-for-single-case': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error', // https://github.com/typescript-eslint/typescript-eslint/issues/2619,
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2], // https://github.com/eslint/eslint/issues/13956,
    'chai-friendly/no-unused-expressions': 'off'
  }
}
