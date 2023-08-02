import React from "react";
import Background from "../images/hero_bg.png";
import Tesla from "../images/tesla_model_x.png";

function Hero() {
	return (
		<section className="relative h-screen">
			<img src={Background} className="absolute w-full h-full z-0" alt="hero background"></img>
			<div className="relative inline-flex top-1/4 w-full justify-center">
				<div className="inline-flex max-w-screen-xl w-full justify-between">
					<div className="w-1/3 h-64 ml-16 flex-shrink-0">
						<h2 className="text-2xl pb-4">Rent an EV now </h2>
						<h1 className="text-4xl pb-8 font-bold">Find the perfect EV with the lowest rates in the market</h1>
						<p className="text-md pb-6">Rent the car of your dreams. Unbeatable prices, unlimited range, flexible pick-up options and much more</p>
					</div>
					<div className="w-2/3 max-w-3xl mr-16 hidden md:inline-flex">
						<img src={Tesla} className="" alt="hero main car"></img>
					</div>
				</div>
			</div>
		</section>
	)
}

{/* <div className="relative flex justify-center top-72">
					<a href="#book-ride" className="inline-block bg-green-400 px-6 py-3 border border-green-400 shadow-lg shadow-green-300 hover:shadow-green-400 rounded text-white transition hover:delay-100 hover:text-white hover:bg-green-500 mt-4 lg:mt-0">Book Ride</a>
					<a href="#learn-more" className="inline-block bg-green-400 px-6 py-3 border border-green-400 shadow-lg shadow-green-300 hover:shadow-green-400 rounded text-white transition hover:delay-100 hover:text-white hover:bg-green-500 mt-4 lg:mt-0">Learn More</a>
				</div> */}

export default Hero;