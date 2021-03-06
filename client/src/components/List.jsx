import React from "react";
import { useQuery, gql } from "@apollo/client";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Atleast from "./Atleast";
import Partially from "./Partially";
import Fully from "./Fully";
import Not from "./Not";
//import Donuts from "./Donuts";

const getStateInfo = gql`
	query getStateInfo {
		states {
			name
			entry(date: "2021-05-01") {
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
	}
`;

function List() {
	const { loading, error, data } = useQuery(getStateInfo);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const { states } = data;

	let newArr = [...states].sort((a, b) => {
		if (a.entry.Series_Complete_Pop_Pct < b.entry.Series_Complete_Pop_Pct) {
			return 1;
		}
		if (a.entry.Series_Complete_Pop_Pct > b.entry.Series_Complete_Pop_Pct) {
			return -1;
		}
		return 0;
	});

	return (
		<Accordion defaultActiveKey='0'>
			{newArr.reduce((renderArr, state, i) => {
				const { name } = state;

				if (
					name !== "United States" &&
					state.entry.Series_Complete_Pop_Pct &&
					state.entry.Administered_Dose1_Recip
				) {
					renderArr.push(
						<Card key={i}>
							<Accordion.Toggle as={Card.Header} eventKey={i + 1}>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='chevron-down'
									className='svg-inline--fa fa-chevron-down fa-w-14'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'>
									<path
										fill='currentColor'
										d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'></path>
								</svg>
								{name}
							</Accordion.Toggle>
							<Accordion.Collapse eventKey={i + 1}>
								<Card.Body className='list_container'>
									<div className='list'>
									<Atleast title='At Least One Dose' data={state} />
						<Partially title='Only One Dose' data={state} />
						<Fully title='Fully Vaccinated' data={state} />
						<Not title='Not Vaccinated' data={state} />
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					);
				}
				return renderArr;
			}, [])}
		</Accordion>
	);
}

export default List;
