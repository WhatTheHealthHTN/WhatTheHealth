import path from 'path'
import puppeteer from 'puppeteer'

async function main() {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: { height: 1080, width: 1920 },
		userDataDir: path.join(__dirname, 'browser-data'),
		timeout: 0
	})

	const page = await browser.newPage()
	await page.goto('https://www.myfitnesspal.com/food/diary')

	if (page.url().includes('/account/login')) {
		await page.waitForNavigation()
	}

	// Loop through all dates
	for (let a = 0; a < 100; a += 1) {
		const date = new Date()
		const url = `https://www.myfitnesspal.com/food/diary?${date}`;

	}
	await page.goto('https://www.myfitnesspal.com/food/diary')
}

main().catch((error) => {
	console.error(error)
	process.exit(1)

})