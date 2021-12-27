import React from "react";
import {GetServerSideProps} from "next"

/**
 * Create a sitemap on page load
 * Docs: https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js
 * @constructor
 */
const Sitemap = () => {
};

export const getServerSideProps: GetServerSideProps = async ({res, req}) => {
	if (!req || !res) {
		return {
			props: {},
		}
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
	      <loc>https://${req.headers.host}/</loc>
	      <lastmod>${new Date().toISOString()}</lastmod>
	      <changefreq>monthly</changefreq>
	      <priority>1.0</priority>
      </url>
    </urlset>
  `;

	res.setHeader("Content-Type", "text/xml")
	res.setHeader("Cache-Control", "public, s-maxage=1, stale-while-revalidate=59")
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;