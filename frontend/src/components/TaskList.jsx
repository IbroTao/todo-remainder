import React, { useState, useContext } from "react";

import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";
import { TaskContext } from "../contextapi/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  const completedTasks = tasks.filter((task) => task.completed === true);
  const unCompletedTasks = tasks.filter((task) => task.completed === false);

    const [isCompleted, setIsCompleted] = useState(false);
    
  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-5 ">
        <button
          className={`py-5 rounded-t-md bg-green-800 text-white hover:bg-gray-400 hover:text-black uppercase ${
            !isCompleted ? "bg-gray-400 text-black font-bold px-10" : "px-5 "
          }`}
          onClick={() => setIsCompleted(false)}
        >
          Uncompleted
        </button>
        <button
          className={`py-5 rounded-t-md bg-green-800 text-white hover:bg-gray-400 hover:text-black uppercase ${
            isCompleted ? "bg-gray-400 text-black font-bold px-10" : "px-5 "
          }`}
          onClick={() => setIsCompleted(true)}
        >
          Completed
        </button>
      </div>
      <div className="shadow-md overflow-y-scroll shadow-black rounded-sm min-w-[70%] max-h-[60%] mx-10 ">
        {isCompleted ? (
          <CompletedTasks tasks={completedTasks} />
        ) : (
          <UncompletedTasks tasks={unCompletedTasks} />
        )}
      </div>
    </>
  );
};

export default TaskList;
