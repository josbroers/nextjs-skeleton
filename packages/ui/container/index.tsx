import React from "react"
import styles from "./container.module.scss"
import type {ContainerInterface} from './types'

/**
 * Default props for the component.
 */
const defaultProps: ContainerInterface = {
	size: "full",
	children: "",
}

/**
 * Displays content within a container with a maximum size.
 * @param children
 * @param size
 * @constructor
 */
const Container = ({children, size}: ContainerInterface) => (
	<div className={`${styles.container} ${styles[`container--${size}`]}`}>
		{children}
	</div>
)

Container.defaultProps = defaultProps

export default Container
