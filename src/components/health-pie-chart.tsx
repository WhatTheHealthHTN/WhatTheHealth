import CountUp from "react-countup";
import { PieChart, Pie, Cell } from "recharts";

export function HealthPieChart({ data }: { data: Array<{ value: number, color: string }> }) {
	return (
		<div className="relative flex flex-row justify-center items-center">
			<PieChart width={150} height={150}>
				<defs>
					<linearGradient id={`myGradient0`}>
						<stop
							offset="0%"
							stopColor='#4bb54360'
						/>
						<stop
							offset="100%"
							stopColor='#4bb543'
						/>
					</linearGradient>
				</defs>
				<circle cx='50%' cy='50%' r={42} strokeWidth={5} stroke='#aaaaaa30' fill='transparent'></circle>
				<circle cx='50%' cy='50%' r={58} strokeWidth={5} stroke='#aaaaaa20' fill='transparent'></circle>
				<circle cx='50%' cy='50%' r={50} strokeWidth={10} stroke='#4bb54340' fill='transparent'></circle>
				<Pie dataKey='value' data={data} cx='50%' cy='50%' innerRadius={45} outerRadius={55} startAngle={-270} endAngle={360} animationBegin={0}>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color === 'transparent' ? 'transparent' : `url(#myGradient0)`} stroke='transparent' strokeLinecap='round' />
					))}
				</Pie>
			</PieChart>

			<CountUp
				className='absolute text-4xl from-[#4bb543] to-[#4bb54399] bg-clip-text text-transparent bg-gradient-to-r font-bold'
				useEasing={true}
				start={0}
				end={92}
				duration={1.5}
			/>
		</div>
	)
}
