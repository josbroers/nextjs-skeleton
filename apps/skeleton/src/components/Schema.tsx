import {Schema as DefaultSchema} from "ui"
import type {SchemaData} from "ui"
import options from '@data/seo.json'

const defaultProps: SchemaData = {
	siteName: options.siteName,
	siteDescription: options.description,
	inLanguage: options.inLanguage,
}

/**
 * Renders WebSite and WebPage schema
 *
 * @param props
 * @constructor
 */
const Schema = (props: SchemaData) => (
	<DefaultSchema {...props}/>
)

Schema.defaultProps = defaultProps

export default Schema
