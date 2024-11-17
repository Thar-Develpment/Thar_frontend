import React, { useRef, useState } from "react";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";
const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(!activeIndex);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="outer-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="page-wrap">
        <TopHeader />
        <Header toggleMenu={toggleMenu} />
        <div className="pb-2 sm:pb-3 my-3 sm:my-6 md:my-8 ">
          <div className="page-third-container page-padding">
            <h3 className="common_header pt-3">FAQS</h3>
            <div className=" py-3 sm:py-5 md:py-6 text-base sm:text-lg">
              <h3 className="common_header pt-3 sm:pt-6 md:pt-8 text-left">
                GENERAL QUERIES
              </h3>
              <div className="pt-5 sm:pt-6 md:pt-8">
                <div className="mb-2">
                  <button
                    className="w-full p-2 text-left flex items-center"
                    onClick={() => toggleAccordion()}
                  >
                    <div className="text-gray-600 border rounded-full">
                      <MdKeyboardArrowDown
                        size={25}
                        className={`${
                          activeIndex ? "rotate-180" : ""
                        } transition-all duration-300`}
                      />
                    </div>
                    <span className=" pl-3 text-base">
                      IS CASH ON DELIVERY (COD) AVAILABLE?
                    </span>
                  </button>
                  <div
                    className={`${
                      activeIndex ? " block" : "hidden"
                    } bg-white p-2 transition-all duration-500]`}
                  >
                    <p className=" text-[14px]">
                      Yes! COD is available for orders below INR 5000 on all
                      serviceable pincodes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
