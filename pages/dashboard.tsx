import { NextPage } from "next";
import { ReactElement } from "react";
import { MdDashboard } from 'react-icons/md'
import { BsShieldCheck, BsPersonFill } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaHistory } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'

// 249 245 239

const SidebarTab = ({ icon, text }: { icon: ReactElement, text: string }) => {
	return (
		<div className="flex flex-row group">
			<div className='flex flex-row items-center gap-2 pl-5 pr-10 py-3 text-gray-500 group-hover:bg-[rgb(255,253,252)] cursor-pointer flex-1'>
				<span className='text-lg'>{icon}</span>
				<span className='text-xs font-bold'>{text}</span>
			</div>
			<span className='invisible group-hover:visible w-1 self-stretch bg-[rgb(103,192,205)]'></span>
		</div>
	)
}

const Sidebar = () => {
	return (
		<div className='flex flex-col bg-[rgb(249,245,239)]'>
			<div className='font-medium'>Health <span>+</span></div>
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

const DashboardPage: NextPage = () => {
	return (
		<div className="flex flex-row flex-1 h-screen w-screen">
			<Sidebar />
		</div>
	);
};

export default DashboardPage;
