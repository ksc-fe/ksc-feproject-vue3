/**
 * install command: npm install --save-dev prettier
 * filename: prettier.config.js
 */
module.exports = {
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxBracketSameLine: false,
    bracketSpacing: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    arrowParens: 'always',
    insertPragma: false,
    requirePragma: false,
    proseWrap: 'never',
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'lf',
    rangeStart: 0,
    overrides: [
        {
            files: '*.md',
            options: {
                tabWidth: 2
            }
        }
    ]
};
