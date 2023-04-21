import React from 'react';
import styled from '@emotion/styled';
import { StatPanelProps } from '../types/Props';

const StatPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--margin-size3);
  width: 100%;
  height: 8rem;
  text-align: center;
  border: 1px solid var(--color-border);
  background-color: var(--color-foreground);
`;

const StatName = styled.p`
  font-size: var(--text-size4);
`;

const StatValue = styled.p<{ panelValueColor?: string }>`
  color: ${props => props.panelValueColor};
  font-size: var(--text-size6);
`;

const StatPanel: React.FC<StatPanelProps> = ({ panelName, panelValue, panelValueColor }) => (
  <StatPanelWrapper>
    <StatName>{panelName}</StatName>
    <StatValue panelValueColor={panelValueColor}>{panelValue}</StatValue>
  </StatPanelWrapper>
);

export default StatPanel;
