import React from "react";

const AccepctTask = () => {
  return (
    <div className="min-w-[300px] h-full bg-blue-50 px-4 py-5 rounded shadow shrink-0 w-[300px] text-black overflow-auto scrollbar-hide flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-2 pb-5 text-sm font-semibold">
          <span className="bg-red-500 text-white px-2 py-1 rounded-lg">
            High
          </span>
          <span className="text-gray-500">2025-07-16</span>
        </div>
        <h1 className="text-xl font-semibold mt-2 mb-1">Design Login Page</h1>
        <p className="text-gray-700 mt-3 text-sm">
          Create a responsive login form using Tailwind CSS.
        </p>
      </div>
      <div className="flex gap-2 mt-5">
        <button className="bg-blue-500 text-white px-3 py-1 rounded w-full">
          Accepted
        </button>
      </div>
    </div>
  );
};

export default AccepctTask;
