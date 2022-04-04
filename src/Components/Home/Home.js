import React, { useEffect } from "react";
import "./Home.css";
import bannerImg from "../../images/bannerImg.jfif";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const [reviews, setReviews] = useReviews();
	let arr = reviews.slice(0, 3);
	const navigate = useNavigate();
	const handleButton = () => {
		const path = "/reviews";
		navigate(path);
	};
	return (
		<div>
			<Banner></Banner>
			<h1 className="text-center text-3xl font-semibold my-6">
				Customer Review (3)
			</h1>
			<div className="reviews-container flex justify-center">
				{arr.map((review) => (
					<Review data={review} key={review.id}></Review>
				))}
			</div>
			<div className="text-center my-5">
				<button
					className="px-4 py-2 bg-purple-500 text-white font-semibold"
					onClick={handleButton}
				>
					See all reviews
				</button>
			</div>
		</div>
	);
};
const Banner = () => {
	return (
		<div className="banner-container flex p-10 align-items-center mt-3 mb-8">
			<div className="banner-info p-12">
				<h1 className="text-5xl font-bold">Your next laptop</h1>
				<h1 className="text-5xl font-bold text-purple-800 my-1">
					Your favourite laptop
				</h1>
				<p className="info text-lg text-black font-semibold pr-8 mt-2">
					You are welcome to our laptop store.All kind of laptop of all popular
					brands are availabe at affordable price. you may be beneficial by our
					service.
				</p>
				<button className="bg-purple-400 p-2 mt-2 font-bold text-purple-900">
					Live demo
				</button>
			</div>
			<div className="banner-img mt-12">
				<img src={bannerImg} alt="banner-image" />
			</div>
		</div>
	);
};
export default Home;
