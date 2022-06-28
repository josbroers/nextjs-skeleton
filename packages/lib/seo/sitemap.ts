type Data = {
	host: string | undefined
}

export class Sitemap {
	private readonly host

	constructor(host: Data["host"]) {
		this.host = host
	}

	/**
	 * Generate the sitemap.
	 */
	public generateSitemap() {
		return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
	      <loc>https://${this.host}/</loc>
	      <lastmod>${new Date().toISOString()}</lastmod>
	      <changefreq>monthly</changefreq>
	      <priority>1.0</priority>
      </url>
    </urlset>`;
	}
}
