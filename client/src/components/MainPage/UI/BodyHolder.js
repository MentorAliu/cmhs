import React from "react";

const BodyHolder = ({ children }) => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-52">{children}</div>
    </main>
  );
};

export default BodyHolder;
