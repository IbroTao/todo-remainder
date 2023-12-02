import React from "react";

const UncompletedTasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="flex justify-between uppercase gap-5 text-black shadow-md px-4 py-4">
          <p>{task.task}</p>
          <p>{task.time}</p>
        </div>
      ))}
    </div>
  );
};

export default UncompletedTasks;
