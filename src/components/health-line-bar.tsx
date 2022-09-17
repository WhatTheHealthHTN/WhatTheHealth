import { motion } from 'framer-motion'

export function HealthLineBar({ text, value, color }: { text: string, value: number, color: string }) {
	return (
		<div className='flex flex-col'>
			<div className='flex flex-row self-stretch px-2'>
				<div className='font-bold'>{text}</div>
				<div className='flex-1'></div>
				<div className='font-bold'>{value}</div>
			</div>

			<div className='relative'>
				<div className='h-2 opacity-20 self-stretch rounded-full' style={{ backgroundColor: color }}>
				</div>
				<motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 1 }} className='absolute inset-0 z-1 rounded-md' style={{ backgroundColor: color }}></motion.div>
			</div>
		</div>
	)
}