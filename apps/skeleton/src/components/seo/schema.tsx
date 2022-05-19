import {Schema as DefaultSchema} from "ui/seo"
import type {SchemaData} from "ui/seo"
import seo from '@data/seo.json'

// Default props for the `<Schema>` component
const defaultProps: SchemaData = {
	siteName: seo.siteName,
	siteDescription: seo.description,
	inLanguage: seo.inLanguage,
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
