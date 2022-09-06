import type {contentSecurityPolicyType} from "./types"

/**
 * Content Security Policy based on Next.js and Google tips.
 * @private
 */
const CSP = `
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
const HEADERS = {
	'Content-Security-Policy': CSP.replace(/\n/g, ''),
	'Referrer-Policy': 'origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'X-DNS-Prefetch-Control': 'on',
	'X-XSS-Protection': '1; mode=block',
}

/**
 * Add headers to NextResponse.
 * @param res
 */
export const contentSecurityPolicy = (res: contentSecurityPolicyType["res"]) => {
	const result = res.next()

	Object.entries(HEADERS).forEach(([key, value]: contentSecurityPolicyType['header']) => {
		result.headers.set(key, value)
	})

	return result
}
