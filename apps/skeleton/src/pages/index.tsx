import {Code} from 'ui'
import styles from '@styles/pages/home.module.scss'
import {ExternalLink} from 'ui'
import Meta from '@components/Meta'
import Schema from '@components/Schema'
import Container from "ui/Container";

const Home = () => (
	<Container size={"small"}>
		<Meta/>
		<Schema/>
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
)

export default Home
