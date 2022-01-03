import styles from '@styles/components/footer.module.scss'
import Github from "@public/icons/github.svg"
import Npm from "@public/icons/npm.svg"
import Vercel from "@public/icons/vercel.svg"
import Nextjs from "@public/icons/nextjs.svg"
import {ExternalLink} from 'ui'

/**
 * Renders the `<footer>` element
 * @constructor
 */
const Footer = () => (
	<footer className={styles.footer}>
		<ExternalLink
			href="/github"
			target="_blank"
			rel="noreferrer"
			title="GitHub"
			className={styles.footer__link}
		>
			<Github width={30} height={30}/>
		</ExternalLink>
		<ExternalLink
			href="/npm"
			target="_blank"
			rel="noreferrer"
			title="NPM"
			className={styles.footer__link}
		>
			<Npm width={30} height={30}/>
		</ExternalLink>
		<ExternalLink
			href="https://nextjs.org/"
			target="_blank"
			rel="noreferrer"
			title="Next.js"
			className={styles.footer__link}
		>
			<Nextjs width={30} height={30}/>
		</ExternalLink>
		<ExternalLink
			href="https://vercel.com"
			target="_blank"
			rel="noreferrer"
			title="Vercel"
			className={styles.footer__link}
		>
			<Vercel width={30} height={30}/>
		</ExternalLink>
	</footer>
)

export default Footer
