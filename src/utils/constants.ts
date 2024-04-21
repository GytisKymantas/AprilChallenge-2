export const isWindowExists = typeof window !== 'undefined';
export const TOKEN = 'token';
export const TOKENS_ENDPOINT = '/tokens';
export const SERVERS_ENDPOINT = '/servers';
export const LOGGED_IN_MESSAGE = 'Hey, you are logged in, go see some servers';
export const NO_SERVERS_MESSAGE = 'There are not servers';
export const LOGGED_OUT_MESSAGE = 'Login to see servers';
export const ASCENDING = 'ascending';
export const DESCENDING = 'descending';
export const NAME = 'name';
export const DISTANCE = 'distance';

export const initialSortConfig = {
  name: null,
  distance: null,

}
export type SortConfigKeys = keyof typeof initialSortConfig;
