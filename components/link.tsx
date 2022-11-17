import React from "react";

export interface LinkProps {
	target?: "_self" | "_blank" | "_parent" | "_top";
	href: string;
	children: React.ReactNode;
	title: string;
	className?: any;
	rel?: "nofollow" | "noreferrer" | "external";
}

const defaultProps: LinkProps = {
	target: "_self",
	rel: "external",
	href: "",
	children: "",
	title: ""
};

export default function ExternalLink({ href, children, title, className, target, rel }: LinkProps) {
	return (
		<a href={href} title={title} rel={rel} className={className} target={target}>
			{children}
		</a>
	);
};

ExternalLink.defaultProps = defaultProps;
