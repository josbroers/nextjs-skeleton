import React from 'react'
import Footer from './Footer'
import styles from '@styles/components/layout.module.scss'

type Data = {
	children: React.ReactNode
}

/**
 * Default Layout
 *
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
