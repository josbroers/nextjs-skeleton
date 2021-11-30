import Footer from './Footer'
import styles from '@styles/components/layout.module.scss'
import GoogleTagManager from './GoogleTagManager'
import React from 'react'

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
		<GoogleTagManager/>
		<main className={styles.main}>{children}</main>
		<Footer/>
	</>
)

export default Layout
