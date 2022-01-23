import React from "react";

const ButtonSubmit = (props) => {
  return (
    <button
      type={props.type || "submit"}
      className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
    >
      {props.children}
    </button>
  );
};

export default ButtonSubmit;
