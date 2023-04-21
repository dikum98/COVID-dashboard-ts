import React, { useState, useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Chart as ChartJs } from 'chart.js/auto';
import ChartProps from '../types/ChartProps';
import fetchHistoricalData from '../utils/fetchHistoricalData';

const ChartWrapper = styled.div`
  grid-column: 1 / -1;
  position: relative;
  width: 100%;
  height: calc(100vh - 21rem);
  border: 1px soild var(--color-border);
  background-color: var(--color-foreground);
`;

const ChartCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const Chart: React.FC<ChartProps> = ({ country }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chartData, setChartData] = useState<{ date: string[]; labels: number[] }>({
    date: [],
    labels: [],
  });

  const setChartDataAsync = async (country: string) => {
    if (!country) return;
    const { data } = await fetchHistoricalData(country);

    setChartData({
      date: Object.keys(data.timeline.cases),
      labels: Object.values(data.timeline.cases),
    });
  };

  useLayoutEffect(() => {
    setChartDataAsync(country);
  }, [country]);

  useLayoutEffect(() => {
    if (!chartRef.current || !chartData.date.length) return;

    ChartJs.defaults.color = '#f5eaea';
    ChartJs.defaults.font.family = 'Exo 2';

    const chart = new ChartJs(chartRef.current, {
      type: 'line',
      data: {
        labels: chartData.date,
        datasets: [
          {
            label: 'Confirmed for the last 30 days',
            backgroundColor: '#feb72b',
            borderColor: '#feb72b',
            fill: 'origin',
            data: chartData.labels,
          },
        ],
      },
    });

    return () => {
      chart.destroy();
    };
  }, [chartData]);

  return (
    <ChartWrapper>
      <ChartCanvas ref={chartRef}></ChartCanvas>
    </ChartWrapper>
  );
};
export default React.memo(Chart);
