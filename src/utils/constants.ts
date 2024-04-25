export const isWindowExists = typeof window !== 'undefined';
export const TOKEN = 'token';

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
  NO_SERVERS_MESSAGE = 'There are no servers found',
  LOGGED_OUT_MESSAGE = 'Please click on log in button',
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

export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  primary: '#8b1983',
  secondary: '#1ca67a',
} as const;
