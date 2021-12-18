import Footer from './Footer'
import styles from '@styles/components/layout.module.scss'
import {GoogleTagManager} from 'ui'
import React from 'react'

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
		{process.env.NEXT_PUBLIC_GTM && <GoogleTagManager id={process.env.NEXT_PUBLIC_GTM}/>}
		<main className={styles.main}>{children}</main>
		<Footer/>
	</>
)

export default Layout
