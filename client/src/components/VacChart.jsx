//import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import {evaluate} from 'mathjs'

//import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

const getChartInfo = gql`
	query GetChartInfo {
		entriesfrom(from: "2021-04-26", to: "2021-04-27") {
			date
			People_Fully_Vaccinated
			People_with_at_least_One_Dose
		}
	}
`;

const findDates = ({ entriesfrom }) => {
	let labels = [];
	entriesfrom.forEach((entry) => {
		if (!labels.includes(entry.date)) {

			labels.push(entry.date);
		}
	});

	
		let newLabels = labels.map((date) => {
			let test = new Date(parseInt(date));

			const newLabel = test.getMonth() +
				"-" +
				test.getDate();
			return newLabel;
		})

	return newLabels.sort();
};


const calTotal = (data, string) => {

	let total = 0

		const { entries } = data

		entries.forEach( entry => {
			total = total + entry.[string]
		})

}
function VacChart() {
	const { loading, error, data } = useQuery(getChartInfo);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	

	const labels = findDates(data);

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: "Partially Vaccinated",
				backgroundColor: "rgb(255,183,78)",
				borderColor: "rgb(255,183,78)",
				data: [6, 10],
			},
			{
				label: "Fully Vaccinated",
				backgroundColor: "rgb(52,153,219)",
				borderColor: "rgb(52,153,219)",
				data: [2, 45],
			},
		],
	};

	const options = {
	 plugins: {
		legend: {
			display: true,
			labels: {
				color: "#fff"
			}
		}
	},
	scales: {
		y: {
		  ticks: {
			callback: function(val, index) {
			  return val +'%';
			},
			color: 'white',
		  },
		  grid: {
			  color: '#444'
		  }
		},
		x: {
		  ticks: {
			color: 'white',
		  },
		  grid: {
			  color: '#444'
		  }
		}
	  }
};

	return (
		<div className='card border-dark mb-3'>
			<div className='card-header text-center white fs-4 fw-bold'>
				Vaccinated Percentage of the Population
			</div>
			<div className='card-body'>
				<Line data={chartData} options={options} />
			</div>
		</div>
	);
}

export default VacChart;
