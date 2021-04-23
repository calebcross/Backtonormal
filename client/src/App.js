
import './scss/custom.scss';
import Partially from './components/Partially'
import Fully from './components/Fully'

function App() {
  return (
    <div className="d-flex flex-column justify-content-center my-5 mx-2">
    <Partially title="AT LEAST PARTIALLY VACCINATED" />
    <Fully title= "FULLY VACCINATED" />
    </div>
  );
}

export default App;
