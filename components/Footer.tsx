import Image from "next/image"
import styles from "@styles/components/footer.module.scss"
import github from "@public/github.svg"

const Footer = () => (
	<footer className={styles.footer}>
		<a
			href="https://github.com/JosBroers/nextjs-starter-kit"
			target="_blank"
			rel="noopener noreferrer"
			className={styles.footer__link}
		>
			View project on
			<span className={styles.footer__image}>
				<Image src={github} alt="GitHub logo" width={20} height={20} />
			</span>
		</a>
	</footer>
)

export default Footer
