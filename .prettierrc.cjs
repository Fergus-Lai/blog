module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  jsxBracketSameLine: true,
  bracketSameLine: true,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",

        jsxBracketSameLine: true,
        bracketSameLine: true,
      },
    },
  ],
}
