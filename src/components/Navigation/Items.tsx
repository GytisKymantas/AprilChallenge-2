import styled from 'styled-components';
import { Item } from './Item';
import { TOKEN } from '../../utils/constants';
import { useUserAuthentication } from '../../hooks/useUserAuthentication';
import { useRedirect } from '../../hooks/useRedirect';
import { removeFromLocalStorage } from '../../utils/storage';

interface ItemsProps {
  isMobileExpanded: boolean;
}

export const Items = ({ isMobileExpanded }: ItemsProps) => {
  const { toHome, toLogin, toServers } = useRedirect();
  const { isAuthenticated, updateUserAuthentication } = useUserAuthentication();
  console.log(isMobileExpanded, 'isMobileExpandeds');
  return (
    <Container isMobileExpanded={isMobileExpanded}>
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

const Container = styled.div<{ isMobileExpanded?: boolean }>`
  width: 100%;
  display: ${({ isMobileExpanded }) => (isMobileExpanded ? 'flex' : 'none')};
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
`;
