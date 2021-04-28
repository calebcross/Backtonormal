import React from "react";
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react'

//components
import Time from "./components/Time";
import Partially from "./components/Partially";
import Fully from "./components/Fully";
//style
import "./scss/custom.scss";
import VacChart from "./components/VacChart";
import Donut from "./components/Donut";


const getInfo = gql`
  query GetInfo  {
    entries (date:"2021-04-27" ){
  
      People_Fully_Vaccinated
      People_with_at_least_One_Dose
      Total_Doses_Delivered
    }
    
  }
`;



function App() {

  const { loading, error, data } = useQuery(getInfo);

  let populationUs = 338472604;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

	return (

			<div className='d-flex flex-column justify-content-center my-5 mx-2'>
				<Time data ={data} population={populationUs} />
				<Partially title='partially vaccinated' data={data} population={populationUs} />
				<Fully title='fully vaccinated' data={data} population={populationUs} />
        <VacChart population={populationUs} />
        <Donut population={populationUs} />
			</div>

	);
}

export default App;
