import {Code} from 'ui'
import styles from '@styles/pages/home.module.scss'
import {ExternalLink} from 'ui'
import Meta from '@components/Meta'
import Schema from '@components/Schema'

const Home = () => (
	<div className="container">
		<Meta/>
		<Schema/>
		<h1 className={styles.title}>
			Welcome to the{' '}
			<ExternalLink
				href="https://github.com/JosBroers/nextjs-starter-kit"
				title="Next.js starter kit on GitHub"
				className={styles['cta-link']}
			>
				Next.js Skeleton!
			</ExternalLink>
		</h1>
		<p className={styles.description}>
			Get started by editing <Code content="pages/index.js"/>
		</p>
	</div>
)

export default Home
