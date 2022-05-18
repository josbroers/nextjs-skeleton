import {Schema as DefaultSchema} from "ui/seo"
import type {SchemaData} from "ui/seo"
import options from '@data/seo.json'

// Default props for the `<Schema>` component
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
