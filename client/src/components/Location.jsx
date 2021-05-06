import React from 'react'
import { useQuery, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const getStates = gql`
	query GetStates {
		states {
			name
		}
	}
`;

function Location({ pushState, location }) {
	const { loading, error, data } = useQuery(getStates);

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

	if (error) {
		return `Error! ${error}`;
	}

	const { states } = data;

	const changeHandler = (e) => {
		pushState(e.target.value);
	};

	return (
		<> 
			<select
				className='rounded card text-center'
				onChange={changeHandler} value={location}>
				<option className='card card_option' value='United States'>
					United States
				</option>
				<option className='card card_option text-center' disabled>--------------</option>

				{states.reduce((reduceArr, state, i) => {
					if (
						state.name !== "United States" &&
						state.name !== "Dept of Defense" &&
						state.name !== "Long Term Care" &&
						state.name !== "Veterans Health" &&
						state.name !== "Bureau of Prisons"
					)
						reduceArr.push(
							<option className='card card_option' key={i} value={state.name}>
								{state.name}
							</option>
						);
					return reduceArr;
				}, [])}
			</select>
			
		</>
	);
}

export default Location;
