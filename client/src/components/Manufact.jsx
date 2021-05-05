import "chartjs-plugin-datalabels";
import { HorizontalBar } from "react-chartjs-2";
import { formatDistance, addDays} from "date-fns";
import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const getChartInfo = gql`
	query GetChartInfo {
		entriesBy(state: "United States", from: "2021-03-08", to: "2021-05-04") {
			date
			Series_Complete_Yes
			Series_Complete_Moderna
			Series_Complete_Pfizer
			Series_Complete_Janssen
			Series_Complete_Unk_Manuf
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

	for (let i = newLabels.length - 1; i > 0; i = i - 14) {
		if (i === newLabels.length - 1) {
			newA.push(
				`${formatDistance(addDays(new Date(newLabels[i]), 1), new Date())} ago`
			);
		} else {
			newA.push(`${formatDistance(new Date(newLabels[i]), new Date())} ago`);
		}
	}

	return newA;
};

const plucky = ({ entriesBy }, key, total) => {
	let newArr = [...entriesBy].sort((a, b) => {
		if (a.date < b.date) {
			return -1;
		}
		if (a.date > b.date) {
			return 1;
		}
		return 0;
	});

	let newA = [];

	for (let i = newArr.length - 1; i > 0; i = i - 14) {
		newA.push(
			Math.ceil(
				(newArr[i][key] /
					(newArr[i].Series_Complete_Moderna +
						newArr[i].Series_Complete_Pfizer +
						newArr[i].Series_Complete_Janssen +
						newArr[i].Series_Complete_Unk_Manuf)) *
					100
			)
		);
	}

	return newA;
};

function Manufact() {
	const { loading, error, data } = useQuery(getChartInfo);

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

	let unk = "Series_Complete_Unk_Manuf";
	let series = "Series_Complete_Yes";
	let pfizer = "Series_Complete_Pfizer";
	let moderna = "Series_Complete_Moderna";
	let janssen = "Series_Complete_Janssen";

	const chartData = {
		labels: findDates(data),
		datasets: [
			{
				backgroundColor: "rgb(179,157,219)",
				borderColor: "rgb(179,157,219)",
				data: plucky(data, [janssen], [series]),
				label: "Janssen",
			},
			{
				backgroundColor: "rgb(255,183,78)",
				borderColor: "rgb(255,183,78)",
				data: plucky(data, [pfizer], [series]),
				label: "Pfizer",
			},
			{
				backgroundColor: "rgb(252,126,152)",
				borderColor: "rgb(252,126,152)",
				data: plucky(data, [unk], [series]),
				label: "Unknown",
			},
			{
				backgroundColor: "rgb(187,222,251)",
				borderColor: "rgb(187,222,251)",
				data: plucky(data, [moderna], [series]),
				label: "Moderna",
			},
		],
	};

	const options = {
		animation: {
			duration: 0,
		},
		maintainAspectRatio: false,
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
					return value > 5 ? value + "%" : "";
				},
			},
		},
		tooltips: {
			mode: "index",
			axis: "y",
		},
		legend: {
			display: false,
			position: "bottom",
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

	return (
		<div className='card border-dark'>
			<div className='card-header-dark text-center partially chart_title'>
				Vaccinations By Manufacturer
			</div>
			<div className='card-body'>
				<HorizontalBar data={chartData} options={options} />
			</div>
		</div>
	);
}

export default Manufact;
