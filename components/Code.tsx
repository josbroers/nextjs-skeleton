import styles from "@styles/components/code.module.scss"

type Data = {
	content: string
}

const Code = ({ content }: Data) => <code className={styles.code}>{content}</code>

export default Code
