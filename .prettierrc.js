module.exports = {
  // Plugins
  plugins: ['prettier-plugin-jsdoc'],

  // Prettier options
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  jsxSingleQuote: false,
  printWidth: 160,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',

  // JSDoc options
  jsdocDescriptionWithDot: true,
  jsdocSeparateReturnsFromParam: true,
  jsdocSeparateTagGroups: false,
  jsdocPreferCodeFences: true,
  tsdoc: true,
};
