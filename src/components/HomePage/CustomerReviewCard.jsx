import React from "react";
import QuotesImg from "../../images/HomePage/customer-reviews/quote-img.png";

function CustomerReviewCard({review, name, location, img}) {
	return (
		<div className="flex flex-col justify-between rounded shadow-xl px-6 pt-8 pb-2 lg:px-12 lg:pt-14 lg:pb-4 bg-white">
			<p className="text-lg lg:text-2xl leading-normal">
				"{review}"
			</p>
			<div className="flex justify-between py-8">
				<div className="flex">
					<img src={img} loading="lazy" className="w-20" alt="avatar" />
					<div className="flex flex-col justify-center px-2 xs:px-4">
						<h3 className="text-lg font-bold">
							{name}
						</h3>
						<h4>
							{location}
						</h4>
					</div>
				</div>
				<img src={QuotesImg} loading="lazy" className="self-end w-16 pb-2 hidden xs:block" alt="quotes logo" />
			</div>
		</div>
	);
}

export default CustomerReviewCard;