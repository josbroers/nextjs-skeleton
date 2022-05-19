import {GetServerSideProps} from "next"
import {Sitemap} from "lib/seo/sitemap"

/**
 * Create a sitemap on page load
 * Docs: https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js
 * @param res
 * @param req
 */
export const getServerSideProps: GetServerSideProps = async ({res, req}) => {
	const props = {
		props: {},
	}

	if (!req || !res) {
		return props
	}

	const sitemap = new Sitemap(req.headers.host).generateSitemap()
	res.setHeader("Content-Type", "text/xml")
	res.setHeader("Cache-Control", "public, s-maxage=1, stale-while-revalidate=59")
	res.write(sitemap);
	res.end();

	return props
};

const SitemapXML = () => {
}

export default SitemapXML
