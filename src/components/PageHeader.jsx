import React from "react";
import Background from "../images/page-header/page-header-bg.jpeg";

function PageHeader({title}) {
	return (
		<div className='relative sm:justify-end h-[20rem]'>
			<img src={Background} className='absolute object-cover h-full w-full opacity-20' alt='background header' />
			<div className="relative flex justify-center top-12 sm:top-1/4">
				<div className="flex justify-center sm:justify-end w-full max-w-screen-xl">
					<h1 className='text-4xl pt-44 xs:text-5xl sm:pr-5 sm:pt-24 font-bold underline decoration-double'>{title}</h1>	
				</div>
			</div>
		</div>
	)
}

export default PageHeader;