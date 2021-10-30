import Image from "next/image"
import styles from "@styles/components/footer.module.scss"
import github from "@public/github.svg"
import ExternalLink from "./ExternalLink"

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
			<span className={styles.footer__image}>
				<Image src={github} alt="GitHub logo" width={20} height={20} />
			</span>
		</ExternalLink>
	</footer>
)

export default Footer
