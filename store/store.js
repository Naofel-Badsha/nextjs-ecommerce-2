import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import localStorage from "redux-persist/es/storage";
import { authReducer } from "./reducer/authReducer";

const rootReducer = combineReducers({
  // Add your reducers here
    authStore: authReducer,
});

const persistConfig = {
  key: "root",
  storage: localStorage, // Use localStorage for persistence
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Disable serializable check for redux-persist
  }),
}); 

export const persistor = persistStore(store);