import React from "react";
import CarsDisplay from "../../images/HomePage/choose-us/carz.png";
import Adventure from "../../images/HomePage/choose-us/adventure-img.png";
import Package from "../../images/HomePage/choose-us/package-img.png";
import SaveMoney from "../../images/HomePage/choose-us/save-money-img.png";
import Background from "../../images/HomePage/choose-us/choose-us-bg.jpeg";

function ChooseUs() {
	return (
		<section className="relative h-full w-full bg-neutral-100">
			<img src={Background} className="absolute z-0 object-cover w-full h-full opacity-70" alt="abstract background" />
			<div className="flex justify-center">
				<div className="w-full max-w-screen-xl mx-10 py-20 z-10 mt-32">
					<div>
						<img src={CarsDisplay} alt="triple cars lineup" />
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center items-center my-14">
						<div className="sm:w-[32rem] text-center lg:text-start">
							<h2 className="text-lg sm:text-xl font-bold py-2">Why Choose Us</h2>
							<h1 className="text-2xl sm:text-4xl font-bold pb-2">Best value deals for top quality EVs</h1>
							<p className="py-4 text-md text-stone-600">
								Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value
								for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to
								give you the ultimate renting experience, so don't miss out on your chance to save big.
							</p>
							<button className="bg-green-400 text-white text-md sm:text-lg font-bold px-6 py-4 my-4 rounded border border-green-400 shadow-lg shadow-green-300 transition duration-500 hover:shadow-green-400 hover:bg-green-500">
								Find Details
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline ml-2 w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						</div>
						<div className="flex flex-col sm:w-[31rem] gap-8">
							<div className="flex items-center flex-col text-center sm:flex-row sm:text-start">
								<img src={Adventure} className="w-32" alt="adventure/roadtrip logo" />
								<div className="pt-3 px-3">
									<h2 className="text-2xl font-bold py-3">Electrify Your Adventure</h2>
									<p className="text-stone-600">Whether it's down the street or across the country, find the perfect vehicle for your next adventure.</p>
								</div>
							</div>
							<div className="flex items-center flex-col text-center sm:flex-row sm:text-start">
								<img src={Package} className="w-32" alt="package logo" />
								<div className="pt-3 px-3">
									<h2 className="text-2xl font-bold py-3">All Inclusive Pricing</h2>
									<p className="text-stone-600">Get everything you need in one convenient travel package with our all-inclusive pricing model.</p>
								</div>
							</div>
							<div className="flex items-center flex-col text-center sm:flex-row sm:text-start">
								<img src={SaveMoney} className="w-32" alt="save money hand logo" />
								<div className="pt-3 px-3">
									<h2 className="text-2xl font-bold py-3">No Hidden Fees</h2>
									<p className="text-stone-600">Enjoy peace of mind with our no-hidden-fees policy. We believe in transparent and honest pricing.</p>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</section>
	)
}

export default ChooseUs;