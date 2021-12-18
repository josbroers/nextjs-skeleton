import { useEffect, useState } from 'react'
import Head from 'next/head'

export type Data = {
	title?: string
	keywords?: string
	description?: string
	type?: string
	siteName?: string
	imageSource?: string
	imageAltText?: string
	twitterCard?: string
	canonical?: string
}

/**
 * Renders all relevant SEO `<meta>` and `<link>` elements
 * @param props
 * @constructor
 */
const Meta = (props: Data) => {
	const { title, keywords, description, type, siteName, imageAltText, twitterCard } = props,
		[currentUrl, setCurrentUrl] = useState(''),
		[origin, setOrigin] = useState(''),
		imageSource = props.imageSource ?? `${origin}/thumbnail.png`,
		canonical = props.canonical ?? currentUrl

	useEffect(() => {
		if (window.location.href !== currentUrl) {
			setCurrentUrl(window.location.href)
		}

		if (window.location.origin !== origin) {
			setOrigin(window.location.origin)
		}
	}, [currentUrl, origin])

	return (
		<Head>
			<link rel="canonical" href={canonical} />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<meta name="robots" content="all" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:type" content={type} />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={imageSource} />
			<meta property="og:image:alt" content={imageAltText} />
			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageSource} />
			<meta name="twitter:image:alt" content={imageAltText} />
		</Head>
	)
}

export default Meta
