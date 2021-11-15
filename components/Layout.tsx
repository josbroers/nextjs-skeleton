import Footer from "./Footer"
import styles from "@styles/components/layout.module.scss"
import GoogleTagManager from "./GoogleTagManager"

type Data = {
	children: React.ReactNode
}

const Layout = ({ children }: Data) => (
	<>
		<GoogleTagManager />
		<main className={styles.main}>{children}</main>
		<Footer />
	</>
)

export default Layout
