import { motion } from 'framer-motion'

export function HealthLineBar({ text, value, fromColor, toColor }: { text: string, value: number, fromColor: string, toColor: string }) {
	const reverseLinearGradientStyle = { background: `linear-gradient(90deg, ${toColor}, ${fromColor})` };
	return (
		<div className='flex flex-col'>
			<div className='flex flex-row self-stretch'>
				<div className='font-bold text-[1.05rem] !bg-clip-text text-transparent' style={reverseLinearGradientStyle}>{text}</div>
			</div>

			<div className='relative'>
				<div className='h-4 opacity-20 self-stretch rounded-full' style={{ backgroundColor: fromColor }}>
				</div>
				<motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 1 }} style={{ background: `linear-gradient(90deg, ${fromColor}, ${toColor})` }} className={`absolute inset-0 z-1 rounded-full`} >
					<div className='absolute text-xs top-0 text-white font-semibold right-[3px]'>{value}%</div>
				</motion.div>
			</div>
		</div>
	)
}