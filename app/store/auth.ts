import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  user: unknown;
  token: string | null;
};

export const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
  },
});

const { actions, reducer } = authSlice;
export const { login, logout } = actions;

export default reducer;
