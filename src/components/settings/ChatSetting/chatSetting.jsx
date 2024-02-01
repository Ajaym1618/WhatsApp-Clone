import React from "react";

const ChatSetting = () => {
  return (
    <div className="w-full h-full text-white p-4 pl-6">
      <h1 className="text-[20px] font-semibold mb-5">Chats</h1>
      <h2 className="text-[18px] mb-2">Chat history</h2>
      <h3 className="flex items-center mb-6">
        <i class="fa-solid fa-laptop-file text-[14px] pr-2"></i>Synced with your phone
      </h3>
      <button className="px-3 py-1 bg-[#414141] rounded-[4px] text-[14px] mb-2">Archive all chats</button>
      <p className="text-[15px] mb-4">You will still receive messages from archived chats</p>
      <button className="px-3 py-1 bg-[#414141] rounded-[4px] text-[14px] mb-2 text-[#f4949e]">Clear all messages</button>
      <p className="text-[14px] mb-5">Delete all messages from chats and groups</p>
      <button className="px-3 py-1 bg-[#414141] rounded-[4px] text-[14px] mb-2 text-[#f4949e]">Delete all chats</button>
      <p className="text-[14px]">Delete all messages and clear the chats from your history</p>
    </div>
  );
};

export default ChatSetting;