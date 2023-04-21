import React from 'react';
import styled from '@emotion/styled';
import { HeaderProps } from '../types/Props';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--margin-size3);
  height: 3rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-foreground);
`;

const Title = styled.h1`
  display: inline-block;
  padding-left: 2.625rem;
  font-size: var(--text-size3);
`;

const Header: React.FC<HeaderProps> = ({ title }) => (
  <HeaderWrapper>
    <Title>{title}</Title>
  </HeaderWrapper>
);

export default Header;
