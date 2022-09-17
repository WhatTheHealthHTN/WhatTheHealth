import { motion } from 'framer-motion'

export function HealthLineBar({ text, value, fromColor, toColor }: { text: string, value: number, fromColor: string, toColor: string }) {
	const linearGradientStyle = { background: `linear-gradient(90deg, ${fromColor}, ${toColor})` };

	const reverseLinearGradientStyle = { background: `linear-gradient(90deg, ${toColor}, ${fromColor})` };
	return (
		<div className='flex flex-col'>
			<div className='flex flex-row self-stretch'>
				<div className='font-bold text-xl !bg-clip-text text-transparent' style={reverseLinearGradientStyle}>{text}</div>
				<div className='flex-1'></div>
				<div className='font-bold text-xl !bg-clip-text text-transparent' style={linearGradientStyle}>{value}</div>
			</div>

			<div className='relative'>
				<div className='h-2 opacity-20 self-stretch rounded-full' style={{ backgroundColor: fromColor }}>
				</div>
				<motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 1 }} style={{ background: `linear-gradient(90deg, ${fromColor}, ${toColor})` }} className={`absolute inset-0 z-1 rounded-md `}></motion.div>
			</div>
		</div>
	)
}