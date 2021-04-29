//import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
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
		<table className='table'>
			<thead>
				<tr>
					<th>#</th>
					<th>State</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{newArr.reduce((renderArr, state, i) => {
					const { name } = state;

					if (
						name !== "United States" ||
						!state.entry.Series_Complete_Pop_Pct ||
						!state.entry.Administered_Dose1_Recip
					) {
						renderArr.push(
							<tr
								data-toggle='collapse'
								data-target='#demo1'
								as={Accordion.toggle}
								eventKey={i+1}>
								<td>
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>{i+1}</td>
								<td>05 May 2013</td>
								<td>{name}</td>
							</tr>
						);
					}
					return renderArr;
				}, [])}
			</tbody>
		</table>
	);
}

export default List;
