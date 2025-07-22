import React from "react";

// Sample task list
const tasks = [
  {
    title: "Design Login Page",
    description: "Create a responsive login form using Tailwind CSS.",
    priority: "High",
    date: "2025-07-16",
  },
  {
    title: "Build Navbar",
    description: "Implement a responsive and sticky navbar component.",
    priority: "Medium",
    date: "2025-07-15",
  },
  {
    title: "Setup Routing",
    description: "Add React Router for navigation between pages. ",
    priority: "Low",
    date: "2025-07-14",
  },
  {
    title: "Connect API",
    description: "Integrate the backend API for user data.",
    priority: "High",
    date: "2025-07-13",
  },
  {
    title: "Footer Component",
    description: "Design a clean footer with social links.",
    priority: "Low",
    date: "2025-07-12",
  },
  {
    title: "Task Cards UI",
    description: "Create scrollable task list cards with status.",
    priority: "Medium",
    date: "2025-07-11",
  },
  {
    title: "Add Animations",
    description: "Use Framer Motion for fade-in effects.",
    priority: "Low",
    date: "2025-07-10",
  },
  {
    title: "Test Components",
    description: "Write unit tests for core components.",
    priority: "High",
    date: "2025-07-09",
  },
];

// Priority badge background colors
const getPriorityStyle = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-500 text-white";
    case "Medium":
      return "bg-yellow-200 text-black";
    case "Low":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

// Random pastel backgrounds for cards
const cardBgColors = [
  "bg-blue-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-pink-50",
  "bg-purple-50",
  "bg-indigo-50",
  "bg-rose-50",
  "bg-orange-50",
];

const TaskList = () => {
  return (
    <div className="flex items-center justify-start mt-10 px-20 h-[400px]">
      <div className="h-full p-5 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 min-w-max h-full">
          {tasks.map((task, i) => (
            <div
              key={i}
              className={`min-w-[300px] h-full ${
                cardBgColors[i % cardBgColors.length]
              } px-4 py-5 rounded shadow shrink-0 w-[300px] text-black overflow-auto scrollbar-hide`}
            >
              <div className="flex justify-between mb-2 pb-5 text-sm font-semibold">
                <span
                  className={`${getPriorityStyle(
                    task.priority
                  )} px-2 py-1 rounded-lg`}
                >
                  {task.priority}
                </span>
                <span className="text-gray-500">{task.date}</span>
              </div>
              <h1 className="text-xl font-semibold mt-2 mb-1">{task.title}</h1>
              <p className="text-gray-700 mt-3 text-sm">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
