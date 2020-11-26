module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
        'error',
        'ignorePackages',
        {
          'js': 'never',
          'jsx': 'never',
          'ts': 'never',
          'tsx': 'never'
        }
    ],
    'max-len': ['error', 120],
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
