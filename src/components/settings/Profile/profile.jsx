import React, { useState, useRef } from "react";

const Profile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [hover, setHover] = useState(false);
  const [imgOption, setImgOption] = useState(false);
  const [newImageSelected, setNewImageSelected] = useState(false);
  const [name, setName] = useState("");
  const [orNot, setOrNot] = useState(false);
  const [about, setAbout] = useState("")
  const [getVal, setGetVal] = useState("")

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImageSelected(true);
      setImage(file);
    }
  };

  const handleImgOption = (eve) => {
    if (!eve) {
      setImgOption(false);
      if (!newImageSelected) {
        // If the user cancels file selection, reset the image state
        setImage("");
      }
    } else {
      setImgOption(true);
    }
    setNewImageSelected(false);
  };

  const handleRemoveImage = () => {
    setImage(""); // Clear the image state
    handleImgOption(false); // Close the image options
  };

  const handleChangeImage = () => {
    inputRef.current.click(); // Open the file dialog to change the image
    handleImgOption(false); // Close the image options
  };

  return (
    <div className="w-full h-full p-4 pl-6 text-white relative">
      <div
        className={`w-[100px] h-[100px] bg-[#414141] rounded-[50px] mt-2 overflow-hidden flex justify-center items-center relative  ${
          hover ? "hover" : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          className="hidden"
        />
        {!image && hover && (
          <i
            className="w-full h-full rounded-[50px] flex justify-center items-center fa-solid fa-pencil text-[14px] bg-[#00000066] absolute cursor-pointer"
            onClick={handleImageClick}
          ></i>
        )}
        {image && hover && (
          <i
            className="w-full h-full rounded-[50px] flex justify-center items-center fa-solid fa-pencil text-[14px] bg-[#00000066] absolute cursor-pointer"
            onClick={() => handleImgOption(true)}
          ></i>
        )}
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            className="w-[100px] h-[100px]"
            alt="Profile"
          />
        ) : (
          <i className="fa-regular fa-user text-[40px] text-[#7f7f7f]"></i>
        )}
      </div>
      {image && imgOption === true ? (
        <div className="w-[120px] bg-[#00000088] flex justify-center items-center p-2 flex-col text-[14px] gap-3 rounded-lg absolute top-6 left-36">
          <h2 className="cursor-pointer" onClick={handleRemoveImage}>
            Remove image
          </h2>
          <h2 className="cursor-pointer" onClick={() => console.log("View image clicked")}>
            View image
          </h2>
          <h2 className="cursor-pointer" onClick={handleChangeImage}>
            Change image
          </h2>
        </div>
      ) : null}

      <div className="mt-6 flex  flex justify-between mb-4" >
        {orNot === true ? (
          <div className="flex flex-col">
          <input type="text" className="w-[100%] h-[30px] outline-none px-2 font-semibold text-[20px] border-b-[1px] mt-[1.5px] bg-black border-[#1daa61] rounded-[5px] block" value={name} onChange={(e)=> setName(e.target.value)}/>
          <button className=" w-[70px] text-black rounded-[5px] ml-[210px] mt-[1px] bg-[#1daa61]" onClick={()=>setOrNot(false)}>Done</button>
          </div>
        ) : (
          <>
            {<span className="text-[20px] font-semibold">{name === "" ? "Name" : name}</span>}
            <span>
              <i
                className="fa-solid fa-pencil text-[12px] pr-3 cursor-pointer"
                onClick={() => setOrNot(true)}
              ></i>
            </span>
          </>
        )}
      </div>
      <div className="mb-6">
        <h1 className="text-[14px]">About</h1>
        <div className="w-full flex">
          <h4 className={`${about === true ? "w-full" : "w-[90%]"} flex flex-col`}>
            <input type="text" className={`${about === true ? "" : "hidden"} w-[100%] h-[30px] outline-none px-2 font-semibold text-[18px] border-b-[1px] mt-[1.5px] bg-black border-[#1daa61] rounded-[5px]`} />
            <button className={`w-[70px] text-black rounded-[5px] ml-[210px]  mt-[1px] bg-[#1daa61] ${about=== true ? "" : "hidden"}`} onClick={()=>setAbout(false)}>Done</button>
          </h4>
          <h4 className={`${about === true ? "w-0" : "w-[10%]"}`}>
            <i className={`fa-solid fa-pencil text-[12px] cursor-pointer ${about === true ? "hidden" : ""}`} onClick={()=>setAbout(true)}></i>
          </h4>
        </div>
      </div>
      <div>
        <h1 className="text-[14px]">Phone number</h1>
        <h4 className="text-[14px]">+91 9876543210</h4>
      </div>
    </div>
  );
};

export default Profile;
