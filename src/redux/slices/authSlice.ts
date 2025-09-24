import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState} from '../interface';
import { use } from 'react';

const initialState = {
  access_token: undefined,
  refresh_token: undefined,
  user: {},
  role: {},
  fcmToken: undefined,

} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | undefined>) {
      state.access_token = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string | undefined>) {
      state.refresh_token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  
    setRole(state, action) {
      state.role = action.payload;
    },
    setFcmToken(state, action: PayloadAction<string | undefined>) {
      state.fcmToken = action.payload;
    },
    resetAuthState() {
      return initialState;
    },
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  resetAuthState,
  setUser,
  setRole,
  setFcmToken,
} = authSlice.actions;

export default authSlice.reducer;
