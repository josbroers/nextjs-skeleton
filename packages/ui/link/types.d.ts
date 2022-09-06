import React from "react";

/**
 * Interface for the {@link ExternalLink()} component.
 */
export interface LinkInterface {
	target?: '_self' | '_blank' | '_parent' | '_top'
	href: string
	children: React.ReactNode
	title: string
	className?: any
	rel?: 'nofollow' | 'noreferrer' | 'external'
}
