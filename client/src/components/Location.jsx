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
            <option className="card card_option" value="United States" selected >United States</option>
            <option className="card card_option" disabled>──────────</option>
						
				{states.reduce((reduceArr, state, i) => {

                    if( state.name !== "United States" && state.name !== "Dept of Defense" && state.name !== "Long Term Care" && state.name !== "Bureau of Prisons") reduceArr.push(<option className="card card_option" key={i} value={state.name}>
							{state.name}
						</option>)
					return (reduceArr);
				}, [])}
			</select>
		</>
	);
}

export default Location;