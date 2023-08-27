import React, { useState } from "react";
import Background from "../images/page-header/page-header-bg.jpeg";
import BackgroundSmall from "../images/page-header/page-header-bg-small.jpeg";

function PageHeader({ title }) {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className='relative sm:justify-end h-[20rem]'>
			<div className={`absolute h-full w-full bg-cover bg-center opacity-20`} style={{ backgroundImage: "url(" + BackgroundSmall + ")" }}>
				<img src={Background} className={`${loaded ? "opacity-100" : "opacity-0"} absolute object-cover h-full w-full transition-all duration-300`} alt='background header' onLoad={() => setLoaded(true)} />	
			</div>
			<div className="relative flex justify-center top-12 sm:top-1/4">
				<div className="flex justify-center sm:justify-end w-full max-w-screen-xl">
					<h1 className='text-4xl pt-44 xs:text-5xl sm:pr-5 sm:pt-24 font-bold underline decoration-double'>{title}</h1>	
				</div>
			</div>
		</div>
	)
}

export default PageHeader;