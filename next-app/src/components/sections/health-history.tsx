import { Box, Tooltip } from '@chakra-ui/react'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts'
import { getTagColors, Tag } from '~/utils/tag'

const historyData = [
	{
		date: '2022-09-14',
		blood: 62,
		environment: 80,
		exercise: 75,
		nutrition: 84,
		sleep: 71,
	},
	{
		date: '2022-09-15',
		blood: 64,
		environment: 83,
		exercise: 82,
		nutrition: 86,
		sleep: 75,
	},
	{
		date: '2022-09-16',
		blood: 66,
		environment: 81,
		exercise: 84,
		nutrition: 92,
		sleep: 79,
	},
	{
		date: '2022-09-17',
		blood: 68,
		environment: 82,
		exercise: 85,
		nutrition: 91,
		sleep: 90,
	}
]

const HealthHistorySection = () => {
	return (
		<Box className='mt-5'>
			<div className='text-xl font-bold mt-[0.21rem] mb-3'>Health History</div>
			<LineChart width={600} height={300} data={historyData}
				margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis domain={['dataMin - 1', 'dataMax + 1']} />
				<Legend />
				<Line type="monotone" dataKey="blood" stroke={getTagColors(Tag.blood)[0]} />
				<Line type="monotone" dataKey="exercise" stroke={getTagColors(Tag.exercise)[0]} />
				<Line type="monotone" dataKey="nutrition" stroke={getTagColors(Tag.nutrition)[0]} />
				<Line type="monotone" dataKey="environment" stroke={getTagColors(Tag.environment)[0]} />
				<Line type="monotone" dataKey="sleep" stroke={getTagColors(Tag.sleep)[0]} />
			</LineChart>
		</Box>
	)
}

export default HealthHistorySection