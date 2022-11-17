"use client";

export type CodeProps = {
	content: string
}

export default function Code({ content }: CodeProps) {
	return (
		<code className="code">`{content}`</code>
	);
}
