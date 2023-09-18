import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import globalReducer from "./slices/globalSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const generatePersistConfig = (key) => ({
  key,
  storage,
});

const configureMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

const persistedAuthReducer = persistReducer(
  generatePersistConfig("auth"),
  authReducer
);

const persistedGlobalReducer = persistReducer(
  generatePersistConfig("global"),
  globalReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    global: persistedGlobalReducer,
  },
  middleware: configureMiddleware,
});

export const persistor = persistStore(store);
