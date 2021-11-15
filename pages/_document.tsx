import { Html, Head, Main, NextScript } from "next/document"
import options from "@data/seo.json"

const Document = () => {
	return (
		<Html lang={options.inLanguage}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
