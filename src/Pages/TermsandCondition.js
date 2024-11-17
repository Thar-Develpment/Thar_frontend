import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const TermsandCondition = () => {
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
            <h3 className="common_header pt-3">TERMS & CONDITIONS</h3>
            <div className=" py-4 sm:py-6 md:py-10  text-sm">
              <h3>INTRODUCTION AND OVERVIEW OF SNITCH:</h3>
              <div className="py-4 sm:py-6 md:py-10">
                This policy applies to all the SNITCH platforms (the “Site” or
                “Web Site” or “Mobile Application” or “App” or “Us” or “We” or
                "Social Media Platforms"), which is operated and owned by Snitch
                Apparels Pvt. Ltd., marketed and/or managed by Snitch Apparels
                Pvt. Ltd. It is SNITCH’s policy to comply with general laws for
                protecting user information and bank details shared for the
                purpose of availing SNITCH services. This regulates the
                processing of information relating to you and grants you various
                rights in respect of your personal data. Any Images, Data or
                Files Uploaded on the website must not be used without the
                consent of the authorized personnel of the brand. The Web Site
                contains links to other websites over which we have no control.
                SNITCH is not responsible for the privacy policies or practices
                of other web sites to which you choose to link from
                snitch.co.in. We encourage you to review the privacy policies of
                those other web sites so you can understand how they collect,
                use and share your information.
              </div>
              <h3>PRIVACY POLICY</h3>
              <div className="py-4 sm:py-6 md:py-10">
                This Privacy Policy is intended for all Users of snitch.co.in.
                SNITCH is dedicated to respecting and protecting the privacy of
                our Users. All information User provides, such as phone number,
                home address, current location, e-mail addresses or any
                additional personal information found on the site, will be used
                solely to support User relationship with SNITCH. SNITCH strives
                to develop innovative methods to serve Users even better. SNITCH
                is designed to operate efficiently while keeping user’s privacy
                in mind. This Privacy Policy outlines the types of personal
                information that SNITCH gathers from its users and takes steps
                to safeguard it. In order to provide a personalized browsing
                experience, SNITCH may collect information from you, which may
                include technical or other related information from the device
                used to access SNITCH platforms including without limitation to
                your current location. By registering or using or visiting
                SNITCH platforms, you explicitly accept, without limitation or
                qualification, the collection, use and transfer of the personal
                information provided by you in the manner described in the Terms
                & Conditions and Privacy Policy. Kindly read the Terms &
                Conditions and the Privacy Policy carefully as it affects your
                rights and liabilities under law. If you do not accept the Terms
                and Conditions and this Privacy Policy, PLEASE DO NOT USE SNITCH
                SERVICES.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TermsandCondition;
