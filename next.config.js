// @ts-check

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	trailingSlash: true,
	sassOptions: {
		prependData: `
      @import "src/styles/modules/rem-calc.scss";
      @import "src/styles/common/mixins.scss";
    `,
	},
	eslint: {
		dirs: ['pages', 'components', 'lib', 'icons'],
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

module.exports = withBundleAnalyzer(nextConfig)
