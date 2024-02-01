import React from "react";

const Notifications = () => {
  return (
    <div className="w-full h-full p-4 pl-6 text-white overflow-scroll">
      <h1 className="text-[20px] font-semibold mb-8">Notifications</h1>
      <div className="flex w-full mb-4">
        <span className="w-[72%]">
          <h2 className="text-[14px]">When WhatsApp is closed</h2>
          <p className="text-[12px]">
            Continue to show notifications when WhatsApp is not open
          </p>
        </span>
        <span className="w-[30%] flex items-center pl-6">
          On
          <i class="fa-solid fa-toggle-on pl-3 text-[20px] text-[#1f9e5c]"></i>
        </span>
      </div>
      <div className="py-7 border-y-[2px] border-[#414141]">
        <div className="mb-6 flex justify-between">
          <span className="text-[14px]">Messages</span>
          <span>
            On
            <i class="fa-solid fa-toggle-on pl-4 text-[20px] text-[#1f9e5c]"></i>
          </span>
        </div>
        <div className="mb-6 flex justify-between">
          <span className="text-[14px]">Reactions</span>
          <span>
            On
            <i class="fa-solid fa-toggle-on pl-4 text-[20px] text-[#1f9e5c]"></i>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[14px]">Calls</span>
          <span>
            On
            <i class="fa-solid fa-toggle-on pl-4 text-[20px] text-[#1f9e5c]"></i>
          </span>
        </div>
      </div>
      <div className="border-b-[2px] border-[#414141] pb-4">
        <div className="w-full flex mb-2">
          <span className="w-[73%]">
            <h3 className="text-[14px] mt-5">Text preview</h3>
            <p className="text-[12px]">
              Show message preview text inside new message notifications
            </p>
          </span>
          <span className="w-[30%] mt-5 flex items-center pl-6">
            On
            <i class="fa-solid fa-toggle-on pl-4 text-[20px] text-[#1f9e5c]"></i>
          </span>
        </div>
        <div className="w-full flex mb-2">
          <span className="w-[73%]">
            <h3 className="text-[14px]">Media preview</h3>
            <p className="text-[12px]">
              Show message preview images inside new message notifications
            </p>
          </span>
          <span className="w-[30%] mt-5 flex items-center pl-6">
            Off
            <i class="fa-solid fa-toggle-off pl-4 text-[20px] text-white"></i>
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-[18px] mt-5">Notification tones</h1>
        <h2 className="text-[14px] mt-4 mb-1">Messages</h2>
        <span className="flex items-center gap-2 py-2">
          <button className="">
            <i class="fa-regular fa-circle-play text-[24px]"></i>
          </button>
          <select name="" id="" className="text-black w-[150px]">
            <option value="default" >
              <i class="fa-solid fa-music" selected></i>Default
            </option>
          </select>
        </span>
        <h2 className="text-[14px]">Groups</h2>
        <span className="flex items-center gap-2 py-2">
          <button className="">
            <i class="fa-regular fa-circle-play text-[24px]"></i>
          </button>
          <select name="" id="" className="text-black w-[150px]">
            <option value="default" >
              <i class="fa-solid fa-music" selected></i>Default
            </option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Notifications;
