export type generateSitemapProps = {
	host: string
}

export function generateSitemap(host: generateSitemapProps["host"]) {
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
