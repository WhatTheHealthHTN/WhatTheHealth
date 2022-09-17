import create from 'zustand'
import { Todo } from '~/types/todo'
import { createSelectors } from '~/utils/store'
import { Tag } from '~/utils/tag'

interface DashboardStoreState {
	searchQuery: string, setSearchQuery: (searchQuery: string) => void
	todos: Todo[]
	deleteTodo: (id: number) => void;
}

export const useDashboardStore = createSelectors(create<DashboardStoreState>((set) => ({
	searchQuery: '',
	todos: [
		{
			id: 1,
			tag: Tag.exercise,
			title: 'Get more exercise'
		},
		{
			id: 2,
			tag: Tag.nutrition,
			title: 'Drink more water'
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
	}
})))