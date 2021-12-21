/**
 * Generate a sitemap using the package`next-sitemap`
 * Docs: https://github.com/iamvishnusankar/next-sitemap
 * @type {{generateRobotsTxt: boolean, siteUrl}}
 */
module.exports = {
	siteUrl: process.env.WEBSITE_URL,
	generateRobotsTxt: true,
}
