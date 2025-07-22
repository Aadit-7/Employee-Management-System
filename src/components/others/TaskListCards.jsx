import React from "react";

const TaskListCards = () => {
  return (
    <div className="px-20 mt-5">
      <div className="task-list-cards grid grid-cols-4 gap-4">
        <div className="task-card bg-red-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">1</h2>
          <p className="text-gray-600 text-xl mt-3">Description for Task 1</p>
        </div>
        <div className="task-card bg-blue-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">2</h2>
          <p className="text-gray-600 text-xl mt-3">Description for Task 2</p>
        </div>
        <div className="task-card bg-green-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">3</h2>
          <p className="text-gray-600 text-xl mt-3">Description for Task 3</p>
        </div>
        <div className="task-card bg-yellow-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">4</h2>
          <p className="text-gray-600 text-xl mt-3">Description for Task 4</p>
        </div>
      </div>
    </div>
  );
};

export default TaskListCards;
