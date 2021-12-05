import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div>
        <h1 className="text-6xl text-gray-300 mb-16">
          Not sure where to go?&nbsp;Perfect.
        </h1>
        <button className="bg-brand py-3 px-8 rounded-full text-white font-medium ml-80">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
