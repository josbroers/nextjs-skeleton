import {useEffect, useState} from "react";
import type {SchemaTypes as Types} from "./types";

/**
 * Renders WebSite and WebPage schema.
 * @param props
 * @constructor
 */
export const Schema = (props: Types) => {
	const {siteName, siteDescription, inLanguage, title} = props
	const [currentUrl, setCurrentUrl] = useState('');
	const [origin, setOrigin] = useState('');

	useEffect(() => {
		const location = window.location
		setCurrentUrl(location.href)
		setOrigin(location.origin)
	}, [])

	/**
	 * @link https://schema.org/WebSite
	 */
	const webSite = {
		"@type": "WebSite",
		"@id": `${origin}/#website`,
		"url": `${origin}`,
		"name": `${siteName}`,
		"description": `${siteDescription}`,
		"inLanguage": `${inLanguage}`
	}

	/**
	 * @link https://schema.org/WebPage
	 */
	const webPage = {
		"@type": "WebPage",
		"@id": `${currentUrl}#webpage`,
		"url": `${currentUrl}`,
		"name": `${title}`,
		"isPartOf": {
			"@id": `${origin}/#website`
		},
		"description": `${siteDescription}`,
		"breadcrumb": {
			"@id": `${currentUrl}#breadcrumb`
		},
		"inLanguage": `${inLanguage}`
	}
	
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			webSite,
			currentUrl !== `${origin}/` ? webPage : ''
		]
	}

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
		</>
	)
}
