import React from "react";
import "./Home.css";
import bannerImg from "../../images/bannerImg.jfif";
const Home = () => {
	return (
		<div>
			<Banner></Banner>
		</div>
	);
};
const Banner = () => {
	return (
		<div className="banner-container flex p-10 align-items-center mt-3">
			<div className="banner-info p-12">
				<h1 className="text-5xl font-bold">Your next laptop</h1>
				<h1 className="text-5xl font-bold text-purple-800 my-1">
					Your favourite laptop
				</h1>
				<p className="info text-lg text-black font-semibold pr-8 mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error
					quibusdam ex sapiente veritatis vitae a velit aut ducimus corrupti.
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
