import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { evaluate } from "mathjs";
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

	return (
		<div className='card border-secondarydark mb-1 mt-2 green stacks_head'>
			<div className='card-header card-header-vcenter text-capitalizes tacks-header '>
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
				<strong>Days Until Normal:</strong>
			</div>
			<h4 className='text-center card-title monst'>
				<CountUp
					end={Math.ceil(
						evaluate(`((pop * .7) - (vdd * .5))/(advdg * .5 )`, scope)
					)}
				/>
			</h4>
		</div>
	);
}

export default Time;
