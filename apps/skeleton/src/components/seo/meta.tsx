import {Meta as DefaultMeta} from "ui/seo"
import type {MetaTypes as Types} from "ui/seo/types"
import {useEffect, useState} from "react";
import seo from "@data/seo.json";

const defaultProps: Types = {
	title: seo.title,
	keywords: seo.keywords,
	description: seo.description,
	imageAltText: 'Next.js wallpaper',
	type: seo.type,
	siteName: seo.siteName,
	twitterCard: seo.twitterCard,
	author: seo.author
}

/**
 * Renders all relevant SEO `<meta>` and `<link>` elements
 *
 * @param props
 * @constructor
 */
const Meta = (props: Types) => {
	const [origin, setOrigin] = useState('')

	useEffect(() => {
		if (window.location.origin !== origin) {
			setOrigin(window.location.origin)
		}
	}, [origin])

	return (
		<DefaultMeta imageSource={props.imageSource ?? `${origin}/thumbnail.png`} {...props}/>
	)
}

Meta.defaultProps = defaultProps

export default Meta
