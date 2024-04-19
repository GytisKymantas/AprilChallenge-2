import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { z } from 'zod';
import rootReducer from '../store/reducers';

export type TLoginSchema = z.infer<typeof LoginSchema>;

export const LoginSchema = z.object({
  email: z.string().email().max(30, "Email can't exceed 30 characters"),
  password: z.string().max(20, 'Password must be atleast 10 characters'),
});

export const enum Credentials {
  AdminUsername = 'admin@gmail.com',
  PasswordUsername = 'admin123',
}

export type AppState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export enum ROUTES {
  HOME = '/',
  LOGIN = '/login',
  SERVERS = '/servers',
}

export const enum StorageKeys {
  email = 'email',
  password = 'password',
}
