import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface BurgerProps {
  setMobileExpanded: Dispatch<SetStateAction<boolean>>;
}

export const Expander = ({ setMobileExpanded }: BurgerProps) => (
  <Container>
    <div onClick={() => setMobileExpanded((prevValue) => !prevValue)}>
      Expander
    </div>
  </Container>
);

const Container = styled.div`
  cursor: pointer;
`;
