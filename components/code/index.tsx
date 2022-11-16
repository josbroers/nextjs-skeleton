import styles from "./index.module.scss"

export type CodeProps = {
	content: string
}

export default function Code({ content }: CodeProps) {
	return (
		<code className={styles.code}>`{content}`</code>
	);
}
