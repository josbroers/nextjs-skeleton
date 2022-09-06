import type {SchemaType} from "./types";

/**
 * @link https://schema.org/WebSite
 * @param origin
 * @param siteName
 * @param siteDescription
 * @param inLanguage
 */
const webSite = (
	origin: SchemaType['origin'],
	siteName: SchemaType['siteName'],
	siteDescription: SchemaType['siteDescription'],
	inLanguage: SchemaType['inLanguage']
) => {
	if (!origin) {
		return
	}

	return {
		"@type": "WebSite",
		"@id": `${origin}/#website`,
		"url": `${origin}`,
		"name": `${siteName}`,
		"description": `${siteDescription}`,
		"inLanguage": `${inLanguage}`
	}
}

/**
 * @link https://schema.org/WebPage
 * @param href
 * @param title
 * @param origin
 * @param siteDescription
 * @param inLanguage
 */
const webPage = (
	href: SchemaType['href'],
	title: SchemaType['title'],
	origin: SchemaType['origin'],
	siteDescription: SchemaType['siteDescription'],
	inLanguage: SchemaType['inLanguage']
) => {
	if (!href || !origin || !title || !siteDescription || !inLanguage) {
		return;
	}

	return {
		"@type": "WebPage",
		"@id": `${href}#webpage`,
		"url": `${href}`,
		"name": `${title}`,
		"isPartOf": {
			"@id": `${origin}/#website`
		},
		"description": `${siteDescription}`,
		"breadcrumb": {
			"@id": `${href}#breadcrumb`
		},
		"inLanguage": `${inLanguage}`
	}
}


/**
 * Renders WebSite and WebPage schema.
 * @param props
 * @constructor
 */
export const Schema = (props: SchemaType) => {
	const {siteName, siteDescription, inLanguage, title, origin, href} = props

	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			webSite(origin, siteName, siteDescription, inLanguage),
			href !== `${origin}/` ? webPage(href, title, origin, siteDescription, inLanguage) : ''
		]
	}

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
		</>
	)
}
