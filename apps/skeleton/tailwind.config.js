const theme = require("config").tailwindPreset.theme
const plugins = require("config").tailwindPreset.plugins

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,scss,css,html}',
		'../../packages/ui/**/*.{js,ts,jsx,tsx,scss,css,html}'
	],
	theme: {
		...theme,
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		...plugins
	],
}
