import { Box } from '@chakra-ui/react'
import { HealthPieChart } from "~/components/health-pie-chart";
import { HealthLineBar } from "~/components/health-line-bar";

const HealthDiagnosticsSection = () => {
	return (
		<Box shadow='md' p={5} borderWidth={1} rounded='md' bgColor='white'>
			<div className='flex flex-col items-start'>
				<HealthPieChart value={92} />
				<div className='px-2 self-stretch flex flex-col gap-2 mr-4'>
					<HealthLineBar text='Blood' value={88} fromColor='#ff0000aa' toColor='#ff0000' />
					<HealthLineBar text='Pollution' value={72} fromColor='#252525aa' toColor='#252525' />
					<HealthLineBar text='Exercise' value={60} fromColor='#00008Baa' toColor='#00008B' />
					<HealthLineBar text='Nutrition' value={75} fromColor='#006400aa' toColor='#006400' />
					<HealthLineBar text='Sleep' value={80} fromColor='#301934aa' toColor='#301934' />
				</div>
			</div>
		</Box>
	)
}

export default HealthDiagnosticsSection