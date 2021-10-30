import { useState, useEffect } from "react"
import "@styles/main.scss"
import Layout from "@components/Layout"
import type { AppProps } from "next/app"
import Script from "next/script"
import GTM_ID from "@lib/gtm"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useRouter } from "next/router"

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [location, setLocation] = useState("")
	const router = useRouter()

	useEffect(() => {
		if (router.route === "/_error") {
			setLocation("")
		} else if (window.location.href !== location) {
			setLocation(window.location.href)
		}
	}, [location, router])

	const main = (
		<Layout>
			<Head>{location ? <link rel="canonical" href={location} /> : ""}</Head>
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
