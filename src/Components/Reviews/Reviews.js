import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";
const Reviews = () => {
	const [reviews, setReviews] = useReviews();
	return (
		<div>
			<h1 className="text-4xl font-semibold my-4 text-center">
				All reviews (6)
			</h1>
			<div className="reviews-container flex justify-center">
				{reviews.map((review) => (
					<Review data={review} key={review.id}></Review>
				))}
			</div>
		</div>
	);
};

export default Reviews;
