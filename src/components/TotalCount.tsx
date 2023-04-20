import React from 'react';
import styled from '@emotion/styled';
import TotalCountProps from '../types/TotalCountProps';

const TotalCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--margin-size3);
  width: 100%;
  height: 8rem;
  text-align: center;
  border: 1px solid var(--color-border);
  background-color: var(--color-foreground);

  :hover {
    cursor: pointer;
    background-color: var(--color-hover);
  }
`;

const Name = styled.p`
  font-size: var(--text-size4);
`;

const Value = styled.p<{ panelValueColor?: string }>`
  color: ${props => props.panelValueColor};
  font-size: var(--text-size6);
`;

const TotalCount: React.FC<TotalCountProps> = ({ panelName, panelValue, panelValueColor }) => (
  <TotalCountWrapper>
    <Name>{panelName}</Name>
    <Value panelValueColor={panelValueColor}>{panelValue}</Value>
  </TotalCountWrapper>
);

export default TotalCount;
