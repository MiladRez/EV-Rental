import React from 'react';
import Logo from "../images/ev_rental_logo.png";

function Navbar() {

	return (
		<>
			<nav className="flex justify-center">
				<div className=' absolute z-10 w-full max-w-screen-xl inline-flex items-center justify-between bg-transparent px-5 pt-3'>
					<div className="flex items-center flex-shrink-0 text-black mr-6 ml-11">
						{/* Logo div */}
						<button>
							<img src={Logo} className='w-44 my-5' alt='ev rental logo'></img>
						</button>
					</div>
					<div className="block lg:hidden">
						{/* Mobile: Hamburger menu */}
						<button className="flex items-center px-3 py-2 border-2 rounded text-green-400 border-green-400 hover:text-black hover:border-black">
							<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
						</button>
					</div>
					<div className="hidden lg:inline-flex lg:items-center lg:w-auto">
						{/* Nav items */}
						<div className="text-lg text-black font-bold inline-flex justify-center lg:flex-grow">
							<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 transition hover:delay-75 hover:text-green-500 mr-5">
								Home
							</a>
							<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 transition hover:delay-75 hover:text-green-500 mr-5">
								About
							</a>
							<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 transition hover:delay-75 hover:text-green-500 mr-5">
								Vehicle Selection
							</a>
							<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 transition hover:delay-75 hover:text-green-500 mr-5">
								Our Team
							</a>
							<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 transition hover:delay-75 hover:text-green-500 mr-5">
								Contact
							</a>
						</div>
					</div>
					<div className='hidden block lg:inline-flex'>
						<div className='text-lg font-bold inline-flex flex-wrap justify-center'>
							<a href="#sign-in" className="inline-block px-5 py-3 text-black transition hover:delay-75 hover:text-green-500 mt-4 lg:mt-0">Sign In</a>
							<a href="#register" className="inline-block bg-green-400 px-5 py-3 border border-green-400 shadow-lg shadow-green-300 hover:shadow-green-400 rounded text-white transition hover:delay-100 hover:text-white hover:bg-green-500 mt-4 lg:mt-0">Register</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar;