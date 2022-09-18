import { Box } from '@chakra-ui/react'
import { HealthPieChart } from "~/components/health-pie-chart";
import { HealthLineBar } from "~/components/health-line-bar";
import { getTagColors, Tag } from '~/utils/tag';

const HealthDiagnosticsSection = () => {
	return (
		<Box shadow='md' p={5} borderWidth={1} rounded='2xl' bgColor='white'>
			<div className='flex flex-col items-start'>
				<HealthPieChart value={92} />
				<div className='px-2 self-stretch flex flex-col gap-4 mr-4'>
					<HealthLineBar text='Blood' value={88} fromColor={getTagColors(Tag.blood)[0]} toColor={getTagColors(Tag.blood)[1]} />
					<HealthLineBar text='Pollution' value={72} fromColor={getTagColors(Tag.pollution)[0]} toColor={getTagColors(Tag.pollution)[1]} />
					<HealthLineBar text='Exercise' value={60} fromColor={getTagColors(Tag.exercise)[0]} toColor={getTagColors(Tag.exercise)[1]} />
					<HealthLineBar text='Nutrition' value={75} fromColor={getTagColors(Tag.nutrition)[0]} toColor={getTagColors(Tag.nutrition)[1]} />
					<HealthLineBar text='Sleep' value={80} fromColor={getTagColors(Tag.sleep)[0]} toColor={getTagColors(Tag.sleep)[1]} />
				</div>
			</div>
		</Box>
	)
}

export default HealthDiagnosticsSection