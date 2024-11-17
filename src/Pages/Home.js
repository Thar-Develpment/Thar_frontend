import React, { useEffect, useState } from "react";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import BannerCarousal from "../Components/BannerCarousal";
import NewlyAdded from "../Components/NewlyAdded";
import Showcase from "../Components/Showcase/Showcase";
import MostTrending from "../Components/MostTrending/MostTrending";
import AllCategories from "../Components/AllCategories";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { CheckJWT } from "../redux/actions/googleAuth";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  useEffect(() => {
    const cookieValue = Cookies.get("snitchJWTToken");
    if (cookieValue) {
      dispatch(CheckJWT(cookieValue));
    }
  }, [dispatch]);
  // Function to toggle the menu's open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="outer-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div id="page-wrap">
        <TopHeader />
        <Header toggleMenu={toggleMenu} />
        <BannerCarousal />
        <NewlyAdded />
        <Showcase />
        <MostTrending />
        <AllCategories />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
