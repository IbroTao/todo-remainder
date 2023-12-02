import React, { useContext } from "react";

import { TaskContext } from "../contextapi/TaskContext";

const Footer = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="fixed bottom-0 flex justify-center items-center w-screen py-6">
      <p>You have a total number of {tasks.length} tasks</p>
    </div>
  );
};

export default Footer;
