export type MetaProps = {
	title: string
	keywords?: string
	description: string
	type: string
	siteName: string
	image?: string
	twitterCard?: string
	canonical?: string
	author?: string
	publishDate?: string
	href: string | undefined
}

export default function Meta(props: MetaProps) {
	const {
		title,
		keywords,
		description,
		type,
		siteName,
		image,
		twitterCard,
		author,
		publishDate,
		href
	} = props;
	const canonical = props.canonical ?? href;

	return (
		<>
			{canonical && <link rel="canonical" href={canonical} />}
			<link rel="icon" href={`${process.env.NEXT_PUBLIC_ORIGIN}/favicon.ico`} />
			<meta name="robots" content="all" />
			{keywords && <meta name="keywords" content={keywords} />}
			{description && <meta name="description" content={description} />}
			{author && <meta name="author" content={author} />}
			{publishDate && <meta name="publish_date" property="og:publish_date" content={publishDate} />}
			{href && <meta property="og:url" content={href} />}
			{type && <meta property="og:type" content={type} />}
			{siteName && <meta property="og:site_name" content={siteName} />}
			{description && <meta property="og:description" content={description} />}
			{title && <meta property="og:title" content={title} />}
			{image && <meta property="og:image" content={image} />}
			{twitterCard && <meta name="twitter:card" content={twitterCard} />}
			{title && <meta name="twitter:title" content={title} />}
			{description && <meta name="twitter:description" content={description} />}
			{image && <meta name="twitter:image" content={image} />}
		</>
	);
};
