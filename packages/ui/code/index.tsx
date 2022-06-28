import styles from './code.module.scss'
import type {Types} from './types'

/**
 * Displays content as a short fragment of computer code.
 *
 * @param content
 * @constructor
 */
const Code = ({content}: Types) => <code className={styles.code}>`{content}`</code>

export default Code
