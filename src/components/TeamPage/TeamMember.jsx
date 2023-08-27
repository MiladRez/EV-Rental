import React, { useState } from "react";

function TeamMember({ img, img_small, name, title }) {
	
	const [loaded, setLoaded] = useState(false);

	return (
		<div className="flex flex-col w-fit">
			<div className="bg-cover bg-center" style={{ backgroundImage: "url(" + img_small + ")" }}>
				<img src={img} className={`${loaded ? "opacity-100" : "opacity-0"} w-72 h-96 shadow-lg transition-all duration-300`} alt="headshot" onLoad={() => setLoaded(true)} />
			</div>
			<div className="flex flex-col gap-1 items-center shadow-lg py-8">
				<h2 className="text-2xl font-bold">{name}</h2>
				<p className="text-stone-600">{title}</p>	
			</div>
		</div>
	)
}

export default TeamMember;