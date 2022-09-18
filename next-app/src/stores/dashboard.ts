import 'ky-universal'
import create from 'zustand'
import { Todo } from '~/types/todo'
import { createSelectors } from '~/utils/store'
import { Tag } from '~/utils/tag'
import ky from 'ky'

const idealVals = {
	"PM2.5": 11, "PM10": 16, "NO": 0, "NO2": 0, "Nox": 0, "NH3": 0, // Air Quality
	"CO": 0, "SO2": 88, "O3": 33, "Benzene": 5, "Toluene": 2.3, "Xylene": 0, "AQI": 16,
	'TotalSteps': 10000, 'TotalDistance': 8, 'Calories': 450, // Exercise
	'hematocrit': { 'male': 45.5, 'female': 42 }, 'RBC': { 'male': 5.4, 'female': 4.8 }, 'MCH': { 'male': 29, 'female': 29 },
	// Blood Reports
	"MCV": { 'male': 30.5, 'female': 29.5 }, 'RDW': { 'male': 13.5, 'female': 13.5 }, 'Leucocyte': { 'male': 7.2, 'female': 7.2 },
	"Platelets": { 'male': 240, 'female': 240 }, 'Neutrophils': { 'male': 50, 'female': 50 }, 'Basophils': { 'male': 0.75, 'female': 0.75 },
	'Lymphocyte': { 'male': 20, 'female': 20 }, 'Creatinine': { 'male': 1, 'female': 1.1 }, 'Blood potassium': { 'male': 4.4, 'female': 4.4 },
	'Blood sodium': { 'male': 140, 'female': 140 }, 'Chloride': { 'male': 102.5, 'female': 102.5 },
	'CALORIES': 2250, 'CARBOHYDRATES': 275, 'FAT': 61, 'PROTEIN': 112.5, 'SODIUM': 2300, 'SUGAR': 125, // Nutrition
	'HOURS_OF_SLEEP': 8, 'REM_SLEEP': 0.225, 'DEEP_SLEEP': 0.18, 'HEART_RATE_BELOW_RESTING': 0.58
}

type Metric = any

interface DashboardStoreState {
	searchQuery: string, setSearchQuery: (searchQuery: string) => void
	todos: Todo[]
	top3Metrics: Metric[]
	scores: {
		overall: number;
		[Tag.blood]: number;
		[Tag.environment]: number;
		[Tag.exercise]: number;
		[Tag.nutrition]: number;
		[Tag.sleep]: number;
	}
	deleteTodo: (id: number) => void;
	fetchScore: () => Promise<any>
	updateScores: (args: { overall?: number, blood?: number, environment?: number, exercise?: number, nutrition?: number, sleep?: number }) => void
}

export const useDashboardStore = createSelectors(create<DashboardStoreState>((set) => ({
	searchQuery: '',
	scores: {
		overall: 80,
		[Tag.blood]: 68,
		[Tag.environment]: 82,
		[Tag.exercise]: 85,
		[Tag.nutrition]: 91,
		[Tag.sleep]: 90,
	},
	top3Metrics: [],
	todos: [
		{
			id: 1,
			tag: Tag.blood,
			title: 'Focus on decreasing your Hemoglobin level from 172 g/L down between 129 → 165 g/L',
			photoRequired: true
		},
		{
			id: 2,
			tag: Tag.nutrition,
			title: 'Drink more water Drink more water Drink more water'
		},
		{
			id: 3,
			tag: Tag.sleep,
			title: 'Sleep earlier'
		}
	],
	setSearchQuery: (searchQuery: string) => set({ searchQuery }),
	deleteTodo(id: number) {
		set(state => {
			return { todos: state.todos.filter(todo => todo.id !== id) }
		})
	},
	updateScores({ overall, blood, environment, exercise, nutrition, sleep }: { overall?: number, blood?: number, environment?: number, exercise?: number, nutrition?: number, sleep?: number }) {
		set((state) => ({
			scores: {
				...state.scores,
				...(overall && { overall }),
				...(exercise && { exercise }),
				...(nutrition && { nutrition }),
				...(blood && { blood }),
				...(environment && { environment }),
				...(sleep && { sleep }),
			}
		}))
	},
	async fetchScore() {
		let url = 'http://localhost:3000/ai-health-engine?'
		const searchParams: string[] = []
		for (const [key, value] of Object.entries(idealVals)) {
			if (typeof value === 'number') {
				searchParams.push(`${key}=${value}`)
			} else if (typeof value === 'object' && 'male' in value) {
				searchParams.push(`${key}=${value.male}`)
			} else {
				throw new Error(`Unexpected value type: ${value}`)
			}
		}

		url += searchParams.join('&')

		// const response = await ky(url);
		// const result = await response.json<any>()

		// const overallScore = result['OVERALL_SCORE']
		// const top3Metrics = result['TOP_3_METRICS']
		// set(() => ({ overallScore, top3Metrics }))

		// return result
	}
})))