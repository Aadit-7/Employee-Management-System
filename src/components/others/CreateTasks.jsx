import React from "react";

const CreateTasks = () => {
  return (
    <div className="p-8 bg">
      <form className="grid grid-cols-2 gap-8  bg-gradient-to-br from-blue-300 via-purple-300 to-pink-200 p-6 rounded border-1 shadow items-start">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="font-medium text-lg block mb-1" htmlFor="title">
              Task Title:
            </label>
            <input
              className="border-1 p-2 w-full rounded"
              type="text"
              id="title"
              required
            />
          </div>

          {/* Priority */}
          <div>
            <label
              className="font-medium text-lg block mb-1"
              htmlFor="priority"
            >
              Priority:
            </label>
            <select
              className="border-1 p-2 w-full rounded"
              id="priority"
              required
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="font-medium text-lg block mb-1" htmlFor="date">
              Due Date:
            </label>
            <input
              className="border-1 p-2 w-full rounded"
              type="date"
              id="date"
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full justify-between">
          <div className="flex-1">
            <label
              className="font-medium text-lg block mb-1"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              className="border-1 p-2 w-full h-48 rounded resize-none"
              id="description"
              required
            ></textarea>
          </div>

          <div className="mt-2">
            <button className="bg-blue-500 px-6 py-2 text-white rounded cursor-pointer hover:bg-blue-600">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTasks;
