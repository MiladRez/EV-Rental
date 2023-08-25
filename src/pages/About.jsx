import React from 'react';
import Navbar from '../components/Navbar';
import CarNature from "../images/AboutPage/about-us-car-tree.jpeg";
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

function About() {
	return (
		<>
			<Navbar />
			<PageHeader title="About Us" />
			<div className='relative w-full bg-neutral-100'>
				<div className='flex justify-center mx-10 lg:py-20'>
					<div className='flex flex-col items-center lg:flex-row gap-12 max-w-screen-xl px-8'>
						<img src={CarNature} className='absolute opacity-20 object-cover h-full w-full lg:opacity-100 lg:static lg:h-[40rem]' alt='car in nature' />
						<div className='flex flex-col gap-4 py-10 lg:py-0'>
							<h2 className='text-lg sm:text-2xl font-bold'>Who we are</h2>
							<h1 className='text-2xl sm:text-4xl font-bold'>Welcome to EV Rental - Your Path to Sustainable Mobility!</h1>
							<p className='text-sm lg:text-base text-stone-600'>
								At EV Rental, we are more than just a car rental company - we are committed to shaping a
								greener future by providing top-tier electric vehicles (EVs) for rent. Our mission is to offer a seamless
								and eco-conscious alternative to traditional car rental services, paving the way for zero emissions and a
								cleaner environment.
							</p>
							<div className='hidden xs:block'>
								<h3 className='text-lg sm:text-xl font-medium py-2'>Zero Emissions, Limitless Adventures</h3>
								<p className='text-sm lg:text-base text-stone-600'>
									With our cutting-edge fleet of electric vehicles, you can explore the beauty of our world without leaving
									behind a trail of carbon emissions. By opting for an EV rental, you're choosing to drive with a conscience
									- no tailpipe emissions, no harmful pollutants. Feel the thrill of the open road while knowing you're keepin
									the air clean and the environment vibrant.
								</p>	
							</div>
							<div className='hidden sm:block'>
								<h3 className='text-lg sm:text-xl font-medium py-2'>Keeping the Roads Green</h3>
								<p className='text-sm lg:text-base text-stone-600'>
									Our commitment to a green planet goes beyond our fleet. We actively participate in tree-planting initiatives,
									collaborate with environmental organizations, and promote awareness campaigns that highlight the importance
									of electric mobility. With your support, we're not just keeping the roads green - we're nurturing a legacy of
									conservation.
								</p>	
							</div>
							<p className='text-sm sm:text-base font-bold'>
								Choose EV Rental today and be a driving force for change. Your journey begins here, with us.
							</p>
						</div>
					</div>	
				</div>	
			</div>
			<Footer />
		</>
	)
}

export default About;