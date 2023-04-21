import React, { useState, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import getNumberWidthCommas from './utils/getNumberWithCommas';
import TotalCount from './components/TotalCount';
import Header from './components/Header';
import Countries from './components/Countries';
import UpdatedTime from './components/UpdatedTime';
import TodayCount from './components/TodayCount';
import Chart from './components/Chart';
import fetchAllCountriesInfo from './utils/fetchAllCountriesInfo';
import fetchCountryInfo from './utils/fetchCountryInfo';
import CountryInfo from './types/CountryInfo';
import TotalCounts from './types/TotalCounts';

const WholeWrapper = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  margin-right: var(--margin-size3);
  width: 25%;
`;

const RightSide = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--margin-size3);
`;

const App: React.FC = () => {
  const [counts, setCounts] = useState<TotalCounts>({
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    updatedTime: 0,
  });
  const [country, setCountry] = useState('');

  const sumAllCounts = async () => {
    const { data: countries } = await fetchAllCountriesInfo();

    setCounts({
      ...countries.reduce(
        (obj: CountryInfo, country: CountryInfo) => ({
          ...obj,
          cases: obj.cases + country.cases,
          todayCases: obj.todayCases + country.todayCases,
          deaths: obj.deaths + country.deaths,
          todayDeaths: obj.todayDeaths + country.todayDeaths,
          recovered: obj.recovered + country.recovered,
          todayRecovered: obj.todayRecovered + country.todayRecovered,
        }),
        {
          cases: 0,
          todayCases: 0,
          deaths: 0,
          todayDeaths: 0,
          recovered: 0,
          todayRecovered: 0,
        }
      ),
      updatedTime: countries[0].updated,
    });
  };

  const setCountryCountAsync = async (country: string) => {
    const { data } = await fetchCountryInfo(country);

    setCounts({
      cases: data.cases,
      todayCases: data.todayCases,
      deaths: data.deaths,
      todayDeaths: data.todayDeaths,
      recovered: data.recovered,
      todayRecovered: data.todayRecovered,
      updatedTime: data.updated,
    });
  };

  useLayoutEffect(() => {
    sumAllCounts();
  }, []);

  const onClickCountry = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement && e.target.closest('ul'))) return;
    const countryName = e.target.closest('li')?.textContent?.replace(/[0-9,]/g, '');

    if (countryName !== undefined) {
      setCountry(countryName);
      setCountryCountAsync(countryName);
    }
  };

  return (
    <div className="App" onClick={onClickCountry}>
      <Header title="COVID-19 Dashboard" />
      <WholeWrapper>
        <LeftSide>
          <Countries></Countries>
          <UpdatedTime updatedTime={counts.updatedTime} />
        </LeftSide>
        <RightSide>
          <TotalCount
            panelName={'Total Cases'}
            panelValue={getNumberWidthCommas(counts.cases)}
            panelValueColor={'var(--color-cases)'}
          />
          <TotalCount panelName={'Total Deaths'} panelValue={getNumberWidthCommas(counts.deaths)} />
          <TotalCount
            panelName={'Total Recovered'}
            panelValue={getNumberWidthCommas(counts.recovered)}
            panelValueColor={'var(--color-recovered)'}
          />
          <TodayCount
            panelName={'Today Cases'}
            panelValue={getNumberWidthCommas(counts.todayCases)}
            panelValueColor={'var(--color-cases)'}
          />
          <TodayCount panelName={'Today Deaths'} panelValue={getNumberWidthCommas(counts.todayDeaths)} />
          <TodayCount
            panelName={'Today Recovered'}
            panelValue={getNumberWidthCommas(counts.todayRecovered)}
            panelValueColor={'var(--color-recovered)'}
          />
          <Chart country={country} />
        </RightSide>
      </WholeWrapper>
    </div>
  );
};

export default App;
