import {Meta as DefaultMeta} from "ui"
import type {Data} from "ui/Meta"
import options from '@data/seo.json'

const defaultProps: Data = {
	title: options.title,
	keywords: options.keywords,
	description: options.description,
	imageAltText: options.imageAltText,
	type: options.type,
	siteName: options.siteName,
	twitterCard: options.twitterCard,
}

const Meta = (props: Data) => (
	<DefaultMeta {...props}/>
)

Meta.defaultProps = defaultProps

export default Meta
