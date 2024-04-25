import { useState } from 'react';


import { initialSortConfig, SortConfigKeys, SortDirection } from '../utils/constants';
import { sortServers } from '../utils/functions';
import { Server } from '../utils/types';


export const useSortServers = (servers:Server[], setServers:(servers: Server[]) => void, initialConfig = initialSortConfig) => {
  const [sortConfig, setSortConfig] = useState(initialConfig);

  const handleSortAction = (fieldName:SortConfigKeys) => {
    const oldSortDirection = sortConfig[fieldName];
    const newSortDirection = [SortDirection.ASCENDING, null].includes(oldSortDirection) ? SortDirection.DESCENDING : SortDirection.ASCENDING;
    const newSortConfig = {
      ...initialSortConfig,
      [fieldName]: newSortDirection,
    };
    const sortedServers = sortServers(newSortConfig, fieldName, servers);

    setServers(sortedServers);
    setSortConfig(newSortConfig);
  };

  return {
    sortConfig,
    handleSortAction,
  };
};

