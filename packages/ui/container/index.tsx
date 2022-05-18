import React from "react"
import styles from "./container.module.scss"

// Typecasting logic for the `<Container>` component
interface Data {
	children: React.ReactNode
	size: "full" | "large" | "small"
}

// Default props for the component
const defaultProps: Data = {
	size: "full",
	children: "",
}

/**
 * Displays content within a container with a maximum size
 * @param children
 * @param size
 * @constructor
 */
const Container = ({children, size}: Data) => (
	<div className={`container ${styles[`container--${size}`]}`}>
		{children}
	</div>
)

Container.defaultProps = defaultProps
export default Container
