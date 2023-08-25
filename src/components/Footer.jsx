import React from "react";

function Footer() {
	return (
		<footer>
			<div className="flex justify-center mx-10 py-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 iphone_disappear:grid-cols-4 iphone_disappear:justify-items-center gap-16 iphone_disappear:gap-10 max-w-screen-lg px-2">
					<div className="flex flex-col gap-4 items-center sm:items-start">
						<h2 className="text-xl"><span className="font-bold text-green-400 italic pr-1">EV</span> Rental</h2>
						<p className="text-sm/relaxed text-stone-600 text-center sm:text-start">
							Offering a large selection of vehicles to match any budget.
							Find the perfect car with the lowest rates in the market.</p>
						<div className="flex flex-col gap-2 pt-2">
							<a href="tel:1234567890" className="flex gap-2 w-fit transition duration-300 hover:text-green-400 cursor-pointer">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
									<path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
								</svg>
								<h3 className="font-bold">(123)-456-7890</h3>
							</a>
							<a href="https://mail.google.com/mail/?view=cm&fs=1&to=evrental@business.com" className="flex gap-2 transition duration-300 hover:text-green-400 cursor-pointer">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
									<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
									<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
								</svg>
								<h3 className="font-bold">evrental@business.com</h3>
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-4 items-center sm:items-start">
						<h2 className="text-xl font-bold">Company</h2>
						<div className="flex flex-col gap-2 text-sm items-center sm:items-start">
							<h3>Toronto</h3>
							<h3>Montreal</h3>
							<h3>Careers</h3>
							<h3>Blog</h3>
							<h3>Mobile</h3>
						</div>
					</div>
					<div className="flex flex-col gap-4 items-center sm:items-start">
						<h2 className="text-xl font-bold">Dealership Hours</h2>
						<p className="text-sm">All locations</p>
						<div className="flex flex-col gap-2 text-sm text-center iphone_disappear:text-start sm:items-start">
							<h3>Mon - Fri: 6:00AM - 9:00PM</h3>
							<h3>Sat: 8:00AM - 5:00PM</h3>
							<h3>Sun: Closed</h3>
						</div>
					</div>
					<div className="flex flex-col gap-4 items-center sm:items-start">
						<h2 className="text-xl font-bold">Subscription</h2>
						<p className="text-sm text-center sm:text-start">Subscribe for the latest deals & updates</p>
						<div className="flex flex-col gap-2">
							<input type="email" placeholder="Enter email address" className="text-sm bg-neutral-100 rounded-sm" />
							<button className="bg-green-400 py-3 text-sm text-white font-bold rounded-sm shadow-lg shadow-green-300 border border-green-400 hover:bg-green-500 hover:shadow-green-400 transition duration-300">Submit</button>
						</div>
					</div>
				</div>
			</div>
			
		</footer>
	)
}

export default Footer;