import React from "react";
import ExternalLink from 'ui/link'
import Code from 'ui/code'
import Container from 'ui/container'
import styles from '@scss/pages/home.module.scss'
import Head from "next/head";
import {Meta, Schema} from "ui/seo";
import seo from "@data/seo.json"
import {useCurrentUrl} from 'lib/hooks'

const Home = () => {
	const title = "Next.js Skeleton: ESLint, Husky, Preact, Prettier, Sass, TypeScript and much more!"
	const description = "A simple and highly customizable skeleton build with Turborepo and Next.js. Featuring ESLint, Husky, Preact, Prettier, Sass, TypeScript and much more!"
	const location = useCurrentUrl()

	return (
		<>
			<Head>
				<title>{title}</title>
				<Schema
					siteName={seo.siteName}
					siteDescription={description}
					inLanguage={seo.language}
					title={title}
					origin={location.origin}
					href={location.href}
				/>
				<Meta
					title={title}
					keywords="next, next.js, skeleton, turborepo"
					description={description}
					imageAltText="Next.js wallpaper"
					type={seo.type}
					siteName={seo.siteName}
					twitterCard={seo.twitterCard}
					author={seo.author}
					imageSource="thumbnail.png"
					href={location.href}
				/>
			</Head>
			<Container size={'small'}>
				<h1 className={styles.title}>
					Welcome to the{' '}
					<ExternalLink
						href="/github"
						title="Next.js starter kit on GitHub"
						className={styles['cta-link']}
						target="_blank"
						rel="noreferrer"
					>
						Next.js Skeleton!
					</ExternalLink>
				</h1>
				<p className={styles.description}>
					Get started by editing <Code content="src/pages/index.tsx"/> in the skeleton app.
				</p>
			</Container>
		</>
	)
}

export default Home
