import create from 'zustand'
import { createSelectors } from '~/utils/store'

interface DashboardStoreState {
 searchQuery: string, setSearchQuery: (searchQuery: string) => void
}

export const useDashboardStore = createSelectors(create<DashboardStoreState>((set) => ({
	searchQuery: '',
	setSearchQuery: (searchQuery: string) => set({ searchQuery })
})))