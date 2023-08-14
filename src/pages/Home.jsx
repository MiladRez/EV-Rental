import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import BookRide from '../components/BookRide';
import PlanTrip from '../components/PlanTrip';
import EVSelection from '../components/EVSelection';
import SaveBigBanner from '../components/SaveBigBanner';
import ChooseUs from '../components/ChooseUs';
import CustomerReviews from '../components/CustomerReviews';
import FAQ from '../components/FAQ';
import DownloadApp from '../components/DownloadApp';

function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<BookRide />
			<PlanTrip />
			<EVSelection />
			<SaveBigBanner />
			<ChooseUs />
			<CustomerReviews />
			<FAQ />
			<DownloadApp />
		</>
	)
}

export default Home;