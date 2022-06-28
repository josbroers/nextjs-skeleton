import {Meta} from "ui/seo"
import type {MetaTypes as Types} from "ui/seo/types"
import {useEffect, useState} from "react";

// Default props for the `<Meta>` component.
const defaultProps: Types = {
	title: "Next.js Skeleton: ESLint, Husky, Preact, Prettier, Sass, TypeScript and much more!",
	keywords: "next, next.js, skeleton, turborepo",
	description: "A simple and highly customizable skeleton build with Turborepo and Next.js. Featuring ESLint, Husky, Preact, Prettier, Sass, TypeScript and much more!",
	imageAltText: 'Next.js wallpaper',
	type: "website",
	siteName: "Next.js Skeleton",
	twitterCard: "summary_large_image",
	author: "Jos Broers"
}

/**
 * Renders all relevant SEO `<meta>` and `<link>` elements.
 *
 * @param props
 * @constructor
 */
export const CustomMeta = (props: Types) => {
	const [origin, setOrigin] = useState('')

	useEffect(() => {
		if (window.location.origin !== origin) {
			setOrigin(window.location.origin)
		}
	}, [origin])

	return (
		<Meta imageSource={props.imageSource ?? `${origin}/thumbnail.png`} {...props}/>
	)
}

CustomMeta.defaultProps = defaultProps

export default CustomMeta
