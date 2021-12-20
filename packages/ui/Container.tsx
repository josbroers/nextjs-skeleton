import React from "react"
import styles from "./styles/container.module.scss"

interface Data {
	children: React.ReactNode
	size: "full" | "large" | "small"
}

const defaultProps: Data = {
	size: "full",
	children: "",
}

const Container = ({children, size}: Data) => (
	<div className={`container ${styles[`container--${size}`]}`}>
		{children}
	</div>
)

Container.defaultProps = defaultProps

export default Container
