import React, { useContext } from "react";


import { TaskContext } from "../contextapi/TaskContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const tasks = [{
  task: "workout",
  time: "9:30",
},
  {
    task: "exams",
    time: "10:45"
  }

]

const Home = () => {
  const { username } = useContext(TaskContext);

  return (
    <div>
      <Header username={username} />
      <TaskContext.Provider value={{ tasks }}>
    

        <Footer/>
      </TaskContext.Provider>
    </div>
  );
};

export default Home;
