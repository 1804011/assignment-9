import React from "react";
import "./Review.css";
const Review = (props) => {
	console.log(props);
	if (!props.data) return <></>;
	const { name, review, rating, img } = props.data;
	return (
		<div className="review-container">
			<div className="upper">
				<div className="image">
					<img src={img} alt="image" />
				</div>
				<div className="right">
					<h2 className="font-bold capitalize">{name}</h2>
					<small className="font-semibold italic">Rating: {rating}</small>
				</div>
			</div>
			<div className="lower">{review}</div>
		</div>
	);
};

export default Review;
