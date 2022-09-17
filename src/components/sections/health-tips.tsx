import { Box } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";

const healthTips = [
	{
		title: 'Health Tip #1',
		description: 'Health Tip #1 Description'
	},
	{
		title: 'Health Tip #2',
		description: 'Health Tip #2 Description'
	},
	{
		title: 'Health Tip #3',
		description: 'Health Tip #3 Description'
	},
]

export default function HealthTipsSection() {
	return (
		<div className='flex flex-row self-stretch h-full p-4 gap-4'>
			{healthTips.map((healthTip, i) => {
				return (
					<Box key={i} rounded='2xl' p={5} shadow='md' className='flex flex-col gap-4'>
						<div className='font-medium'>
							{healthTip.title}
						</div>
						<div className='text-gray-700 text-sm'>
							{healthTip.description}
						</div>
						<div className='flex flex-row text-sm items-center text-[#E338F9] gap-1'>
							Read More <BsChevronRight size={8} />
						</div>
					</Box>
				)
			})}
		</div>
	)
}