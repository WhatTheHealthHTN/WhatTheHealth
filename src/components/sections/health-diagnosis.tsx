import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from "react-icons/bs";
import { HealthPieChart } from "~/components/health-pie-chart";
import { HealthLineBar } from "~/components/health-line-bar";

const HealthDiagnosisSection = () => {
	const overallData = [
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
				<HealthPieChart data={overallData} />
				<div className='px-2 self-stretch flex flex-col gap-2 mr-4'>
					<HealthLineBar text='Blood' value={88} color='#ff0000' />
					<HealthLineBar text='Pollution' value={72} color='#ff0000' />
					<HealthLineBar text='Exercise' value={60} color='#ff0000' />
					<HealthLineBar text='Nutrition' value={75} color='#ff0000' />
					<HealthLineBar text='Sleep' value={80} color='#ff0000' />
				</div>
			</div>
		</Box>
	)
}

export default HealthDiagnosisSection