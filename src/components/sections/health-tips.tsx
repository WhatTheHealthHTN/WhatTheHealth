import { BsChevronRight } from "react-icons/bs";
import { motion } from 'framer-motion'

const morningHealthTips = [
	{
		title: 'Morning Sunlight',
		description: 'Try to get direct sunlight for at least 15 mins within the first hour of waking up.'
	},
	{
		title: 'Morning Water',
		description: 'Drink 8 ounces of water as the first liquid you consume in the morning'
	},
	{
		title: 'Health Tip #3',
		description: 'Health Tip #3 Description'
	},
]

export default function HealthTipsSection() {
	return (
		<div className='flex-1 mr-5'>
			<div className='font-bold text-xl mt-6 mb-2'>General Health Tips</div>
			<div className='flex flex-col gap-4 items-stretch'>
				{morningHealthTips.map((healthTip, i) => {
					return (
						<motion.div key={i} initial={{ opacity: 0, right: -10 }} animate={{ opacity: 1, right: 0 }} transition={{ duration: 0.5, delay: i / 5 }} className='relative flex flex-col gap-4 flex-1 rounded-2xl shadow-md p-5 border'>
							<div className='font-medium'>
								{healthTip.title}
							</div>
							<div className='text-gray-700 text-sm'>
								{healthTip.description}
							</div>
							<div className='cursor-pointer hover:text-[#E338F9aa] flex flex-row text-sm items-center text-[#E338F9] gap-1'>
								Read More <BsChevronRight size={8} />
							</div>
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}