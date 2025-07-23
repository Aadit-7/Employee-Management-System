import React from "react";
import Header from "../others/Header";
import TaskListCards from "../others/TaskListCards";
import TaskList from "../Task Lists/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div>
      <Header data={data} />
      <TaskListCards data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
