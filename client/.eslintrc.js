module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    'max-len': ['error', 120],
  },
};
