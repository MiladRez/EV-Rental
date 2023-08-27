import React, { useState } from 'react';
import Logo from "../images/navbar/ev_rental_logo.png";
import { useNavigate } from 'react-router-dom';

function Navbar() {

	const [sidebar, setSidebar] = useState(false);
	const navigate = useNavigate();

	return (
		<nav className="flex justify-center">
			{  /* Mobile: Sidebar */
				sidebar ?
					<div className='fixed w-full h-full top-0 left-0 z-20'>
						<div className='w-full flex justify-end'>
							<button onClick={() => setSidebar(!sidebar)} className='relative right-6 top-10 z-20 transition hover:delay-75 hover:text-green-500'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>	
						</div>
						<div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-white z-[4]'>
							<div className='flex flex-col items-center'>
								<a href="/" className='text-2xl my-3 transition duration-300 hover:text-green-500'>
									Home
								</a>
								<a href="/about" className='text-2xl my-3 transition duration-300 hover:text-green-500'>
									About
								</a>
								<a href="/vehicles" className='text-2xl my-3 transition duration-300 hover:text-green-500'>
									Vehicle Selection
								</a>
								<a href="/team" className='text-2xl my-3 transition duration-300 hover:text-green-500'>
									Our Team
								</a>
								<a href="/contact" className='text-2xl my-3 transition duration-300 hover:text-green-500'>
									Contact
								</a>
							</div>
						</div>
					</div>
				: null
			}
			<div className='absolute z-10 w-full max-w-screen-xl flex items-center justify-between bg-transparent px-5 pt-3'>
				{/* Logo div */}
				<div className="absolute top-32 xs:top-24 w-60 xs:w-72 sm:w-44 mr-auto ml-auto right-0 left-0 sm:static sm:flex sm:items-center sm:flex-shrink-0 text-black sm:mr-6 sm:ml-10">
					<img src={Logo} className='sm:my-5' alt='ev rental logo'></img>
				</div>
				<div className="flex justify-end w-full mt-7 sm:mt-0 lg:hidden">
					{/* Mobile: Hamburger menu icon */}
					<button onClick={() => setSidebar(!sidebar)} className="flex items-center px-3 py-2 mt-px sm:mt-0 text-green-400 rounded bg-neutral-800 hover:bg-neutral-900 hover:border-black">
						{/* <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg> */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 20 20" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
				</div>

				<div className="hidden lg:inline-flex lg:items-center lg:w-auto">
					{/* Desktop nav items */}
					<div className="text-lg text-black font-medium inline-flex justify-center lg:flex-grow">
						<a href="/" className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 hover:text-green-500 mr-5">
							Home
						</a>
						<a href="/about" className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 hover:text-green-500 mr-5">
							About
						</a>
						<a href="/vehicles" className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 hover:text-green-500 mr-5">
							Vehicle Selection
						</a>
						<a href="/team" className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 hover:text-green-500 mr-5">
							Our Team
						</a>
						<a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 hover:text-green-500">
							Contact
						</a>
					</div>
				</div>
				<div className='hidden block lg:inline-flex'>
					<div className='text-lg font-bold inline-flex flex-wrap justify-center'>
						<button className="inline-block px-5 py-3 text-black transition duration-300 hover:text-green-500 mt-4 lg:mt-0"
							onClick={() => navigate("/login", {state: false})}>
							Sign In
						</button>
						<button className="inline-block bg-green-400 px-5 py-3 border border-green-400 shadow-lg shadow-green-300 hover:shadow-green-400 rounded text-white transition duration-500 hover:text-white hover:bg-green-500 mt-4 lg:mt-0"
							onClick={() => navigate("/login", {state: true})}>
							Register
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;