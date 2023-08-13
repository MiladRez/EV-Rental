import React, { useState } from "react";

function FAQ() {

	const [openQA, setOpenQA] = useState("");

	const handleClick = (q) => {
		setOpenQA(openQA === q ? "" : q);
	}

	return (
		<section className="">
			<div className="flex justify-center mx-10 py-20">
				<div className="w-full max-w-screen-xl">
					<div className="flex flex-col items-center text-center">
						<h2 className="text-2xl font-bold">FAQ</h2>
						<h1 className="text-5xl font-bold py-4">Frequently Asked Questions</h1>
						<p className="md:w-[40rem] text-stone-600 py-4">
							Answers to common questions and inquiries asked by our customers about the car rental booking process.
						</p>
					</div>
					<div className="flex justify-center w-full py-16">
						<div className="flex flex-col w-4/6">
							<div className="border px-10 py-5">
								<div id="q1" className="flex justify-between w-full h-full" onClick={() => handleClick("q1")}>
									<h4 className="text-lg font-medium">1. Can I book multiple cars under my name?</h4>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>	
								</div>
								<div className={`${openQA === "q1" ? "block" : "hidden"}`}>
									<p className="">
										Yes, multiple vehicles can be reserved under one name. All booked vehicles are reserved to an account
										and can be seen under the "My Vehicles" page under account settings. Depending on the rental package selected,
										prices can differ for each vehicle. To learn more about rental package deals including multiple vehicles please 
										reach out to us by visiting our Contact page.
									</p>
								</div>
							</div>
							<div className="border border-t-0 px-10 py-5">
								<div id="q2" className="flex justify-between" onClick={() => handleClick("q2")}>
									<h4 className="text-lg font-medium">2. Do you offer non-electric vehicles for rent?</h4>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
								<div className="hidden">
									<p className="">
										Currently, EV Rental is focusing on providing our customers with the latest electric vehicles in the market. 
										Although we don't currently offer any non-electric vehicles, we plan to expand our inventory to include vehicles 
										running on hybrid engines.
									</p>
								</div>
							</div>
							<div className="border border-t-0 px-10 py-5">
								<div id="q3" className="flex justify-between" onClick={() => handleClick("q3")}>
									<h4 className="text-lg font-medium">3. Is there a cancellation fee if I need to change or cancel my reservation?</h4>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 pointer-events-auto">
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>
								</div>
								<div className="hidden">
									<p className="">
										Cancellation fees depend on specific rental package policies and account membership status. Certain rental packages 
										and account memberships ensure a free cancellation policy and have a larger inventory of cars to choose from when 
										changing vehicles. Our standard policy guarantees free cancellation if informed 24hrs before the pick-up date. For 
										more information about cancellation fees please visit the Contact page with your inquiries.
									</p>
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