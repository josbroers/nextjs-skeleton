import {Schema} from "ui/seo"
import type {SchemaTypes as Types} from "ui/seo/types"

// Default props for the `<Schema>` component.
const defaultSchemaProps: Types = {
	siteName: "Next.js Skeleton",
	siteDescription: "A simple and highly customizable skeleton build with Turborepo and Next.js. Featuring ESLint, Husky, Preact, Prettier, Sass, TypeScript and much more!",
	inLanguage: "en",
}

/**
 * Renders WebSite and WebPage schema.
 *
 * @param props
 * @constructor
 */
export const CustomSchema = (props: Types) => (
	<Schema {...props}/>
)

CustomSchema.defaultProps = defaultSchemaProps

export default CustomSchema
