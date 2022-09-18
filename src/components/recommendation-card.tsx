import { Avatar, Box, Button, Checkbox, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Progress, Spinner, Tag, TagLabel } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import { useDashboardStore } from '~/stores/dashboard'
import { Todo } from '~/types/todo'
import { useEffect, useState } from 'react'
import { cx } from '~/utils/style'
// @ts-expect-error: no types
import useAnimationFrame from 'use-animation-frame'
import { motion } from 'framer-motion'
import { getTagColors } from '~/utils/tag'
import { TbDots } from 'react-icons/tb'
import { MdCloudUpload } from 'react-icons/md'
import { useFilePicker } from 'use-file-picker'

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

export function RecommendationTodo({ todo, index, }: { todo: Todo, index: number, }) {
	const [openFileSelector, { filesContent, loading }] = useFilePicker({
		accept: '*'
	})
	const [checkedData, setCheckedData] = useState({
		checked: false,
		timestamp: 0
	})
	const [isRecalculating, setIsRecalculating] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)
	const [timeElapsed, setTimeElapsed] = useState(0)
	const deleteTodo = useDashboardStore.use.deleteTodo()
	const [isUploadPhotoModalVisible, setIsUploadPhotoModalVisible] = useState(false)

	const threeSeconds = 3 * 1000;

	useEffect(() => {
		if (isDeleting) {
			setTimeout(() => {
				deleteTodo(todo.id)
			}, 500)
		}
	}, [isDeleting, deleteTodo, todo.id])

	useAnimationFrame(() => {
		if (checkedData.checked) {
			const timeElapsed = Date.now() - checkedData.timestamp

			if (timeElapsed - 500 < threeSeconds) {
				setTimeElapsed(timeElapsed)
			} else {
				setIsRecalculating(true)

				setTimeout(() => {
					setIsDeleting(true)
				}, 2_000)
			}
		}
	})

	// Account for transition time
	const completed = (timeElapsed - 500) / threeSeconds * 100;

	return (
		<motion.div initial={{ opacity: 1 }} animate={isDeleting ? { opacity: 0, marginTop: -10 } : {}} transition={{ duration: 0.5, delay: index }}>
			<Modal isOpen={isUploadPhotoModalVisible} onClose={() => {
				setIsUploadPhotoModalVisible(false)
			}}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Upload Photo</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<div className='text-md pr-2 -mt-2'>Please upload a photo of your latest blood report:</div>

						{loading ? (<div className='flex flex-row gap-2'><Spinner /> Uploading file...</div>) : (
							<div className='flex flex-row gap-2 mt-4'>
								<Input className={cx('flex-1 cursor-default pointer-events-none', filesContent[0] !== undefined ? 'italic' : '')} placeholder='Please upload a file...' readOnly={true} value={filesContent[0]?.name} />
								<Button className='px-4' onClick={() => {
									openFileSelector()
								}}>Upload File</Button>
							</div>
						)}
					</ModalBody>

					<ModalFooter className='mr-auto'>
						<Button disabled={filesContent[0] === undefined} colorScheme='green' mr={3} onClick={() => {
							setIsUploadPhotoModalVisible(false)
							setCheckedData({
								checked: true,
								timestamp: Date.now() - 10_000
							})
						}}>
							Upload
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<Box rounded='3xl' px={5} py={3} borderWidth='1.5px' className={cx('flex flex-row gap-4 items-center transition-colors relative', checkedData.checked ? 'bg-[rgb(250,251,255)]' : '')} shadow='md'>

				{isRecalculating && (
					<div className='flex flex-row items-center gap-4 text-gray-500 p-4 absolute top-1/2 -translate-y-1/2 right-[30px]'>
						<Spinner />
						<div className='text-sm'>Recalculating health scores...</div>
					</div>
				)}

				{!todo.photoRequired && <Checkbox className={isRecalculating ? 'invisible' : 'visible'} checked={checkedData.checked} onChange={(e) => {
					setCheckedData({
						checked: (e.target as any).checked,
						timestamp: Date.now()
					})
				}} />}

				{todo.photoRequired && !isRecalculating && <button className='border rounded-lg p-2 border-gray-300 hover:bg-gray-100 transition-colors' onClick={() => {
					setIsUploadPhotoModalVisible(true)
				}}><MdCloudUpload size={20} /></button>}

				<div className='relative max-w-4xl'>
					<motion.div className={cx('absolute -translate-y-1/2 top-1/2 flex flex-col items-start flex-1 h-full gap-0.5 w-full p-1', checkedData.checked || isRecalculating ? 'pointer-events-none' : 'pointer-events-auto')} animate={checkedData.checked || isRecalculating ? { opacity: 0, left: -5 } : {}} transition={todo.photoRequired ? { delay: 0, duration: 0 } : { delay: checkedData.checked ? 0 : 0.5, duration: checkedData.checked ? 0.5 : 0.2 }}>
						<span className='font-medium'>
							{todo.title}
						</span>
						<div className='flex-1'></div>
						<div className='mt-0.5'>
							<Tag size='md' style={{ background: getTagColors(todo.tag)[0] }} borderRadius='full'>
								<TagLabel className='text-white'>{todo.tag}</TagLabel>
							</Tag>
						</div>
					</motion.div>


					<div className={cx('relative', isRecalculating ? 'invisible' : 'visible')}>
						<motion.div className={cx(checkedData.checked ? 'pointer-events-auto' : 'pointer-events-none')} initial={{ opacity: 0, marginLeft: -5 }} animate={checkedData.checked ? { opacity: 1, marginLeft: 0 } : {}} transition={{ delay: checkedData.checked ? 0.5 : 0, duration: checkedData.checked ? 0.2 : 0.5 }} >
							<div className='flex flex-col'>
								<span className='font-medium flex flex-row items-center gap-2'>
									Task completed! <span className='text-xl'>🎉</span>
								</span>
								<div className='mb-2 text-gray-500'>Made a mistake? You have <span className='font-bold'>{Math.ceil((3 - ((timeElapsed - 500) / 1000)))}s</span> to undo the completion.</div>
								<Progress value={completed} rounded='md' height='7px' />
							</div>
						</motion.div>
					</div>
				</div>

				<Box className='rounded-sm flex flex-col items-center justify-center self-center min-h-[2rem] min-w-[2rem]' borderWidth={1} shadow='md'>
					<TbDots />
				</Box>

			</Box>
		</motion.div>
	)
}

export function RecommendationTodos() {
	const todos = useDashboardStore.use.todos()

	return (
		<motion.div className='pr-5'>
			<div className='text-xl font-bold mt-[1.5rem] mb-3'>Personal Recommendations</div>
			<div className='flex flex-row gap-5'>
				{todos.map((todo, index) => {
					return (
						<motion.div key={todo.id} initial={{ opacity: 0, marginTop: -10 }} animate={{ opacity: 1, marginTop: 0 }} transition={{ duration: 0.5, delay: index / 5 }}>
							<RecommendationTodo index={index} todo={todo} />
						</motion.div>
					)
				})}
			</div>
		</motion.div>
	)
}