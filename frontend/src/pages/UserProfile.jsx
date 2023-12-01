import React, { useContext } from "react";

import { UserContext } from "../contextapi/UserContext";

const UserProfile = () => {
  const { data, username } = useContext(UserContext);

  return <div>{username}</div>;
};

export default UserProfile;
