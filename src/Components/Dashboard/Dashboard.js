import React, { useEffect, useState } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import "./Dashboard.css";
const Dashboard = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((info) => setData(info));
	}, []);
	return (
		<div className="mt-4 flex ">
			<div className="mx-6">
				<h1 className="text-2xl font-bold text-purple-800 my-5 text-center">
					Monthwise Sell
				</h1>
				<LineChart
					width={500}
					height={250}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="sell" stroke="#8884d8" />
				</LineChart>
			</div>
			<div>
				<h1 className="text-2xl font-bold text-purple-800 my-5 text-center">
					Investment vs Revenue
				</h1>
				<AreaChart
					width={500}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
						<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="month" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="revenue"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#colorUv)"
					/>
					<Area
						type="monotone"
						dataKey="investment"
						stroke="#82ca9d"
						fillOpacity={1}
						fill="url(#colorPv)"
					/>
				</AreaChart>
			</div>
		</div>
	);
};

export default Dashboard;
