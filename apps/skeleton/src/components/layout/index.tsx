import React from 'react'
import Footer from '@components/footer'
import styles from './layout.module.scss'
import type {Types} from "./types";

/**
 * Default Layout.
 * @param children
 * @constructor
 */
const Layout = ({children}: Types) => (
	<>
		<main className={styles.main}>{children}</main>
		<Footer/>
	</>
)

export default Layout
