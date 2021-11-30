import styles from '@styles/components/container.module.scss'
import React from 'react'

interface Data {
	width?: 'default' | 'full' | 'small'
	children: React.ReactNode
}

/**
 * Basic layout element for centering content horizontally
 *
 * @param props
 * @constructor
 */
const Container = (props: Data) => {
	const { children, width } = props,
		widthClass = width && width !== 'default' ? styles[`container--${width}`] : ''

	return <div className={`${styles.container} ${widthClass}`}>{children}</div>
}

export default Container
