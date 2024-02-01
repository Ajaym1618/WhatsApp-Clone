import React from "react";
import { useRef, useEffect } from "react";
import "./chat.css";
import dp1 from "../../../assets/volleyball.jpg";

const Chat = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input when the component mounts
    inputRef.current.focus();
  }, []);
  return (
    <div className="w-[380px] bg-[#2c2c2c] h-[100vh] ">
      <div className="w-full flex justify-between items-center px-[30px] py-[20px]  text-white">
        <h1 className="text-[22px] font-semibold">Chats</h1>
        <span className="w-[100px] flex justify-between">
          <i
            class="fa-regular fa-pen-to-square cursor-pointer p-3 hover:bg-[#3a3a3a] hover:rounded-[5px]"
            title="New Chat"
          ></i>
          <i
            class="fa-solid fa-filter cursor-pointer p-3 hover:bg-[#3a3a3a] hover:rounded-[5px]"
            title="Filter chats by"
          ></i>
        </span>
      </div>
      <div className="w-full flex justify-center relative">
        <i class="fa-solid fa-magnifying-glass text-[10px] text-white absolute left-8 top-[13px]"></i>
        <input
          type="text"
          className="w-[88%] bg-black h-[32px] text-white pl-7 p-4 rounded border-b-[2px] outline-none focus:border-[#25c761]"
          ref={inputRef}
          placeholder="Search or start a new chat"
        />
      </div>

      <div className=" w-full h-[82vh] overflow-scroll">
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-1 hover:bg-[#515151] hover:rounded-[10px]">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-4">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>
        <div className="w-full h-[80px] flex items-center px-6 mt-2 mb-2 ">
          <img src={dp1} className="w-[50px] h-[50px] rounded-[45px]" />
          <div className="w-full px-3">
            <div className="w-full flex justify-between"><span className="text-white font-semibold">Mine</span><span className="text-[#afafaf]">date</span></div>
            <div className="text-[#afafaf]">content</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chat;
