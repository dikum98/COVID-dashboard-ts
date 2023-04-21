import React from 'react';
import styled from '@emotion/styled';
import { StatPanelTodayProps } from '../types/Props';

const StatPanelTodayWrapper = styled.div`
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

const StatTodayName = styled.p`
  font-size: var(--text-size2);
`;

const StatTodayValue = styled.p<{ panelValueColor?: string }>`
  color: ${props => props.panelValueColor};
  font-size: var(--text-size5);
`;

const StatPanelToday: React.FC<StatPanelTodayProps> = ({ panelName, panelValue, panelValueColor }) => (
  <StatPanelTodayWrapper>
    <StatTodayName>{panelName}</StatTodayName>
    <StatTodayValue panelValueColor={panelValueColor}>{panelValue}</StatTodayValue>
  </StatPanelTodayWrapper>
);

export default StatPanelToday;
