import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
//components
import Time from "./components/Time";
import Partially from "./components/Partially";
import Atleast from "./components/Atleast";
import Fully from "./components/Fully";
import Not from "./components/Not";
import Manufact from "./components/Manufact";
import VacChart from "./components/VacChart";
import Donuts from "./components/Donuts";
import Location from "./components/Location";
//style
import "./scss/custom.scss";

const getInfo = gql`
	query GetInfo($date: String!, $state: String!) {
		entry(date: $date, state: $state) {
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
	const [location, setLocation] = useState("United States");

	const pushState = (location) => {
		setLocation(location);
	};

	let date = "2021-05-05";
	let from = "2021-03-08"

	const { loading, error, data } = useQuery(getInfo, {
		variables: { date: date, state: location },
	});

	if (loading)
		return (
			<div className='App-header'>
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
			</div>
		);

	if (error) {
		return `Error! ${error}`;
	}

	return (
		<div className='wrap'>
			<h1 className='title title-mobile text-center'>
				COVID-19 Vaccinations in
			</h1>
			{<Location pushState={pushState} location={location} />}
			<section className='main'>
				<div className='top'>
					<div className='info'>
						<Time data={data} location={location} />
						<Atleast title='At Least One Dose' data={data} />
						<Partially title='Only One Dose' data={data} />
						<Fully title='Fully Vaccinated' data={data} />
						<Not title='Not Vaccinated' data={data} />
					</div>
					<div className='data'>
						<VacChart location={location} from={from} to={date} />
						<Donuts data={data} />
					</div>
				</div>
				<Manufact data={data} />
			</section>
		</div>
	);
}

export default App;
