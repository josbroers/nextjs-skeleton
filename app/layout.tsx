import React from "react";
import seo from "@data/seo.json";
import "@scss/main.scss";
import Schema from "@components/schema";

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang={seo.language}>
		<head />
		<body>
		<Schema
			siteName={seo.siteName}
			siteDescription={seo.description}
			inLanguage={seo.language}
			title={seo.title}
			origin={process.env.NEXT_PUBLIC_ORIGIN}
			href={`${process.env.NEXT_PUBLIC_ORIGIN}/`}
		/>
		<main className="main">{children}</main>
		</body>
		</html>
	);
}
