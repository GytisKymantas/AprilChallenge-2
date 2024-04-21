import { useState } from 'react';


import { initialSortConfig, ASCENDING, DESCENDING, SortConfigKeys } from '../utils/constants';
import { sortServers } from '../utils/functions';

export const useSortServers = (servers:any, setServers:any, initialConfig = initialSortConfig) => {
  const [sortConfig, setSortConfig] = useState(initialConfig);

  const handleSortAction = (fieldName:SortConfigKeys) => {
    const oldSortDirection = sortConfig[fieldName];
    const newSortDirection = [ASCENDING, null].includes(oldSortDirection) ? DESCENDING : ASCENDING;
    const newSortConfig = {
      ...initialSortConfig,
      [fieldName]: newSortDirection,
    } as any;
    const sortedServers = sortServers(newSortConfig, fieldName, servers);

    setServers(sortedServers);
    setSortConfig(newSortConfig);
  };

  return {
    sortConfig,
    handleSortAction,
  };
};

