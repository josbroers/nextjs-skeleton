import React from "react";
import styles from './index.module.scss'

export interface ContainerProps {
	children: React.ReactNode;
	size: "full" | "large" | "small";
}

const defaultProps: ContainerProps = {
	children: "",
	size: "full"
};

export default function Index({children, size}: ContainerProps) {
	return (
		<div className={`${styles.container} ${styles[`container--${size}`]}`}>
			{children}
		</div>
	);
}

Index.defaultProps = defaultProps;
