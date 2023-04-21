import React from 'react';
import styled from '@emotion/styled';
import getFormattedTimeFromMillis from '../utils/getFormattedTimeFromMillis';
import UpdatedTimeProps from '../types/UpdatedTimeProps';

const UpdatedTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--margin-size2);
  width: 100%;
  height: 5rem;
  border: 1px soild var(--color-border);
  background-color: var(--color-foreground);
`;

const Text = styled.p`
  color: var(--color-cases);
  font-size: var(--text-size2);
  font-weight: bold;
`;

const Time = styled.p`
  font-size: var(--text-size5);
  font-weight: bold;
`;

const UpdatedTime: React.FC<UpdatedTimeProps> = ({ updatedTime }) => (
  <UpdatedTimeWrapper>
    <Text>Updated at:</Text>
    <Time>{getFormattedTimeFromMillis(updatedTime)}</Time>
  </UpdatedTimeWrapper>
);

export default UpdatedTime;
