import React from "react";
import styles from "./layouts.module.scss";
import { Inter } from "@next/font/google";
import "@scss/main.scss";
import Footer from "@components/footer";

interface RootLayoutProps {
	children: React.ReactNode;
}

const inter = Inter({
	variable: "--font-inter"
});

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={inter.variable}>
		<head />
		<body>
		<main className={styles.main}>{children}</main>
		<Footer />
		</body>
		</html>
	);
}
