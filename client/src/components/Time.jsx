import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { evaluate } from "mathjs";
import { addDays, format } from "date-fns";
import axios from "axios";

function Time({ data }) {
	const CDC_url =
		"https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_data";

	const [avg, setAvg] = useState();

	useEffect(() => {
		axios
			.get(CDC_url)
			.then((response) => {
				setAvg(
					response.vaccination_trends_data.Administered_7_Day_Rolling_Average
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	let scope = {
		pop: 331449281,
		vdd: data.entry.Doses_Distributed,
		advdg: avg ? avg : 1431517,
	};
	const today = new Date();
	const numDays = Math.ceil(
		evaluate(`((pop * .7) - (vdd * .5))/(advdg * .5 )`, scope)
	);
	let monthDay = format(addDays(today, 106), "MMM Lo, yyyy");

	return (
		<div className='card border-dark green stacks_head'>
			<div className='card-header card-header-vcenter text-capitalize stacks-header '>
				<svg
					aria-hidden='true'
					focusable='false'
					data-prefix='fas'
					data-icon='calendar-check'
					class='svg-inline--fa fa-calendar-check fa-w-14'
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 448 512'>
					<path
						fill='currentColor'
						d='M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z'></path>
				</svg>
				<h5 className='title'>Back To Normal On</h5>
			</div>
			<div className='d-flex flex-row-reverse justify-content-evenly align-items-center inner_container'>
				<div className='card-body text-center card-inner card-inner-big'>
					<h4 className='num-days card-title '>
					{<CountUp end={numDays} delay={.5} duration={1} />}
					</h4>
					<p className='card-text fw-bold '>
						<strong>days</strong>
					</p>
				</div>
				<strong>OR<br/>IN</strong>
				<div className='card-body text-center card-inner'>
					<h4 className='date card-title '>
					{monthDay.split(',')[0]}
					</h4>
					<p className='card-text text-center'>
						<strong>{monthDay.split(',')[1]}</strong>
					</p>
				</div>
			</div>
		</div>

	);
}

export default Time;
