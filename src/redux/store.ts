import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from "redux-thunk";
import CONSTENTS from "../utils/constents";

// all reducers
import userReducer from './slices/userSlice';
import { ReduxTypes } from "../@types/types";

const reducers = combineReducers({
  user: userReducer,
});
const persistConfig = {
  key: `${CONSTENTS.SITE_ID}`,
  storage,
  whitelist: ['user'],
  blacklist: ['']
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>

export default store;