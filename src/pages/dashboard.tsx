import { NextPage } from "next";
import { ReactElement } from "react";
import { MdDashboard, MdNotificationsActive } from 'react-icons/md'
import { BsShieldCheck, BsPersonFill, BsChevronDown } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaHistory } from 'react-icons/fa'
import { ImExit, ImPlus } from 'react-icons/im'
import { InputGroup, InputLeftElement, Input, Button, Avatar, WrapItem, Box, MenuButton, Menu, MenuItem, MenuList, } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import dynamic from 'next/dynamic'
import RecommendationsSection from "~/components/sections/recommendations";
import { VscBellDot } from 'react-icons/vsc'
import { AiOutlinePlus } from 'react-icons/ai'

const SidebarTab = ({ icon, text }: { icon: ReactElement, text: string }) => {
	return (
		<div className="flex flex-row group">
			<div className='flex flex-row items-center gap-2 pl-5 pr-14 py-3 text-gray-500 group-hover:bg-[rgb(255,253,252)] cursor-pointer flex-1'>
				<span className='text-lg'>{icon}</span>
				<span className='text-xs font-bold'>{text}</span>
			</div>
			<span className='invisible group-hover:visible w-1 self-stretch bg-[rgb(103,192,205)]'></span>
		</div>
	)
}

const SearchBar = () => {
	return (
		<InputGroup width={350}>
			<InputLeftElement
				pointerEvents='none'
				// eslint-disable-next-line react/no-children-prop
				children={<FiSearch color='gray.300' />}
			/>
			<Input type='text' variant='filled' placeholder='Search' borderRadius={15} />
		</InputGroup>
	)
}

const Sidebar = () => {
	return (
		<div className='flex flex-col bg-[rgb(249,245,239)]'>
			<div className='font-medium text-2xl flex flex-row items-center gap-2 pl-5 pt-5 pb-5'>Health <ImPlus className='text-[#3ec3cf]' size={12} /></div>
			<div className='flex flex-grow-[1]'></div>
			<div className="flex flex-col gap-2">
				<SidebarTab text='Health' icon={<MdDashboard />} />
				<SidebarTab text='History' icon={<FaHistory />} />
				<SidebarTab text='Statistics' icon={<RiBarChart2Fill />} />
				<SidebarTab text='Settings' icon={<IoMdSettings />} />
				<SidebarTab text='Profile' icon={<BsPersonFill />} />
				<SidebarTab text='Support' icon={<BsShieldCheck />} />
			</div>
			<div className='flex flex-grow-[2]'></div>
			<SidebarTab text='Exit' icon={<ImExit />} />
		</div>
	)
}

const DashboardToolbar = () => {
	return (
		<div className="flex flex-row p-5 items-center">
			<div className='flex flex-row gap-5'>
				<SearchBar />
				<Button rounded='full' className='w-5 h-5' p={0}>
					<VscBellDot size={20} />
				</Button>
			</div>
			<div className='flex-1'></div>
			<Button rounded='full' w={10} h={10} p={0}>
				<AiOutlinePlus size={20} />
			</Button>

			<Menu>
				<MenuButton px={3} py={1} rounded='md' _hover={{ backgroundColor: 'gray.100' }}>
					<div className='flex flex-row gap-4 items-center'>
						<Box className='bg-gradient-to-r from-[rgb(238,167,93,0.5)] to-[rgb(238,167,93)] rounded-full flex flex-row items-center justify-center' w={10} h={10}>
							<Box className='bg-white rounded-full flex flex-row items-center justify-center' h={9} w={9}>
								<Avatar src='https://bit.ly/prosper-baba' w={8} h={8} />
							</Box>
						</Box>
						<div className='text-sm font-medium'>
							Leon Si
						</div>
						<BsChevronDown size={10} />
					</div>
				</MenuButton>
				<MenuList>
					<MenuItem>Download</MenuItem>
					<MenuItem>Create a Copy</MenuItem>
					<MenuItem>Mark as Draft</MenuItem>
					<MenuItem>Delete</MenuItem>
					<MenuItem>Attend a Workshop</MenuItem>
				</MenuList>
			</Menu >
		</div>
	)
}

const DashboardView = () => {
	return (
		<div className='flex flex-col'>
			<DashboardToolbar />
			<div className='grid grid-cols-[4fr,6fr] grid-rows-[5fr,3fr]'>
				<HealthDiagnosisSection />
				<RecommendationsSection />
			</div>
		</div>
	)
}

const HealthDiagnosisSection = dynamic(() => import('~/components/sections/health-diagnosis'), { ssr: false })

const DashboardPage: NextPage = () => {
	return (
		<div className="flex flex-row flex-1 h-screen w-screen min-w-[1080px] min-h-[720px]">
			<Sidebar />
			<div className='flex-1'>
				<DashboardView />
			</div>
		</div>
	);
};

export default DashboardPage;