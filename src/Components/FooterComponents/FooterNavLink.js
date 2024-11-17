import React from "react";
import { Link } from "react-router-dom";

const FooterNavLink = () => {
  return (
    <div className=" flex flex-col">
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/faq" className="pt-3">
        FAQ
      </Link>
      <Link to="/blogs" className="pt-3">
        Blogs
      </Link>
      <Link to="/terms-and-conditions" className="pt-3">
        Terms & Conditions
      </Link>
    </div>
  );
};

export default FooterNavLink;
