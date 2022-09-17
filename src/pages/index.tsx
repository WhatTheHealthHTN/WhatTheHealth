import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { motion } from 'framer-motion'
import Link from "next/link";
import Script from "next/script";

const HomeHeader = () => {
	return (
		<motion.div initial={{ marginTop: -10, opacity: 0 }} animate={{ opacity: 1, marginTop: 0 }} className='flex flex-row py-4 px-8 gap-2 items-center'>
			<div className='text-white font-bold text-2xl'>HealthApp</div>
			<div className='flex-1'></div>
			<Button bgColor='#E338F9' color='white'>Login</Button>
			<Button bgColor='#e1a401' color='white'>Sign up</Button>
		</motion.div>
	)
}

const Home: NextPage = () => {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} id='three-container' className='absolute top-[400px] xs:top-[350px] pointer-events-none -z-[1] overflow-hidden max-w-full'></motion.div>
			<Script async src='/threejs.js' />
			<HomeHeader />
			<motion.div className="text-center font-bold text-6xl text-white pt-20 px-8 max-w-3xl mx-auto z-1"
				transition={{ ease: "easeOut", duration: 0.5 }}
				initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
				Understand your{" "}
				<span className="from-[#E338F9] to-[#FEC93A] bg-clip-text bg-gradient-to-r text-transparent z-1">
					health
				</span>
				, fully.
			</motion.div>
			<motion.div initial={{ y: 0, opacity: 0 }} animate={{ opacity: 1, y: 10 }} transition={{ delay: 0.2, duration: 0.5 }} className='max-w-2xl mt-1 text-center text-gray-400 font-medium mx-auto text-lg px-4 gap-4 mb-6'>
				HealthApp gathers all your data in one place, using <span className='font-bold bg-gradient-to-r from-[#83eeff] to-[#b941ff] text-transparent bg-clip-text text-lg'>Artificial&nbsp;Intelligence</span> to provide actionable recommendations to improve your overall health.
			</motion.div>

			<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.5, ease: 'circOut' }} className='flex flex-col items-center'>
				<Link href='/dashboard'>
					<button className='text-white rounded-md px-4 py-2 font-bold bg-gradient-to-r from-[#E338F9] to-[#FEC93A] hover:opacity-70 transition-all text-lg'>Get Started</button>
				</Link>
			</motion.div>
		</div>
	);
};

export default Home;
