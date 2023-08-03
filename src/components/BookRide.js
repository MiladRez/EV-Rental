import React from 'react';
import Background from "../images/book-ride/hero_bg_mirror.png";
import BannerBG from '../images/book-ride/book_ride_bg.jpg'

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
						<div className='relative z-[1] flex flex-col px-12 py-16'>
							<h1 className='text-2xl font-bold'>Book a ride</h1>
							<form className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
								<div>
									<label className='font-bold'>
										Select your EV
									</label>
									<select className='w-full px-5 py-3 first:text-stone-300 text-black' required>
										<option disabled selected>Select your ride</option>
										{ev_selection.map((car) => (
											<option value={car.value}>
												{car.label}
											</option>
										))}
									</select>
								</div>
								<div>
									<label className='block'>
										Pick-up Location
									</label>
									<select className='w-full px-5 py-3'>
										{location_selection.map((car) => (
											<option value={car.value}>
												{car.label}
											</option>
										))}
									</select>
								</div>
								<div>
									<label className='block'>
										Drop-off Location
									</label>
									<select className='w-full px-5 py-3'>
										{location_selection.map((car) => (
											<option value={car.value}>
												{car.label}
											</option>
										))}
									</select>
								</div>
								<div>
									<label className='block'>
										Pick-up Date
									</label>
									<input type='date' className='form-input w-full px-5 py-3' />
								</div>
								<div>
									<label className='block'>
										Drop-off Date
									</label>
									<input type='date' className='form-input w-full px-5 py-3' />
								</div>
								<button className='w-full border self-end h-13 bg-green-400 px-5 py-3'>Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BookRide;