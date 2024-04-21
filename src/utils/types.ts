import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { z } from 'zod';
import rootReducer from '../store/reducers';
import { SortDirection } from './constants';

export type TLoginSchema = z.infer<typeof LoginSchema>;

export const LoginSchema = z.object({
  username: z.string().max(30, "Username can't exceed 30 characters"),
  password: z.string().max(20, 'Password must be atleast 10 characters'),
});

export type AppState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export type Server = {
  name: string;
  distance: string;
};

export type SortConfig = {
  [fieldName: string]: SortDirection;
}
