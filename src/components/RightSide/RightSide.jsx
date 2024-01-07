import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="flex flex-col w-[95%] justify-evenly xl:justify-start xl:mt-[3rem] md:w-[100%] md:mt-0">
      {/* flex flex-col w-[95%] justify-evenly */}
      <div className="md:flex flex-col items-center">
        <h3 className="ml-2 font-bold text-[1.2em] xl:p-4">Updates</h3>
        <Updates />
      </div>
      <div className="md:flex flex-col items-center">
        <h3 className="font-bold text-[1.2em] xl:mt-10">Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;