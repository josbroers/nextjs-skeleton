"use client";

import React from "react";

export interface ContainerProps {
	children: React.ReactNode;
	size: "full" | "large" | "small";
}

const defaultProps: ContainerProps = {
	children: "",
	size: "full"
};

export default function Container({ children, size }: ContainerProps) {
	return (
		<div className={`container container--${size}`}>
			{children}
		</div>
	);
}

Container.defaultProps = defaultProps;
