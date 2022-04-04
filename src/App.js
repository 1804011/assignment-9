import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import Dashboard from "./Components/Dashboard/Dashboard";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import CustomLink from "./Components/CustomLink/CustomLink";
function App() {
	return (
		<div>
			<h1 className="text-2xl text-red-500 font-semibold mt-6 uppercase text-center">
				Welcome to our laptop review website
			</h1>

			<div className="container   ">
				<nav className="nav-menu mt-8 ">
					<CustomLink to="/home" className="nav-link">
						Home
					</CustomLink>
					<CustomLink to="/reviews" className="nav-link">
						Reviews
					</CustomLink>
					<CustomLink to="/dashboard" className="nav-link">
						Dashboard
					</CustomLink>
					<CustomLink to="/blogs" className="nav-link">
						Blogs
					</CustomLink>
					<CustomLink to="/about" className="nav-link">
						About
					</CustomLink>
				</nav>
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/home" element={<Home></Home>}></Route>
					<Route path="/reviews" element={<Reviews></Reviews>}></Route>
					<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
					<Route path="/blogs" element={<Blogs></Blogs>}></Route>
					<Route path="/about" element={<About></About>}></Route>
					<Route
						path="*"
						element={
							<h1 className="text-3xl font-bold uppercase">404 Not found</h1>
						}
					></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
