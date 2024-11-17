import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import UserIcon from "./svg/UserIcon";
import SearchIcon from "./svg/SearchIcon";
import Heart from "./svg/Heart";
import CameraIcon from "./svg/CameraIcon";
import Purchage from "./svg/Purchage";
import BurgerIcon from "./svg/BurgerIcon";

const Header = ({ toggleMenu }) => {
  return (
    <div className="bg-white py-[10px] sm:py-[10px] md:py-[15px] lg:py-[20px]">
      <div className="page-container page-padding">
        <div className="flex items-center justify-between">
          <div className="w-[33.33%]">
            <div
              onClick={toggleMenu}
              className=" cursor-pointer  w-[25px] h-[20px] sm:w-[25px] sm:h-[20px] md:h-[25px] md:w-[25px] lg:w-[25px] lg:h-[20px] "
            >
              <BurgerIcon />
            </div>
          </div>
          <Link to="/" className="w-[33.33%]">
            <img
              src={logo}
              alt="logo"
              className="w-[70px] sm:w-[100px] md:w-[100px] mx-auto"
            />
          </Link>
          <div className="w-[33.33%] flex items-center gap-x-1 sm:gap-x-2 md:gap-x-3 justify-end">
            <Link
              to="/login"
              className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]  items-center hidden sm:flex"
            >
              <UserIcon />
            </Link>
            <Link
              to="/"
              className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] flex items-center"
            >
              <SearchIcon />
            </Link>
            <Link
              to="/"
              className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] flex items-center"
            >
              <Heart />
            </Link>
            <Link
              to="/"
              className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] flex items-center"
            >
              <CameraIcon />
            </Link>
            <Link
              to="/"
              className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px] flex items-center"
            >
              <Purchage />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
