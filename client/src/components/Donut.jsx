//import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import {evaluate} from 'mathjs'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

//import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

const getChartInfo = gql`
	query GetChartInfo {
		entriesfrom(from: "2021-04-26", to: "2021-04-27") {
			date
			People_Fully_Vaccinated
			People_with_at_least_One_Dose
		}
	}
`;

const findDates = ({ entriesfrom }) => {
	let labels = [];
	entriesfrom.forEach((entry) => {
		if (!labels.includes(entry.date)) {

			labels.push(entry.date);
		}
	});

	
		let newLabels = labels.map((date) => {
			let test = new Date(parseInt(date));

			const newLabel = test.getMonth() +
				"-" +
				test.getDate();
			return newLabel;
		})

	return newLabels.sort();
};


const calTotal = (data, string) => {

	let total = 0

		const { entries } = data

		entries.forEach( entry => {
			total = total + entry.[string]
		})

}
function Donut() {
	
	return (
<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
	);
}

export default Donut;
