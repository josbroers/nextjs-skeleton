// @ts-check

const withTM = require('next-transpile-modules')(['ui'])

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	sassOptions: {
		prependData: `
      @import "~foundation-sites/scss/util/unit";
    `,
	},
	eslint: {
		dirs: ['src'],
	},
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			})
		}

		return config
	},
}

module.exports = withTM(nextConfig)
