import React, { useLayoutEffect, useState } from 'react';
import styled from '@emotion/styled';
import Country from './Country';
import fetchAllCountriesInfo from '../utils/fetchAllCountriesInfo';
import CountryInfo from '../types/CountryInfo';

const CountriesWrapper = styled.div`
  margin-bottom: var(--margin-size3);
  height: calc(100vh - 12rem);
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
`;

const CountriesHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 20%;
  text-align: center;
  background-color: var(--color-foreground);
`;

const CountriesTitle = styled.h2`
  font-size: var(--text-size4);
`;

const CountriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--margin-size1);
  padding: var(--margin-size1);
  height: 80%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-foreground);
  }
`;

const Countries: React.FC = () => {
  const [countryAndPopulation, setCountryAndPopulation] = useState([]);

  const fetchCountryAndPopulation = async () => {
    const { data: countries } = await fetchAllCountriesInfo();

    setCountryAndPopulation(() => countries.map((country: CountryInfo) => [country.country, country.population]));
  };

  useLayoutEffect(() => {
    fetchCountryAndPopulation();
  }, []);

  return (
    <CountriesWrapper>
      <CountriesHeader>
        <CountriesTitle>Population by Country</CountriesTitle>
      </CountriesHeader>
      <CountriesList>
        {countryAndPopulation.map(([country, population]) => (
          <Country key={country} countryName={country} population={population}></Country>
        ))}
      </CountriesList>
    </CountriesWrapper>
  );
};

export default Countries;
