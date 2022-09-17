import create from 'zustand'
import { Todo } from '~/types/todo'
import { createSelectors } from '~/utils/store'

interface DashboardStoreState {
	searchQuery: string, setSearchQuery: (searchQuery: string) => void
	todos: Todo[]
	deleteTodo: () => number;
}

export const useDashboardStore = createSelectors(create<DashboardStoreState>((set) => ({
	searchQuery: '',
	todos: [{
		id: 1,
		tag: 'exercise',
		tagColor: 'orange',
		title: 'Get more exercise'
	},
	{
		id: 2,
		tag: 'water',
		tagColor: 'blue',
		title: 'Drink more water'
	}],
	setSearchQuery: (searchQuery: string) => set({ searchQuery }),
	deleteTodo(id: number) {
		set()
	}
})))