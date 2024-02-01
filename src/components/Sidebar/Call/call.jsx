import React from "react";
import "./call.css";
import dp1 from "../../../assets/volleyball.jpg";

const Call = () => {
  return (
    <div className="w-[380px] bg-[#2c2c2c] h-[100vh] ">
      <div className="w-full flex justify-between items-center px-[30px] py-[20px]  text-white">
        <h1 className="text-[22px] font-semibold">Calls</h1>
        <span className="relative">
          <i class="fa-solid fa-phone text-[16px]"></i>
          <i class="fa-solid fa-plus text-[10px] absolute left-2 bottom-3"></i>
        </span>
      </div>
      <div className="w-full flex justify-center relative">
        <i class="fa-solid fa-magnifying-glass text-[10px] text-white absolute left-8 top-[13px]"></i>
        <input
          type="text"
          className="w-[88%] bg-black h-[32px] text-white pl-7 p-4 rounded border-b-[2px] outline-none focus:border-[#25c761]"
          placeholder="Search or start a new call"
        />
      </div>

      <div className=" w-full h-[90vh] overflow-scroll">
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-1 hover:bg-[#515151] hover:rounded-[10px]">
          <div className="w-[60px] h-[50px] rounded-[25px] border-2 border-[#232323] flex justify-center items-center">
            <i class="fa-solid fa-link text-[#e2e2e2]"></i>
          </div>
          <div className="w-full px-4">
            <div className="w-full flex justify-between text-white font-semibold">Create call link</div>
            <div className="text-[#afafaf]">Share a link for your whatsApp call</div>
          </div>
        </div>

        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-1 hover:bg-[#515151] hover:rounded-[10px]">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-4">
            <div className="w-full flex justify-between">
              <span className="text-white font-semibold">Mine</span>
              <span className="text-[#afafaf]">date</span>
            </div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
