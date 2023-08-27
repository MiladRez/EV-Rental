import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/login' element={<LoginRegister />} />
				<Route path="/about" element={<About />} />
				<Route path="/vehicles" element={<Vehicles />} />
				<Route path='team' element={<Team />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</>
	)
}

export default App;