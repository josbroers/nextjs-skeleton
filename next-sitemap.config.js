/** @type {import("next-sitemap").IConfig} */
const nextSitemapConfig = {
	siteUrl: process.env.NEXT_PUBLIC_ORIGIN,
	changefreq: "monthly",
	priority: 1,
	generateRobotsTxt: true,
	exclude: [],
	generateIndexSitemap: false,
	transform: async (config, path) => {
		return {
			loc: path,
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? []
		};
	},
	additionalPaths: async (config) => [],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/"
			}
		],
		additionalSitemaps: []
	}
};

module.exports = nextSitemapConfig;
