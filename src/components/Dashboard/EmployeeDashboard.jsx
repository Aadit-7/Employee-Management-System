import React from "react";
import Header from "../others/Header";
import TaskListCards from "../others/TaskListCards";
import TaskList from "../Task Lists/TaskList";

const EmployeeDashboard = () => {
  return (
    <div>
      <Header />
      <TaskListCards />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
