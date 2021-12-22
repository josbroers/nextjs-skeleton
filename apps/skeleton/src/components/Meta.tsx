import {Meta as DefaultMeta} from "ui"
import type {Data} from "ui/Meta"
import options from '@data/seo.json'
import {useEffect, useState} from "react";

const defaultProps: Data = {
	title: options.title,
	keywords: options.keywords,
	description: options.description,
	imageAltText: options.imageAltText,
	type: options.type,
	siteName: options.siteName,
	twitterCard: options.twitterCard,
	author: options.author
}

/**
 * Renders all relevant SEO `<meta>` and `<link>` elements
 * @param props
 * @constructor
 */
const Meta = (props: Data) => {
	const [origin, setOrigin] = useState('')

	useEffect(() => {
		if (window.location.origin !== origin) {
			setOrigin(window.location.origin)
		}
	}, [origin])

	return (
		<DefaultMeta imageSource={props.imageSource ?? `${origin}${options.imageSource}`} {...props}/>
	)
}

Meta.defaultProps = defaultProps

export default Meta
