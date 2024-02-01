import React from "react";

const Help = () => {
  return (
    <div className="w-full h-full text-white p-4 pl-6">
      <h1 className="text-[20px] mb-6">Help</h1>
      <h2 className="text-[18px] mb-1">WhatsApp for windows</h2>
      <h3 className="text-[14px] mb-4">Version 2.2401.3.0</h3>
      <div className="py-4 border-y-[1px] border-[#414141]">
        <h2 className="text-[18px] mb-2">Contact us</h2>
        <p className="text-[14px]">We'd like to know your thoughts about this app.</p>
        <a href="contact" className="text-[14px] text-[#1da961] underline">Contact us</a>
      </div>
      <div className="text-[14px] flex flex-col gap-2 py-4 border-b-[1px] border-[#414141] mb-4">
        <a href="help" className="text-[#1da961] underline">Help center</a>
        <a href="licenses" className="text-[#1da961] underline">Licenses</a>
        <a href="terms" className="text-[#1da961] underline">terms and Privacy Policy</a>
      </div>
      <span className="text-[14px]">2023 &#169; WhatsApp Inc.</span>
    </div>
  );
};

export default Help;
