import styles from '@styles/components/footer.module.scss'
import Github from "@public/icons/github.svg"
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
			<Github width={25} height={25}/>
		</ExternalLink>
	</footer>
)

export default Footer
