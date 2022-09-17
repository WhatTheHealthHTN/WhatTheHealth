import { Cell, Pie, PieChart } from "recharts";
import CountUp from 'react-countup'

const HealthDiagnosisSection = () => {
	const data = [
		{ value: 92, color: '#4bb543' },
		{ value: 8, color: 'white' },
	];

	return (
		<div className="relative flex flex-row justify-center items-center px-4">
			<PieChart width={100} height={100}>
				<Pie dataKey='value' data={data} cx='50%' cy='50%' innerRadius={45} outerRadius={50} startAngle={-270} endAngle={360} animationBegin={0}>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color} />
					))}
				</Pie>
			</PieChart>
			<CountUp
				className='absolute text-4xl text-[#4bb543] font-bold'
				useEasing={true}
				start={0}
				end={92}
				duration={1.5}
			/>
		</div>
	)
}

export default HealthDiagnosisSection