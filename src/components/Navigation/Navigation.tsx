import styled from 'styled-components';
import { COLORS } from '../../utils/constants';
import { Items } from './Items';
import { Logo } from './Logo';

export const NavigationBar = () => {
  return (
    <Navigation>
      <Logo />
      <Items />
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.white};
  flex-wrap: wrap;
  background: ${COLORS.black};
  padding: 6px;
`;
