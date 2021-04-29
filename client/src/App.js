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
    entry (date:"2021-04-28" state:"United States" ){
    Census
    Administered_Dose1_Recip
    Administered_Dose1_Pop_Pct
    Series_Complete_Yes
    Series_Complete_Pop_Pct
    Doses_Distributed
    }
    
  }
`;


function App() {

  const { loading, error, data } = useQuery(getInfo);

  let populationUs = 331996199;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

	return (

			<div className='d-flex flex-column justify-content-center my-5 mx-2'>
 				<Time data ={data} />
			<Partially title='partially vaccinated' data={data}/>
					<Fully title='fully vaccinated' data={data} population={populationUs} />
        <VacChart />
       <Donut />
			</div>

	);
}

export default App;
