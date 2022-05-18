import {contentSecurityPolicy} from "./csp";

/**
 * Security headers based on Next.js tips
 * https://nextjs.org/docs/advanced-features/security-headers
 */
export const headers = {
	'Content-Security-Policy': contentSecurityPolicy.replace(/\n/g, ''),
	'Referrer-Policy': 'origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'X-DNS-Prefetch-Control': 'on',
	'X-XSS-Protection': '1; mode=block',
}
