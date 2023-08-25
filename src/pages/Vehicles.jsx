import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EVSelection from '../components/HomePage/EVSelection';
import PageHeader from '../components/PageHeader';

function Vehicles() {
	return (
		<>
			<Navbar />
			<PageHeader title="Vehicle Selection" />
			<EVSelection />
			<Footer />
		</>
	)
}

export default Vehicles;