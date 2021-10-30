interface Data {
	target?: "self" | "blank"
	href: string
	children: React.ReactNode
	title: string
	className?: any
}

const ExternalLink = (props: Data) => {
	const { href, children, title, className } = props
	const target = props.target === "blank" ? "_blank" : "_self"
	const rel = props.target === "blank" ? "noreferrer" : ""

	return (
		<a href={href} title={title} rel={rel} className={className} target={target}>
			{children}
		</a>
	)
}

export default ExternalLink
