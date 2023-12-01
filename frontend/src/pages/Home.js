import React, { useContext } from "react";
import { AiFillFolder } from "react-icons/ai";
import { Link } from "react-router-dom";

import { UserContext } from "../contextapi/UserContext";

const Home = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <Link to={`/${username}`}>
        <AiFillFolder />
      </Link>
    </div>
  );
};

export default Home;
