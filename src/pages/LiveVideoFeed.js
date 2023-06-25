import React, { useState } from "react";
import camera1 from "../assets/1.jpg";
import camera2 from "../assets/2.jpg";
import camera3 from "../assets/3.jpg";
import camera4 from "../assets/4.jpeg";
import camera5 from "../assets/5.gif";

const LiveVideoFeed = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-8 ml-4">
        <h3 className="text-xl font-medium text-[#1F8F9F]">LIVE VIDEO FEED</h3>
      </div>
      <div className="mt-8 flex items-center ml-9">
        <p className="text-xl font-medium text-black text-2xl" style={{ fontWeight: "400" }}>
          Real Time Video Feed
        </p>
        <p className="text-4xl font-medium text-black ml-auto">⌵</p>
      </div>
      <hr className="my-4 border-gray-300 ml-9" />
      <div className="flex items-center ml-9">
        <p className="text-xl font-medium text-black text-2xl" style={{ fontWeight: "400" }}>
          Camera Selection
        </p>
        <p className="text-4xl font-medium text-black ml-auto">⌵</p>
      </div>
      <hr className="my-4 border-gray-300 ml-9" />
      <div className="flex items-center ml-9">
        <p className="text-xl font-medium text-black text-2xl" style={{ fontWeight: "400" }}>
          People Detection
        </p>
        <p className="text-4xl font-medium text-black ml-auto">⌵</p>
      </div>
      <hr className="my-4 border-gray-300 ml-9" />
      <div className="flex flex-col md:flex-row justify-between mt-6 ml-9">
        <div className="mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search employees"
            className="w-full md:w-54 px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <div>
            <label htmlFor="filter" className="font-medium">
              Filter By:
            </label>
            <select
              id="filter"
              className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="all">Location</option>
              <option value="engineering">Age</option>
              <option value="design">Name</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ml-9">
        <div className="w-full h-[120px] rounded-lg bg-[#d9d9d9]">
          <img src={camera3} alt="Camera 1" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="w-full h-[120px] rounded-lg bg-[#d9d9d9]">
          <img src={camera4} alt="Camera 2" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="w-full h-[120px] rounded-lg bg-[#d9d9d9]">
          <img src={camera3} alt="Camera 3" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="w-full h-[120px] rounded-lg bg-[#d9d9d9]">
          <img src={camera4} alt="Camera 4" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default LiveVideoFeed;
