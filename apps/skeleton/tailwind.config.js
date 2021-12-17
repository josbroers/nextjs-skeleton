const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		borderRadius: {
			DEFAULT: '0.313rem', // 5px
		},
		container: {
			padding: '1.25rem', // 20px
			center: true,
			screens: {
				sm: '100%',
				md: '100%',
				lg: '64rem', // 1024px
				xl: '80rem', // 1280px
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			inherit: 'inherit',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
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
			mono: ['Menlo', 'Consolas', 'Monaco', 'Liberation Mono', 'Lucida Console', 'monospace'],
		},
		spacing: '0.625rem', // 10px
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
