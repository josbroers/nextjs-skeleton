export const GTM_ID = process.env.NEXT_PUBLIC_GTM

declare global {
	interface Window {
		dataLayer: any
	}
}

type Data = {
	url: string
}

export const Pageview = ({ url }: Data) => {
	window.dataLayer.push({
		event: "pageview",
		page: url,
	})
}
