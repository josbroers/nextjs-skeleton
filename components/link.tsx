import React from "react";

export interface LinkProps {
	href: string;
	children: React.ReactNode;
	title: string;
	className?: any;
	target?: "_self" | "_blank" | "_parent" | "_top";
	rel?: "nofollow" | "noreferrer" | "external" | "noopener";
}

export default function ExternalLink(
	{
		href,
		children,
		title,
		className,
		target = "_self",
		rel = "external"
	}: LinkProps) {
	return (
		<a href={href} title={title} rel={rel} className={className} target={target}>
			{children}
		</a>
	);
};
