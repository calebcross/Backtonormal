import React from "react";
import { useQuery, gql } from '@apollo/client';

//components
import Time from "./components/Time";
import Partially from "./components/Partially";
import Fully from "./components/Fully";
//style
import "./scss/custom.scss";
import VacChart from "./components/VacChart";
import Test from "./components/Test";
import List from "./components/List";


const getInfo = gql`
  query GetInfo  {
    entry (date:"2021-04-28" state:"United States" ){
    Census
    Administered_Dose1_Recip
    Administered_Dose1_Pop_Pct
    Administered_Dose2_Pop_Pct
    Administered_Dose1_Recip_65Plus
    Administered_Dose1_Recip_18Plus
    Series_Complete_Yes
    Series_Complete_Pop_Pct
    Doses_Distributed
    Series_Complete_Yes
    Series_Complete_Pop_Pct
    Series_Complete_18PlusPop_Pct
    Series_Complete_18Plus
    Series_Complete_65PlusPop_Pct
    Administered_Dose1_Recip_65PlusPop_Pct
    Administered_Dose1_Recip_18PlusPop_Pct
    Series_Complete_65Plus
    Series_Complete_Moderna
    Series_Complete_Pfizer
    Series_Complete_Janssen
    }
    
  }
`;

function App() {

  const { loading, error, data } = useQuery(getInfo);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

	return (

			<div className='d-flex flex-column justify-content-center my-5 mx-2'>
 				<Time data ={data} />
			<Partially title='partially vaccinated' data={data}/>
					<Fully title='fully vaccinated' data={data} />
        <VacChart />
        <Test data={data} />
       <List />
			</div>

	);
}

export default App;
