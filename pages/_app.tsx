import "@styles/main.scss"
import Layout from "@components/Layout"
import type { AppProps } from "next/app"
import Script from "next/script"
import GTM_ID from "@lib/gtm"
import dynamic from "next/dynamic"

const MyApp = ({ Component, pageProps }: AppProps) => {
	const main = (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)

	if (!GTM_ID) {
		return main
	}

	return (
		<>
			<Script id="GoogleTagManager" strategy="afterInteractive">
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer', '${GTM_ID}');`}
			</Script>
			{main}
		</>
	)
}

export default MyApp
