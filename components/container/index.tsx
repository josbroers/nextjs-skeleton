import React from "react";
import styles from "./index.module.scss";

export interface ContainerProps {
	children: React.ReactNode;
	size?: "full" | "large" | "small";
}

export default function Index({ children, size = "full" }: ContainerProps) {
	return (
		<div className={`${styles.container} ${styles[`container--${size}`]}`}>
			{children}
		</div>
	);
}
