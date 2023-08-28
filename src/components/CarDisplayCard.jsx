import React from "react";

function CarDisplayCard({make, model, year, seats, range}) {
	return (
		<>
			<div className="w-2/3">
				<div className="grid grid-cols-5 border">
					<div className="flex flex-col items-center gap-2 border-r">
						<h2 className="bg-green-400 w-full text-center py-1">
							Make
						</h2>
						<h3 className="pb-2">
							{make}
						</h3>
					</div>
					<div className="flex flex-col items-center gap-2 border-r">
						<h2 className="bg-green-400 w-full text-center py-1">
							Model
						</h2>
						<h3>{model}</h3>
					</div>
					<div className="flex flex-col items-center gap-2 border-r">
						<h2 className="bg-green-400 w-full text-center py-1">
							Year
						</h2>
						<h3>{year}</h3>
					</div>
					<div className="flex flex-col items-center gap-2 border-r">
						<h2 className="bg-green-400 w-full text-center py-1">
							Seats
						</h2>
						<h3>{seats}</h3>
					</div>
					<div className="flex flex-col items-center gap-2">
						<h2 className="bg-green-400 w-full text-center py-1">
							Range
						</h2>
						<h3>{range}</h3>
					</div>
				</div>	
			</div>
		</>
	)
}

export default CarDisplayCard;