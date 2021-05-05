import { useQuery, gql } from "@apollo/client";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { format, addDays } from "date-fns";
import { round } from "mathjs";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const getChartInfo = gql`
	query GetChartInfo {
		entriesBy(state: "United States", from: "2021-03-21", to: "2021-05-04") {
			date
			Administered_Dose1_Pop_Pct
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







	return newA.reverse()/* newLabels.reduce((renderArr, label, i) => {
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
			newA.push(newArr[i][key])
	}

	console.log(newA)

	return newA.reverse() /* newArr.reduce((renderArr, entry, i) => {
		if (i === newArr.length - 1 || i % 7 === 0) {
			renderArr.push(entry[key]);
		}
		return renderArr;
	}, []); */
};
const plucky = ({ entriesBy }, key, minus) => {
	let newArr = [];
	newArr = [...entriesBy].sort((a, b) => {
		return a.date - b.date;
	});

	let newA = [];

	for (let i = newArr.length - 1; i > 0; i = i - 7) {
			newA.push(round(newArr[i][key] - newArr[i][minus], 3))
	}

	console.log(newA)

	return newA.reverse() /* newArr.reduce((renderArr, entry, i) => {
		if (i === newArr.length - 1 || i % 7 === 0) {
			renderArr.push(round(entry[key] - entry[minus], 3));
		}
		return renderArr;
	}, []); */
};

function VacChart() {
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

	let partially = "Administered_Dose1_Pop_Pct";
	let fully = "Series_Complete_Pop_Pct";

	const chartData = {
		labels: findDates(data),
		datasets: [
			{
				type: "bar",
				label: "Fully Vaccinated",
				backgroundColor: "rgb(187,222,251)",
				borderColor: "rgb(187,222,251)",
				data: pluck(data, [fully]),
			},
			{
				type: "bar",
				label: "Only 1 Dose",
				backgroundColor: "rgb(255,183,78)",
				borderColor: "rgb(255,183,78)",
				data: plucky(data, [partially], [fully]),
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			labels: [
				{
					render: (args) => {
						return; /* round( args.value , 3) + '%' */
					},
				},
			],
			datalabels: {
				color: "#303030",
				display: function (context) {
					return `${context.dataset.data[context.dataIndex]}%`;
				},
				font: {
					weight: "bold",
					fontFamily: "Montserrat",
				},
				formatter: function (value) {
					return value > 1 ? value + "%" : "";
				},
			},
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
						max: 50,
						stepSize: 10,
						callback: function (value, index, values) {
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
				Vaccinated percentage of the population
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
