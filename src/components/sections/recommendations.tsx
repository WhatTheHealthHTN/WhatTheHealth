import { RecommendationCard } from "~/components/recommendation-card";

export default function RecommendationsSection() {

	return (
		<div>
			<div className='font-medium mb-4 text-xl'>Recommendations</div>
			<div className="flex flex-row gap-2">
				<div className='flex-1'>
					<RecommendationCard title='Drink Water' subtitle='Stay hydrated' imageUrl='https://banner2.cleanpng.com/20180514/wgq/kisspng-computer-icons-water-drop-free-information-compute-5af966beebe706.1395239415262942069663.jpg' />
				</div>
				<div className='flex-1'>
					<RecommendationCard title='Exercise' subtitle='Improve your heart rate' imageUrl='https://cdn.imgbin.com/22/7/1/imgbin-dumbbell-exercise-fitness-centre-physical-fitness-computer-icons-dumbbell-z4vXXpS1RiJxkx1sYD4nxTEY7.jpg' />
				</div>
			</div>
		</div>
	)
}