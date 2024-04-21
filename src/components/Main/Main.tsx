import React from 'react';
import { useUserAuthentication } from '../../hooks/useUserAuthentication';
import { Messages } from '../../utils/constants';

export const Main = () => {
  const { isAuthenticated } = useUserAuthentication();

  return (
    <>
      {isAuthenticated
        ? Messages.LOGGED_IN_MESSAGE
        : Messages.LOGGED_OUT_MESSAGE}
    </>
  );
};
