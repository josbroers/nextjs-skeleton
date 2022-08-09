import React, {useEffect, useState} from "react";
import ExternalLink from 'ui/link'
import Code from 'ui/code'
import Container from 'ui/container'
import styles from '@scss/pages/home.module.scss'
import Head from "next/head";
import {Schema, Meta} from "ui/seo";
import useCurrentUrl  from "hooks/useCurrentUrl";
import seo from "@data/seo.json"

const Home = () => {
	const title = "Next.js Skeleton: ESLint, Husky, Preact, Prettier, Sass, TypeScript and much more!"
	const description = "A simple and highly customizable skeleton build with Turborepo and Next.js. Featuring ESLint, Husky, Preact, Prettier, Sass, TypeScript and much more!"
	const origin = useCurrentUrl()

	return (
		<>
			<Head>
				<title>{title}</title>
				<Schema
					siteName={seo.siteName}
					siteDescription={description}
					inLanguage={seo.language}
					title={title}
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
					imageSource={`${origin}/thumbnail.png`}
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
