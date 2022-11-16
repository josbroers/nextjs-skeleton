export type cspProps = {
	res: any
	header: string[]
}

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
`;

const HEADERS = {
	"Content-Security-Policy": CSP.replace(/\n/g, ""),
	"Referrer-Policy": "origin-when-cross-origin",
	"Permissions-Policy": "camera=(), microphone=(), geolocation=()",
	"Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
	"X-Frame-Options": "DENY",
	"X-Content-Type-Options": "nosniff",
	"X-DNS-Prefetch-Control": "on",
	"X-XSS-Protection": "1; mode=block"
};

export default function csp(res: cspProps["res"]) {
	const result = res.next();

	Object.entries(HEADERS).forEach(([key, value]: cspProps["header"]) => {
		result.headers.set(key, value);
	});

	return result;
};
