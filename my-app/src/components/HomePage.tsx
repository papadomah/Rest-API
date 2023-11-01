import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import Header from './Header';
import Filter from './Filter';
import Search from './Search';
import CountryDetail from './CountryDetail';


const HomePage: React.FC = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch data from the REST Countries API
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div>   
       <Header />  
       <section className="content">
       <div className="inputs">
        <div className="search">
          <Search />
        </div>
        <div className="filter">
          <Filter />
        </div>
        </div>  
      <div className='countries'>
        {countries.map((country: any) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
       </section>
    </div>
  );
};

export default HomePage;