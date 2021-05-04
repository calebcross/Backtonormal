import React from "react";
import { useQuery, gql } from "@apollo/client";

//components
import Time from "./components/Time";
import Partially from "./components/Partially";
import Atleast from "./components/Atleast";
import Fully from "./components/Fully";
import Not from "./components/Not";
import Manufact from "./components/Manufact";
import VacChart from "./components/VacChart";
import Donuts from "./components/Donuts";
import List from "./components/List";
//style
import "./scss/custom.scss";

const getInfo = gql`
	query GetInfo {
		entry(date: "2021-05-01", state: "United States") {
			Administered_Dose1_Pop_Pct
			Administered_Dose1_Recip
			Administered_Dose1_Recip_18Plus
			Administered_Dose1_Recip_18PlusPop_Pct
			Administered_Dose1_Recip_65Plus
			Administered_Dose1_Recip_65PlusPop_Pct
			Census
			Doses_Distributed
			Series_Complete_18Plus
			Series_Complete_18PlusPop_Pct
			Series_Complete_65Plus
			Series_Complete_65PlusPop_Pct
			Series_Complete_Janssen
			Series_Complete_Janssen_18Plus
			Series_Complete_Janssen_65Plus
			Series_Complete_Moderna
			Series_Complete_Moderna_18Plus
			Series_Complete_Moderna_65Plus
			Series_Complete_Pfizer
			Series_Complete_Pfizer_18Plus
			Series_Complete_Pfizer_65Plus
			Series_Complete_Pop_Pct
			Series_Complete_Unk_Manuf_18Plus
			Series_Complete_Unk_Manuf_65Plus
			Series_Complete_Yes
			date
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(getInfo);

	if (loading) return <p>Loading...</p>;
	if (error) return `Error! ${error}`;

	return (
		<div className='d-flex flex-column justify-content-center my-6 wrap'>
			<h1 className='title title-mobile text-center'>
				COVID-19 Vaccinations in the US
			</h1>
			<section className='main'>
				<div className='top'>
					<div className='info'>
						<Time data={data} />
						<Atleast title='At Least One Dose' data={data} />
						<Partially title='Only One Dose' data={data} />
						<Fully title='Fully Vaccinated' data={data} />
						<Not title='Not Vaccinated' data={data} />
					</div>
					<div className='data'>
						<VacChart />
						<Donuts data={data} />
					</div>
				</div>
				<Manufact data={data} />
				{/* //<List /> */}
			</section>
		</div>
	);
}

export default App;
