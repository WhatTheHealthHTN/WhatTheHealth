import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { motion } from 'framer-motion'

const HomeHeader = () => {
	return (
		<div className='flex flex-row py-2 px-4 gap-2 items-center'>
			<div className='font-bold'>Health App</div>
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
			<motion.div className="text-center font-bold text-6xl text-gray-700 py-20 px-8 max-w-3xl mx-auto" initial={{ opacity: 0, top: 40 }} animate={{ opacity: 1, top: 0 }}>
				Understand your{" "}
				<span className="from-[#ff0000] to-[#ff8888] bg-clip-text bg-gradient-to-r text-transparent">
					health
				</span>
				, fully.
			</motion.div>
			<div></div>
		</div>
	);
};

export default Home;
