import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userSelector } from '../store/user/selectors';
import { setIsAuthenticated } from '../store/user/slice';
import { TOKEN } from '../utils/constants';
import { getFromLocalStorage } from '../utils/storage';
import { useAppSelector } from '../utils/types';


const useUserAuthentication = () => {
  const token = getFromLocalStorage(TOKEN);
  const {isAuthenticated} = useAppSelector(userSelector);
  const dispatch = useDispatch();

  const updateUserAuthentication = (authenticated: boolean) => {
    dispatch(setIsAuthenticated(authenticated));
  };

  useEffect(() => {
    if (token) {
      updateUserAuthentication(true);
    }
  }, []);

  return {
    isAuthenticated,
    updateUserAuthentication,
  };
};

export default useUserAuthentication;
