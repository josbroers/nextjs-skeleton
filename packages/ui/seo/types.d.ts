// Typecasting logic for the `<Meta>` component.
export type MetaTypes = {
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
}

// Typecasting logic for the `<Schema>` component.
export type SchemaTypes = {
	siteName?: string
	description?: string
	inLanguage?: string
	title?: string
	siteDescription?: string
}
