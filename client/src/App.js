import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
//components
import Partially from "./components/Partially";
import Fully from "./components/Fully";
//style
import "./scss/custom.scss";


/* const client = new ApolloClient({
	uri: "http://localhost:8080/graphql",
	cache: new InMemoryCache(),
}); */
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});


const getStateQuery = gql`
{
  entry (date: "4/12/21" state: "United States") {
    date
    people_vaccinated
    people_fully_vaccinated
  }
  
}`

function App() {

   const { loading, error, data } = useQuery(getStateQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    console.log(data) 

	return (
		<ApolloProvider client={client}>
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
				<Partially title='AT LEAST PARTIALLY VACCINATED' />
				<Fully title='FULLY VACCINATED' />
			</div>
		</ApolloProvider>
	);
}

export default App;
