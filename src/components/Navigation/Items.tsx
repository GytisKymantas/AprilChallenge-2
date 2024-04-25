import styled from 'styled-components';
import { Item } from './Item';
import { TOKEN } from '../../utils/constants';
import { useUserAuthentication } from '../../hooks/useUserAuthentication';
import { useRedirect } from '../../hooks/useRedirect';
import { removeFromLocalStorage } from '../../utils/storage';

export const Items = () => {
  const { toHome, toLogin, toServers } = useRedirect();
  const { isAuthenticated, updateUserAuthentication } = useUserAuthentication();
  return (
    <Container>
      <Item onClick={toHome} label='Main' />
      {isAuthenticated ? (
        <>
          <Item onClick={toServers} label='Servers' />
          <Item
            onClick={() => {
              removeFromLocalStorage(TOKEN);
              updateUserAuthentication(false);
            }}
            label='Logout'
          />
        </>
      ) : (
        <Item onClick={toLogin} label='Login' />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
`;
