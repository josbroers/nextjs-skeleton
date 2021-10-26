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
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
