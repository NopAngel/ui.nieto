import React from "react";

function Input() {
  return (
    <div className="w-[280px] flex justify-center bg-gradient-to-t from-indigo-900 to-purple-500 rounded-lg p-[3px]">
      <div>
        <input
          type="text"
          className="p-[4px] bg-black rounded-lg outline-none text-white"
          placeholder="Introduce un Texto."
        />
      </div>
    </div>
  );
}

export default Input;
