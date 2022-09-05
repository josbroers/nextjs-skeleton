type Data = {
	res: any
	header: string[]
}

export class CSP {
	private readonly res

	/**
	 * Content Security Policy based on Next.js and Google tips.
	 * @private
	 */
	private contentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src 'self' vitals.vercel-insights.com ws: wss:;
    font-src 'self' *.gstatic.com;
    object-src 'none';
    base-uri 'none';
	`
	/**
	 * Security headers based on Next.js tips.
	 * @link https://nextjs.org/docs/advanced-features/security-headers
	 * @private
	 */
	private headers = {
		'Content-Security-Policy': this.contentSecurityPolicy.replace(/\n/g, ''),
		'Referrer-Policy': 'origin-when-cross-origin',
		'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
		'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
		'X-Frame-Options': 'DENY',
		'X-Content-Type-Options': 'nosniff',
		'X-DNS-Prefetch-Control': 'on',
		'X-XSS-Protection': '1; mode=block',
	}

	constructor(res: Data["res"]) {
		this.res = res.next();

		return this.createResponse()
	}

	/**
	 * Add headers to NextResponse.
	 * @private
	 */
	private createResponse() {
		Object.entries(this.headers).forEach(([key, value]: Data['header']) => {
			this.res.headers.set(key, value)
		})

		return this.res
	}
}
