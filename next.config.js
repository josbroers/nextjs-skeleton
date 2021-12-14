// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	trailingSlash: true,
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

module.exports = nextConfig
