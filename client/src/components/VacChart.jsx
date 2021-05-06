import { useQuery, gql } from "@apollo/client";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { format, addDays } from "date-fns";
import { round } from "mathjs";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const getChartInfo = gql`
	query GetChartInfo($state: String!, $from: String!, $to: String!) {
		entriesBy(state: $state, from: $from, to: $to) {
			date
			Administered_Dose1_Pop_Pct
			Administered_Dose2_Pop_Pct
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

	let newLabels = [...labels].sort((a, b) => {
		let x = new Date(a);
		let y = new Date(b);
		return x - y;
	});

	let newA = [];

	for (let i = newLabels.length - 1; i > 0; i = i - 7) {
		if (i === newLabels.length - 1) {
			newA.push(format(addDays(new Date(newLabels[i]), 1), "MMMM do"));
		} else {
			newA.push(format(new Date(newLabels[i]), "MMMM do"));
		}
	}

	return newA.reverse(); /* newLabels.reduce((renderArr, label, i) => {
		//console.log(`${i} ${label}`)
		if (i === newLabels.length - 1) {
			renderArr.push(format(addDays(new Date(label), 1), "MMMM do"));
		} else if (i % 7 === 0) {
			//renderArr.push(label.split('2021-').[1])
			renderArr.push(format(new Date(label), "MMMM do"));
			//console.log(renderArr);
			//renderArr.push( formatDistance( new Date (label), new Date() ) )
		}

		return renderArr;
	}, []); */
};

const pluck = ({ entriesBy }, key) => {
	let newArr = [];
	newArr = [...entriesBy].sort((a, b) => {
		if (a.date < b.date) {
			return -1;
		}
		if (a.date > b.date) {
			return 1;
		}
		return a.date - b.date;
	});

	let newA = [];

	for (let i = newArr.length - 1; i > 0; i = i - 7) {
		newA.push(newArr[i][key]);
	}
	return newA.reverse();
};
const plucky = ({ entriesBy }, key, minus) => {
	let newArr = [];
	newArr = [...entriesBy].sort((a, b) => {
		return a.date - b.date;
	});

	let newA = [];

	for (let i = newArr.length - 1; i > 0; i = i - 7) {
		newA.push(round( newArr[i][key] - newArr[i][minus], 4));
	}
	return newA.reverse();
};


function VacChart({ location, from,  to }) {
	const { loading, error, data } = useQuery(getChartInfo, {
		variables: { state: location, from: from, to: to},
	});

	if (loading)
		return (
			<Button variant='secondary' disabled>
				<Spinner
					as='span'
					animation='grow'
					size='xl'
					role='status'
					aria-hidden='true'
					className='sr-only App-logo'
				/>
				Loading...
			</Button>
		);
	if (error) return <p>Error :(</p>;

	let partially = "Administered_Dose1_Pop_Pct";
	let fully = "Series_Complete_Pop_Pct";

	const chartData = {
		labels: findDates(data),
		datasets: [
			/* {
				type: "line",
				label: "At least One Dose",
				backgroundColor: "rgb(178,157,219)",
				borderColor: "rgb(178,157,219)",
				data: pluck(data, [partially]),
				fill: false,
				index: 2,
				datalabels: {
					align: 'end',
					anchor: 'end'
				  }
			}, */
			{
				type: "bar",
				label: "Only 1 Dose",
				backgroundColor: "rgb(255,183,78)",
				borderColor: "rgb(255,183,78)",
				data: plucky(data, [partially], [fully]),
				datalabels: {
					align: 'end',
					anchor: 'start'
				  }
			},
			{
				type: "bar",
				label: "Fully Vaccinated",
				backgroundColor: "rgb(187,222,251)",
				borderColor: "rgb(187,222,251)",
				data: pluck(data, [fully]),
				datalabels: {
					align: 'end',
					anchor: 'start'
				  }
			}
		],
	};

	const options = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			labels: [
				{
					render: (args) => {
						return;
					},
				},
			],
			datalabels: {
				backgroundColor: function(context) {
				  return context.dataset.backgroundColor;
				},
				borderRadius: 4,
				color: '#303030',
				font: {
				  weight: 'bold'
				},
				formatter: function (value) {
					return value > 1 ? value + "%" : "";
				},
				padding: 2
			  }
		},
		tooltips: {
			mode: "index",
			xAlign: "center",
			yAlign: "bottom",
		},
		legend: {
			display: true,
			labels: {
				fontColor: "white",
				fontStyle: "bold",
				fontFamily: "Montserrat",
			},
		},
		scales: {
			yAxes: [
				{
					stacked: true,

					ticks: {
						stepSize: 10,
						callback: function (value) {
							return `${value}%`;
						},
						fontColor: "white",
						fontStyle: "bold",
						fontFamily: "Montserrat",
					},
					gridLines: {
						color: "#444",
						zeroLineColor: "white",
					},
				},
			],
			xAxes: [
				{
					stacked: true,
					ticks: {
						fontColor: "white",
						fontStyle: "bold",
						fontFamily: "Montserrat",
					},
					gridLines: {
						color: "#444",
					},
				},
			],
		},
	};

	return (
		<div className='card border-dark data_head'>
			<div className='card-header-dark text-center green chart_title'>
				Vaccinated Percentage of the Population
			</div>
			<div className='card-body d-flex justify-content-center align-items-center'>
				<div className='vacchart'>
					<Bar data={chartData} options={options} />
				</div>
			</div>
		</div>
	);
}

export default VacChart;
