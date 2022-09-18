import { Box, Tooltip } from '@chakra-ui/react'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts'
import { getTagColors, Tag } from '~/utils/tag'

const historyData = [
	{
		date: '2022-09-14',
		blood: 82,
		pollution: 77,
		exercise: 66,
		nutrition: 71,
		sleep: 71,
		overall: 73,
	},
	{
		date: '2022-09-15',
		blood: 83,
		pollution: 74,
		exercise: 67,
		nutrition: 72,
		sleep: 73,
		overall: 74,
	},
	{
		date: '2022-09-16',
		blood: 80,
		pollution: 75,
		exercise: 63,
		nutrition: 71,
		sleep: 75,
		overall: 75,
	},
	{
		date: '2022-09-17',
		blood: 88,
		pollution: 72,
		exercise: 60,
		nutrition: 75,
		sleep: 80,
		overall: 77,
	}
]

const HealthHistorySection = () => {
	return (
		<Box className='mt-5'>
			<div className='text-xl font-bold mt-[0.21rem] mb-3'>History</div>
			<LineChart width={730} height={300} data={historyData}
				margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis domain={['dataMin - 1', 'dataMax + 1']} />
				<Legend />
				<Line type="monotone" dataKey="blood" stroke={getTagColors(Tag.blood)[0]} />
				<Line type="monotone" dataKey="exercise" stroke={getTagColors(Tag.exercise)[0]} />
				<Line type="monotone" dataKey="nutrition" stroke={getTagColors(Tag.nutrition)[0]} />
				<Line type="monotone" dataKey="pollution" stroke={getTagColors(Tag.pollution)[0]} />
				<Line type="monotone" dataKey="sleep" stroke={getTagColors(Tag.sleep)[0]} />
			</LineChart>
		</Box>
	)
}

export default HealthHistorySection