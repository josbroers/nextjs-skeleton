/**
 * Types for the {@link Meta()} component.
 */
export type MetaType = {
	title: string
	keywords?: string
	description: string
	type: string
	siteName: string
	imageSource?: string
	imageAltText?: string
	twitterCard?: string
	canonical?: string
	author?: string
	publishDate?: string
	externImage?: boolean
	href: string | undefined
}

/**
 * Types for the {@link Schema()} component.
 */
export type SchemaType = {
	siteName: string
	inLanguage: string
	title: string
	siteDescription: string
	origin: string | undefined
	href: string | undefined
}
