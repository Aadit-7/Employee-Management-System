import React from "react";

const NewTask = () => {
  return (
    <div className="min-w-[300px] h-full bg-green-50 px-4 py-5 rounded shadow shrink-0 w-[300px] text-black overflow-auto scrollbar-hide flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-2 pb-5 text-sm font-semibold">
          <span className="bg-yellow-200 text-black px-2 py-1 rounded-lg">
            Medium
          </span>
          <span className="text-gray-500">2025-07-15</span>
        </div>
        <h1 className="text-xl font-semibold mt-2 mb-1">Build Navbar</h1>
        <p className="text-gray-700 mt-3 text-sm">
          Implement a responsive and sticky navbar component.
        </p>
      </div>
      <div className="flex gap-2 mt-5">
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          Accept
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Reject
        </button>
      </div>
    </div>
  );
};

export default NewTask;
