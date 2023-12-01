import React, { useState, useContext } from "react";

import { UserContext } from "../contextapi/UserContext";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const { data, username, setUsername } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(null);

  const clearInput = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError(null);
  };

  const handleSignup = () => {
    const userData = {
      username: username,
      email: email,
      password: password,
    };

    data.push(userData);
    console.log(username);
    navigate("/");
  };

  const handleError = () => {
    if (username.length < 5) {
      setError("Username must be more than 5 characters");
    } else if (email === "") {
      setError("Please enter your email");
    } else if (password.length < 6) {
      setError("Password must be more than 6 characters");
    } else if (password !== confirmPassword) {
      setError("Password doesn't match");
    } else {
      setError("");
      handleSignup();
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
        <h2 className="font-bold text-2xl">Sign Up</h2>
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
          type="email"
          className="rounded-md px-4 py-2 border-gray-300 border-2 outline-none"
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
        <input
          type="password"
          className="rounded-md px-4 py-2 border-gray-300 border-2 outline-none"
          placeholder="Confirm password..."
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button
          className="uppercase bg-green-800 hover:bg-gray-300 py-3 px-9 text-white hover:text-black font-semi-bold shadow-sm rounded-lg transition-all duration-700"
          onClick={() => {
            handleError();
          }}
        >
          Signup
        </button>
      </form>
      <div className="mt-4 font-semibold flex gap-2">
        <p>Already registered?</p>
        <Link to={"/login"} className="text-blue-800">
          Login here
        </Link>
      </div>
    </div>
  );
};

export default Signup;
