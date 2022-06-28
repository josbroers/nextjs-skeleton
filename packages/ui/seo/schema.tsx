import {useEffect, useState} from 'react'
import type {SchemaTypes as Types} from "./types";
import Head from 'next/head'

/**
 * Renders WebSite and WebPage schema.
 *
 * @param props
 * @constructor
 */
export const Schema = (props: Types) => {
	const {siteName, description, siteDescription, inLanguage, title} = props
	const [currentUrl, setCurrentUrl] = useState('')
	const [origin, setOrigin] = useState('')

	useEffect(() => {
		if (window.location.origin !== origin) {
			setOrigin(window.location.origin)
		}

		if (window.location.href !== currentUrl) {
			setCurrentUrl(origin + encodeURIComponent(window.location.pathname))
		}
	}, [currentUrl, origin])

	const webPage =
		currentUrl !== `${origin}/`
			? `,{
				"@type": "WebPage",
				"@id": "${currentUrl}#webpage",
				"url": "${currentUrl}",
				"name": "${title}",
				"isPartOf": {
					"@id": "${origin}/#website"
				},
				"description": "${description}",
				"breadcrumb": {
					"@id": "${currentUrl}#breadcrumb"
				},
				"inLanguage": "${inLanguage}"
			}`
			: ''

	return (
		<Head>
			<script type="application/ld+json">
				{`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "${origin}/#website",
                "url": "${origin}",
                "name": "${siteName}",
                "description": "${siteDescription}",
                "inLanguage": "${inLanguage}"
              }${webPage}
            ]
          }
        `}
			</script>
		</Head>
	)
}
