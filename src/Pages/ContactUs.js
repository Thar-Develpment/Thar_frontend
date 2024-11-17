import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <h3 className="common_header pt-3">CONTACT US</h3>
            <div className=" py-3 sm:py-5 md:py-6 text-base sm:text-lg text-center">
              <div>
                You can chat with us on our{" "}
                <a href="/" className="line_hover relative">
                  Instagram page
                </a>{" "}
                by direct messaging
              </div>
              <div className=" pt-3 sm:pt-4 md:pt-6">
                Call us:{" "}
                <a href="tel:+9121212" className="line_hover relative">
                  +91 1212121212
                </a>
              </div>
              <div className=" pt-3 sm:pt-4 md:pt-6">
                E-mail ID:{" "}
                <a
                  href="mailto:skygroups15@gmail.com"
                  className="line_hover relative"
                >
                  support@mail.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
