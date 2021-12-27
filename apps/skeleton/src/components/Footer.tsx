import styles from '@styles/components/footer.module.scss'
import Github from "@public/icons/github.svg"
import Npm from "@public/icons/npm.svg"
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
			title="View repository on Github"
			className={styles.footer__link}
		>
			<Github width={30} height={30}/>
		</ExternalLink>
		<ExternalLink
			href="/npm"
			target="_blank"
			rel="noreferrer"
			title="View package on NPM"
			className={styles.footer__link}
		>
			<Npm width={30} height={30}/>
		</ExternalLink>
	</footer>
)

export default Footer
