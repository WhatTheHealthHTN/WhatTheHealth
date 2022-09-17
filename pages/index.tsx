import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className="bg-black min-h-screen text-white">
			<div className="text-center font-bold text-6xl">
				Understand your{" "}
				<span className="from-[#ff0000] to-[#ff8888] bg-clip-text bg-gradient-to-r text-transparent">
					health
				</span>
				, fully
			</div>
			<div></div>
		</div>
	);
};

export default Home;
