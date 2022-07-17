module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
		'dist',
    'node_modules',
    '.vscode',
    '.github',
    '.turbo',
    '.svelte-kit',
    '.angular',
    '.next',
    '*.config.ts',
    '*.config.js',
		'.eslintrc.*',
	],
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
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/indent': [
      'warn',
      2
    ],
    'eqeqeq': 'warn',
    'no-var': 'warn',
    'no-multi-spaces': 'warn',
    'indent': 'off',
    'eol-last': [
      'warn',
      'always'
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
  }
}
