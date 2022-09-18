import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html>
			<Head>
				<Script src='/simplex-noise.min.js' strategy='beforeInteractive'></Script>
				<Script src='/three.min.js' strategy='beforeInteractive'></Script>
				<Script src='/chroma.min.js' strategy='beforeInteractive'></Script>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}