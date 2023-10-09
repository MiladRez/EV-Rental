import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CarDisplayCard from "../components/CarDisplayCard";
import { useLocation } from "react-router-dom";

function UserDashboard() {

	const location = useLocation();

	const [carList, setCarList] = useState([])

	useEffect(() => {
		fetch(`http://localhost:8000/api/users/${location.state.id}`, {
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
		})
		.then(res => res.json())
		.then(res => {
			console.log(res)
			setCarList(res.carList)
		})
	}, [location.state.id]);

	console.log(location.state.id)

	return (
		<>
			<Navbar signedIn={true} />
			<div className="w-full h-screen">
				<div className="flex flex-col items-center pt-32 px-16">
					<h1 className="text-4xl self-start py-8">
						My Cars
					</h1>
					<div className="flex flex-col gap-12 w-full">
						{carList.length !== 0 ?
							carList.map((car, index) => (
								<CarDisplayCard key={index} make={car.make} model={car.model} year={car.year} seats={car.seats} range={car.range} />
							))
							:
							<h1>Currently, there are no cars under your account for rental. Start your journey by exploring our selection of EVs!</h1>
						}
					</div>	
				</div>	
			</div>
		</>
	)
}

export default UserDashboard;