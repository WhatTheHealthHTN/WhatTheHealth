import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html>
			<Head>
				{/* eslint-disable-next-line @next/next/no-sync-scripts */}
				<Script strategy='beforeInteractive' src='/three.min.js' />
				<Script strategy='beforeInteractive' src='/THREE.OrbitControls.js' />
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