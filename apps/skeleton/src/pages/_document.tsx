import {Head, Html, Main, NextScript} from 'next/document'
import seo from '@data/seo.json'

/**
 * A custom Document is commonly used to augment your application's `<html>` and `<body>` tags.
 * This is necessary because Next.js pages skip the definition of the surrounding document's markup.
 * @constructor
 */
const Document = () => {
	return (
		<Html lang={seo.inLanguage}>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	)
}

export default Document
