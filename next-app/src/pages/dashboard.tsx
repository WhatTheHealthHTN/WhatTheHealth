import { NextPage } from "next";
import { BsChevronDown } from 'react-icons/bs'
import { InputGroup, InputLeftElement, Input, Button, Avatar, Box, MenuButton, Menu, MenuItem, MenuList } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import dynamic from 'next/dynamic'
import RecommendationsSection from "~/components/sections/recommendations";
import { VscBellDot } from 'react-icons/vsc'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDashboardStore } from "~/stores/dashboard";
import { motion } from 'framer-motion'
import HealthTipsSection from "~/components/sections/health-tips";
import HealthHistorySection from "~/components/sections/health-history";
import MedicationsSection from "~/components/sections/medications";
import Link from "next/link";

// const SidebarTab = ({ icon, text }: { icon: ReactElement, text: string }) => {
// 	return (
// 		<div className="flex flex-row group">
// 			<div className='flex flex-row items-center gap-2 pl-5 pr-14 py-3 text-gray-500 group-hover:bg-[rgb(255,253,252)] cursor-pointer flex-1 transition-all'>
// 				<span className='text-lg'>{icon}</span>
// 				<span className='text-xs font-bold'>{text}</span>
// 			</div>
// 			<span className='opacity-0 group-hover:opacity-100 w-1 self-stretch bg-[rgb(103,192,205)] transition-all'></span>
// 		</div>
// 	)
// }

const SearchBar = () => {
	const searchQuery = useDashboardStore.use.searchQuery();
	const setSearchQuery = useDashboardStore.use.setSearchQuery();

	return (
		<InputGroup>
			<InputLeftElement
				pointerEvents='none'
				// eslint-disable-next-line react/no-children-prop
				children={<FiSearch color='gray.300' />}
			/>
			<Input type='text' variant='filled' placeholder='Search' borderRadius={15} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
		</InputGroup>
	)
}

const Sidebar = () => {
	return (
		<div className='min-w-[300px] flex self-stretch flex-col bg-[rgb(249,245,239)] items-stretch p-4'>
			<motion.div initial={{ opacity: 0, marginLeft: '-10px' }} animate={{ marginLeft: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='flex flex-col'>
				<div className='text-2xl flex flex-row items-center gap-2 mb-4 from-[#E338F9] to-[#FEC93A] bg-clip-text bg-gradient-to-r text-transparent font-bold text-3xl px-4 self-center'>What the Health</div>
				{/* <div className="flex flex-col gap-2">
					<SidebarTab text='Health' icon={<MdDashboard />} />
					<SidebarTab text='History' icon={<FaHistory />} />
					<SidebarTab text='Statistics' icon={<RiBarChart2Fill />} />
					<SidebarTab text='Settings' icon={<IoMdSettings />} />
					<SidebarTab text='Profile' icon={<BsPersonFill />} />
					<SidebarTab text='Support' icon={<BsShieldCheck />} />
				</div> */}
				<HealthDiagnosticsSection />
			</motion.div>
		</div>
	)
}

const DashboardToolbar = () => {
	return (
		<div className='flex flex-row items-center'>
			<div className='w-[23rem] mr-3'>
				<SearchBar />
			</div>
			<Button rounded='full' className='w-5 h-5' p={0}>
				<VscBellDot size={20} />
			</Button>

			<div className='flex-1'></div>
			<Button rounded='full' w={10} h={10} p={0} className='mr-2'>
				<AiOutlinePlus size={20} />
			</Button>

			<Menu>
				<MenuButton px={3} py={1} rounded='md' _hover={{ backgroundColor: 'gray.100' }}>
					<div className='flex flex-row gap-2 items-center'>
						<Box className='bg-gradient-to-r from-[rgb(238,167,93,0.5)] to-[rgb(238,167,93)] rounded-full flex flex-row items-center justify-center' w={10} h={10}>
							<Box className='bg-white rounded-full flex flex-row items-center justify-center' h={9} w={9}>
								<Avatar src='/user.png' w={8} h={8} />
							</Box>
						</Box>
						<div className='text-sm font-medium'>
							Umesh Maini
						</div>
						<BsChevronDown size={10} />
					</div>
				</MenuButton>
				<MenuList>
					<MenuItem>
						<Link href='/login'>
							<a className='text-red-400'>Logout</a>
						</Link>
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	)
}

const DashboardView = () => {
	const searchQuery = useDashboardStore.use.searchQuery()

	let shouldShowHealthDiagnostics = true;
	let shouldShowRecommendations = true;
	if (searchQuery !== '') {
		shouldShowHealthDiagnostics = 'health diagnostics'.includes(searchQuery.toLowerCase())
		shouldShowRecommendations = 'recommendations'.includes(searchQuery.toLowerCase())
	}

	return (
		<div className='flex flex-col'>
			<div className='p-5'>
				<DashboardToolbar />
				<RecommendationsSection />
				<div className='flex flex-row'>
					<div className='flex flex-col'>
						<HealthHistorySection />
						<MedicationsSection />
					</div>
					<HealthTipsSection />
				</div>
			</div>
		</div>
	)
}

const HealthDiagnosticsSection = dynamic(() => import('~/components/sections/health-diagnostics'), { ssr: false })

const DashboardPage: NextPage = () => {
	return (
		<div className="flex flex-row flex-1 h-full w-full min-w-[1368px] min-h-screen">
			<Sidebar />
			<div className='flex-1'>
				<DashboardView />
			</div>
		</div>
	);
};

export default DashboardPage;
