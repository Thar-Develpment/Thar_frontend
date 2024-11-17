import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { CheckJWT, GoogleAuth } from "../redux/actions/googleAuth";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Footer from "../Components/Footer";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isData, setIsData] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.googleAuthState);
  const navigate = useNavigate();
  const cookieValue = Cookies.get("snitchJWTToken");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    if (cookieValue) {
      dispatch(CheckJWT(cookieValue));
      console.log(user);
      if (user === null || user === undefined) {
        dispatch(GoogleAuth(isData));
      } else {
        dispatch(CheckJWT(cookieValue));
        navigate("/profile");
      }
    } else {
      dispatch(GoogleAuth(isData));
    }
  }, [isOpen, isLoggedIn, isData, cookieValue, user, dispatch, navigate]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onSuccess = (res) => {
    setIsLoggedIn(true);
    const userData = {
      id: res.profileObj.googleId,
      email: res.profileObj.email,
      verified_email: true,
      picture: res.profileObj.imageUrl,
      family_Name: res.profileObj.familyName,
      given_Name: res.profileObj.givenName,
      name: res.profileObj.name,
      locale: "en-GB",
    };
    setIsData(userData);
  };

  const onFailure = (res) => {
    console.log(res);
    setIsLoggedIn(false);
  };

  return (
    <div id="outer-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="page-wrap">
        <TopHeader />
        <Header toggleMenu={toggleMenu} />

        <div className=" max-w-[450px] py-5 px-2 sm:px-3 md:px-4 mx-auto mb-10 sm:mb-12 md:mb-14">
          <h4 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center font-[300]">
            Login
          </h4>

          <div className=" mt-5 sm:mt-7 md:mt-8 text-center">
            <span className=" text-lg">Create account</span>

            <div className=" flex mt-4 justify-center">
              <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
