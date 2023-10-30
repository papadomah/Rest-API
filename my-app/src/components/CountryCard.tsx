import React from 'react';

interface CountryCardProps {
  country: any;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    
   <section className="country_list">
         <div className="country">
     <div className='country_flag'>
      <div className="flag_container">
      <img src={country.flag} alt="flag" />
      </div>
      <div className="country_info">
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      {/* Add more details as needed */}
      </div>
    </div>
    </div>
   </section>
    
  );
};

export default CountryCard;