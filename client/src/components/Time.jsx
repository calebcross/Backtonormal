import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import {evaluate} from 'mathjs'
import axios from 'axios';


function Time({ data }) {

	const CDC_url = 'https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_data'

	const [ avg, setAvg ] = useState()

	useEffect( () => {
			axios.get(CDC_url)
			.then( response =>{

				setAvg(response.vaccination_trends_data.Administered_7_Day_Rolling_Average)
			} )
			.catch(err => {console.log(err)})
	}, [])

    let scope = {
        pop: data.entry.Census,
        vdd: data.entry.Doses_Distributed,
        advdg: avg ? avg : 1431517
    }


	return (
		<div className="green">
			<div className='card border-dark mb-3'>
				<div className='card-header card-header-center text-uppercase'>
					<h1 className='display-6 text-center fw-bold'>
						Days until
						normal :
						<br /></h1>
                         <h2 className=" display-3 text-center fully fw-bold monts"><CountUp end={Math.ceil(evaluate ( `((pop * .7) - (vdd * .5))/(advdg * .5 )`, scope))} /></h2>
						 <p className="text-center fw-bold"> days</p>
 					
				</div>
				<div className='d-flex justify-content-evenly flex-wrap'></div>
			</div>
		</div>
	);
}

export default Time;
