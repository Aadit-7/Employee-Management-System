import React from "react";

const TaskListCards = ({ data }) => {
  return (
    <div className="px-20 mt-5">
      <div className="task-list-cards grid grid-cols-4 gap-4">
        <div className="task-card bg-blue-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{data.taskNumbers.newTask}</h2>
          <p className="text-gray-600 text-xl mt-3">New Tasks</p>
        </div>
        <div className="task-card bg-yellow-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{data.taskNumbers.active}</h2>
          <p className="text-gray-600 text-xl mt-3">Active Tasks </p>
        </div>
        <div className="task-card bg-green-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">
            {data.taskNumbers.completed}
          </h2>
          <p className="text-gray-600 text-xl mt-3">Completed Tasks </p>
        </div>
        <div className="task-card bg-red-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{data.taskNumbers.failed}</h2>
          <p className="text-gray-600 text-xl mt-3">Failed Tasks </p>
        </div>
      </div>
    </div>
  );
};

export default TaskListCards;
