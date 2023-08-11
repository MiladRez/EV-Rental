import React from "react";
import SelectCar from "../images/plan-trip/select_car_img.png";
import ContactOperator from "../images/plan-trip/contact_operator_img.png"
import Drive from "../images/plan-trip/drive_img.png";

function PlanTrip() {

	return (
		<section className='h-full w-full bg-neutral-100'>
			<div className="flex items-center flex-col py-20">
				<div className="max-w-screen-xl">
					<div className="flex flex-col items-center mb-14 text-center">
						<h2 className="text-2xl font-bold py-4 text-stone-500">Plan your trip now</h2>
						<h1 className="text-4xl md:text-5xl font-bold py-4">Quick & easy rental process</h1>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center py-6">
						<div className="flex flex-col items-center px-16 py-4 md:py-0">
							<img src={SelectCar} className="py-6 w-32 md:w-fit" alt="select a car img"/>
							<h1 className="text-2xl font-bold py-2">Select a Car</h1>
							<p className="w-72 md:w-full py-2">Choose from a large variety of our latest EVs that best fits your driving needs.</p>
						</div>
						<div className="flex flex-col items-center px-16 py-4 md:py-0">
							<img src={ContactOperator} className="py-6 w-32 md:w-fit" alt="contact an operator img"/>
							<h1 className="text-2xl font-bold py-2">Contact an Operator</h1>
							<p className="w-72 md:w-full py-2">Connect with a personal operator that will walk you through every step of the process.</p>
						</div>
						<div className="flex flex-col items-center px-16 py-4 md:py-0">
							<img src={Drive} className="py-6 w-32 md:w-fit" alt="drive on the road img"/>
							<h1 className="text-2xl font-bold py-2">Drive</h1>
							<p className="w-72 md:w-full py-2">Take your EV on the road with 24/7 customer support to ensure the best drive.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

}

export default PlanTrip;