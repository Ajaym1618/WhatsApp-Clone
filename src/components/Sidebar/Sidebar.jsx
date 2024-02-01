import React, { useState } from "react";
import Chat from "../Sidebar/Chats/chat";
import Call from "../Sidebar/Call/call";
import Status from "../Sidebar/Status/status";
import Star from "../Sidebar/Star/star";
import Archive from "../Sidebar/Archive/archive";
import Setting from "../settings/settings";
import './Sidebar.css'

const Sidebar = () => {
  const [val, setVal] = useState("chat");
  console.log(val);
  const [settings, setSettings] = useState(false);
  console.log(settings);
  const handleVal = (mes) => {
    setVal(mes);
  };
  return (
    <div className="flex overflow-hidden relative">
      <div className="w-12 h-[94vh] flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <i
            className={`fa-regular fa-comment-dots mt-2 text-[17px] text-white cursor-pointer p-[10px] hover:bg-[#2d2d2d] hover:rounded-[5px] ${
              val === "chat"
                ? "bg-[#2d2d2d] rounded-[5px] border-l-[3px] border-[#25c861]"
                : ""
            }`}
            title="Chat"
            onClick={() => handleVal("chat")}
          ></i>
          <i
            className={`fa-solid fa-phone mt-2 p-[10px] text-[17px] text-white cursor-pointer hover:bg-[#2d2d2d] hover:rounded-[5px] ${
              val === "call"
                ? "bg-[#2d2d2d] rounded-[5px] border-l-[3px] border-[#25c861]"
                : ""
            }`}
            title="call"
            onClick={() => handleVal("call")}
          ></i>

          <i
            className={`fa fa-bullseye mt-2 p-[10px] text-[17px] text-white cursor-pointer hover:bg-[#2d2d2d] hover:rounded-[5px] ${
              val === "status"
                ? "bg-[#2d2d2d] rounded-[5px] border-l-[3px] border-[#25c861]"
                : ""
            }`}
            title="Status"
            onClick={() => handleVal("status")}
          ></i>
        </div>
        <div className="flex flex-col items-center">
          <i
            className={`fa-regular fa-star mt-2 p-[10px] text-white cursor-pointer hover:bg-[#2d2d2d] hover:rounded-[5px] ${
              val === "star"
                ? "bg-[#2d2d2d] rounded-[5px] border-l-[3px] border-[#25c861]"
                : ""
            }`}
            title="Stared messages"
            onClick={() => handleVal("star")}
          ></i>

          <i
            className={`fa-solid fa-box-archive mt-2 p-[10px] text-[16px] text-white cursor-pointer hover:bg-[#2d2d2d] hover:rounded-[5px] ${
              val === "archive"
                ? "bg-[#2d2d2d] rounded-[5px] border-l-[3px] border-[#25c861]"
                : ""
            }`}
            title="Archived chats"
            onClick={() => handleVal("archive")}
          ></i>

          <i
            className={`fa-solid fa-gear mt-4 p-[8px] text-[16px] text-white cursor-pointer hover:bg-[#2d2d2d] hover:rounded-[5px]
            ${
              val === "setting" && settings === true
                ? "bg-[#2d2d2d] rounded-[5px] border-l-[3px] border-[#25c861]"
                : ""
            }`}
            title="Settings"
            onClick={() => setSettings(!settings)}
          ></i>
          <div className="w-[25px] h-[25px] bg-[#424242] flex justify-center items-center rounded-[15px] mt-4 mb-4">
            <i className="fa-solid fa-user text-[#7f7f7f]"></i>
          </div>
        </div>
      </div>
      <div
        className="w-[380px] h-[94vh] bg-cyan-300 rounded-tl-[8px] overflow-hidden "
        
      >
        {val === "chat" ? <Chat /> : null}
        {val === "call" ? <Call /> : null}
        {val === "status" ? <Status /> : null}
        {val === "star" ? <Star /> : null}
        {val === "archive" ? <Archive /> : null}
      </div>
      {/* <div className="w-[70%] h-auto flex flex-col items-center bg-[#2c2c2c] z-10 border-l-[1px] border-[#222222]">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <i class="fa-brands fa-whatsapp text-[70px] text-[#484848]"></i>
          <h1 className="text-white text-[20px] mt-4 mb-2">
            WhatsApp for Windows
          </h1>
          <h2 className="text-[16x] text-[#9e9e9e]">
            Send and receive messages without keeping your phone online.
          </h2>
          <h2 className="text-[16x] text-[#9e9e9e]">
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </h2>
        </div>

        <div className="mb-[45px] flex justify-center items-center text-[#707070]">
          <i className="fa-solid fa-lock text-[12px] pr-2"></i>End-to-end encrypted
        </div>
      </div> */}

      <div className="w-[70%] h-[94vh] chatBgImg" onClick={() => setSettings(false)}>
        
      </div>

      <div
        className={`transition-all w-[32%] duration-500 ease-in-out absolute  ${
          settings === true
            ? "bottom-0 opacity-100"
            : "bottom-[-550px] opacity-0"
        }`}
      >
        <Setting />
      </div>
    </div>
  );
};

export default Sidebar;
