//import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Partially from "./Partially";
import Fully from "./Fully";

const getStateInfo = gql`
	query getStateInfo {
		states {
		  name
      entry (date: "2021-04-28") {
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
	
	return (
<Accordion defaultActiveKey="0">
{data.states.map( (state, i) => {
	const { name } = state
	return(<Card>
    <Accordion.Toggle as={Card.Header} eventKey={i+1}>
      {name}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={i+1}>
      <Card.Body><Partially title='partially vaccinated' data={state}/>
	  <Fully title='fully vaccinated' data={state} />
	  </Card.Body>
    </Accordion.Collapse>
  </Card>)
})}
  
</Accordion>
	);
}

export default Donut;
