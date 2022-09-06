import {useRouter} from 'next/router'

/**
 * Get the current URL parameters.
 */
export const useCurrentUrl = () => {
	const router = useRouter()
	const origin = process.env.NEXT_PUBLIC_ORIGIN ?? undefined

	return {
		origin: origin,
		pathname: router.pathname,
		href: origin ? `${origin}${router.pathname}` : undefined
	};
}
