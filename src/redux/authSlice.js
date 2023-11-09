import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
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

export const { setToken, unsetToken } = authSlice.actions;
// export default authSlice.reducer;