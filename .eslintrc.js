export default {
	env: {
		browser: true,
		es2021: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		arrowParens: 'avoid',
		bracketSpacing: true,
		printWidth: 120,
		quoteProps: 'as-needed',
		singleQuote: true,
		tabWidth: 4,
		trailingComma: 'none',
		useTabs: true,
        "comma-dangle": ["error", "never"]
	}
};
