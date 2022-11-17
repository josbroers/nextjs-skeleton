import React from "react";
import seo from "@data/seo.json";
import styles from "./layouts.module.scss";
import Schema from "@components/schema";
import {Inter} from '@next/font/google';
import "@scss/main.scss";
import Footer from "@components/footer";

interface RootLayoutProps {
	children: React.ReactNode;
}

const inter = Inter({
	variable: '--font-sans',
});

export default function RootLayout({children}: RootLayoutProps) {
	return (
		<html lang={seo.language} className={inter.variable}>
		<head/>
		<body>
		<Schema
			siteName={seo.siteName}
			siteDescription={seo.description}
			inLanguage={seo.language}
			title={seo.title}
			origin={process.env.NEXT_PUBLIC_ORIGIN}
			href={`${process.env.NEXT_PUBLIC_ORIGIN}/`}
		/>
		<main className={styles.main}>{children}</main>
		<Footer/>
		</body>
		</html>
	);
}
