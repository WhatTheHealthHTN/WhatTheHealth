import { Box } from '@chakra-ui/react'
import { HealthPieChart } from "~/components/health-pie-chart";
import { HealthLineBar } from "~/components/health-line-bar";
import { getTagColors, Tag } from '~/utils/tag';
import { useDashboardStore } from '~/stores/dashboard';

const HealthDiagnosticsSection = () => {
	const scores = useDashboardStore.use.scores()
	const getOverallScore = useDashboardStore.use.getOverallScore()

	return (
		<Box shadow='md' p={5} borderWidth={1} rounded='2xl' bgColor='white'>
			<div className='flex flex-col items-start'>
				<HealthPieChart value={getOverallScore()} />
				<div className='px-2 self-stretch flex flex-col gap-4 mr-4'>
					<HealthLineBar text='Blood' value={scores.blood} fromColor={getTagColors(Tag.blood)[0]} toColor={getTagColors(Tag.blood)[1]} />
					<HealthLineBar text='Environment' value={scores.environment} fromColor={getTagColors(Tag.environment)[0]} toColor={getTagColors(Tag.environment)[1]} />
					<HealthLineBar text='Exercise' value={scores.exercise} fromColor={getTagColors(Tag.exercise)[0]} toColor={getTagColors(Tag.exercise)[1]} />
					<HealthLineBar text='Nutrition' value={scores.nutrition} fromColor={getTagColors(Tag.nutrition)[0]} toColor={getTagColors(Tag.nutrition)[1]} />
					<HealthLineBar text='Sleep' value={scores.sleep} fromColor={getTagColors(Tag.sleep)[0]} toColor={getTagColors(Tag.sleep)[1]} />
				</div>
			</div>
		</Box>
	)
}

export default HealthDiagnosticsSection