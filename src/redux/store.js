import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './services/baseApi';
import {authSlice} from './authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};
const userPersistConfig = {
  key: 'user',
  storage,
  // whitelist: ['token', 'isLoggedIn'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);
const persistedUserReducer = persistReducer(userPersistConfig, authSlice.reducer);


export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});
export const persistor = persistStore(store);
