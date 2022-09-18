import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'

export default function LoginPage() {
	return (
		<div className='flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-[#E338F9aa] to-[#FEC93Aaa]'>
			<div className='p-7 w-[400px] border rounded-lg bg-[rgb(251,250,255)] shadow-md'>
				<div className='from-[#E338F9] to-[#FEC93A] bg-clip-text bg-gradient-to-r text-transparent font-bold text-6xl mb-2 min-h-[70px] text-center'>Login</div>
				<FormControl className='flex flex-col'>
					<FormLabel>Email address</FormLabel>
					<Input value={'mainiumesh@gmail.com'} className='-mt-2 mb-4' type='email' />
					<FormLabel>Password</FormLabel>
					<Input type='password' value='Umesh123Maini' className='-mt-2 mb-4' />
					<Link href='/dashboard'>
						<button className='text-white rounded-md px-4 py-2 font-bold bg-gradient-to-r from-[#E338F9] to-[#FEC93A] hover:opacity-70 transition-all text-lg mx-auto mt-6 self-center flex flex-row items-center gap-2'>Enter HealthApp<FaArrowRight /></button>
					</Link>
				</FormControl>
			</div>
		</div>
	)
}