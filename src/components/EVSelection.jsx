import React, { useState } from "react";
import TeslaModelX from "../images/ev-selection/tesla-model-x.png";
import LucidAir from "../images/ev-selection/lucid-air.png";
import FordMustangMachE from "../images/ev-selection/ford-mustang-mach-e.png";
import AudiQ8etron from "../images/ev-selection/audi-q8-etron.png";
import MercedesBenzEQS from "../images/ev-selection/mercedes-benz-eqs.png";
import PorscheTaycan from "../images/ev-selection/porsche-taycan.png";

const vehicle_list = [
	{
		name: "Tesla Model X", info: {
			img: TeslaModelX,
			price: "75",
			make: "Tesla",
			model: "Model X",
			year: "2022",
			seats: "7",
			range: "550 km",
			storage: "Frunk, rear"
		}
	},
	{
		name: "Lucid Air", info: {
			img: LucidAir,
			price: "70",
			make: "Lucid",
			model: "Air",
			year: "2023",
			seats: "5",
			range: "650 km",
			storage: "Frunk, rear"
		}
	},
	{
		name: "Ford Mustang Mach-E", info: {
			img: FordMustangMachE,
			price: "40",
			make: "Ford",
			model: "Mustang Mach-E",
			year: "2023",
			seats: "5",
			range: "450 km",
			storage: "Frunk, rear"
		}
	},
	{
		name: "Audi Q8 e-tron", info: {
			img: AudiQ8etron,
			price: "65",
			make: "Audi",
			model: "Q8 e-tron",
			year: "2024",
			seats: "5",
			range: "360 km",
			storage: "Frunk, rear"
		}
	},
	{
		name: "Mercedes-Benz EQS", info: {
			img: MercedesBenzEQS,
			price: "90",
			make: "Mercedes-Benz",
			model: "EQS450+",
			year: "2023",
			seats: "5",
			range: "550 km",
			storage: "Rear"
		}
	},
	{
		name: "Porsche Taycan", info: {
			img: PorscheTaycan,
			price: "80",
			make: "Porsche",
			model: "Taycan",
			year: "2022",
			seats: "4+1",
			range: "350 km",
			storage: "Frunk, rear"
		}
	}
]

function EVSelection() {

	const [selectedCar, setSelectedCar] = useState(vehicle_list[0]);

	return (
		<section className='h-full w-full bg-neutral-100'>
			<div className="flex justify-center mx-10 py-20">
				<div className="flex items-center flex-col w-full max-w-screen-xl">
					<div className="flex flex-col items-center w-full text-center mb-16">
						<h1 className="text-4xl md:text-5xl font-bold py-4 antialiased">Our EV selection</h1>
						<p className="text-md text-stone-500 py-4 w-72 md:w-1/3">Choose from a variety of our amazing EVs to rent for your next adventure or business trip</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 justify-between items-center lg:items-end w-full">
						<div className="flex flex-col flex-shrink-0 mb-12 lg:mb-0 col-span-2 lg:col-span-1">
							{vehicle_list.map((car, index) => (
								<button key={index} onClick={() => setSelectedCar(car)} className={`${selectedCar.name === car.name ? "bg-green-400 text-white" : "bg-neutral-200"} px-6 py-4 my-1 text-start text-xl font-bold antialiased hover:text-white hover:bg-green-400 rounded transition duration-400`}>
									{car.name}
								</button>
							))}
						</div>
						<div className="flex items-center gap-12 col-span-3 flex-col md:flex-row">
							<div className="">
								<img src={selectedCar.info.img} className="w-[40rem]" alt="electric car" />
							</div>
							<div className="text-center w-full md:w-72 flex-shrink-0 mt-12 md:mt-0">
								<div className="flex bg-green-400 text-white items-center justify-center px-2 py-3">
									<span className="text-3xl font-bold antialiased mr-2">${selectedCar.info.price}</span> / day
								</div>
								<div className="grid">
									<div className="grid grid-cols-2 border-2 border-black border-t-0 px-2 py-3 text-sm">
										<span className="self-center">
											Make
										</span>
										<span className="border-l-2 border-black self-center">
											{selectedCar.info.make}
										</span>
									</div>
									<div className="grid grid-cols-2 border-2 border-black border-t-0 px-2 py-3 text-sm">
										<span className="self-center">
											Model
										</span>
										<span className="border-l-2 border-black self-center">
											{selectedCar.info.model}
										</span>
									</div>
									<div className="grid grid-cols-2 border-2 border-black border-t-0 px-2 py-3 text-sm">
										<span className="self-center">
											Year
										</span>
										<span className="border-l-2 border-black self-center">
											{selectedCar.info.year}
										</span>
									</div>
									<div className="grid grid-cols-2 border-2 border-black border-t-0 px-2 py-3 text-sm">
										<span className="self-center">
											Seats
										</span>
										<span className="border-l-2 border-black self-center">
											{selectedCar.info.seats}
										</span>
									</div>
									<div className="grid grid-cols-2 border-2 border-black border-t-0 px-2 py-3 text-sm">
										<span className="self-center">
											Range
										</span>
										<span className="border-l-2 border-black self-center" >
											{selectedCar.info.range}
										</span>
									</div>
									<div className="grid grid-cols-2 border-2 border-black border-t-0 px-2 py-3 text-sm">
										<span className="self-center">
											Storage
										</span>
										<span className="border-l-2 border-black self-center">
											{selectedCar.info.storage}
										</span>
									</div>
								</div>
								<button className="bg-green-400 w-full px-2 py-3 mt-4 text-white text-xl uppercase font-bold antialiased shadow-lg shadow-green-300 border border-green-400 rounded transition duration-500 hover:bg-green-500 hover:shadow-green-400">
									Reserve Now
								</button>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</section>
	)
}

export default EVSelection;