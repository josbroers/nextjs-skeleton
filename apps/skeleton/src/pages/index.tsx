import ExternalLink from 'ui/link'
import Code from 'ui/code'
import Container from 'ui/container'
import styles from '@scss/pages/home.module.scss'
import {CustomMeta as Meta, CustomSchema as Schema} from '@components/seo'

const Home = () => (
	<>
		<Meta/>
		<Schema/>
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

export default Home
