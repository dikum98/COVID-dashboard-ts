import React from 'react';
import styled from '@emotion/styled';
import TodayCountProps from '../types/TodayCountProps';

const TodayCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--margin-size2);
  width: 100%;
  height: 5em;
  text-align: center;
  border: 1px solid var(--color-border);
  background-color: var(--color-foreground);
`;

const Name = styled.p`
  font-size: var(--text-size2);
`;

const Value = styled.p<{ panelValueColor?: string }>`
  color: ${props => props.panelValueColor};
  font-size: var(--text-size5);
`;

const TodayCount: React.FC<TodayCountProps> = ({ panelName, panelValue, panelValueColor }) => (
  <TodayCountWrapper>
    <Name>{panelName}</Name>
    <Value panelValueColor={panelValueColor}>{panelValue}</Value>
  </TodayCountWrapper>
);

export default TodayCount;
