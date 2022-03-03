/**
 * Define Content Security Policy
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
 */
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src 'self' vitals.vercel-insights.com;
    font-src 'self' *.gstatic.com;
    object-src 'none';
    base-uri 'none';
    require-trusted-types-for 'script';
  `

/**
 * Security headers based on Next.js tips
 * https://nextjs.org/docs/advanced-features/security-headers
 */
const Headers = {
	'Content-Security-Policy': ContentSecurityPolicy.replace(/\n/g, ''),
	'Referrer-Policy': 'origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'X-DNS-Prefetch-Control': 'on',
	'X-XSS-Protection': '1; mode=block',
}

export default Headers
