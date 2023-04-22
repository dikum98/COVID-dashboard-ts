import React, { useState, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import CovidSummary from './types/CovidSummary';
import CountryInfo from './types/CountryInfo';
import TotalCount from './components/StatPanel';
import Header from './components/Header';
import Countries from './components/Countries';
import DataLastUpdated from './components/DataLastUpdated';
import TodayCount from './components/StatPanelToday';
import Chart from './components/Chart';
import getNumberWidthCommas from './utils/getNumberWithCommas';
import fetchAllCountriesInfo from './utils/fetchAllCountriesInfo';
import fetchCountryInfo from './utils/fetchCountryInfo';

const WholeWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  margin-right: var(--margin-size3);
  width: 25%;

  @media (max-width: 768px) {
    margin-bottom: var(--margin-size3);
    width: 100%;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--margin-size3);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const App: React.FC = () => {
  const [country, setCountry] = useState<string>('');
  const [covidSummary, setCovidSummary] = useState<CovidSummary>({
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    updatedTime: 0,
  });

  const sumAllCounts = async (): Promise<void> => {
    const { data: countries } = await fetchAllCountriesInfo();

    setCovidSummary({
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
          updatedTime: 0,
        }
      ),
      updatedTime: countries[0].updated,
    });
  };

  const setCountryCountAsync = async (country: string): Promise<void> => {
    const { data } = await fetchCountryInfo(country);

    setCovidSummary({
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

  const onClickCountry = (e: React.MouseEvent<HTMLElement>): void => {
    if (!(e.target instanceof HTMLElement && e.target.closest('ul'))) return;
    const countryName = e.target.closest('li')?.textContent?.replace(/[0-9,]/g, '');

    if (!countryName) return;
    setCountry(countryName);
    setCountryCountAsync(countryName);
  };

  return (
    <div className="App" onClick={onClickCountry}>
      <Header title="COVID-19 Dashboard" />
      <WholeWrapper>
        <Sidebar>
          <Countries></Countries>
          <DataLastUpdated dataLastUpdated={covidSummary.updatedTime} />
        </Sidebar>
        <MainContent>
          <TotalCount
            panelName={'Total Cases'}
            panelValue={getNumberWidthCommas(covidSummary.cases)}
            panelValueColor={'var(--color-cases)'}
          />
          <TotalCount panelName={'Total Deaths'} panelValue={getNumberWidthCommas(covidSummary.deaths)} />
          <TotalCount
            panelName={'Total Recovered'}
            panelValue={getNumberWidthCommas(covidSummary.recovered)}
            panelValueColor={'var(--color-recovered)'}
          />
          <TodayCount
            panelName={'Today Cases'}
            panelValue={getNumberWidthCommas(covidSummary.todayCases)}
            panelValueColor={'var(--color-cases)'}
          />
          <TodayCount panelName={'Today Deaths'} panelValue={getNumberWidthCommas(covidSummary.todayDeaths)} />
          <TodayCount
            panelName={'Today Recovered'}
            panelValue={getNumberWidthCommas(covidSummary.todayRecovered)}
            panelValueColor={'var(--color-recovered)'}
          />
          <Chart country={country} />
        </MainContent>
      </WholeWrapper>
    </div>
  );
};

export default App;
