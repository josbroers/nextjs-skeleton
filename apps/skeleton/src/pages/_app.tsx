import '@styles/main.scss'
import Layout from '@components/Layout'
import type {AppProps} from 'next/app'

/**
 * Next.js uses the App component to initialize pages.
 * You can override it and control the page initialization.
 * Which allows you to do amazing things like:
 * - Persisting layout between page changes
 * - Keeping state when navigating pages
 * - Custom error handling using componentDidCatch
 * - Inject additional data into pages
 * - Add global CSS
 * @param Component
 * @param pageProps
 * @constructor
 */
const MyApp = ({Component, pageProps}: AppProps) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
)

export default MyApp
