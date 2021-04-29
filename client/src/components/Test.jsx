//import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Partially from "./Partially";
import Fully from "./Fully";
import { Doughnut } from "react-chartjs-2";
import { Chart } from 'chart.js'

const getStateInfo = gql`
	query getStateInfo {
		states {
			name
			entry(date: "2021-04-28") {
				Census
				Administered_Dose1_Recip
				Administered_Dose1_Pop_Pct
				Series_Complete_Yes
				Series_Complete_Pop_Pct
				Doses_Distributed
			}
		}
	}
`;

function Test() {
	const { loading, error, data } = useQuery(getStateInfo);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const { states } = data;

	let newArr = [...states].sort((a, b) => {
		if (a.entry.Series_Complete_Pop_Pct < b.entry.Series_Complete_Pop_Pct) {
			return 1;
		}
		if (a.entry.Series_Complete_Pop_Pct > b.entry.Series_Complete_Pop_Pct) {
			return -1;
		}
		return 0;
	});


const showData = "45" + "%";

	const datas = {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
		text: showData
	};


	const options = {
		responsive: true,
		elements: {
			center: {
			text: '90%',
			color: "rgba(255, 99, 132, 1)",
			fontStyle: 'Arial',
			sidePadding: 20,
			}
			},
          maintainAspectRatio: false,
		  plugins: {
			  legend: {
				  display: false
			  }
		  },
		  elements: {
			center: {
			  text: 'Red is 2/3 of the total numbers',
			  color: '#FF6384', // Default is #000000
			  fontStyle: 'Arial', // Default is Arial
			  sidePadding: 20, // Default is 20 (as a percentage)
			  minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
			  lineHeight: 25 // Default is 25 (in px), used for when text wraps
			}
		  }
	}

	

	return (
		<div className='partially'>
			<div className='card border-dark mb-3'>
				<div className='card-header card-header-vcenter text-uppercase'>
					<svg
						aria-hidden='true'
						focusable='false'
						data-prefix='fas'
						data-icon='syringe'
						className='svg-inline--fa fa-syringe fa-w-16'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'>
						<path
							fill='currentColor'
							d='M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z'></path>
					</svg>
					<strong>Test</strong>
				</div>
				<div className='d-flex justify-content-evenly flex-wrap'>
					<div className='card-body text-center '>
						<Doughnut
							data={datas}
							width={300}
							height={300}
							options={options}
							
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Test;
