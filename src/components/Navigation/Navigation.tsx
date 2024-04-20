import React, { useState } from 'react';
import styled from 'styled-components';
import { Expander } from './Expander';
import { Items } from './Items';
import Logo from './Logo';

export const NavigationBar = () => {
  const [isMobileExpanded, setMobileExpanded] = useState(false);

  return (
    <Navigation>
      <Logo />
      <Expander setMobileExpanded={setMobileExpanded} />
      <Items isMobileExpanded={isMobileExpanded} />
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  flex-wrap: wrap;
  background: black;
  padding: 6px;
`;
