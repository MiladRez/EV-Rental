import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import TeamMember from '../components/TeamPage/TeamMember';
import JackCarter from "../images/TeamPage/jack-carter.jpeg";
import LoisMartinez from "../images/TeamPage/lois-martinez.jpeg";
import HenryColeman from "../images/TeamPage/henry-coleman.jpeg";
import NancyRobinson from "../images/TeamPage/nancy-robinson.jpeg";
import ScottLee from "../images/TeamPage/scott-lee.jpeg";
import AnnieBarnes from "../images/TeamPage/annie-barnes.jpeg";
import Footer from '../components/Footer';

const team_members = [
	{
		img: JackCarter,
		name: "Jack Carter",
		title: "Business Owner"
	},
	{
		img: LoisMartinez,
		name: "Lois Martinez",
		title: "Manager"
	},
	{
		img: HenryColeman,
		name: "Henry Coleman",
		title: "Salesman"
	},
	{
		img: NancyRobinson,
		name: "Nancy Robinson",
		title: "Car Detailist"
	},
	{
		img: ScottLee,
		name: "Scott Lee",
		title: "Photographer"
	},
	{
		img: AnnieBarnes,
		name: "Annie Barnes",
		title: "Service Specialist"
	},
]

function Team() {
	return (
		<>
			<Navbar />
			<PageHeader title="Our Team" />
			<div className='bg-neutral-100'>
				<div className='flex justify-center px-10 py-20'>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center max-w-screen-xl'>
						{team_members.map((member, index) => (
							<TeamMember key={index} img={member.img} name={member.name} title={member.title} />
						))}
					</div>	
				</div>	
			</div>
			<Footer />
		</>
	)
}

export default Team;