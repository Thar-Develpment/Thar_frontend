import { createSlice } from "@reduxjs/toolkit";

const googleAuthSlice = createSlice({
  name: "googleAuth",
  initialState: {
    token: null, // You can initialize this with your user data
    isAuthenticated: false,
    isLoading: false,
    error: null,
    user: null,
  },
  reducers: {
    googleAuthRequest(state, action) {
      return {
        isLoading: true,
        isAuthenticated: false,
      };
    },
    googleAuthSuccess(state, action) {
      return {
        isLoading: false,
        isAuthenticated: true,
        token: action.payload.value,
      };
    },
    googleAuthFail(state, action) {
      return {
        isLoading: false,
        error: action.payload,
      };
    },

    JWTCheckRequest(state, action) {
      return {
        isLoading: true,
        isAuthenticated: false,
      };
    },
    JWTCheckSuccess(state, action) {
      return {
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.value,
      };
    },
    JWTCheckFail(state, action) {
      return {
        isLoading: false,
        error: action.payload,
      };
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

const { actions, reducer } = googleAuthSlice;

export const {
  googleAuthRequest,
  googleAuthSuccess,
  googleAuthFail,
  JWTCheckRequest,
  JWTCheckSuccess,
  JWTCheckFail,
  setAuthenticated,
} = actions;

export default reducer;
