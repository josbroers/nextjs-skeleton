import {SitemapStream, streamToPromise} from 'sitemap'
import {createGzip} from 'zlib'
import {GetServerSideProps} from 'next'

/**
 * Default Sitemap component
 *
 * @constructor
 */
const Sitemap = () => <div>This should not be navigated to.</div>
export default Sitemap

let sitemap: any = null

/**
 * Add URLs to sitemap
 *
 * @param smStream
 */
const addUrls = async (smStream: SitemapStream) => {
	smStream.write({
		url: '',
	})
}

/**
 * Build and render sitemap
 *
 * @param res
 * @param req
 */
export const getServerSideProps: GetServerSideProps = async ({res, req}) => {
	if (!req || !res) {
		return {
			props: {},
		}
	}

	res.setHeader('Content-Type', 'application/xml')
	res.setHeader('Content-Encoding', 'gzip')
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

	/**
	 * Return sitemap if cached
	 */
	if (sitemap) {
		res.write(sitemap)
		res.end()

		return {
			props: {},
		}
	}

	const smStream = new SitemapStream({
		hostname: `https://${req.headers.host}/`,
		xmlns: {
			news: true,
			xhtml: true,
			image: true,
			video: true,
			custom: [
				'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
				'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"',
			],
		},
	})

	const pipeline = smStream.pipe(createGzip())

	try {
		await addUrls(smStream)
		smStream.end()

		const resp = await streamToPromise(pipeline)

		/* Cache the result */
		sitemap = resp

		res.write(resp)
		res.end()
	} catch (err) {
		res.statusCode = 500
		res.write('Sitemap could not be generated')
		res.end()
	}

	return {
		props: {},
	}
}
