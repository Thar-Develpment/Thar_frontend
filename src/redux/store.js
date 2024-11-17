import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import googleAuuthReducer from "./slices/googleAuthSlice";
import webWalletReducer from "./slices/webWalletSlice";

const reducer = combineReducers({
  googleAuthState: googleAuuthReducer,
  webWalletState: webWalletReducer,
});
const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
