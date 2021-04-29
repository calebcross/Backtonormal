//import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Partially from "./Partially";
import Fully from "./Fully";

const getStateInfo = gql`
	query getStateInfo {
		states {
			name
			entry(date: "2021-04-28") {
				Census
				Administered_Dose1_Recip
				Administered_Dose1_Pop_Pct
				Series_Complete_Yes
				Series_Complete_Pop_Pct
				Doses_Distributed
			}
		}
	}
`;

function Donut() {
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
					name !== "United States" ||
					!state.entry.Series_Complete_Pop_Pct ||
					!state.entry.Administered_Dose1_Recip
				) {
					renderArr.push(
						<Card key={i}>
							<Accordion.Toggle as={Card.Header} eventKey={i + 1}>
								{name}
							</Accordion.Toggle>
							<Accordion.Collapse eventKey={i + 1}>
								<Card.Body>
									<Partially title='partially vaccinated' data={state} />
									<Fully title='fully vaccinated' data={state} />
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

export default Donut;
