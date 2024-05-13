import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './states/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Create a persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // You can specify "auth.token", "auth.isLoggedIn", etc., if needed
};

// Combine reducers if you have more than one
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here when needed
});

// Apply the persistReducer with the config to the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
