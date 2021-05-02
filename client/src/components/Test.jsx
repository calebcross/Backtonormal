import React from "react";
/* eslint-disable no-loss-of-precision */
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";


function Test({ data }) {
	const {
		Administered_Dose1_Recip_65Plus,
		Series_Complete_65Plus,
		Series_Complete_65PlusPop_Pct,
		Administered_Dose1_Recip_65PlusPop_Pct,
		Series_Complete_18Plus,
		Series_Complete_18PlusPop_Pct,
		Administered_Dose1_Recip_18Plus,
		Administered_Dose1_Recip_18PlusPop_Pct,
	} = data.entry;

	const sixtyFiveScope = {
		atleastOne: Administered_Dose1_Recip_65Plus,
		partially: Administered_Dose1_Recip_65Plus - Series_Complete_65Plus,
		fully: Series_Complete_65Plus,
		fully_pct: Series_Complete_65PlusPop_Pct,
		partially_pct: Administered_Dose1_Recip_65PlusPop_Pct,
	};

	const eighteenPlusScope = {
		atleastOne: Administered_Dose1_Recip_18Plus,
		partially: Administered_Dose1_Recip_18Plus - Series_Complete_18Plus,
		fully: Series_Complete_18Plus,
		fully_pct: Series_Complete_18PlusPop_Pct,
		partially_pct: Administered_Dose1_Recip_18PlusPop_Pct,
	};

	const sixtyFivePop = Math.ceil(
		Administered_Dose1_Recip_65Plus /
			(Administered_Dose1_Recip_65PlusPop_Pct / 100)
	);

	const eighteenPlusPop = Math.ceil(
		Administered_Dose1_Recip_18Plus /
			(Administered_Dose1_Recip_18PlusPop_Pct / 100)
	);

	const { partially, fully } = sixtyFiveScope;
	const sixtyFiveData = [partially, fully, sixtyFivePop - partially - fully];
	const eighteenData = [
		eighteenPlusScope.partially,
		eighteenPlusScope.fully,
		eighteenPlusPop - eighteenPlusScope.partially - eighteenPlusScope.fully,
	];

	const chartData = (data) => {
		return {
			labels: ["Only 1 Dose", "Fully Vaccinated", "Not Vaccinated"],
			datasets: [
				{
					label: "# of Votes",
					data: data,
					backgroundColor: [
						"rgba(255,183,79,1)", // Partially
						"rgba(187,222,251,1)", // Fully
						"rgba(252,126,151,1)", // Not
					],
					borderColor: [
						"rgba(255,183,79,1)",
						"rgba(187,222,251,1)",
						"rgba(252,126,151,1)",
					],
					borderWidth: 0,
				},
			],
		};
	};

	const options = {
		responsive: true,
		maintainAspectRatio: true,
		legend: {
			display: false,
			position: "bottom",
			align: "start",
			/* 				title: {
				display: true,
				text: "65 plus",
				color: "rgba(255, 99, 132, 1)"
			} */
		},
		plugins: {
			labels: [
				{
				  render: 'label',
				  fontColor: '#FFF', //TODO: Maybe
				  fontStyle: 'bold',
				  position: 'outside',
				  arc: true,
				  outsidePadding: 4,
				  textMargin: 4,
				  overlap: false
				},
				{
				  render: 'percentage',
				  fontStyle: 'bold',
				  fontColor: '#303030',
				}
			  ],
			  datalabels: {
				color: 'white',
				display: false
			  }
		},
	};


	return (
		<div className='age'>
			<div className='card border-dark mb-3'>
				<div className='card-header-dark text-center fs-4 fw-bold red'>
					Vaccinated Percentage by Age Group
				</div>

				<div className='d-flex justify-content-around flex-wrap'>
					<div className='card-body text-center donut'>
						<div className='fs-5 white pb-3 text-uppercase fw-bold'>
							{" "}
							≥ 18 Years Of Age
						</div>
						<Doughnut data={chartData(eighteenData)} options={options} />
					</div>
					<div className='card-body text-center donut'>
						<div className='fs-5 white pb-3 fw-bold'>
						65 +
						</div>
						<Doughnut data={chartData(sixtyFiveData)} options={options} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Test;
