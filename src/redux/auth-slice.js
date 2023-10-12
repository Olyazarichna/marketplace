import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    unsetToken: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setToken, unsetToken } = auth.actions;
export default auth.reducer;
