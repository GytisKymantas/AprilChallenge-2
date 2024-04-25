import { useEffect,useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { userSelector } from '../store/user/selectors';
import { setIsAuthenticated } from '../store/user/slice';
import { TOKEN } from '../utils/constants';
import { getFromLocalStorage } from '../utils/storage';
import { useAppSelector } from '../utils/types';


export const useUserAuthentication = () => {
  const token = getFromLocalStorage(TOKEN);
  const {isAuthenticated} = useAppSelector(userSelector);
  const dispatch = useDispatch();

  const updateUserAuthentication = useCallback(
    (authenticated: boolean) => {
      dispatch(setIsAuthenticated(authenticated));
    },
    [dispatch]
  );

  useEffect(() => {
    if (token) {
      updateUserAuthentication(true);
    }
  }, [token,updateUserAuthentication]);

  return {
    isAuthenticated,
    updateUserAuthentication,
  };
};

