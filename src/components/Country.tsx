import React from 'react';
import styled from '@emotion/styled';

const CountryItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1;
  padding: 1rem 2rem;
  border: 1px soild var(--color-border);
  background-color: var(--color-foreground);

  :hover {
    cursor: pointer;
    background-color: var(--color-hover);
  }
`;

const CountryValue = styled.p`
  margin-right: 2rem;
  font-size: var(--text-size3);
`;

interface CountryProps {
  countryName: string;
  population: number;
}

const Country: React.FC<CountryProps> = ({ countryName, population }) => (
  <CountryItem>
    <CountryValue>{countryName}</CountryValue>
    <CountryValue>{population}</CountryValue>
  </CountryItem>
);

export default Country;
