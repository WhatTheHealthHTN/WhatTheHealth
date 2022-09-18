import { Avatar } from '@chakra-ui/react'
import { CgPill } from 'react-icons/cg'

export default function MedicationsSection() {
	return (
		<div className='p-4'>
			<div className='font-bold text-xl mt-4 mb-2'>Medications</div>
			<div className='flex flex-row gap-3'>
				<Avatar bgColor={'#FF8C0055'} icon={<CgPill color='#FF8C00' />} className='w-[15px] h-[15px]' />
				<div className='flex flex-col'>
					<div className='font-medium'>Ibuprofen</div>
					<div className='flex flex-row'>
						<div className='text-gray-400'>2 per day</div>
						<div className='flex-1 w-3'></div>
						<div className='text-gray-400'>Sept 17, 2022</div>
					</div>
				</div>
			</div>
		</div>
	)
}