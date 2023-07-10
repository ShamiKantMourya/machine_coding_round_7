import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import CountryPage from './Pages/CountryPage';
import Destination from './Pages/Destination';
import Places from './Pages/Places';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/:continentId' element={<CountryPage />} ></Route>
        <Route path='/:continentId/:countryId' element={<Destination />} ></Route>
        <Route path='/:continentId/:countryId/:destinationId' element={<Places />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
