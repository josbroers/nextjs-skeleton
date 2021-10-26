import Footer from "./Footer"
import styles from "@styles/components/layout.module.scss"

type Data = {
	children: React.ReactNode
}

const Layout = ({ children }: Data) => (
	<>
		<main className={styles.main}>{children}</main>
		<Footer />
	</>
)

export default Layout
