import {Schema as DefaultSchema} from "ui"
import type {Data} from "ui/Schema"
import options from '@data/seo.json'

const defaultProps: Data = {
	siteName: options.siteName,
	siteDescription: options.description,
	inLanguage: options.inLanguage,
}

/**
 * Renders WebSite and WebPage schema
 * @param props
 * @constructor
 */
const Schema = (props: Data) => (
	<DefaultSchema {...props}/>
)

Schema.defaultProps = defaultProps

export default Schema
