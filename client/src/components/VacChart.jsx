import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import 'chartjs-adapter-date-fns';
import { Bar, Line, Pie } from "react-chartjs-2";
import { ResponsiveLine } from "@nivo/line";

function VacChart() {

	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
	  ];

	const data = {
		labels: labels,
		datasets: [{
		  label: 'My First dataset',
		  backgroundColor: 'rgb(231,76,60)',
		  borderColor: 'rgb(231,76,60)',
		  data: [0, 10, 5, 2, 20, 30, 45],
		}]
	  }

	useEffect(() => {
		const ctx = document.getElementById("myChart");
		new Chart(ctx, {
			type: 'line',
			data: data,
			options: {
			  scales: {
				y: {
				  beginAtZero: true
				}
			  }
			},
		  });
	  });


	
	return (
		<div class='card border-dark mb-3'>
			<div class='card-header text-center'>Vaccinated Percentage of the Population</div>
			<div class='card-body'>
			<canvas id="myChart" width="400" />
			</div>
		</div>
	);
}

export default VacChart;
