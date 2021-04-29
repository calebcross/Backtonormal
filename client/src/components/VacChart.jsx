//import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";

//import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";

const getChartInfo = gql`
	query GetChartInfo {
		entriesBy(state: "United States", from: "2021-04-23", to: "2021-04-28") {
			date
			Administered_Dose1_Pop_Pct
			Series_Complete_Pop_Pct
		}
	}
`;

const findDates = ({ entriesBy }) => {
	let labels = [];
	entriesBy.forEach((entry) => {
		if (!labels.includes(entry.date)) {
			labels.push(entry.date);
		}
	});

	let newLabels = labels.map((date) => {
		let test = new Date(date);

		const newLabel = test.getMonth()+1 + "-" + (test.getDate()+1);
		return newLabel;
	});

	return newLabels.sort();
};

const pluck = ({ entriesBy }, key) => {
	let newArr = [...entriesBy].sort((a, b) => {

		if (a.date < b.date) {
			return -1;
		}
		if (a.date > b.date) {
			return 1;
		}
		return 0;
	});

	return newArr.map((entry) => {
		return entry[key];
	});
};

function VacChart() {
	const { loading, error, data } = useQuery(getChartInfo);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	let partially = "Administered_Dose1_Pop_Pct";
	let fully = "Series_Complete_Pop_Pct";

	const chartData = {
		labels: findDates(data),
		datasets: [
			{
				label: "Partially Vaccinated",
				backgroundColor: "rgb(255,183,78)",
				borderColor: "rgb(255,183,78)",
				lineTension: 0.4,
				data: pluck(data, [partially]),
			},
			{
				label: "Fully Vaccinated",
				backgroundColor: "rgb(187,222,251)",
				borderColor: "rgb(187,222,251)",
				lineTension: 0.4,
				data: pluck(data, [fully]),
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				display: true,
				labels: {
					color: "#fff",
				},
			},
		},
		scales: {
			y: {
				suggestedMax: 100,
				ticks: {
					callback: function (val, index) {
						return val + "%";
					},
					color: "white",
				},
				grid: {
					color: "#444",
				},
			},
			x: {
				ticks: {
					/* callback: function(val, index) {
						return index % 2 === 0 ? this.getLabelForValue(val) : '';
					  }, */
					color: "white",
				},
				grid: {
					color: "#444",
				},
			},
		},
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
