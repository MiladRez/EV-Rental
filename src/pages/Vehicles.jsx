import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EVSelection from '../components/HomePage/EVSelection';
import PageHeader from '../components/PageHeader';

function Vehicles() {
	return (
		<>
			<Navbar signedIn={false}/>
			<PageHeader title="Vehicle Selection" />
			<div className='py-20 bg-stone-100'>
				<EVSelection />
			</div>
			<Footer />
		</>
	)
}

export default Vehicles;