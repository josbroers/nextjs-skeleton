import { Html, Head, Main, NextScript } from "next/document"
import GTM_ID from "@lib/gtm"

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				{GTM_ID ? (
					<>
						<link rel="dns-prefetch" href="https://www.googletagmanager.com/" crossOrigin="" />
						<link rel="dns-prefetch" href="https://www.google-analytics.com/" crossOrigin="" />
					</>
				) : undefined}
			</Head>
			<body>
				{GTM_ID ? (
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height="0"
							width="0"
							title="Google Tag Manager"
							style={{ display: "none", visibility: "hidden" }}
						/>
					</noscript>
				) : undefined}
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
