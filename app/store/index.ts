import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { baseApi } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authRedux from './auth';

const rootPersistConfig = {
  key: 'root',
  version: 1,
  blacklist: [baseApi.reducerPath],
  storage: AsyncStorage,
};

const reducers = combineReducers({
  auth: authRedux.default,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(baseApi.middleware);
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
