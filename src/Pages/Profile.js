import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { CheckJWT } from "../redux/actions/googleAuth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { setAuthenticated } from "../redux/slices/googleAuthSlice";
import ProfileUser from "../Components/svg/ProfileUser";
import Logout from "../Components/svg/Logout";
import ProfileDetsils from "../Components/profileComponents/ProfileDetsils";
import BWallet from "../Components/profileComponents/BWallet";
import Purchage from "../Components/svg/Purchage";
import Footer from "../Components/Footer";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  const [menuClick, setMenuClick] = useState("profile");
  const cookieValue = Cookies.get("snitchJWTToken");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.googleAuthState
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookieValue) {
      if (!isAuthenticated) {
        dispatch(CheckJWT(cookieValue));
      }
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, user, dispatch, navigate]);
  function getUser() {
    dispatch(CheckJWT(cookieValue));
  }
  const handleLogoutSuccess = () => {
    dispatch(setAuthenticated(false));
    Cookies.remove("snitchJWTToken");
    navigate("/");
  };

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let newGreeting;

    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      newGreeting = "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 20) {
      newGreeting = "Good Evening";
    } else {
      newGreeting = "Good Night";
    }

    setGreeting(newGreeting);

    // Update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [user]);

  const formatTime = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // Use 12-hour format with AM/PM
    };
    return date.toLocaleTimeString([], options);
  };

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  // Calculate angles for clock hands
  const hourAngle = (((hour % 12) + minute / 60) * 360) / 12;
  const minuteAngle = ((minute + second / 60) * 360) / 60;
  const secondAngle = (second * 360) / 60;

  return (
    <div id="outer-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="page-wrap">
        <TopHeader />
        <Header toggleMenu={toggleMenu} />
        {!isLoading && (
          <Fragment>
            <div className="page-container page-padding mb-3">
              <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap items-center gap-x-6 justify-around sm:justify-around md:justify-center mt-4 sm:mt-6 md:mt-10">
                <div className=" relative border shadow-lg w-full sm:w-full md:w-[35%] lg:w-1/4 rounded-3xl">
                  <div className=" flex gap-2 text-center py-3 px-2 shadow-lg border-b rounded-xl rounded-b-3xl shadow-slate-300 items-center gap-x-5">
                    <div>
                      <div className=" w-14 h-14 rounded-full relative bg-gray-200 grid items-center text-base sm:text-lg md:text-xl font-semibold">
                        <span>
                          {user?.Given_Name?.charAt(0)}
                          {user?.Family_Name?.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className=" flex gap-y-1 flex-col">
                      <span>{user?.Name}</span>
                      <span className=" uppercase text-xs flex gap-x-3 items-center justify-start">
                        <div className="clock-container">
                          <svg width="25" height="25">
                            <circle
                              cx="12.5"
                              cy="12.5"
                              r="11.5"
                              stroke="black"
                              strokeWidth="1"
                              fill="white"
                            />
                            <line
                              x1="12.5"
                              y1="12.5"
                              x2="12.5"
                              y2="7.5"
                              stroke="black"
                              strokeWidth="1"
                              transform={`rotate(${hourAngle}, 12.5, 12.5)`}
                            />
                            <line
                              x1="12.5"
                              y1="12.5"
                              x2="12.5"
                              y2="5"
                              stroke="black"
                              strokeWidth="0.5"
                              transform={`rotate(${minuteAngle}, 12.5, 12.5)`}
                            />
                            <line
                              x1="12.5"
                              y1="12.5"
                              x2="12.5"
                              y2="3"
                              stroke="red"
                              strokeWidth="0.5"
                              transform={`rotate(${secondAngle}, 12.5, 12.5)`}
                            />
                            <circle cx="12.5" cy="12.5" r="0.75" fill="black" />
                          </svg>
                        </div>
                        <div>{formatTime(time)}</div>
                      </span>
                    </div>
                  </div>

                  <div className="py-3">
                    <div
                      className={`flex gap-3 ${
                        menuClick == "profile" && "font-medium"
                      } px-4 sm:px-6 md:px-10 group  cursor-pointer relative profile-lt-border border-b-2 py-4`}
                      onClick={() => {
                        setMenuClick("profile");
                        getUser();
                      }}
                    >
                      <span className="w-[20px] h-[20px]">
                        <ProfileUser />
                      </span>
                      <span className="group-hover:font-medium pb">
                        My Profile
                      </span>
                    </div>
                    <div
                      className={`flex gap-3 ${
                        menuClick == "mywallet" && "font-medium"
                      } px-4 sm:px-6 md:px-10 group  cursor-pointer relative profile-lt-border border-b-2 py-4`}
                      onClick={() => setMenuClick("mywallet")}
                    >
                      <span className="w-[24px] h-[24px]">
                        <Purchage />
                      </span>
                      <span className="group-hover:font-medium pb">
                        My Wallet
                      </span>
                    </div>

                    <div
                      className=" flex gap-3 px-4 sm:px-6 md:px-10 group  cursor-pointer relative profile-lt-border pt-4"
                      onClick={handleLogoutSuccess}
                    >
                      <span className="w-[20px] h-[20px]">
                        <Logout />
                      </span>
                      <span className=" group-hover:font-medium">Logout</span>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 ">
                  <h3 className=" py-4 text-lg sm:text-xl md:text-2xl text-center">
                    {greeting}! <span>{user?.Given_Name}</span>
                  </h3>
                  <div className="border shadow-lg rounded-3xl px-3 sm:px-4 py-4 sm:py-5">
                    {menuClick == "profile" && <ProfileDetsils user={user} />}
                    {menuClick == "mywallet" && <BWallet />}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
        <Footer />
      </div>
    </div>
  );
};
