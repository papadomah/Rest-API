import React from 'react';
import { useParams } from 'react-router-dom';

interface CountryDetailProps {
  countries: any[];
}

const CountryDetail: React.FC<CountryDetailProps> = ({ countries }) => {
  const { countryCode } = useParams<{ countryCode: string }>();

  const country = countries.find((country: any) => country.alpha3Code === countryCode);

  return (
    <div className="country-detail">
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CountryDetail;
