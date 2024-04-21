import { ASCENDING } from "./constants";
import { Server } from "./types";

export type SortConfig = {
  [fieldName: string]: 'ASCENDING' | 'DESCENDING';
}

export const sortServers = <K extends keyof Server>(
  sortConfig: SortConfig, 
  fieldName: K, 
  servers: Server[]
): Server[] => {
  return servers.sort((a, b) => {
    if (a[fieldName] < b[fieldName]) {
      return sortConfig[fieldName] === 'ASCENDING' ? -1 : 1;
    }
  
    if (a[fieldName] > b[fieldName]) {
      return sortConfig[fieldName] === 'ASCENDING' ? 1 : -1;
    }
  
    return 0;
  });
};
