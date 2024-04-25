
import { useState,useEffect } from 'react';

import { getFromLocalStorage } from '../utils/storage';
import { createTesonetClient } from '../config/tesonetClient';
import { Server } from '../utils/types';
import { TOKEN } from '../utils/constants';

export const useFetchServers = () => {
  const [servers, setServers] = useState<Server[]>([]);
  const [serversLoaded, setServersLoaded] = useState(false);
  const token = getFromLocalStorage(TOKEN);
  const { getServers } = createTesonetClient();

  useEffect(() => {
    const fetchServers = async () => {
      try {
        if (token) {
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
  }, [token,getServers]);

  const handleSetServer = (servers:Server[]) => {
    setServers(servers)
  }

  return {
    servers,
    serversLoaded,
    handleSetServer,
  };
};

