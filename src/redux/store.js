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
   import authReducer from './authSlice';

   
   const authPersistConfig = {
     key: 'auth',
     storage,
     whitelist: ['token', 'isLoggedIn'],
   };
 
   const persistedUserReducer = persistReducer(authPersistConfig, authReducer);
   
   export const store = configureStore({
     reducer: {
       auth: persistedUserReducer,
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
   