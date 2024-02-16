// app/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white fixed">
      {/* Sidebar content here */}
      <nav>
        <ul>
          {/* Add your navigation links here */}
          <li className="p-4 hover:bg-gray-700">Home</li>
          <li className="p-4 hover:bg-gray-700">About</li>
          <li className="p-4 hover:bg-gray-700">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
