import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import BookRide from '../components/BookRide';
import PlanTrip from '../components/PlanTrip';
import EVSelection from '../components/EVSelection';

function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<BookRide />
			<PlanTrip />
			<EVSelection />
		</>
	)
}

export default Home;