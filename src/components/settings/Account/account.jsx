import React from "react";
import "./account.css";
const Account = () => {
  return (
    <div className="w-full h-full overflow-scroll p-4 pl-6 text-white">
      <h1 className="text-[20px] font-semibold mb-5">Account</h1>
      <h2 className="text-[18px]">Privacy</h2>
      <span className="text-[14px] italic block mb-3">
        Managed on your phone
      </span>
      <div className="flex flex-col mb-2">
        <span className="text-[14px]">Last seen and online</span>
        <span className="text-[14px]">Everyone</span>
      </div>
      <div className="flex flex-col mb-2">
        <span className="text-[14px]">Profile photo</span>
        <span className="text-[14px]">Everyone</span>
      </div>
      <div className="flex flex-col mb-2">
        <span className="text-[14px]">About</span>
        <span className="text-[14px]">Everyone</span>
      </div>
      <div className="flex flex-col mb-2">
        <span className="text-[14px]">Add to groups</span>
        <span className="text-[14px]">Everyone</span>
      </div>
      <div className="flex flex-col mb-2">
        <span className="text-[14px]">Read receipts</span>
        <span className="text-[14px]">On</span>
      </div>
      <div className="text-[12px] mb-5 ">
        Read receipts are always sent for group chats
      </div>
      <div className="py-5  border-y-[1px] border-[#414141]">
        <h1 className="text-[18px] mb-1">Blocked contacts</h1>
        <p className="text-[14px] italic mb-3">Managed on your phone</p>
        <p>
          <i class="fa-solid fa-mobile-screen pr-1"></i> 0 blocked contacts
        </p>
      </div>
      <div>
        <h1 className="text-[18px] font-medium mb-2">Security</h1>
        <p className="text-[14px] mb-2">
          Messages and calls in end-to-end encrypted chats stay between you and
          the people you choose. Not even WhatsApp can read or listen to them.
          <a href="learn More" className=" text-[#1daa61] underline">
            Learn more
          </a>
        </p>
        <div>
          <span className="text-[14px] mb-2 block">
            Show security notifications on this computer
          </span>
          <span className="block my-3">
            <i class="fa-solid fa-toggle-off text-[20px] text-white pl-2 pr-3"></i>
            Off
          </span>
          <span className="block text-[12px]">
            Get notified when your security code changes for a contact's phone.
            If you have multiple devices, this setting must be enabled on each
            device where you want to get notifications.{" "}
            <a href="Learn More" className=" text-[#1daa61] underline">
              Learn more
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Account;
