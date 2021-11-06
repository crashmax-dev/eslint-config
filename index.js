module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    'eqeqeq': 'warn',
    'no-var': 'warn',
    'no-multi-spaces': 'warn',
    'indent': [
      'off'
    ],
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'semi': [
      'warn',
      'never'
    ],
    'comma-dangle': [
      'warn',
      'never'
    ],
    'quotes': [
      'warn',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'yoda': [
      'warn',
      'never',
      {
        'exceptRange': true
      }
    ],
    'no-trailing-spaces': [
      'warn',
      {
        'skipBlankLines': true
      }
    ],
    'block-spacing': [
      'warn',
      'always'
    ],
    'no-unsafe-negation': [
      'warn',
      {
        'enforceForOrderingRelations': true
      }
    ],
    'multiline-ternary': [
      'warn',
      'always-multiline'
    ]
  },
  env: {
    node: true
  }
}

