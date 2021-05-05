import React from "react";
import { useQuery, gql } from "@apollo/client";

const getStates = gql`
	query GetStates {
		states {
			name
		}
	}
`;


function Location({pushState, location}) {
	const { loading, error, data } = useQuery(getStates);

	if (loading) return <p>Loading...</p>;

	if (error) {
		return `Error! ${error}`;
	}

	const { states } = data;

    const changeHandler = (e) => {
        pushState(e.target.value)
  };

	return (
		<>
			<select className="rounded card text-center" defaultValue={location} onChange={changeHandler}>
				{states.map((state, i) => {
					return (
						<option key={i} value={state.name}>
							{state.name}
						</option>
					);
				})}
			</select>
		</>
	);
}

export default Location;
