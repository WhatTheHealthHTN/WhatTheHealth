import fs from 'node:fs'
import path from 'node:path'
import { PrismaClient } from '@prisma/client'

async function main() {
	const outputJson = fs.readFileSync(path.join(__dirname, 'output.json'), 'utf8')
	const json = JSON.parse(JSON.parse(outputJson))

	const prisma = new PrismaClient();
	await prisma.$connect()

	await prisma.word.createMany({
		data: json.results[0].page_data[0].words
	})
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})