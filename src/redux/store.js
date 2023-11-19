import { autoBatchEnhancer, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import addRecipeFormReducer from "./slices/addRecipeFormSlice";
import authReducer from "./slices/authSlice";
import currentRecipeReducer from "./slices/currentRecipeSlice";
import globalReducer from "./slices/globalSlice";
import modalReducer from "./slices/modalSlice";

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

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    global: persistedGlobalReducer,
    modal: modalReducer,
    addRecipeForm: addRecipeFormReducer,
    currentRecipe: currentRecipeReducer,
  },
  enhancers: (existingEnhancers) => {
    return existingEnhancers.concat(autoBatchEnhancer());
  },
  middleware: configureMiddleware,
});

export const persistor = persistStore(store);
