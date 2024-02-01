import React from "react";

const Storage = () => {
  return (
    <div className="w-full h-full text-white p-4 pl-6">
      <h1 className="text-[20px] font-semibold mb-6">Storage</h1>
      <h2 className="text-[18px] mb-2">Automatic downloads</h2>
      <p className="text-[14px] mb-2">
        Choose which media will be automatically downloaded from the messages
        you receive
      </p>
      <div>
        <div>
          <input type="checkbox" className="mr-2 tranform scale-150 bg-black accent-[green]"/>Photos
        </div>
        <div>
          <input type="checkbox" className="mr-2 tranform scale-150 bg-[black] accent-[green]"/>Audio
        </div>
        <div>
          <input type="checkbox" className="mr-2 tranform scale-150 bg-[black] accent-[green]"/>Videos
        </div>
        <div>
          <input type="checkbox" className="mr-2 tranform scale-150 bg-[black] accent-[green]"/>Documents
        </div>
      </div>
    </div>
  );
};

export default Storage;