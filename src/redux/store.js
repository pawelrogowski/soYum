import { autoBatchEnhancer, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  addRecipeFormReducer,
  authReducer,
  categoryPageReducer,
  currentRecipeReducer,
  globalReducer,
  homePageReducer,
  loadingReducer,
  modalReducer,
  searchReducer,
  userReducer,
} from "./slices";

const generatePersistConfig = (key) => ({
  key,
  storage,
});

const configureMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

const persistedAuthReducer = persistReducer(generatePersistConfig("auth"), authReducer);
const persistedGlobalReducer = persistReducer(generatePersistConfig("global"), globalReducer);
const persistedUserReducer = persistReducer(generatePersistConfig("user"), userReducer);

export const store = configureStore({
  devTools: {
    maxAge: 100,
    trace: true,
  },
  reducer: {
    auth: persistedAuthReducer,
    global: persistedGlobalReducer,
    modal: modalReducer,
    search: searchReducer,
    loading: loadingReducer,
    addRecipeForm: addRecipeFormReducer,
    currentRecipe: currentRecipeReducer,
    user: persistedUserReducer,
    homePage: homePageReducer,
    categoryPage: categoryPageReducer,
  },
  enhancers: (existingEnhancers) => {
    return existingEnhancers.concat(autoBatchEnhancer());
  },
  middleware: configureMiddleware,
});

export const persistor = persistStore(store);
