import "@styles/main.scss"
import Layout from "@components/Layout"
import type { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
)

export default MyApp
