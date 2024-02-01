import React, { useState } from "react";

const General = () => {
  const [lang, setLang] = useState(false)
  const data = [
    "Afrikaans",
    "Albanian",
    "Amharic",
    "Arabic",
    "Azerbaijani",
    "Basque",
    "Belarusian",
    "Bengali",
    "Bosnian",
    "Bulgarian",
    "Burmese",
    "Catalan",
    "Cebuano",
    "Chichewa",
    "Chinese (Simplified and Traditional)",
    "Corsican",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Esperanto",
    "Estonian",
    "Filipino",
    "Finnish",
    "French",
    "Frisian",
    "Galician",
    "Georgian",
    "German",
    "Greek",
    "Gujarati",
    "Haitian Creole",
    "Hausa",
    "Hawaiian",
    "Hebrew",
    "Hindi",
    "Hmong",
    "Hungarian",
    "Icelandic",
    "Igbo",
    "Indonesian",
    "Irish",
    "Italian",
    "Japanese",
    "Javanese",
    "Kannada",
    "Kazakh",
    "Khmer",
    "Kinyarwanda",
    "Korean",
    "Kurdish",
    "Kyrgyz",
    "Lao",
    "Latin",
    "Latvian",
    "Lithuanian",
    "Luxembourgish",
    "Macedonian",
    "Malagasy",
    "Malay",
    "Malayalam",
    "Maltese",
    "Maori",
    "Marathi",
    "Mongolian",
    "Nepali",
    "Norwegian",
    "Pashto",
    "Persian",
    "Polish",
    "Portuguese",
    "Punjabi",
    "Romanian",
    "Russian",
    "Samoan",
    "Scots Gaelic",
    "Serbian",
    "Sesotho",
    "Shona",
    "Sindhi",
    "Sinhala",
    "Slovak",
    "Slovenian",
    "Somali",
    "Spanish",
    "Sundanese",
    "Swahili",
    "Swedish",
    "Tajik",
    "Tamil",
    "Telugu",
    "Thai",
    "Turkish",
    "Ukrainian",
    "Urdu",
    "Uzbek",
    "Vietnamese",
    "Welsh",
    "Xhosa",
    "Yiddish",
    "Yoruba",
    "Zulu",
  ];
  return (
    <div className="w-full h-full text-white p-4 pl-6 " onClick={()=>setLang(!lang)}>
      <h1 className="text-[20px] font-semibold mb-5">General</h1>
      <h3 className="text-[18px] mb-4">Login</h3>
      <div className="flex justify-between mb-6">
        <span className="text-[14px]">Start WhatsApp at login</span>
        <span className="text-[14px] flex justify-center items-center gap-3">
          Off <i class="fa-solid fa-toggle-off text-[20px] text-[#505050]"></i>
        </span>
      </div>
      <h2 className="text-[18px] mb-2">Language</h2>
      <div className="w-[70%] flex  items-center justify-between px-3 py-[5px] rounded-[5px] bg-[#414141] mb-4 relative cursor-pointer" onClick={()=> setLang(!lang)}>
        <span className="text-[14px]">
          <i class="fa-solid fa-globe pr-1"></i> System default
        </span>
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
        <div className={`w-[120%] ${lang === true ? "h-[60vh]": "hidden"} bg-[#2d2e2d] p-2 flex flex-col gap-2 rounded-[5px] overflow-scroll absolute top-[-180px] left-0 transition-all duration-1000 ease-in-out`}>
          <h2 className="bg-[#414141] hover:bg-[#414141] p-2 rounded-[5px] text-[14px] border-l-[3px] border-[#1daa61]">
            System default
          </h2>
          {data.map((val, key) => (
            <h2
              key={key}
              id={key}
              className="hover:bg-[#414141] p-2 rounded-[5px] text-[14px]"
            >
              {val}
            </h2>
          ))}
        </div>
      </div>

      <h2 className="text-[18px] mb-1">Typing</h2>
      <p className="text-[12px] mb-4">
        Change typing settings for autocorrect and misspelled highlight from{" "}
        <a href="window" className="text-[#1daa61] underline">
          Windows Settings
        </a>
      </p>

      <div className="w-full flex border-b-[2px] border-[#3c3c3c] pb-6">
        <span className="w-[62%]">
          <h3 className="text-[15px] mb-1">Replace text with emoji</h3>
          <p className="text-[12px]">
            Emoji will replace specific text as you type.
          </p>
          <a href="list" className="text-[12px] text-[#1daa61] underline">
            See list of text
          </a>
        </span>
        <span className="w-[38%] flex justify-center items-center">
          {/* <i class="fa-solid fa-face-laugh-beam text-[#f9ce2f] pr-3"></i> */}
          &#128513;
          <i class="fa-solid fa-toggle-on pl-4 text-[20px] text-[#1f9e5c]"></i>
        </span>
      </div>
      <button className="mt-6 text-[14px] py-1 px-[10px] rounded-md bg-[#414141] mb-2">
        Log out
      </button>
      <p className="text-[11px]">
        Chat history on this computer will be cleared when you log out.
      </p>
    </div>
  );
};

export default General;
