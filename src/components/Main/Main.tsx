import React from 'react';
import { useUserAuthentication } from '../../hooks/useUserAuthentication';
import { LOGGED_IN_MESSAGE, LOGGED_OUT_MESSAGE } from '../../utils/constants';

export const Main = () => {
  const { isAuthenticated } = useUserAuthentication();

  return <div> {isAuthenticated ? LOGGED_IN_MESSAGE : LOGGED_OUT_MESSAGE}</div>;
};
