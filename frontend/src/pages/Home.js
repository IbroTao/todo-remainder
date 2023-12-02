import React, { useContext } from "react";

import { UserContext } from "../contextapi/UserContext";
import { TaskContext } from "../contextapi/TaskContext";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";

const tasks = [
  {
    task: "workout",
    time: "9:30",
    completed: false,
  },
  {
    task: "exams",
    time: "10:45",
    completed: false,
  },
  {
    task: "workout",
    time: "9:30",
    completed: false,
  },
  {
    task: "exams",
    time: "10:45",
    completed: false,
  },
  {
    task: "workout",
    time: "9:30",
    completed: false,
  },
  {
    task: "exams",
    time: "10:45",
    completed: false,
  },
  {
    task: "workout",
    time: "9:30",
    completed: false,
  },
  {
    task: "exams",
    time: "10:45",
    completed: false,
  },
  {
    task: "galley",
    time: "14:00",
    completed: true,
  },
];

const Home = () => {
  const { username } = useContext(UserContext);


  return (
    <div className="h-screen w-screen">
      <Header username={username} />
      <TaskContext.Provider value={{ tasks }}>
        <TaskList />
        <Footer />
      </TaskContext.Provider>
    </div>
  );
};

export default Home;
