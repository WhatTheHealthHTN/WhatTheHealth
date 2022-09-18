import { Avatar } from '@chakra-ui/react'
import { CgPill } from 'react-icons/cg'
import { motion } from 'framer-motion'

const medications = [
	{
		name: 'Hydroxyruea',
		description: 'Take before sleeping'
	},
	{
		name: 'Jakafi',
		description: 'Take twice a day with breakfast and dinner'
	}
]

export default function MedicationsSection() {
	return (
		<div className='p-4'>
			<div className='font-bold text-xl mt-4 mb-2'>Medications</div>
			<div className='flex flex-col gap-3'>
				{medications.map((medication, i) => {
					return (
						<motion.div key={i} className='flex flex-row gap-3' initial={{ opacity: 0, marginLeft: -10 }} animate={{ opacity: 1, marginLeft: 0 }} transition={{ duration: 0.5, delay: i / 5 }}>
							<Avatar bgColor={'#FF8C0055'} icon={<CgPill color='#FF8C00' />} className='w-[15px] h-[15px]' />
							<div className='flex flex-col'>
								<div className='font-medium'>{medication.name}</div>
								<div className='flex flex-row'>
									<div className='text-gray-400 text-sm'>{medication.description}</div>
								</div>
							</div>
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}