import {Schema as DefaultSchema} from "ui/seo"
import type {SchemaTypes as Types} from "ui/seo/types"
import seo from "@data/seo.json";

// Default props for the `<Schema>` component
const defaultSchemaProps: Types = {
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
const Schema = (props: Types) => (
	<DefaultSchema {...props}/>
)

Schema.defaultProps = defaultSchemaProps
export default Schema
