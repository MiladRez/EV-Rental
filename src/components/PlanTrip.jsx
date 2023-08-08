import React from "react";
import SelectCar from "../images/plan-trip/select_car_img.png";
import ContactOperator from "../images/plan-trip/contact_operator_img.png"
import Drive from "../images/plan-trip/drive_img.png";

function PlanTrip() {

	return (
		<div className='relative h-screen w-screen bg-neutral-100'>
			<div className="flex items-center flex-col py-16">
				<div className="flex flex-col items-center">
					<h2 className="text-2xl font-bold py-4">Plan your trip now</h2>
					<h1 className="text-5xl font-bold py-4">Quick & easy rental process</h1>
				</div>
				<div className="flex justify-center max-w-screen-xl py-20 text-center">
					<div className="flex flex-col items-center px-16">
						<img src={SelectCar} className="py-6" alt="select a car img"/>
						<h1 className="text-2xl font-bold py-2">Select a Car</h1>
						<p className="py-2">Choose from a large variety of our latest EVs that best fits your driving needs.</p>
					</div>
					<div className="flex flex-col items-center px-16">
						<img src={ContactOperator} className="py-6" alt="contact an operator img"/>
						<h1 className="text-2xl font-bold py-2">Contact an Operator</h1>
						<p className="py-2">Connect with a personal operator that will walk you through every step of the process.</p>
					</div>
					<div className="flex flex-col items-center px-16">
						<img src={Drive} className="py-6" alt="drive on the road img"/>
						<h1 className="text-2xl font-bold py-2">Drive</h1>
						<p className="py-2">Take your EV on the road with 24/7 customer support to ensure the best drive.</p>
					</div>
				</div>
			</div>
		</div>
	)

}

export default PlanTrip;