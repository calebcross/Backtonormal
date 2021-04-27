import React from "react";
import { useQuery, gql } from '@apollo/client';

//components
import Time from "./components/Time";
import Partially from "./components/Partially";
import Fully from "./components/Fully";
//style
import "./scss/custom.scss";
import VacChart from "./components/VacChart";


const getInfo = gql`
  query GetInfo  {
    entries (date:"2021-04-26" ){
  
      People_Fully_Vaccinated
      People_with_at_least_One_Dose
    }
    
  }
`;

function App() {

  const { loading, error, data } = useQuery(getInfo);

  let population = 338472604;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

	return (

			<div className='d-flex flex-column justify-content-center my-5 mx-2'>
				<Time />
				<Partially title='partially vaccinated' data={data} population={population} />
				<Fully title='fully vaccinated' data={data} population={population} />
        <VacChart />
        <VacChart />
        <VacChart />
        <VacChart />
			</div>

	);
}

export default App;
