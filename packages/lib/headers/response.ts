import {headers} from "./headers";

/**
 * Add security headers
 * @constructor
 */
export const response = (NextResponse: any) => {
	const response = NextResponse.next()

	Object.entries(headers).forEach(([key, value]) => {
		if (typeof value !== "string") {
			return
		}

		response.headers.set(key, value)
	})

	return response
}
