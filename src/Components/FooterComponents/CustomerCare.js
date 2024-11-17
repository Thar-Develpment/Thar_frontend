import React from "react";

const CustomerCare = ({ this_class }) => {
  return (
    <div
      className={`flex flex-col   justify-center text-[12px] gap-x-2 ${this_class}`}
    >
      <span>Timings: 10 AM - 6:00 PM (Mon - Sat)</span>
      <span className="pt-1">
        <span>Call: </span>
        <a href="#" className="line_hover relative ml-1">
          +91 6378265256
        </a>
      </span>
      <span className="pt-4">
        E-mail:
        <a href="#" className="line_hover relative ml-1">
          test@gmail.com
        </a>
      </span>
    </div>
  );
};

export default CustomerCare;
