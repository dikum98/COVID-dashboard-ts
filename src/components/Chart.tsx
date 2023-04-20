import React from 'react';
import styled from '@emotion/styled';

const ChartWrapper = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  height: calc(100vh - 21rem);
  border: 1px soild var(--color-border);
  background-color: var(--color-foreground);
`;

const Chart: React.FC = () => <ChartWrapper></ChartWrapper>;

export default Chart;
