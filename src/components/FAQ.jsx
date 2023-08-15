import React, { useState } from "react";
import PorscheTaycanBack from "../images/faq/porsche-taycan-back.png";

function FAQ() {

	const [openQA, setOpenQA] = useState("");

	const handleClick = (qa) => {
		setOpenQA(openQA === qa ? "" : qa);
	}

	return (
		<section className="relative h-full w-full">
			<img src={PorscheTaycanBack} className="absolute w-[34rem] top-[50%] left-[-10rem]" />
			<div className="flex justify-center mx-10 py-28">
				<div className="w-full max-w-screen-xl z-10">
					<div className="flex flex-col items-center text-center">
						<h2 className="text-2xl font-bold">FAQ</h2>
						<h1 className="text-5xl font-bold py-4">Frequently Asked Questions</h1>
						<p className="md:w-[40rem] text-stone-600 py-4">
							Answers to common questions and inquiries asked by our customers about the car rental booking process.
						</p>
					</div>
					<div className="flex justify-center w-full py-16">
						<div className="flex flex-col w-[54rem] shadow-xl bg-white">
							<div id="qa1" className="border border-neutral-100 cursor-pointer select-none" onClick={() => handleClick("qa1")}>
								<div className={`${openQA === "qa1" ? "bg-green-400 text-white shadow-lg shadow-green-300" : ""} flex justify-between transition duration-100 px-6 sm:px-12 py-5`}>
									<h4 className="text-lg font-medium">1. Can I book multiple cars under my name?</h4>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-6 h-6 ml-4 min-w-min self-center transition-transform ${openQA === "qa1" ? "-rotate-180" : ""}`}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>	
								</div>
								<div className={`${openQA === "qa1" ? "max-h-64 py-6" : "max-h-0"} px-6 sm:px-12 transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)] duration-[400ms] sm:overflow-hidden overflow-y-auto text-stone-600 text-sm sm:text-base/7`}>
									Yes, multiple vehicles can be reserved under one name. All booked vehicles are reserved to an account
									and can be seen under the "My Vehicles" page under account settings. Depending on the rental package selected,
									prices can differ for each vehicle. To learn more about rental package deals including multiple vehicles please 
									reach out to us by visiting our Contact page.
								</div>
							</div>
							<div id="qa2" className="border border-t-0 border-neutral-100 cursor-pointer select-none" onClick={() => handleClick("qa2")}>
								<div className={`${openQA === "qa2" ? "bg-green-400 text-white shadow-lg shadow-green-300" : ""} flex justify-between transition duration-100 px-6 sm:px-12 py-5`}>
									<h4 className="text-lg font-medium">2. Do you offer non-electric vehicles for rent?</h4>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-6 h-6 min-w-min ml-4 self-center  transition-transform ${openQA === "qa2" ? "-rotate-180" : ""}`}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
								<div className={`${openQA === "qa2" ? "max-h-64 py-6" : "max-h-0"} px-6 sm:px-12 transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)] duration-[400ms] sm:overflow-hidden overflow-y-auto text-stone-600 text-sm sm:text-base/7`}>
									Currently, EV Rental is focusing on providing our customers with the latest electric vehicles in the market. 
									Although we don't currently offer any non-electric vehicles, we plan to expand our inventory to include vehicles 
									running on hybrid engines. For more information about our vehicle inventory, please visit the Vehicle Selection page.
								</div>
							</div>
							<div id="qa3" className="border border-t-0 border-neutral-100 cursor-pointer select-none" onClick={() => handleClick("qa3")}>
								<div className={`${openQA === "qa3" ? "bg-green-400 text-white shadow-lg shadow-green-300" : ""} flex justify-between transition duration-100 px-6 sm:px-12 py-5`}>
									<h4 className="text-lg font-medium">3. Is there a cancellation fee if I need to change or cancel my reservation?</h4>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-6 h-6 min-w-min ml-4 self-center  transition-transform ${openQA === "qa3" ? "-rotate-180" : ""}`}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
								<div className={`${openQA === "qa3" ? "max-h-64 py-6" : "max-h-0"} px-6 sm:px-12 transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)] duration-[400ms] sm:overflow-hidden overflow-y-auto text-stone-600 text-sm sm:text-base/7`}>
									Cancellation fees depend on specific rental package policies and account membership status. Certain rental packages 
									and account memberships ensure a free cancellation policy and have a larger inventory of cars to choose from when 
									changing vehicles. Our standard policy guarantees free cancellation if informed 24hrs before the pick-up date.	
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FAQ;