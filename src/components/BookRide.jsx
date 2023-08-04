import React from 'react';
import BannerBG from '../images/book-ride/book_ride_bg.jpg';
import Background from "../images/book-ride/hero_bg_mirror.png";
import SelectRideIcon from "../images/book-ride/select_ride_icon.png";
import SelectLocationIcon from "../images/book-ride/select_location_icon.png";
import SelectDateIcon from "../images/book-ride/select_date_icon.png";

const ev_selection = [
	{ value: 'tesla-model-s', label: 'Tesla Model S' },
	{ value: 'tesla-model-x', label: 'Tesla Model X' },
	{ value: 'ford-mustang-mach-e', label: 'Ford Mustang Mach-E' },
	{ value: 'hyundai-ioniq-5', label: 'Hyundai Ioniq 5' },
	{ value: 'rivian-r1s', label: 'Rivian R1S' },
	{ value: 'audi-q8-e-tron', label: 'Audi Q8 e-tron' },
	{ value: 'mercedes-benz-eqs', label: 'Mercedes-Benz EQS' },
	{ value: 'lucid-air', label: 'Lucid Air' },
	{ value: 'porsche-taycan', label: 'Porsche Taycan' },
	{ value: 'gmc-hummer-ev', label: 'GMC Hummer EV' },
]

const location_selection = [
	{ value: 'toronto', label: 'Toronto' },
	{ value: 'mississauga', label: 'Mississauga' },
	{ value: 'brampton', label: 'Brampton' },
	{ value: 'vaughn', label: 'Vaughn' },
	{ value: 'north-york', label: 'North York' },
	{ value: 'richmond-hill', label: 'Richmond Hill' },
	{ value: 'milton', label: 'Milton' },
]

function BookRide() {

	return (
		<>
			<div className='relative h-screen w-screen bg-neutral-100'>
				<img src={Background} className="absolute w-full h-full z-0 top-[-1.6px] -scale-y-100 hidden sm:block" alt="hero background"></img>
				<div className='flex justify-center mx-10'>
					<div className='relative bg-white h-fit w-screen max-w-screen-xl rounded shadow-2xl'>
						<img src={BannerBG} className='absolute left-0 top-0 opacity-10 object-cover h-full w-full' alt='banner background'></img>
						<div className='relative z-[1] flex flex-col px-12 pb-16 pt-12'>
							<h1 className='text-2xl font-bold mb-6'>Book a ride</h1>
							<form className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
								<div>
									<div className='relative flex my-2'>
										<img src={SelectRideIcon} className='relative bottom-2 mr-2 h-8' alt='select ride icon' />
										<label className='text-lg font-bold'>
											Select your EV
										</label>
									</div>
									<select className='w-full px-5 py-3 rounded' required>
										<option disabled selected>Select your ride</option>
										{ev_selection.map((car) => (
											<option value={car.value}>
												{car.label}
											</option>
										))}
									</select>
								</div>
								<div>
									<div className='relative flex my-2'>
										<img src={SelectLocationIcon} className='relative bottom-0.5 mr-2 h-7 mb-1' alt='select pick-up location icon' />
										<label className='text-lg font-bold'>
											Pick-up Location
										</label>
									</div>
									<select className='w-full px-5 py-3 rounded'>
										<option disabled selected>Select a pick-up location</option>
										{location_selection.map((car) => (
											<option value={car.value}>
												{car.label}
											</option>
										))}
									</select>
								</div>
								<div>
									<div className='relative flex my-2'>
										<img src={SelectLocationIcon} className='relative bottom-0.5 mr-2 h-7 mb-1 -scale-x-100' alt='select drop-off location icon' />
										<label className='text-lg font-bold'>
											Drop-off Location
										</label>
									</div>
									<select className='w-full px-5 py-3 rounded'>
										<option disabled selected>Select a drop-off location</option>
										{location_selection.map((car) => (
											<option value={car.value}>
												{car.label}
											</option>
										))}
									</select>
								</div>
								<div>
									<div className='relative flex my-1.5'>
										<img src={SelectDateIcon} className='relative bottom-1 mr-2 h-9' alt='select pick-up date icon' />
										<label className='text-lg font-bold'>
											Pick-up Date
										</label>
									</div>
									<input type='date' className='form-input w-full px-5 py-3 rounded' />
								</div>
								<div>
									<div className='relative flex my-1.5'>
										<img src={SelectDateIcon} className='relative bottom-1 mr-2 h-9' alt='select drop-off date icon' />
										<label className='text-lg font-bold'>
											Drop-off Date
										</label>
									</div>	
									<input type='date' className='form-input w-full px-5 py-3 rounded' />
								</div>
								<button className='w-full border self-end h-13 bg-green-400 border border-green-400 shadow-lg shadow-green-300 px-5 pb-3 pt-2 text-white text-lg font-bold rounded hover:shadow-green-400 transition duration-500 hover:bg-green-500'>
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BookRide;