import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
const Header = () => {
  const { state, logout } = useContext(AuthContext);
  const { user } = state;
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/");
    logout();
  };
  return (
    <div>
      {user ? (
        <>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/sign-up">Sign up</Link>
          <Link to="/">Sign In</Link>
        </>
      )}
    </div>
  );
};

export default Header;
