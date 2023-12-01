import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import { UserContext } from "./contextapi/UserContext";

const App = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  // const logins = JSON.parse(localStorage.getItem("users"));
  const data = [
    {
      username: "smoq",
      password: "123456",
    },
    {
      username: "kingsley",
      password: "09090",
    },
    {
      username: "amoke",
      password: "707070",
    },
  ];

  const logins = data.filter((user) => user.username === username);

  useEffect(() => {
    if (logins.length === 0) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ data, logins, username, setUsername }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/:${username}`} element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
