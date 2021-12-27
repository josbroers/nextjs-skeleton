const colors = require('tailwindcss/colors'),
		forms = require('@tailwindcss/forms'),
		lineClamp = require('@tailwindcss/line-clamp')

const theme = {
	borderRadius: {
		DEFAULT: '0.313rem', // 5px
	},
	container: {
		padding: '1.25rem', // 20px
		center: true,
		screens: {
			sm: '100%',
			md: '100%',
			lg: '100%',
			xl: '100%',
		},
	},
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		inherit: 'inherit',
		black: colors.black,
		white: colors.white,
		gray: colors.neutral,
		blue: '#0070F3',
		purple: '#D400FF',
	},
	fontFamily: {
		inter: 'inter',
		interVar: 'inter var',
		sans: [
			'-apple-system',
			'BlinkMacSystemFont',
			'avenir next',
			'avenir',
			'segoe ui',
			'helvetica neue',
			'helvetica',
			'Ubuntu',
			'roboto',
			'noto',
			'arial',
		],
		serif: [
			'Iowan Old Style',
			'Apple Garamond',
			'Baskerville',
			'Times New Roman',
			'Droid Serif',
			'Times',
			'Source Serif Pro',
			'serif',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
		],
		mono: [
			'Menlo',
			'Consolas',
			'Monaco',
			'Liberation Mono',
			'Lucida Console',
			'monospace'
		],
	},
	spacing: '0.625rem', // 10px
}

const plugins = [
	forms,
	lineClamp
]

module.exports = {
	theme,
	plugins
}