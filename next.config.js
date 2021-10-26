// @ts-check

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	trailingSlash: true,
	sassOptions: {
		prependData: `
      @import "./styles/modules/rem-calc.scss";
      @import "./styles/common/mixins.scss";
    `,
	},
	eslint: {
		dirs: ["pages", "components", "lib", "icons"],
	},
	pwa: {
		runtimeCaching,
		disable: process.env.NODE_ENV === "development",
		dest: "public",
	},
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: "preact/compat",
				"react-dom/test-utils": "preact/test-utils",
				"react-dom": "preact/compat",
			})
		}

		return config
	},
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
