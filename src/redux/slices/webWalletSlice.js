import { createSlice } from "@reduxjs/toolkit";

const webWalletSlice = createSlice({
  name: "webWallet",
  initialState: {
    isLoading: false,
    error: null,
    value: null,
  },
  reducers: {
    createWebWalletRequest(state, action) {
      return {
        isLoading: true,
      };
    },
    createWebWalletSuccess(state, action) {
      return {
        isLoading: false,
        value: action.payload.value,
      };
    },
    createWebWalletFail(state, action) {
      return {
        isLoading: false,
        error: action.payload,
      };
    },
    removeWalletError(state, action) {
      state.error = null;
    },
    removeWalletValue(state, action) {
      state.value = null;
    },
  },
});

const { actions, reducer } = webWalletSlice;

export const {
  createWebWalletRequest,
  createWebWalletSuccess,
  createWebWalletFail,
  removeWalletError,
  removeWalletValue,
} = actions;

export default reducer;
