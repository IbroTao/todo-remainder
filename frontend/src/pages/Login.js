import { useNavigate, Link } from "react-router-dom";
import React, { useState, useContext } from "react";

import { UserContext } from "../contextapi/UserContext";

const Login = () => {
  const navigate = useNavigate();

  const { logins, username, setUsername } = useContext(UserContext);

  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleLogin = () => {
    if (logins.length !== 0) {
      if (logins[0].password === password) {
        navigate("/");
      } else {
        setError("Incorrect password");
      }
    } else {
      setError("Incorrect Username");
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
          type="text"
          className=" rounded-md px-4 py-2 border-gray-300 border-2 outline-none"
          placeholder="Username..."
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
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
