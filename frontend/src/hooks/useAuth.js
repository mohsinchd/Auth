import { useState, useEffect, useContext } from "react";
import AuthContext from "../store/AuthContext";
const useAuth = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setCheckingStatus(false);
  }, [user]);

  return { isLoggedIn, checkingStatus };
};

export default useAuth;
