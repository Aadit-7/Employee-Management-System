import React from "react";

const tasks = [
  {
    title: "Design Login Page",
    priority: "High",
    dueDate: "2025-07-14",
  },
  {
    title: "Build Dashboard UI",
    priority: "Medium",
    dueDate: "2025-07-18",
  },
  {
    title: "Fix Bug in API",
    priority: "Low",
    dueDate: "2025-07-20",
  },
  {
    title: "Write Documentation",
    priority: "Medium",
    dueDate: "2025-07-22",
  },
  {
    title: "Deploy to Server",
    priority: "High",
    dueDate: "2025-07-25",
  },
  {
    title: "Review Codebase",
    priority: "Low",
    dueDate: "2025-07-30",
  },
];

const rowColors = [
  "bg-red-50",
  "bg-yellow-50",
  "bg-green-50",
  "bg-blue-50",
  "bg-indigo-50",
  "bg-purple-50",
];

const getPriorityClass = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    case "Low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const AllTasks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 px-20">All Tasks</h1>
      <div className="bg-white p-6 rounded shadow px-20">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tasks.map((task, index) => (
              <tr
                key={index}
                className={`${rowColors[index % rowColors.length]}`}
              >
                <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityClass(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{task.dueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900 ml-4 cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasks;
