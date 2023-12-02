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
  const [email, setEmail] = useState("");

  useEffect(() => {
    let username = JSON.parse(sessionStorage.getItem("user"));
    if (!username) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ username, email, setUsername, setEmail }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
