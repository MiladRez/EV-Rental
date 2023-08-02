import React from "react";
import Background from "../images/hero_bg.png";
import Tesla from "../images/tesla_model_x.png";

function Hero() {
	return (
		<section className="relative inline-flex h-screen w-full justify-center">
			<img src={Background} className="absolute w-full h-full z-0" alt="hero background"></img>
			<div className="relative h-screen inline-flex max-w-screen-xl w-full items-center">
				<div className="w-[28rem] z-10 ml-16 inline-flex justify-center flex-col flex-shrink-0">
					<h2 className="text-2xl pb-4">Rent an EV now </h2>
					<h1 className="text-4xl pb-8 font-bold">Find the perfect EV with the <span className="text-green-400">lowest rates</span> in the market</h1>
					<p className="text-md pb-6">Rent the car of your dreams. Unbeatable prices, unlimited range, flexible pick-up options and much more</p>
					<div>
						<a href="#book-ride" className="inline-block bg-green-400 px-6 py-4 border border-green-400 shadow-lg shadow-green-300 hover:shadow-green-400 rounded text-white transition hover:delay-100 hover:text-white hover:bg-green-500 mr-6">
							Book Ride
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline ml-2 w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
							</svg>
						</a>
						<a href="#learn-more" className="inline-block bg-neutral-800 px-6 py-4 border border-neutral-800 shadow-lg shadow-neutral-700 hover:shadow-neutral-800 rounded text-white transition hover:delay-100 hover:text-white hover:bg-neutral-900">
							Learn More
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline ml-2 w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
							</svg>
						</a>
					</div>
				</div>
				<img src={Tesla} className="absolute right-0 mt-16 w-2/3 max-w-3xl hidden md:inline-flex" alt="hero main car"></img>
			</div>
		</section>
	)
}

export default Hero;