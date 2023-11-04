import React from "react";
import GooglePlayStore from "../../images/HomePage/download-app/google-play-store.png";
import AppleAppStore from "../../images/HomePage/download-app/apple-app-store.png";
import Background from "../../images/HomePage/download-app/download-app-bg.jpeg";
import IPhone from "../../images/HomePage/download-app/iphone-display-portrait.png";

function DownloadApp() {
	return (
		<section className="relative h-full w-full bg-neutral-100 overflow-hidden">
			<img src={Background} loading="lazy" className="absolute w-full h-full object-cover opacity-30 z-0" alt="page backround abstract" />
			<div className="relative flex justify-center mx-10 py-20 md:py-28 h-full">
				<div className="absolute flex justify-around w-full h-full top-0 left-0">
					<div className="w-1/2"></div>
					<div className="flex justify-center w-1/2">
						<img src={IPhone} loading="lazy" className="relative w-full max-w-lg object-cover object-top top-20 px-12 hidden iphone_disappear:block" alt="iphone mockup" />
					</div>
				</div>
				<div className="flex iphone_disappear:justify-around gap-24 w-full max-w-screen-xl z-10">
					<div className="flex flex-col w-[35rem] gap-6 text-center items-center sm:text-start sm:items-start">
						<h1 className="text-2xl/normal sm:text-4xl/normal font-bold">
							Download our app to rent an EV from anywhere, at anytime
						</h1>
						<p className="text-stone-600">
							Make a reservation or check on your rental service package on the go. Our mobile app is the
							easiest and quickest way to book a ride for your next adventure or business destination.
						</p>
						<div className="flex gap-2 lg:gap-8 pt-6 flex-col sm:flex-row">
							<a href="https://play.google.com/store/search?q=ev%20rental&c=apps" className="cursor-pointer">
								<img src={GooglePlayStore} loading="lazy" className="w-52 lg:w-56 border-4 border-black rounded-xl bg-black" alt="google play store button"/>
							</a>
							<a href="itms-apps://apps.apple.com/id/app/evrental" className="cursor-pointer">
								<img src={AppleAppStore} loading="lazy" className="w-52 lg:w-56 border-4 border-black rounded-xl bg-black" alt="apple app store button" />
							</a>
						</div>
					</div>
					<div className="hidden iphone_disappear:block w-96"></div>
				</div>
			</div>
		</section>
	)
	
}

export default DownloadApp;