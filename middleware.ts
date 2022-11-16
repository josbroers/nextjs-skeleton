import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import csp from "@lib/csp";

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
	return csp(NextResponse);
};

export default Middleware;
