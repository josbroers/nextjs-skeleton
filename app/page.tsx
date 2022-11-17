import Container from "@components/container";
import Code from "@components/code";
import ExternalLink from "@components/link";
import styles from "./page.module.scss";

export default async function Page() {
	return (
		<Container size="small">
			<h1 className={styles.title}>
				Welcome to the{" "}
				<ExternalLink
					href="/github"
					title="Next.js starter kit on GitHub"
					className={styles["cta-link"]}
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
	);
}
