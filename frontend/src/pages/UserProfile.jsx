import React, { useContext } from "react";

import { UserContext } from "../contextapi/UserContext";

const UserProfile = () => {
  const { username } = useContext(UserContext);


  return <div>Profile</div>;
};

export default UserProfile;
