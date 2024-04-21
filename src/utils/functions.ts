import { SortDirection } from "./constants";
import { Server, SortConfig } from "./types";

export const sortServers = <K extends keyof Server>(
  sortConfig: SortConfig, 
  fieldName: K, 
  servers: Server[]
): Server[] => {
  return servers.sort((a, b) => {
    if (a[fieldName] < b[fieldName]) {
      return sortConfig[fieldName] === SortDirection.ASCENDING ? -1 : 1;
    }
  
    if (a[fieldName] > b[fieldName]) {
      return sortConfig[fieldName] === SortDirection.ASCENDING ? 1 : -1;
    }
  
    return 0;
  });
};
