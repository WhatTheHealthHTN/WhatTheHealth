import { NextPage } from "next";
import { ReactElement } from "react";
import { MdDashboard } from 'react-icons/md'
import { BsShieldCheck, BsPersonFill } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaHistory } from 'react-icons/fa'
import { ImExit, ImPlus } from 'react-icons/im'
import { InputGroup, InputLeftElement, Input, Avatar } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { Cell, Pie, PieChart } from "recharts";
import dynamic from 'next/dynamic'

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
		<InputGroup width={260} className='m-4'>
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

const DashboardView = () => {
	return (
		<div className='flex flex-col'>
			<div className="flex flex-row">
				<SearchBar />
			</div>
			<div className='flex flex-row'>
				<HealthDiagnosisSection />
			</div>
		</div>
	)
}

const HealthDiagnosisSection = dynamic(() => import('~/components/sections/health-diagnosis'), { ssr: false })

const DashboardPage: NextPage = () => {
	return (
		<div className="flex flex-row flex-1 h-screen w-screen">
			<Sidebar />
			<div className='flex-1'>
				<DashboardView />
			</div>
		</div>
	);
};

export default DashboardPage;
