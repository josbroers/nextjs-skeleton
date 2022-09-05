import React from 'react'
import type {Types} from "./types";

/**
 * Default props for the `<ExternalLink>` component.
 */
const defaultProps: Types = {
	target: '_self',
	rel: 'external',
	href: '',
	children: '',
	title: '',
}

/**
 * Create a link for external URLs.
 * @param props
 * @constructor
 */
const ExternalLink = (props: Types) => {
	const {href, children, title, className, target, rel} = props

	return (
		<a href={href} title={title} rel={rel} className={className} target={target}>
			{children}
		</a>
	)
}

ExternalLink.defaultProps = defaultProps

export default ExternalLink
