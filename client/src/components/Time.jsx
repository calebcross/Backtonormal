import React from "react";
import CountUp from 'react-countup';
import {evaluate} from 'mathjs'

const calTotals = (data) => {
	let total = 0

	const { entries } = data

	entries.forEach( entry => {
		total = total + entry.Total_Doses_Delivered
	})

	return total
}

function Time({population, data}) {

    let scope = {
        pop: population,
        vdd: calTotals(data), 
        advdg: 1624873
    }

//console.log( evaluate ( `((${scope.pop} * .7) - (${scope.vdd} * .5))/(${scope.advdg} * .5 )`))

/*     let US_population = population
let num_vaccinated=  94772329
let num_infected  =  83100000
let vaccine_efficacy  = 0.9
let herd_immunity_portion = 0.85


let portion_pre_immune = 0.30
let num_pre_immune = portion_pre_immune * US_population

let portion_at_risk = 1.0 - (num_pre_immune + num_infected)/US_population

let num_new_vaccine_immune = num_vaccinated*vaccine_efficacy*portion_at_risk


let num_immune = num_pre_immune + num_infected + num_new_vaccine_immune
let herd_immunity_target = herd_immunity_portion*US_population

let num_needed = herd_immunity_target - num_immune

let num_vaccines_per_day = scope.advdg
 let num_new_immune_per_day = num_vaccines_per_day*portion_at_risk*vaccine_efficacy

let days_to_herd_immunity = num_needed / num_new_immune_per_day */
	return (
		<div className='time'>
			<div className='card border-dark mb-3'>
				<div className='card-header card-header-center text-uppercase'>
					<h1 className='display-6 text-center fw-bold'>
						Days until
						normal:
						<br /></h1>
                        <h2 className=" display-3 text-center"><CountUp end={Math.ceil(evaluate ( `((${scope.pop} * .7) - (${scope.vdd} * .5))/(${scope.advdg} * .5 )`))} /> days</h2>
					
				</div>
				<div className='d-flex justify-content-evenly flex-wrap'></div>
			</div>
		</div>
	);
}

export default Time;
