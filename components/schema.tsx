export type SchemaProps = {
	siteName: string
	inLanguage: string
	title: string
	siteDescription: string
	origin: string | undefined
	href: string | undefined
}

const webSite = (
	origin: SchemaProps["origin"],
	siteName: SchemaProps["siteName"],
	siteDescription: SchemaProps["siteDescription"],
	inLanguage: SchemaProps["inLanguage"]
) => {
	if (!origin) {
		return;
	}

	return {
		"@type": "WebSite",
		"@id": `${origin}/#website`,
		"url": `${origin}`,
		"name": `${siteName}`,
		"description": `${siteDescription}`,
		"inLanguage": `${inLanguage}`
	};
};

const webPage = (
	href: SchemaProps["href"],
	title: SchemaProps["title"],
	origin: SchemaProps["origin"],
	siteDescription: SchemaProps["siteDescription"],
	inLanguage: SchemaProps["inLanguage"]
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
	};
};


export default function Schema(props: SchemaProps) {
	const { siteName, siteDescription, inLanguage, title, origin, href } = props;

	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			webSite(origin, siteName, siteDescription, inLanguage),
			href !== `${origin}/` ? webPage(href, title, origin, siteDescription, inLanguage) : ""
		]
	};

	return (
		<script id="schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
	);
};
