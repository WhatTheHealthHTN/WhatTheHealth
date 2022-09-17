import { Avatar, Box } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'

export function RecommendationCard({ title, subtitle, imageUrl }: { title: string, subtitle: string, imageUrl: string }) {
	return (
		<Box rounded='lg' p={5} borderWidth='1px' className='group cursor-pointer shadow hover:shadow-md transition-shadow'>
			<Avatar src={imageUrl} className='font-medium text-lg mb-4' />
			<div className='font-medium text-lg mb-3'>{title}</div>
			<div className='text-sm text-gray-400'>{subtitle}</div>
			<div className='bg-gradient-to-r bg-clip-text text-transparent from-[#3ec3cf] to-[#3ec3cfaa] mt-4 flex flex-row items-center gap-1 group-hover:opacity-70 transition-all'>View Details <BsChevronRight className='text-[#3ec3cf]' size={13} /></div>
		</Box>
	)
}