const path = require("path");

/** @type {import("next").NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } }
		]
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		});

		return config;
	}
	/*trailingSlash: true,
	images: {
		formats: ["image/avif", "image/webp"]
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false
	},
	sassOptions: {
		prependData: `
      @import "scss/utils/breakpoints";
			@import "scss/utils/line-clamp";
			@import "scss/utils/unit";
    `
	},
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true
			},
			{
				source: "/github",
				destination: "https://github.com/josbroers/nextjs-skeleton",
				permanent: true
			},
			{
				source: "/npm",
				destination: "https://www.npmjs.com/package/create-nextjs-skeleton",
				permanent: true
			}
		];
	}*/
};

module.exports = nextConfig;
