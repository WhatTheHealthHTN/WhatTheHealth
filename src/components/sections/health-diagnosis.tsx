import { Cell, Pie, PieChart } from "recharts";
import CountUp from 'react-countup'
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from "react-icons/bs";

const HealthDiagnosisSection = () => {
	const data = [
		{ value: 92, color: '#4bb543' },
		{ value: 8, color: 'transparent' },
	];

	return (
		<Box className='mt-5'>
			<div className='flex flex-col items-start'>
				<div className='flex flex-row mb-4 self-stretch items-center pr-5 row-span-1 row-start-2'>
					<div className='font-medium text-xl'>Health Diagnosis</div>
					<div className='flex-1'></div>
					<div>
						<Menu>
							<MenuButton
								borderRadius='md'
								borderWidth='1px' className='px-2 py-1'
							>
								<span className='flex flex-row items-center gap-2'>
									Today <BsChevronDown />
								</span>
							</MenuButton>
							<MenuList>
								<MenuItem>Yesterday</MenuItem>
								<MenuItem>Last 7 Days</MenuItem>
								<MenuItem>Last 2 Weeks</MenuItem>
								<MenuItem>Last Month</MenuItem>
							</MenuList>
						</Menu>
					</div>
				</div>
				<div className="relative flex flex-row justify-center items-center">
					<PieChart width={150} height={150}>
						<defs>
							<linearGradient id={`myGradient0`}>
								<stop
									offset="0%"
									stopColor='#4bb54360'
								/>
								<stop
									offset="100%"
									stopColor='#4bb543'
								/>
							</linearGradient>
						</defs>
						<circle cx='50%' cy='50%' r={42} strokeWidth={5} stroke='#aaaaaa30' fill='transparent'></circle>
						<circle cx='50%' cy='50%' r={58} strokeWidth={5} stroke='#aaaaaa20' fill='transparent'></circle>
						<circle cx='50%' cy='50%' r={50} strokeWidth={10} stroke='#4bb54340' fill='transparent'></circle>
						<Pie dataKey='value' data={data} cx='50%' cy='50%' innerRadius={45} outerRadius={55} startAngle={-270} endAngle={360} animationBegin={0}>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color === 'transparent' ? 'transparent' : `url(#myGradient0)`} stroke='transparent' strokeLinecap='round' />
							))}
						</Pie>
					</PieChart>
					<CountUp
						className='absolute text-4xl from-[#4bb543] to-[#4bb54399] bg-clip-text text-transparent bg-gradient-to-r font-bold'
						useEasing={true}
						start={0}
						end={92}
						duration={1.5}
					/>
				</div>
			</div>
		</Box>
	)
}

export default HealthDiagnosisSection