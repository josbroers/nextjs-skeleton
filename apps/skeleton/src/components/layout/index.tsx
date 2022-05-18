import React from 'react'
import Footer from '@components/footer'
import styles from './layout.module.scss'

// Typecasting logic for the `<Layout>` component
type Data = {
	children: React.ReactNode
}

/**
 * Default Layout
 * @param children
 * @constructor
 */
const Layout = ({children}: Data) => (
	<>
		<main className={styles.main}>{children}</main>
		<Footer/>
	</>
)

export default Layout
