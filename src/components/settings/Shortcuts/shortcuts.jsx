import React from "react";

const Shortcuts = () => {
  const shortcutData = [
    { action: "New chat", keys: ["Ctrl", "N"] },
    { action: "Close chat", keys: ["Ctrl", "W"] },
    { action: "Close chat", keys: ["Ctrl", "F4"] },
    { action: "Close Application", keys: ["Alt", "F4"] },
    { action: "New Group", keys: ["Ctrl", "Shift", "N"] },
    { action: "Search", keys: ["Ctrl", "F"] },
    { action: "Search in chat", keys: ["Ctrl", "Shift", "F"] },
    { action: "Profile", keys: ["Ctrl", "P"] },
    { action: "Mute chat", keys: ["Ctrl", "Shift", "M"] },
    { action: "Toggle read", keys: ["Ctrl", "Shift", "U"] },
    { action: "Emoji panel", keys: ["Ctrl", "Shift", "E"] },
    { action: "GIF panel", keys: ["Ctrl", "Shift", "G"] },
    { action: "Previous chat", keys: ["Ctrl", "Shift", "["] },
    { action: "Next chat", keys: ["Ctrl", "Shift", "]"] },
    { action: "Previous chat", keys: ["Ctrl", "Shift", "Tab"] },
    { action: "Next chat", keys: ["Ctrl", "Tab"] },
    { action: "Open chat", keys: ["Ctrl", "1..9"] },
    { action: "Edit last message", keys: ["Ctrl", "↑"] },
    { action: "Decrease text size", keys: ["Ctrl", "-"] },
    { action: "Increase text size", keys: ["Ctrl", "+"] },
    { action: "Reset text size", keys: ["Ctrl", "0"] },
  ];

  return (
    <div className="w-full h-full p-4 pl-6 text-white overflow-scroll">
      <h1 className="text-[20px] font-semibold mb-6">Shortcuts</h1>
      <h2 className="text-[18px] mb-4">Keyboard shortcuts</h2>

      {shortcutData.map((shortcut, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-[14px] mb-3"
        >
          <div>{shortcut.action}</div>
          <div className="flex gap-2">
            {shortcut.keys.map((key, keyIndex) => (
              <span
                key={keyIndex}
                className="py-[2px] px-2 border-[1px] border-[#595959] rounded-[3px]"
              >
                {key}
              </span>
            ))}
          </div>
        </div>
      ))}
      <h1 className="text-[18px] mb-2">Quick emojis</h1>
      <p className="text-[13px] mb-4">
        When typing a message, use the colon symbol to quickly search for and
        access Emojis in-line.
      </p>

      <div className="flex justify-between items-center text-[14px] mb-3">
        <div> Cat</div>
        <div className="flex gap-2">
          <span className="py-[2px] px-2 border-[1px] border-[#595959] rounded-sm">
            :
          </span>
          <span className="py-[2px] px-2 text-[18px]">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
          <span className="py-[2px] px-2 border-[1px] border-[#595959] rounded-sm">
            :cat
          </span>
          <span className="py-[2px] px-2 text-[18px]">
            <i class="fa-solid fa-equals"></i>
          </span>
          <span className="py-[2px] px-2 border-[1px] border-[#595959] rounded-sm">
            &#128570;
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center text-[14px] mb-3">
        <div>Hat</div>
        <div className="flex gap-2">
          <span className="py-[2px] px-2 border-[1px] border-[#595959] rounded-sm">
            :
          </span>
          <span className="py-[2px] px-2 text-[18px]">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
          <span className="py-[2px] px-2 border-[1px] border-[#595959] rounded-sm">
            :hat
          </span>
          <span className="py-[2px] px-2 text-[18px]">
            <i class="fa-solid fa-equals"></i>
          </span>
          <span className="py-[2px] px-2 border-[1px] border-[#595959] rounded-sm">
          🎩
          </span>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
