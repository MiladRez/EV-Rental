import React from "react";

function TeamMember({img, name, title}) {
	return (
		<div className="flex flex-col w-fit">
			<img src={img} className="w-72 h-96 shadow-lg" alt="headshot" />
			<div className="flex flex-col gap-1 items-center shadow-lg py-8">
				<h2 className="text-2xl font-bold">{name}</h2>
				<p className="text-stone-600">{title}</p>	
			</div>
		</div>
	)
}

export default TeamMember;