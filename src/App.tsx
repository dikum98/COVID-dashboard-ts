import React from 'react';
import styled from '@emotion/styled';
import TotalCount from './components/TotalCount';
import Header from './components/Header';
import Countries from './components/Countries';
import UpdatedTime from './components/UpdatedTime';
import TodayCount from './components/TodayCount';
import Chart from './components/Chart';

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

const App: React.FC = () => (
  <div className="App">
    <Header title="COVID-19 Dashboard" />
    <WholeWrapper>
      <LeftSide>
        <Countries></Countries>
        <UpdatedTime />
      </LeftSide>
      <RightSide>
        <TotalCount panelName={'Total Cases'} panelValue={'33,329,572'} panelValueColor={'var(--color-cases)'} />
        <TotalCount panelName={'Total Deaths'} panelValue={'76,429'} />
        <TotalCount
          panelName={'Total Recovered'}
          panelValue={'33,329,572'}
          panelValueColor={'var(--color-recovered)'}
        />
        <TodayCount panelName={'Today Cases'} panelValue={'9,371'} panelValueColor={'var(--color-cases)'} />
        <TodayCount panelName={'Today Deaths'} panelValue={'9,371'} />
        <TodayCount panelName={'Today Recovered'} panelValue={'9,371'} panelValueColor={'var(--color-recovered)'} />
        <Chart />
      </RightSide>
    </WholeWrapper>
  </div>
);

export default App;
