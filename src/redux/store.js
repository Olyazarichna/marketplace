import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../redux/auth-slice';

export const store = configureStore({ reducer: { authReducer } });
