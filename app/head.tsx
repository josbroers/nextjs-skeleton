import React from "react";
import seo from "@data/seo.json";
import Meta from "@components/meta";

export default async function Head() {
	return (
		<>
			<title>{seo.title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<Meta
				title={seo.title}
				keywords="next, next.js, skeleton, turborepo"
				description={seo.description}
				imageAltText="Next.js wallpaper"
				type={seo.type}
				siteName={seo.siteName}
				twitterCard={seo.twitterCard}
				author={seo.author}
				image={`${process.env.NEXT_PUBLIC_ORIGIN}/thumbnail.png`}
				href={`${process.env.NEXT_PUBLIC_ORIGIN}/`}
			/>
		</>
	);
}
