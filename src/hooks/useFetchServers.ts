
import { useState,useEffect } from 'react';

import { getFromLocalStorage } from '../utils/storage';
import { TOKEN } from '../utils/constants';
import { createTesonetClient } from '../config/tesonetClient';

export const useFetchServers = () => {
  const [servers, setServers] = useState([]);
  const [serversLoaded, setServersLoaded] = useState(false);
  const token = getFromLocalStorage('key');
  const { getServers } = createTesonetClient();
  console.log(token,' is it true yo?')

  useEffect(() => {
    console.log('fetched')
    const fetchServers = async () => {
      try {
        if (token) {
          console.log(token,'is token')
          const serversData = await getServers(token);
          setServers(serversData);
          setServersLoaded(true);
        } 
      } catch (e) {
        setServers([]);
        setServersLoaded(false);
      }
    };

    fetchServers();

    // Cleanup function if needed
    // return () => { /* cleanup code */ };
  }, []);

  return {
    servers,
    serversLoaded,
    setServers,
  };
};

