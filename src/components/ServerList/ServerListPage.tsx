import { useFetchServers } from '../../hooks/useFetchServers';
import { useSortServers } from '../../hooks/useSortServers';
import { NO_SERVERS_MESSAGE } from '../../utils/constants';
import { Loader } from '../Loader/Loader';
import { ServersList } from './sections/ServersList';

export const ServerListPage = () => {
  const { serversLoaded, servers, setServers } = useFetchServers();
  const { sortConfig, handleSortAction } = useSortServers(servers, setServers);

  console.log(servers, 'servers');

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
