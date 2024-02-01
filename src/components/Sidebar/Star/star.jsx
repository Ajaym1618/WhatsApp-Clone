import React from "react";
import "./star.css";

const Star = () => {
  return (
    <div className="w-[380px] bg-[#2c2c2c] h-[100vh] ">
      <div className="w-full flex justify-between items-center px-[30px] py-[20px]  text-white">
        <h1 className="text-[22px] font-semibold">Starred messages</h1>
      </div>
      <div className="w-full flex justify-center relative">
        <i class="fa-solid fa-magnifying-glass text-[10px] text-white absolute left-8 top-[13px]"></i>
        <input
          type="text"
          className="w-[88%] bg-black h-[32px] text-white pl-7 p-4 rounded border-b-[2px] outline-none focus:border-[#25c761]"
          placeholder="Search"
        />
      </div>
      <div className="w-full h-[80vh] flex justify-center items-center text-[#cdcdcd] text-[14px]">
        No results
      </div>
    </div>
  );
};

export default Star;
