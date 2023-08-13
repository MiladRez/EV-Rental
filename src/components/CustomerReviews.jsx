import React from "react";
import JohnAvatar from "../images/customer-reviews/john-avatar.png";
import KatherineAvatar from "../images/customer-reviews/katherine-avatar.png";
import QuotesImg from "../images/customer-reviews/quote-img.png";

function CustomerReviews() {
	return (
		<section className="h-full w-full bg-neutral-100">
			<div className="flex justify-center mx-10 py-28">
				<div className="w-full max-w-screen-xl">
					<div className="flex flex-col items-center text-center mb-14">
						<h2 className="text-2xl font-bold">Client's Testimonials</h2>
						<h1 className="text-4xl md:text-5xl font-bold py-4">Satisfied customers</h1>
						<p className="md:w-[40rem] text-stone-600 py-4">
							Join our community of satisfied customers and learn about their experience with our EV Rentals service.
							Our goal is to ensure every client is guaranteed the best vehicle rental service.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex flex-col justify-between rounded shadow-xl px-6 pt-8 pb-2 lg:px-12 lg:pt-14 lg:pb-4 bg-white">
							<p className="text-xl lg:text-2xl leading-normal">
								"We rented a car from this website and had an amazing experience! The booking process was easy and the rental rates were very affordable."
							</p>
							<div className="flex justify-between py-8">
								<div className="flex">
									<img src={JohnAvatar} className="w-20" alt="man avatar" />
									<div className="flex flex-col justify-center px-2 xs:px-4">
										<h3 className="text-lg font-bold">John Fernandes</h3>
										<h4>Mississauga</h4>
									</div>
								</div>
								<img src={QuotesImg} className="self-end w-16 hidden xs:block" alt="quotes logo" />
							</div>
						</div>
						<div className="flex flex-col justify-between rounded shadow-xl px-6 pt-8 pb-2 lg:px-12 lg:pt-14 lg:pb-4 bg-white">
							<p className="text-xl lg:text-2xl leading-normal">
								"Our rental car was in great condition and we really enjoyed the drive from our trip. Highly recommend to anyone looking for a quick and cheap rental!"
							</p>
							<div className="flex justify-between py-8">
								<div className="flex">
									<img src={KatherineAvatar} className="w-20" alt="woman avatar" />
									<div className="flex flex-col justify-center px-2 xs:px-4">
										<h3 className="text-lg font-bold">Katherine Clyne</h3>
										<h4>Toronto</h4>
									</div>
								</div>
								<img src={QuotesImg} className="self-end w-16 hidden xs:block" alt="quotes logo" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CustomerReviews;