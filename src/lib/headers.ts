import { NextResponse } from 'next/server'

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
  `

/**
 * Add security headers based on Next.js tips
 * https://nextjs.org/docs/advanced-features/security-headers
 *
 * @constructor
 */
const Response = () => {
	const response = NextResponse.next()

	response.headers.set('Content-Security-Policy', ContentSecurityPolicy.replace(/\n/g, ''))
	response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
	response.headers.set('X-Frame-Options', 'DENY')
	response.headers.set('X-Content-Type-Options', 'nosniff')
	response.headers.set('X-DNS-Prefetch-Control', 'on')
	response.headers.set('X-XSS-Protection', '1; mode=block')

	return response
}

export default Response
