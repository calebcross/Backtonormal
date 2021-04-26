import React from "react";
import { useQuery, gql } from '@apollo/client';

//components
import Partially from "./components/Partially";
import Fully from "./components/Fully";
//style
import "./scss/custom.scss";
import VacChart from "./components/VacChart";


const getInfo = gql`
  query GetInfo  {
    entry (date: "4/12/21" state: "United States") {
        date
      people_vaccinated
      people_fully_vaccinated
    }
  }
`;

function App() {

  const { loading, error, data } = useQuery(getInfo);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    const { people_vaccinated, people_fully_vaccinated } = data.entry

	return (

			<div className='d-flex flex-column justify-content-center my-5 mx-2'>
				<h1 className='display-6 text-center'>
					<strong>
						Days until
						<br />
						normal:
						<br />
						88
					</strong>
				</h1>
				<Partially title='partially vaccinated' data={people_vaccinated} />
				<Fully title='fully vaccinated' data={people_fully_vaccinated} />
        <VacChart />
			</div>

	);
}

export default App;
