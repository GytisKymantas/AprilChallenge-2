import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { z } from 'zod';
import rootReducer from '../store/reducers';

export type TLoginSchema = z.infer<typeof LoginSchema>;

export const LoginSchema = z.object({
  username: z.string().max(30, "Username can't exceed 30 characters"),
  password: z.string().max(20, 'Password must be atleast 10 characters'),
});

export const enum Credentials {
  AdminUsername = 'tesonet',
  PasswordUsername = 'partyanimal',
}

export type AppState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export enum ROUTES {
  HOME = '/',
  LOGIN = '/login',
  SERVERS = '/servers',
}

export const enum StorageKeys {
  username = 'username',
  password = 'password',
}

export enum ENDPOINTS {
  TOKENS = '/tokens',
  SERVERS = '/servers',
}

export type Server = {
  name: string;
  distance: string;
}
