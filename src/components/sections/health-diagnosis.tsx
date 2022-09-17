import { Cell, Pie, PieChart } from "recharts";
import CountUp from 'react-countup'
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from "react-icons/bs";

const HealthDiagnosisSection = () => {
	const data = [
		{ value: 92, color: '#4bb543' },
		{ value: 8, color: 'white' },
	];

	return (
		<Box className='p-5 ml-4'>
			<div className='flex flex-col items-start'>
				<div className='flex flex-row mb-4 self-stretch items-center'>
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
								<MenuItem>Download</MenuItem>
								<MenuItem>Create a Copy</MenuItem>
								<MenuItem>Mark as Draft</MenuItem>
								<MenuItem>Delete</MenuItem>
								<MenuItem>Attend a Workshop</MenuItem>
							</MenuList>
						</Menu>
					</div>
				</div>
				<div className="relative flex flex-row justify-center items-center">
					<PieChart width={100} height={100}>
						<Pie dataKey='value' data={data} cx='50%' cy='50%' innerRadius={45} outerRadius={50} startAngle={-270} endAngle={360} animationBegin={0}>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
					<CountUp
						className='absolute text-4xl text-[#4bb543] font-bold'
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