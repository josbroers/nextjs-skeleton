import React from 'react'

// Typecasting logic for the `<ExternalLink>` component
interface Data {
	target?: '_self' | '_blank' | '_parent' | '_top'
	href: string
	children: React.ReactNode
	title: string
	className?: any
	rel?: 'nofollow' | 'noreferrer' | 'external'
}

// Default props for the `<ExternalLink>` component
const defaultProps: Data = {
	target: '_self',
	rel: 'external',
	href: '',
	children: '',
	title: '',
}

/**
 * Create a link for external URLs
 * @param props
 * @constructor
 */
const ExternalLink = (props: Data) => {
	const {href, children, title, className, target, rel} = props

	return (
		<a href={href} title={title} rel={rel} className={className} target={target}>
			{children}
		</a>
	)
}

ExternalLink.defaultProps = defaultProps
export default ExternalLink
