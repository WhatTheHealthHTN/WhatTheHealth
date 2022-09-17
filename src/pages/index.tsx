import { Button, ButtonGroup } from "@chakra-ui/react";
import type { NextPage } from "next";
import { motion } from 'framer-motion'

const HomeHeader = () => {
	return (
		<div className='flex flex-row py-2 px-4 gap-2 items-center'>
			<div className='font-bold'>HealthApp</div>
			<div className='flex-1'></div>
			<Button>Login</Button>
			<Button>Sign up</Button>
		</div>
	)
}

const Home: NextPage = () => {
	return (
		<div className="min-h-screen">
			<HomeHeader />
			<motion.div className="text-center font-bold text-6xl text-gray-700 pt-20 px-8 max-w-3xl mx-auto"
				transition={{ ease: "easeOut", duration: 0.5 }}
				initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
				Understand your{" "}
				<span className="from-[#ff0000] to-[#ff8888] bg-clip-text bg-gradient-to-r text-transparent">
					health
				</span>
				, fully.
			</motion.div>
			<motion.div initial={{ y: 0, opacity: 0 }} animate={{ opacity: 1, y: 10 }} transition={{ delay: 0.2, duration: 0.5 }} className='max-w-2xl mt-1 text-center text-gray-600 font-medium mx-auto text-lg px-4 flex flex-col items-center gap-4 mb-6'>
				HealthApp gathers all your data in one place, using AI to provide actionable recommendations to improve your overall health.
			</motion.div>

			<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.5, ease: 'circOut' }} className='flex flex-col items-center'>
				<button className='text-white rounded-md px-4 py-2 font-bold bg-gradient-to-r from-[#ff0000] to-[#ff8888] hover:opacity-70 transition-all text-lg'>Get Started</button>
			</motion.div>
			<div>
			</div>
		</div >
	);
};

export default Home;
