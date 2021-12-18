import Head from 'next/head'
import Script from 'next/script'

type Data = {
	id: string
}

/**
 * Adds Google Tag Manager script and prefetch URLs
 * @constructor
 */
const GoogleTagManager = ({id}: Data) => (
	<>
		<Head>
			<link rel="preconnect" href="https://www.googletagmanager.com/" crossOrigin=""/>
			<link rel="preconnect" href="https://www.google-analytics.com/" crossOrigin=""/>
		</Head>
		<noscript>
			<iframe
				src={`https://www.googletagmanager.com/ns.html?id=${id}`}
				height="0"
				width="0"
				title="Google Tag Manager"
				style={{display: 'none', visibility: 'hidden'}}
			/>
		</noscript>
		<Script id="GoogleTagManager" strategy="afterInteractive">
			{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${id}');`}
		</Script>
	</>
)

export default GoogleTagManager
