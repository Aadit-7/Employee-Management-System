import React from "react";
import AccepctTask from "./AccepctTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  console.log(data);

  return (
    <div className="flex items-center justify-start mt-10 px-20 h-[400px]">
      <div className="h-full p-5 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 min-w-max h-full">
          {data.tasks.map((elem) => {
            if (elem.active) {
              return <AccepctTask />;
            }
            if (elem.completed) {
              return <CompleteTask />;
            }
            if (elem.failed) {
              return <FailedTask />;
            }
            if (elem.newTask) {
              return <NewTask />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
