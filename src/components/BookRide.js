import React from 'react';
import Background from "../images/book-ride/hero_bg_mirror.png";
import BannerBG from '../images/book-ride/book_ride_bg.jpg'

function BookRide() {
	return (
		<>
			<div className='relative h-screen w-screen'>
				<img src={Background} className="absolute w-full h-full z-0 top-[-1.6px] -scale-y-100 hidden sm:block" alt="hero background"></img>
				<div className='relative container mx-auto bg-white h-screen max-w-screen-xl shadow'>
					<img src={BannerBG} className='absolute left-0 top-0 opacity-20 object-cover w-full h-full border' alt='banner background'></img>
					<button></button>
				</div>
			</div>
		</>
	)
}

export default BookRide;