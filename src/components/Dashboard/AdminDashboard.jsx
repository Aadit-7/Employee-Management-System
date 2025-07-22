import React from "react";
import CreateTasks from "../others/CreateTasks";
import Header from "../others/Header";
import AllTasks from "../Task Lists/AllTasks";

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <CreateTasks />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
