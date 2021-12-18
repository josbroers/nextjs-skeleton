import styles from '@styles/components/footer.module.scss'
import {ExternalLink} from 'ui'
import {ReactSVG} from 'react-svg'

/**
 * Renders the `<footer>` element
 * @constructor
 */
const Footer = () => (
	<footer className={styles.footer}>
		<ExternalLink
			href="https://github.com/JosBroers/nextjs-starter-kit"
			target="_blank"
			rel="noreferrer"
			title="View repository on Github"
			className={styles.footer__link}
		>
			View project on
			<ReactSVG src="icons/github.svg" className={styles.footer__image} wrapper="span"/>
		</ExternalLink>
	</footer>
)

export default Footer
