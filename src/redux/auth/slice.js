import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { firstName: null, email: null, lastNme: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    unsetToken: state => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setToken, unsetToken } = auth.actions;
export default auth.reducer;
