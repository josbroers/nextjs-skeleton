import styles from './code.module.scss'

// Typecasting logic for the `<Code>` component
type Data = {
	content: string
}

/**
 * Displays content as a short fragment of computer code
 * @param content
 * @constructor
 */
const Code = ({content}: Data) => <code className={styles.code}>`{content}`</code>

export default Code
