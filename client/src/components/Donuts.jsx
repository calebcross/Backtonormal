import React from "react";
/* eslint-disable no-loss-of-precision */
import { Doughnut } from "react-chartjs-2";
import { HorizontalBar } from "react-chartjs-2";
import "chartjs-plugin-labels";

const calPct = (value, total) => {
	return Math.ceil((value / total) * 100);
};

function Donuts({ data }) {
	const {
		Administered_Dose1_Recip_18Plus,
		Administered_Dose1_Recip_18PlusPop_Pct,
		Administered_Dose1_Recip_65Plus,
		Administered_Dose1_Recip_65PlusPop_Pct,
		Administered_Dose1_Recip_12Plus,
		Administered_Dose1_Recip_12PlusPop_Pct,
		Series_Complete_18Plus,
		Series_Complete_18PlusPop_Pct,
		Series_Complete_65Plus,
		Series_Complete_65PlusPop_Pct,
		Series_Complete_12Plus,
		Series_Complete_12PlusPop_Pct,
		Series_Complete_Janssen_18Plus,
		Series_Complete_Janssen_65Plus,
		Series_Complete_Janssen_12Plus,
		Series_Complete_Moderna_18Plus,
		Series_Complete_Moderna_65Plus,
		Series_Complete_Moderna_12Plus,
		Series_Complete_Pfizer_18Plus,
		Series_Complete_Pfizer_65Plus,
		Series_Complete_Pfizer_12Plus,
		Series_Complete_Unk_Manuf_18Plus,
		Series_Complete_Unk_Manuf_65Plus,
		Series_Complete_Unk_Manuf_12Plus,
		Census_12PlusPop
	} = data.entry;

	const sixtyFiveScope = {
		atleastOne: Administered_Dose1_Recip_65Plus,
		fully: Series_Complete_65Plus,
		fully_pct: Series_Complete_65PlusPop_Pct,
		partially: Administered_Dose1_Recip_65Plus - Series_Complete_65Plus,
		partially_pct: Administered_Dose1_Recip_65PlusPop_Pct,
	};

	const eighteenPlusScope = {
		atleastOne: Administered_Dose1_Recip_18Plus,
		fully: Series_Complete_18Plus,
		fully_pct: Series_Complete_18PlusPop_Pct,
		partially: Administered_Dose1_Recip_18Plus - Series_Complete_18Plus,
		partially_pct: Administered_Dose1_Recip_18PlusPop_Pct,
	};

	const twelvePlusScope = {
		atleastOne: Administered_Dose1_Recip_12Plus,
		fully: Series_Complete_12Plus,
		fully_pct: Series_Complete_12PlusPop_Pct,
		partially: Administered_Dose1_Recip_12Plus - Series_Complete_12Plus,
		partially_pct: Administered_Dose1_Recip_12PlusPop_Pct,
	};

	const sixtyFivePop = Math.ceil(
		Administered_Dose1_Recip_65Plus /
			(Administered_Dose1_Recip_65PlusPop_Pct / 100)
	);

	const eighteenPlusPop = Math.ceil(
		Administered_Dose1_Recip_18Plus /
			(Administered_Dose1_Recip_18PlusPop_Pct / 100)
	);
	const twelvePlusPop = Census_12PlusPop

	const { partially, fully } = sixtyFiveScope;
	const sixtyFiveData = [partially, fully, sixtyFivePop - partially - fully];
	const eighteenData = [
		eighteenPlusScope.partially,
		eighteenPlusScope.fully,
		eighteenPlusPop - eighteenPlusScope.partially - eighteenPlusScope.fully,
	];
	const twelveData = [
		twelvePlusScope.partially,
		twelvePlusScope.fully,
		twelvePlusPop - twelvePlusScope.partially - twelvePlusScope.fully,
	];

	const chartData = (data) => {
		return {
			labels: ["Only 1 Dose", "Fully Vaccinated", "Not Vaccinated"],
			datasets: [
				{
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

	const donutOptions = {
		animation: {
			duration: 2000,
		},
		cutoutPercentage: 40,
		responsive: true,
		maintainAspectRatio: true,
		aspectRatio: 1,
		legend: {
			display: false,
			position: "bottom",
			align: "start",
		},
		plugins: {
			labels: [
				{
					render: "label",
					fontColor: "#FFF", //TODO: Maybe
					fontStyle: "bold",
					position: "outside",
					arc: true,
					outsidePadding: 4,
					textMargin: 4,
					overlap: false,
				},
				{
					showActualPercentages: false,
					render: "percentage",
					precision: 1,
					fontStyle: "bold",
					fontColor: "#303030",
				},
			],
			datalabels: {
				color: "white",
				display: false,
			},
		},
	};

	const barOptions = {
		animation: {
			duration: 0,
		},
		maintainAspectRatio: false,
		aspectRatio: 1,
		plugins: {
			labels: [
				{
					render: "percentage",
				},
			],
			datalabels: {
				color: "#303030",
				display: function (context) {
					return `${context.dataset.data[context.dataIndex]}%`;
				},
				font: {
					weight: "bold",
				},
				formatter: function (value) {
					return value > 8 ? value + "%" : "";
				},
			},
		},
		tooltips: {
			mode: "index",
			axis: "y",
		},
		legend: {
			display: false,
			labels: {
				fontColor: "white",
				fontStyle: "bold",
			},
		},
		scales: {
			yAxes: [
				{
					stacked: true,
					ticks: {
						callback: function (value, index, values) {
							return `${value}`;
						},
						fontColor: "white",
						fontStyle: "bold",
					},
					gridLines: {
						display: false,
					},
				},
			],
			xAxes: [
				{
					stacked: true,
					ticks: {
						max: 100,
						fontColor: "white",
						fontStyle: "bold",
						callback: function (value, index, values) {
							return `${value}%`;
						},
					},
					gridLines: {
						display: false,
					},
				},
			],
		},
	};

	const twelveTotal =
		Series_Complete_Pfizer_12Plus +
		Series_Complete_Moderna_12Plus +
		Series_Complete_Janssen_12Plus +
		Series_Complete_Unk_Manuf_12Plus;
	const eighteenTotal =
		Series_Complete_Pfizer_18Plus +
		Series_Complete_Moderna_18Plus +
		Series_Complete_Janssen_18Plus +
		Series_Complete_Unk_Manuf_18Plus;
	const sixtyFiveTotal =
		Series_Complete_Pfizer_65Plus +
		Series_Complete_Moderna_65Plus +
		Series_Complete_Janssen_65Plus +
		Series_Complete_Unk_Manuf_65Plus;

	const horizontalData = {
		labels: [/* "≥ 12 Years Of Age", */"≥ 18 Years Of Age", "≥ 65 Years Of Age"],
		datasets: [
			{
				label: "Janssen",
				backgroundColor: "rgb(179,157,219)",
				borderColor: "rgb(179,157,219)",
				data: [
/* 					calPct(Series_Complete_Janssen_12Plus, twelveTotal), */
					calPct(Series_Complete_Janssen_18Plus, eighteenTotal),
					calPct(Series_Complete_Janssen_65Plus, sixtyFiveTotal),
				],
			},
			{
				label: "Pfizer",
				backgroundColor: "rgb(255,183,78)",
				borderColor: "rgb(255,183,78)",
				data: [
					/* calPct(Series_Complete_Pfizer_12Plus, twelveTotal), */
					calPct(Series_Complete_Pfizer_18Plus, eighteenTotal),
					calPct(Series_Complete_Pfizer_65Plus, sixtyFiveTotal),
				],
			},
			{
				label: "Unknown",
				backgroundColor: "rgb(252,126,152)",
				borderColor: "rgb(252,126,152)",
				data: [
					/* calPct(Series_Complete_Unk_Manuf_12Plus, twelveTotal), */
					calPct(Series_Complete_Unk_Manuf_18Plus, eighteenTotal),
					calPct(Series_Complete_Unk_Manuf_65Plus, sixtyFiveTotal),
				],
			},
			{
				label: "Moderna",
				backgroundColor: "rgb(187,222,251)",
				borderColor: "rgb(187,222,251)",
				data: [
					/* calPct(Series_Complete_Moderna_12Plus, twelveTotal), */
					calPct(Series_Complete_Moderna_18Plus, eighteenTotal),
					calPct(Series_Complete_Moderna_65Plus, sixtyFiveTotal),
				],
			},
		],
	};

	return (
		<div className='card border-dark data_stack'>
			<div className='card-header-dark text-center chart_title purple'>
				Vaccinated Percentage by Age Group
			</div>

			<div className='donuts'>
{/* 				<div className='card-body text-center donut'>
					<div className='donut_title white pb-3 fw-bold'>
						Ages 12 and Older
					</div>
					<Doughnut data={chartData(twelveData)} options={donutOptions} />
				</div> */}
				<div className='card-body text-center donut'>
					<div className='donut_title white pb-3 fw-bold'>
						Ages 18 and Older
					</div>
					<Doughnut data={chartData(eighteenData)} options={donutOptions} />
				</div>
				<div className='card-body text-center donut'>
					<div className='donut_title white pb-3 fw-bold'>
						Ages 65 and Older
					</div>
					<Doughnut data={chartData(sixtyFiveData)} options={donutOptions} />
				</div>
			</div>
			<div className='card-body'>
				<HorizontalBar data={horizontalData} options={barOptions} />
			</div>
		</div>
	);
}

export default Donuts;
