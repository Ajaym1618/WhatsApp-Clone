import React from "react";
import "./status.css";
import dp1 from "../../../assets/volleyball.jpg";

const Status = () => {
  return (
    <div className="w-[380px] bg-[#2c2c2c] h-[100vh] ">
      <div className="w-full flex justify-between items-center px-[30px] py-[10px]  text-white">
        <h1 className="text-[22px] font-semibold">Status</h1>
      </div>
      <div className=" w-full h-[90vh]">
        <div className="w-full h-[80px] flex items-center px-6 mb-1 hover:bg-[#515151] hover:rounded-[10px]">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-4">
            <div className="w-full flex justify-between">
              <span className="text-white font-semibold">My Status</span>
            </div>
            <div className="text-[#afafaf]">No updates</div>
          </div>
        </div>
        <div className="text-[#afafaf] pl-6">Recent updates</div>
      </div>
    </div>
  );
};

export default Status;
