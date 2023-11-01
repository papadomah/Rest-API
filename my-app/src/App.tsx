import React from 'react';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import CountryDetail from './components/CountryDetail';




const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className='app'>
        <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/country-details" element ={<CountryDetail countries={countries} />} />
        </Routes>       
        </div>
    </BrowserRouter>
    
  );
};

export default App;