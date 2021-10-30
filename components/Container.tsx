import styles from "@styles/components/container.module.scss"

interface Data {
	width?: "default" | "full" | "small"
	children: React.ReactNode
}

const Container = (props: Data) => {
	const { children, width } = props
	const widthClass = width && width !== "default" ? styles[`container--${width}`] : ""

	return <div className={`${styles.container} ${widthClass}`}>{children}</div>
}

export default Container
