// @ts-check

const withTM = require( "next-transpile-modules" )( [ "ui", "lib" ] );

/**
 * @type {import("next").NextConfig}
 **/
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		formats: [ "image/avif", "image/webp" ],
	},
	sassOptions: {
		prependData: `
      @import "../../packages/scss/breakpoints";
			@import "../../packages/scss/line-clamp";
			@import "../../packages/scss/unit";
    `,
	},
	eslint: {
		dirs: [ "src" ],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production" ? { exclude: [ "error" ] } : false,
	},
	output: "standalone",
	webpack: ( config, { dev } ) => {
		if ( !dev ) {
			Object.assign( config.resolve.alias, {
				react: "preact/compat",
				"react-dom/test-utils": "preact/test-utils",
				"react-dom": "preact/compat",
			} );
		}

		config.module.rules.push( {
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [ "@svgr/webpack" ],
		} );

		return config;
	},
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
			{
				source: "/github",
				destination: "https://github.com/jos-broers/nextjs-skeleton",
				permanent: true,
			},
			{
				source: "/npm",
				destination: "https://www.npmjs.com/package/create-nextjs-skeleton",
				permanent: true,
			},
		];
	},
};

module.exports = withTM( nextConfig );
