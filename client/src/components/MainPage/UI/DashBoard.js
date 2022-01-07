import React from "react";
import NewCarForm from "../CarForm/NewCarForm";

const DashBoard = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <NewCarForm />
          <div className="px-4 py-6 sm:px-0"></div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
};

export default DashBoard;
