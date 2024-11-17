import React from "react";
import ImageGridComponents from "./ImageGridComponents";

const CommonImageGrid = () => {
  return (
    <div className="py-4 sm:py-5 lg:py-6">
      <div className=" grid common_image_grid_col">
        <ImageGridComponents />
        <ImageGridComponents />
        <ImageGridComponents />
        <ImageGridComponents />
        <ImageGridComponents />
        <ImageGridComponents />
        <ImageGridComponents />
        <ImageGridComponents />
      </div>
      <div className="pt-4 sm:pt-5 md;pt-6 text-center overflow-hidden">
        <span className=" uppercase view_all_btn text-white inline-block view_all_hover cursor-pointer">
          View All
        </span>
      </div>
    </div>
  );
};

export default CommonImageGrid;
