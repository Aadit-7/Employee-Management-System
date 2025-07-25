import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="min-w-[300px] h-full bg-pink-50 px-4 py-5 rounded shadow shrink-0 w-[300px] text-black overflow-auto scrollbar-hide flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-2 pb-5 text-sm font-semibold">
          <span className="bg-red-500 text-white px-2 py-1 rounded-lg">
            {data.priority}
          </span>
          <span className="text-gray-500">{data.date}</span>
        </div>
        <h1 className="text-xl font-semibold mt-2 mb-1">{data.title}</h1>
        <p className="text-gray-700 mt-3 text-sm">{data.description}</p>
      </div>
      <div className="flex gap-2 mt-5">
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
