import { useEffect, useState } from "react"
import Head from "next/head"
import router from "next/router"
import options from "@data/seo.json"

type Data = {
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

const defaultProps: Data = {
	title: options.title,
	keywords: options.keywords,
	description: options.description,
	imageAltText: options.imageAltText,
	type: options.type,
	siteName: options.siteName,
	twitterCard: options.twitterCard,
}

const Meta = (props: Data) => {
	const { title, keywords, description, type, siteName, imageAltText, twitterCard } = props
	const [currentUrl, setCurrentUrl] = useState("")
	const [origin, setOrigin] = useState("")
	const imageSource = props.imageSource ?? `${origin}/thumbnail.png`
	const canonical = props.canonical ?? currentUrl

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
			<link rel="manifest" href="/manifest.json" />
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<meta name="robots" content="all" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta name="application-name" content={siteName} />
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
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			<meta name="apple-mobile-web-app-title" content={siteName} />
			<meta name="format-detection" content="telephone=no" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="msapplication-TileColor" content="#0070f3" />
			<meta name="msapplication-tap-highlight" content="no" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="theme-color" content="#0070f3" />
		</Head>
	)
}

Meta.defaultProps = defaultProps

export default Meta
