import React, { useContext } from "react";
import AuthContext from "../store/AuthContext";
const Name = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Name;
