import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './tyoes';


const INITIAL_STATE: UserState = {
 isAuthenticated:false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setIsAuthenticated: (state: UserState, action: PayloadAction<UserState['isAuthenticated']>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const {setIsAuthenticated} =
  userSlice.actions;
