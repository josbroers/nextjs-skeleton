import React from "react";

/**
 * Typecasting logic for the `<ExternalLink>` component.
 */
export interface Types {
	target?: '_self' | '_blank' | '_parent' | '_top'
	href: string
	children: React.ReactNode
	title: string
	className?: any
	rel?: 'nofollow' | 'noreferrer' | 'external'
}
