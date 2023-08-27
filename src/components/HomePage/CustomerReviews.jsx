import React from "react";
import JohnAvatar from "../../images/HomePage/customer-reviews/john-avatar.png";
import KatherineAvatar from "../../images/HomePage/customer-reviews/katherine-avatar.png";
import CustomerReviewCard from "./CustomerReviewCard";

const customer_reviews = [
	{
		img: JohnAvatar,
		review: "We rented a car from this website and had an amazing experience! The booking process was easy and the rental rates were very affordable.",
		name: "John Fernandes",
		location: "Mississauga"
	},
	{
		img: KatherineAvatar,
		review: "Our rental car was in great condition and we really enjoyed the drive from our trip. Highly recommend to anyone looking for a quick and cheap rental!",
		name: "Katherine Clyne",
		location: "Toronto"
	}
]

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
						{customer_reviews.map((review, index) => (
							<CustomerReviewCard review={review.review} name={review.name} location={review.location} img={review.img} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CustomerReviews;