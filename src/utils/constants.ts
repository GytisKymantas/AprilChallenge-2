export const isWindowExists = typeof window !== 'undefined';
export const TOKEN = 'token';

// export const TOKENS_ENDPOINT = '/tokens';
// export const SERVERS_ENDPOINT = '/servers';

// export const LOGGED_IN_MESSAGE = 'Hey, you are logged in, go see some servers';
// export const NO_SERVERS_MESSAGE = 'There are not servers';
// export const LOGGED_OUT_MESSAGE = 'Login to see servers';

// export const ASCENDING = 'ascending';
// export const DESCENDING = 'descending';

// export const NAME = 'name';
// export const DISTANCE = 'distance';

export enum ROUTES {
  HOME = '/',
  LOGIN = '/login',
  SERVERS = '/servers',
}

export const enum StorageKeys {
  username = 'username',
  password = 'password',
}

export enum Endpoints {
  TOKENS = '/tokens',
  SERVERS = '/servers',
}

export enum Messages {
  LOGGED_IN_MESSAGE = 'Hey, you are logged in, go see some servers',
  NO_SERVERS_MESSAGE = 'There are not servers',
  LOGGED_OUT_MESSAGE = 'Login to see servers',
}

export enum SortDirection {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export enum ServerProps {
  NAME = 'name',
  DISTANCE = 'distance',
}

export const enum Credentials {
  AdminUsername = 'tesonet',
  PasswordUsername = 'partyanimal',
}

export const initialSortConfig = {
  name: null,
  distance: null,
};
export type SortConfigKeys = keyof typeof initialSortConfig;
