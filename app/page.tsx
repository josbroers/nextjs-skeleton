import Container from "@components/container";
import Code from "@components/code";
import ExternalLink from "@components/link";

export default async function Page() {
	return (
		<Container size="small">
			<h1 className="title">
				Welcome to the{" "}
				<ExternalLink
					href="/github"
					title="Next.js starter kit on GitHub"
					className="cta-link"
					target="_blank"
					rel="noreferrer"
				>
					Next.js Skeleton!
				</ExternalLink>
			</h1>
			<p className="description">
				Get started by editing <Code content="src/pages/index.tsx" /> in the skeleton app.
			</p>
		</Container>
	);
}
