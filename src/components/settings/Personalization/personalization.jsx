import React, { useState } from "react";

const Personalization = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div
      className="w-full h-full text-white p-4 pl-6 overflow-scroll"
      onClick={() => setTheme(!theme)}
    >
      <h1 className="text-[20px] font-semibold mb-6">Personalization</h1>
      <h2 className="text-[18px] mb-1">Theme</h2>
      <h3 className="text-[14px] mb-2">App color theme</h3>

      <div
        className="w-[70%] flex  items-center justify-between px-3 py-[5px] rounded-[5px] bg-[#414141] mb-4 relative cursor-pointer"
        onClick={() => setTheme(true)}
      >
        <span className="text-[14px]">
          <i class="fa-solid fa-palette pr-1"></i> System default
        </span>
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
        <div
          className={`w-[100%] bg-[#2c332f] p-2  flex-col gap-2 rounded-[5px] absolute top-0 left-0 ${
            theme === true ? "flex" : "hidden"
          } `}
        >
          <h2 className="bg-[#414141] hover:bg-[#414141] p-2 rounded-[5px] text-[14px] border-l-[3px] border-[#1daa61]">
            System default
          </h2>
          <h2 className="text-[15px] flex items-center px-2 py-2 hover:bg-[#414141] rounded-md cursor-pointer">
            <span className="material-icons text-[15px] pr-2">light_mode</span>
            Light
          </h2>
          <h2 className="text-[15px] flex items-center px-2 py-2 hover:bg-[#414141] rounded-md cursor-pointer">
            <span class="material-icons text-[15px] pr-2">mode_night</span>
            Dark
          </h2>
        </div>
      </div>
      <h2 className="text-[18px] mb-2">Chat wallpaper</h2>
      <div className="grid grid-cols-5 gap-3 mb-6">
        <div className="w-[45px] h-[45px] rounded-[5px] bg-[#343434] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-b from-[#57645e] to-[#474e4b] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-b from-[#465f53] to-[#3d4b44] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-b from-[#3f5b60] to-[#3a4a4d] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-b from-[#63616b] to-[#4e4d53] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-b from-[#6f5151] to-[#564344] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-b from-[#703742] to-[#55343b] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-b from-[#6f6250] to-[#554d42] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-b from-[#686658] to-[#504f47] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px] bg-gradient-to-b from-[#5d5d5d] to-[#494949] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-br from-[#326a33] to-[#2c3f43] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-br from-[#286b50] to-[#4c4152] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-br from-[#2e6d33] to-[#4f4632] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-br from-[#462b50] to-[#6c232b] hover:border-[3px] hover:border-white"></div>
        <div className="w-[45px] h-[45px] rounded-[5px]  bg-gradient-to-br from-orange-600 via-yellow-600 via-green-600 to-[#810081] hover:border-[3px] hover:border-white"></div>
      </div>
      <span className="block text-[15px] mb-4">
        <input
          type="checkbox"
          className="mr-2 accent-[green] transform scale-150"
        />
        WhatsApp doodle
      </span>
      <button className="px-10 py-[5px] rounded-[5px] bg-[#414141] mb-5">
        Reset
      </button>
      <h2 className="text-[18px] mb-2">Text Size</h2>
      <div className="flex w-[200px] justify-between items-center px-4 py-[5px] rounded-[5px] bg-[#414141] mb-2">
        <span>110%</span>
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
      </div>
      <p className="text-[13px]">
        Use Ctrl +/- to increase or decrease your text size
      </p>
    </div>
  );
};

export default Personalization;
