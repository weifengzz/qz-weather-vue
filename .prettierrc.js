/** @format */

module.exports = {
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',
  jsxBracketSameLine: true,
  semi: true,
  'prettier.disableLanguages': ['html'],
  singleQuote: true,
  insertPragma: true,
  arrowParens: 'avoid',
  useTabs: false,
  overrides: [
    {
      files: ['*.json', '.eslintrc', '.tslintrc', '.prettierrc', '.tern-project'],
      options: {
        parser: 'json',
        tabWidth: 2,
      },
    },
    {
      files: '*.{css,sass,scss,less}',
      options: {
        parser: 'postcss',
        tabWidth: 2,
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
  ],
};
