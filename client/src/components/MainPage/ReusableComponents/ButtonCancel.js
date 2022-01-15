import React from "react";

const ButtonCancel = ({ children }) => {
  return (
    <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
      {children}
    </button>
  );
};

export default ButtonCancel;
