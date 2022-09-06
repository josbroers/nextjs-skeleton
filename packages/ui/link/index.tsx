import React from 'react'
import type {LinkInterface} from "./types";

/**
 * Default props for the `<ExternalLink>` component.
 */
const defaultProps: LinkInterface = {
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
const ExternalLink = (props: LinkInterface) => {
	const {href, children, title, className, target, rel} = props

	return (
		<a href={href} title={title} rel={rel} className={className} target={target}>
			{children}
		</a>
	)
}

ExternalLink.defaultProps = defaultProps

export default ExternalLink
