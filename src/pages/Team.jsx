import React from 'react';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import TeamMember from '../components/TeamPage/TeamMember';
import JackCarter from "../images/TeamPage/jack-carter.jpeg";
import JackCarterSmall from "../images/TeamPage/jack-carter-small.jpeg";
import LoisMartinez from "../images/TeamPage/lois-martinez.jpeg";
import LoisMartinezSmall from "../images/TeamPage/lois-martinez-small.jpeg";
import HenryColeman from "../images/TeamPage/henry-coleman.jpeg";
import HenryColemanSmall from "../images/TeamPage/henry-coleman-small.jpeg";
import NancyRobinson from "../images/TeamPage/nancy-robinson.jpeg";
import NancyRobinsonSmall from "../images/TeamPage/nancy-robinson-small.jpeg";
import ScottLee from "../images/TeamPage/scott-lee.jpeg";
import ScottLeeSmall from "../images/TeamPage/scott-lee-small.jpeg";
import AnnieBarnes from "../images/TeamPage/annie-barnes.jpeg";
import AnnieBarnesSmall from "../images/TeamPage/annie-barnes-small.jpeg";
import Footer from '../components/Footer';

const team_members = [
	{
		img: JackCarter,
		img_small: JackCarterSmall,
		name: "Jack Carter",
		title: "Business Owner"
	},
	{
		img: LoisMartinez,
		img_small: LoisMartinezSmall,
		name: "Lois Martinez",
		title: "Manager"
	},
	{
		img: HenryColeman,
		img_small: HenryColemanSmall,
		name: "Henry Coleman",
		title: "Salesman"
	},
	{
		img: NancyRobinson,
		img_small: NancyRobinsonSmall,
		name: "Nancy Robinson",
		title: "Car Detailist"
	},
	{
		img: ScottLee,
		img_small: ScottLeeSmall,
		name: "Scott Lee",
		title: "Photographer"
	},
	{
		img: AnnieBarnes,
		img_small: AnnieBarnesSmall,
		name: "Annie Barnes",
		title: "Service Specialist"
	},
]

function Team() {
	return (
		<>
			<Navbar signedIn={false}/>
			<PageHeader title="Our Team" />
			<div className='bg-neutral-100'>
				<div className='flex justify-center px-10 py-20'>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center max-w-screen-xl'>
						{team_members.map((member, index) => (
							<TeamMember key={index} img={member.img} img_small={member.img_small} name={member.name} title={member.title} />
						))}
					</div>	
				</div>	
			</div>
			<Footer />
		</>
	)
}

export default Team;