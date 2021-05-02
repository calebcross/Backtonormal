import { useQuery, gql } from "@apollo/client";
import { Bar } from 'react-chartjs-2';
import "chartjs-plugin-labels";
import "chartjs-plugin-datalabels";
import { format } from 'date-fns';
import { round } from 'mathjs';
//import "chartjs-plugin-crosshair";

const getChartInfo = gql`
	query GetChartInfo {
		entriesBy(state: "United States", from: "2021-03-08", to: "2021-04-28") {
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
		let x = new Date(a)
		let y = new Date(b)
		return x-y
	})

	return newLabels.reduce( (renderArr, label, i) => {
		if (i % 7 === 0) {
			//renderArr.push(label.split('2021-').[1])
			renderArr.push( format( new Date (label), 'MMM do' ) )
			//renderArr.push( formatDistance( new Date (label), new Date() ) )
			}
			return renderArr
	}, [])
};

const pluck = ({ entriesBy }, key) => {
	let newArr = [] 
	newArr = [...entriesBy].sort((a, b) => {

		if (a.date < b.date) {
			return -1;
		}
		if (a.date > b.date) {
			return 1;
		}
		return 0;
	});



	return newArr.reduce( (renderArr, entry, i) => {
		if (i % 7 === 0) {
			renderArr.push(entry[key])
			}
			return renderArr
	}, []) ;
};
const plucky = ({ entriesBy }, key, minus) => {
	let newArr = [] 
	newArr = [...entriesBy].sort((a, b) => {

		if (a.date < b.date) {
			return -1;
		}
		if (a.date > b.date) {
			return 1;
		}
		return 0;
	});



	return newArr.reduce( (renderArr, entry, i) => {
		if (i % 7 === 0) {
			renderArr.push(entry[key] - entry[minus])
			}
			return renderArr
	}, []) ;
};

function VacChart() {

	const { loading, error, data } = useQuery(getChartInfo);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	let partially = "Administered_Dose1_Pop_Pct";
	let fully = "Series_Complete_Pop_Pct";

	const chartData = {
		labels: findDates(data),
		datasets: [
			{
				type: 'bar',
				label: "Fully Vaccinated",
				 backgroundColor: "rgb(187,222,251)",
				borderColor: "rgb(187,222,251)",
				data: pluck(data, [fully]),
			},
			{
				type: 'bar',
				label: "Partially Vaccinated",
				backgroundColor: "rgb(255,183,78)",
				borderColor: "rgb(255,183,78)",
				data: pluck(data, [partially]),
			},
			
		],
	};

	const options = {
		plugins: {
			labels: [{
				render: (args) => {return /* round( args.value , 3) + '%' */},
				fontColor: "black",
				fontStyle: 'bold'
			  }],
			  datalabels: {
				color: 'black',
				display: function(context) {
				  return `${context.dataset.data[context.dataIndex]}%`;
				},
				font: {
				  weight: 'normal'
				},
				formatter: function(value) {
					return `${value}%`;
				  }
			  }
		},
		  scales: {
            yAxes: [{
				stacked: true,
                ticks: {
                    callback: function(value, index, values) {
                        return `${value}%`;
                    },
					fontColor: "white"
                },
				gridLines: {
					color: "#444"
				}
            }],
            xAxes: [{
				stacked: true,
                ticks: {
					fontColor: "white"
                },
				gridLines: {
					color: "#444"
				}
            }]
        },
		
	};

	return (
		<div className='card border-dark mb-3'>
			<div className='card-header-dark text-center green fs-4 fw-bold'>
				Vaccinated Percentage of the Population
			</div>
			<div className='card-body'>
				<Bar data={chartData} options={options} />
			</div>
		</div>
	);
}

export default VacChart;


/* scales: {
	y: {
		suggestedMax: 50,
		ticks: {
			callback: function (val, index) {
				return val + "%";
			},
			color: "white",
		},
		grid: {
			color: "#444",
		},
	},
	x: {
		ticks: {
			callback: function(val, index) {
				return index % 3 === 0 ? this.getLabelForValue(val) : '';
			  },
			color: "white",
		},
		grid: {
			color: "#444",
		},
	},
}, */