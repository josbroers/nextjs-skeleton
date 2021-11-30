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
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				'sans-serif',
			],
			mono: [
				'Menlo',
				'Monaco',
				'Lucida Console',
				'Liberation Mono',
				'DejaVu Sans Mono',
				'Bitstream Vera Sans Mono',
				'Courier New',
				'monospace',
			],
		},
		spacing: '0.625rem', // 10px
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
