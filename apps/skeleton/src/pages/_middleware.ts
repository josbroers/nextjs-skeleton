import type {NextFetchEvent, NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {Headers} from 'lib'

/**
 * Add security headers
 * @constructor
 */
const Response = () => {
	const response = NextResponse.next()

	Object.entries(Headers).forEach(([key, value]) => {
		response.headers.set(key, value)
	})

	return response
}

/**
 * Middleware enables you to use code over configuration.
 * This gives you full flexibility in Next.js, because you can run code before a request is completed.
 * Based on the user's incoming request, you can:
 * - Modify the response by rewriting
 * - Redirecting, adding headers
 * - Or even streaming HTML
 * @param req
 * @param ev
 * @constructor
 */
const Middleware = (req: NextRequest, ev: NextFetchEvent) => {
	return Response()
}

export default Middleware
