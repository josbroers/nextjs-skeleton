import {useEffect, useState} from 'react'
import Head from 'next/head'

// Typecasting logic for the `<Schema>` component
export type SchemaData = {
	siteName?: string
	description?: string
	inLanguage?: string
	title?: string
	siteDescription?: string
}

/**
 * Renders WebSite and WebPage schema
 * @param props
 * @constructor
 */
export const Schema = (props: SchemaData) => {
	const {siteName, description, siteDescription, inLanguage, title} = props,
		[currentUrl, setCurrentUrl] = useState(''),
		[origin, setOrigin] = useState('')

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
