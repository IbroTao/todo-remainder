import { useNavigate, Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../contextapi/UserContext";

const Login = () => {
  const navigate = useNavigate();

  const { email, setUsername, setEmail } = useContext(UserContext);

  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password,
    };

    if (email !== "") {
      if (password !== "") {
        await axios
          .post("http://localhost:3000/api/auth/login", loginData)
          .then((res) => {
            let data = res.data;
            setUsername(data.user.username);
            navigate("/");
          })
          .catch((err) => {
            setError(err.response.data);
          });
      } else {
        setError("Please enter your password");
      }
    } else {
      setError("Please enter your email");
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-screen bg-gray-300`}
    >
      <form
        className="flex flex-col items-center gap-5 bg-white px-10 py-10 rounded-md shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className={`${error ? "" : "hidden"}text-red-700 font-medium`}>
          {error}
        </p>
        <h2 className="font-bold text-2xl">Login</h2>
        <input
          type="email"
          className=" rounded-md px-4 py-2 border-gray-300 border-2 outline-none"
          placeholder="Email..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          className="rounded-md px-4 py-2 border-gray-300 border-2 outline-none"
          placeholder="Password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="uppercase bg-green-800 hover:bg-gray-300 py-3 px-9 text-white hover:text-black font-semi-bold shadow-sm rounded-lg transition-all duration-700"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </form>
      <div className="mt-4 font-semibold flex gap-2">
        <p>New User?</p>
        <Link to={"/signup"} className="text-blue-800">
          Signup here
        </Link>
      </div>
    </div>
  );
};

export default Login;
