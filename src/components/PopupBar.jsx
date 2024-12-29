import React, { useState } from "react";

const PopupBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 md:hidden">
      <div className="flex justify-between items-center">
        <button className="text-indigo-500" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
        <div className="space-x-4">
          <button className="text-gray-700">Home</button>
          <button className="text-gray-700">Profile</button>
          <button className="text-gray-700">Contests</button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 space-y-2">
          <button className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md">
            Detail
          </button>
          <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-md">
            Toggle
          </button>
          <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-md">
            Export
          </button>
        </div>
      )}
    </div>
  );
};

export default PopupBar;
