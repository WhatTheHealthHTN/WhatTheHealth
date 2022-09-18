import { useEffect } from "react";
import CountUp from "react-countup";
import { PieChart, Pie, Cell } from "recharts";
import { useDashboardStore } from "~/stores/dashboard";

export function HealthPieChart({ value }: { value: number }) {
	const fetchScore = useDashboardStore.use.fetchScore()

	useEffect(() => {
		(async () => {
			await fetchScore()
		})();
	}, [fetchScore])

	const data = [
		{ value: 92 },
		{ value: 100 - 92, color: 'transparent' }
	]

	return (
		<div className='flex flex-col items-center mx-auto'>
			<div className='font-bold text-2xl !bg-clip-text text-transparent from-[#ffd580] to-[#ff8c00] bg-gradient-to-r -mb-2'>Overall Score</div>
			<div className="relative flex flex-row justify-center items-center">
				<PieChart width={150} height={150}>
					<defs>
						<linearGradient id={`myGradient0`}>
							<stop
								offset="0%"
								stopColor='#ffd580'
							/>
							<stop
								offset="100%"
								stopColor='#ff8c00'
							/>
						</linearGradient>
					</defs>
					<circle cx='50%' cy='50%' r={42} strokeWidth={5} stroke='#aaaaaa30' fill='transparent'></circle>
					<circle cx='50%' cy='50%' r={58} strokeWidth={5} stroke='#aaaaaa20' fill='transparent'></circle>
					<circle cx='50%' cy='50%' r={50} strokeWidth={10} stroke='#ffd58040' fill='transparent'></circle>
					<Pie dataKey='value' data={data} cx='50%' cy='50%' innerRadius={45} outerRadius={55} startAngle={-270} endAngle={360} animationBegin={0}>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color === 'transparent' ? 'transparent' : `url(#myGradient0)`} stroke='transparent' strokeLinecap='round' />
						))}
					</Pie>
				</PieChart>

				<CountUp
					className='absolute text-4xl from-[#ffd580] to-[#ff8c00] bg-clip-text text-transparent bg-gradient-to-r font-bold'
					useEasing={true}
					start={0}
					end={92}
					duration={1.5}
				/>
			</div>
		</div>
	)
}
