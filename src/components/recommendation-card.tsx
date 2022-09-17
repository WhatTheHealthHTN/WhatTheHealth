import { Avatar, Box, Checkbox, Progress } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import { useDashboardStore } from '~/stores/dashboard'
import { Todo } from '~/types/todo'
import { useEffect, useRef, useState } from 'react'
import { cx } from '~/utils/style'
import ProgressBar from "@ramonak/react-progress-bar";
// @ts-expect-error: no types
import useAnimationFrame from 'use-animation-frame'
import { motion, MotionValue } from 'framer-motion'

export function RecommendationCard({ title, subtitle, imageUrl }: { title: string, subtitle: string, imageUrl: string }) {
	return (
		<Box rounded='lg' p={5} borderWidth='1px' className='group cursor-pointer shadow hover:shadow-md transition-shadow'>
			<Avatar src={imageUrl} className='font-medium text-lg mb-4' />
			<div className='font-medium text-lg mb-3'>{title}</div>
			<div className='text-sm text-gray-400'>{subtitle}</div>
			<div className='bg-gradient-to-r bg-clip-text text-transparent from-[#3ec3cf] to-[#3ec3cfaa] mt-4 flex flex-row items-center gap-1 group-hover:opacity-70 transition-all'>View Details <BsChevronRight className='text-[#3ec3cf]' size={13} /></div>
		</Box>
	)
}

export function RecommendationTodo({ todo }: { todo: Todo }) {
	const [checkedData, setCheckedData] = useState({
		checked: false,
		timestamp: 0
	})
	const [timeElapsed, setTimeElapsed] = useState(0)
	const todos = useDashboardStore.use.todos()

	useAnimationFrame(() => {
		if (checkedData.checked) {
			const timeElapsed = Date.now() - checkedData.timestamp

			if (timeElapsed - 500 < 5000) {
				setTimeElapsed(timeElapsed)
			} else {

			}
		}
	})

	const fiveSeconds = 5 * 1000;
	// Account for transition time
	const completed = (timeElapsed - 500) / fiveSeconds * 100;

	return (
		<Box rounded='3xl' p={5} borderWidth='1.5px' className={cx('flex flex-row gap-4 items-center transition-colors', checkedData.checked ? 'bg-[rgb(250,251,255)]' : '')}>
			<Checkbox checked={checkedData.checked} onChange={(e) => {
				setCheckedData({
					checked: (e.target as any).checked,
					timestamp: Date.now()
				})
			}} />
			<div className='relative'>
				<motion.div className={cx('flex flex-col absolute -translate-x-1/2 -translate-y-1/2 top-1/2 ml-[70px]', checkedData.checked ? 'pointer-events-none' : 'pointer-events-auto')} animate={checkedData.checked ? { opacity: 0, left: -5 } : {}} transition={{ delay: checkedData.checked ? 0 : 0.5, duration: checkedData.checked ? 0.5 : 0.2 }}>
					<span className='font-medium'>
						{todo.title}
					</span>
				</motion.div>

				<motion.div className={cx(checkedData.checked ? 'pointer-events-auto' : 'pointer-events-none')} initial={{ opacity: 0, marginLeft: -5 }} animate={checkedData.checked ? { opacity: 1, marginLeft: 0 } : {}} transition={{ delay: checkedData.checked ? 0.5 : 0, duration: checkedData.checked ? 0.2 : 0.5 }} >
					<div className='flex flex-col'>
						<span className='font-medium flex flex-row items-center gap-2'>
							Task completed! <span className='text-xl'>🎉</span>
						</span>
						<div className='mb-2 text-gray-500'>You have <span className='font-bold'>{Math.ceil((5 - ((timeElapsed - 500) / 1000)))}s</span> to undo the action before task disappears from the list.</div>
						<Progress value={completed} rounded='md' height='7px' />
					</div>
				</motion.div>
			</div>
		</Box>
	)
}

export function RecommendationTodos() {
	const todos = useDashboardStore.use.todos()

	return (<div>
		<div className='text-xl font-medium mt-[1.5rem] mb-5'>General Recommendations</div>
		<div className='flex flex-col gap-5'>
			{todos.map((todo, i) => {
				return (
					<RecommendationTodo key={i} todo={todo} />
				)
			})}
		</div>
	</div>)
}