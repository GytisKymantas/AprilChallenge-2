import React from 'react';
import styled from 'styled-components';
import { useRedirect } from '../../hooks/useRedirect';

const Logo = () => {
  const { toHome } = useRedirect();

  return (
    <Button
      onClick={toHome}
      className='cursor-pointer font-semibold text-xl tracking-tight'
    >
      Nord
    </Button>
  );
};

export default Logo;

const Button = styled.div`
  cursor: pointer;
  background: transparent;
  font-family: fantasy;
  font-weight: 500;
  font-size: 32px;
`;
