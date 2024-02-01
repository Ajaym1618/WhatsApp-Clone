import React, { useState } from "react";
import General from "./General/general";
import Account from "./Account/account";
import ChatSetting from "./ChatSetting/chatSetting";
import Notifications from "./Notifications/notification";
import Storage from "./Storage/storage";
import Shortcuts from "./Shortcuts/shortcuts";
import Help from "./Help/help";
import Personalization from "./Personalization/personalization";
import Profile from "./Profile/profile";
const Setting = () => {
  const [setting, setSetting] = useState("general");
  const handleSettingValue = (msg) => {
    setSetting(msg);
  };
  return (
    <div className="w-[100%] h-[75vh] flex rounded-md bg-white overflow-hidden">
      <div className="w-[35%] h-full flex flex-col justify-between bg-[#2c2c2c] text-[#ffffff] border-r-[1px] border-[#282828] p-2 text-[14px]">
        <div className="w-[100%] flex flex-col">
          <span
            className={`px-3 py-2 mt-[6px] pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "general"
                ? "border-l-[3px] border-[#25c761] bg-[#373737]"
                : ""
            }`}
            onClick={() => handleSettingValue("general")}
          >
            <i className="fa-solid fa-display  pr-4"></i>General
          </span>
          <span
            className={`px-3 py-2 mt-[6px] pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "account"
                ? "border-l-[3px] border-[#25c761]  bg-[#373737]"
                : ""
            }`}
            onClick={() => handleSettingValue("account")}
          >
            <i className="fa-solid fa-key  pr-4"></i>Account
          </span>
          <span
            className={`px-3 py-2 mt-[6px] pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "chatSetting"
                ? "border-l-[3px] border-[#25c761] bg-[#373737]"
                : ""
            }`}
            onClick={() => handleSettingValue("chatSetting")}
          >
            <i className="fa-regular fa-comments  pr-3"></i>Chats
          </span>
          <span
            className={`px-3 py-2 mt-[6px] pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "notification"
                ? "border-l-[3px] border-[#25c761]  bg-[#373737]"
                : ""
            } `}
            onClick={() => handleSettingValue("notification")}
          >
            <i className="fa-regular fa-bell pr-4"></i>Notifications
          </span>
          <span
            className={`px-2 py-2 mt-[6px] pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "personalization"
                ? "border-l-[3px] border-[#25c761]  bg-[#373737]"
                : ""
            }`}
            onClick={() => handleSettingValue("personalization")}
          >
            <i className="fa-solid fa-paintbrush pr-3"></i>Personalization
          </span>
          <span
            className={`px-3 py-2 mt-[6px] pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "storage"
                ? "border-l-[3px] border-[#25c761]  bg-[#373737]"
                : ""
            }`}
            onClick={() => handleSettingValue("storage")}
          >
            <i className="fa-solid fa-server pr-3"></i>Storage
          </span>
          <span
            className={`px-3 py-2 mt-[6px] pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "shortcuts"
                ? "border-l-[3px] border-[#25c761]  bg-[#373737]"
                : ""
            }`}
            onClick={() => handleSettingValue("shortcuts")}
          >
            <i className="fa-regular fa-keyboard pr-3"></i>Shortcuts
          </span>
          <span
            className={`px-3 py-2 mt-[6px] pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "help"
                ? "border-l-[3px] border-[#25c761]  bg-[#373737]"
                : ""
            }`}
            onClick={() => handleSettingValue("help")}
          >
            <i className="fa-solid fa-circle-info pr-3"></i>Help
          </span>
        </div>
        <div className="w-full flex">
          <span
            className={`w-full px-3 py-2 pr-4 hover:bg-[#373737] rounded-md cursor-pointer ${
              setting === "profile"
                ? "border-l-[3px] border-[#25c761] bg-[#373737]"
                : ""
            }`}
            onClick={() => handleSettingValue("profile")}
          >
            <i className="fa-regular fa-user pr-3"></i>Profile
          </span>
        </div>
      </div>
      <div className="w-[68%] h-full bg-[#303030] ">
        {setting === "general" ? <General /> : null}
        {setting === "account" ? <Account /> : null}
        {setting === "chatSetting" ? <ChatSetting /> : null}
        {setting === "notification" ? <Notifications /> : null}
        {setting === "personalization" ? <Personalization /> : null}
        {setting === "storage" ? <Storage /> : null}
        {setting === "shortcuts" ? <Shortcuts /> : null}
        {setting === "help" ? <Help /> : null}
        {setting === "profile" ? <Profile /> : null}
      </div>
    </div>
  );
};

export default Setting;
