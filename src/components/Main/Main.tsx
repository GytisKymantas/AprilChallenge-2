import { useUserAuthentication } from '../../hooks/useUserAuthentication';
import { Messages } from '../../utils/constants';
import styled from 'styled-components';

export const Main = () => {
  const { isAuthenticated } = useUserAuthentication();

  return (
    <div>
      <Header>
        {isAuthenticated
          ? Messages.LOGGED_IN_MESSAGE
          : Messages.LOGGED_OUT_MESSAGE}
      </Header>
    </div>
  );
};

const Header = styled.h1`
  font-size: 56px;
  text-align: center;
`;
