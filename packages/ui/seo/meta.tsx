import {useEffect, useState} from "react";
import type {MetaTypes as Types} from "./types";

/**
 * Renders all relevant SEO `<meta>` and `<link>` elements.
 *
 * @param props
 * @constructor
 */
export const Meta = (props: Types) => {
	const {
		title,
		keywords,
		description,
		type,
		siteName,
		imageAltText,
		imageSource,
		twitterCard,
		author,
		publishDate
	} = props

	const [currentUrl, setCurrentUrl] = useState('');
	const canonical = props.canonical ?? currentUrl

	useEffect(() => {
		setCurrentUrl(window.location.href)
	}, [])

	return (
		<>
			{canonical && <link rel="canonical" href={canonical}/>}
			<link rel="icon" href="/favicon.ico"/>
			<meta name="robots" content="all"/>
			{keywords && <meta name="keywords" content={keywords}/>}
			{description && <meta name="description" content={description}/>}
			{author && <meta name="author" content={author}/>}
			{publishDate && <meta name="publish_date" property="og:publish_date" content={publishDate}/>}
			{currentUrl && <meta property="og:url" content={currentUrl}/>}
			{type && <meta property="og:type" content={type}/>}
			{siteName && <meta property="og:site_name" content={siteName}/>}
			{description && <meta property="og:description" content={description}/>}
			{title && <meta property="og:title" content={title}/>}
			{imageSource && <meta property="og:image" content={imageSource}/>}
			{imageSource && imageAltText && <meta property="og:image:alt" content={imageAltText}/>}
			{twitterCard && <meta name="twitter:card" content={twitterCard}/>}
			{title && <meta name="twitter:title" content={title}/>}
			{description && <meta name="twitter:description" content={description}/>}
			{imageSource && <meta name="twitter:image" content={imageSource}/>}
			{imageSource && imageAltText && <meta name="twitter:image:alt" content={imageAltText}/>}
		</>
	)
}
