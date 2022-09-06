import type {generateSitemapType} from "./types";

/**
 * Generate the sitemap.
 * @param host
 */
export const generateSitemap = (host: generateSitemapType["host"]) => {
	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
	      <loc>https://${host}/</loc>
	      <lastmod>${new Date().toISOString()}</lastmod>
	      <changefreq>monthly</changefreq>
	      <priority>1.0</priority>
      </url>
    </urlset>`;
}
