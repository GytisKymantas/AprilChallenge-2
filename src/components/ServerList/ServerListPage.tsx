import React from 'react';
import { useFetchServers } from '../../hooks/useFetchServers';
import { useSortServers } from '../../hooks/useSortServers';
import { Loader } from '../Loader/Loader';
import { ServersList } from './sections/ServersList';

export const ServerListPage = () => {
  const { serversLoaded, servers, handleSetServer } = useFetchServers();
  const { sortConfig, handleSortAction } = useSortServers(
    servers,
    handleSetServer
  );

  if (servers && servers.length === 0) {
    return <p>NO_SERVERS_MESSAGE</p>;
  }

  return (
    <>
      hello?
      {serversLoaded ? (
        <ServersList
          servers={servers}
          sortConfig={sortConfig}
          handleSortAction={handleSortAction}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};
