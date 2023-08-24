import React, { useEffect, useState } from 'react';
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
import Footer from '../components/Footer';

function Home() {

	const [windowPosition, setWindowPosition] = useState(window.scrollY);
	
	useEffect(() => {
		function handleScroll(e) {
			setWindowPosition(window.scrollY)
		}
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	  }, []);
	

	return (
		<>	
			<button
				className={`fixed z-20 right-10 bottom-10 bg-green-400 rounded px-3 py-3 ${windowPosition > 550 ? "block" : "hidden"} hover:text-white`}
				onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth", })}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
				</svg>
			</button>
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
			<Footer />
		</>
	)
}

export default Home;