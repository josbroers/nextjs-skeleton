/**
 * Define Content Security Policy
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
 */
export const contentSecurityPolicy = `
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
