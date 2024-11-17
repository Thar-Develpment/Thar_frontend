import axios from "axios";
import {
  googleAuthRequest,
  googleAuthSuccess,
  googleAuthFail,
  JWTCheckRequest,
  JWTCheckSuccess,
  JWTCheckFail,
} from "../slices/googleAuthSlice";
import Cookies from "js-cookie";
import {
  createWebWalletFail,
  createWebWalletRequest,
  createWebWalletSuccess,
} from "../slices/webWalletSlice";

const cookieValue = Cookies.get("snitchJWTToken");

export const GoogleAuth = (userData) => async (dispatch) => {
  try {
    dispatch(googleAuthRequest());
    const { data } = await axios.post(
      "http://localhost:8001/api/v1/login",
      userData
    );
    dispatch(googleAuthSuccess(data));
    if (data.value) {
      Cookies.set("snitchJWTToken", data.value);
    }
  } catch (error) {
    dispatch(googleAuthFail(error.response.data.message));
  }
};

export const CheckJWT = (jwtToken) => async (dispatch) => {
  if (jwtToken !== null) {
    try {
      dispatch(JWTCheckRequest());

      const { data } = await axios.get(
        "http://localhost:8001/api/v1/getuserinfo",
        {
          headers: {
            "User-Token": jwtToken, //the token is a variable which holds the token
          },
        }
      );
      dispatch(JWTCheckSuccess(data));
    } catch (error) {
      Cookies.remove("snitchJWTToken");
      dispatch(JWTCheckFail(error.response.data.message));
    }
  }
};

export const createWebWallet = (details, jwtToken) => async (dispatch) => {
  let checkuserLogin = commonUserLoginCheck(jwtToken);

  if (checkuserLogin) {
    try {
      dispatch(createWebWalletRequest());

      const { data } = await axios.post(
        "http://localhost:8001/api/v1/createweb3wallet",
        details,
        {
          headers: {
            "User-Token": jwtToken, //the token is a variable which holds the token
          },
        }
      );
      dispatch(createWebWalletSuccess(data));
    } catch (error) {
      dispatch(createWebWalletFail(error.response.data.message));
    }
  }
};

export async function commonUserLoginCheck(jwtToken) {
  if (jwtToken !== null) {
    try {
      const { data } = await axios.get(
        "http://localhost:8001/api/v1/getuserinfo",
        {
          headers: {
            "User-Token": jwtToken, //the token is a variable which holds the token
          },
        }
      );
      if (data.value) {
        return true;
      }
    } catch (error) {
      Cookies.remove("snitchJWTToken");
      return false;
    }
  } else {
    return false;
  }
}
