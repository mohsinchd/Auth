import { createContext, useReducer } from "react";
import { LoginReducer } from "./LoginReducer";
import axios from "axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    user: user ? user : null,
    loading: false,
    success: false,
    error: "",
  };
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const login = async (userData) => {
    try {
      dispatch({
        type: "LOGIN_LOADING",
      });
      const { data } = await axios.post("/api/users/login", userData);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const register = async (userData) => {
    try {
      dispatch({
        type: "REGISTER_LOADING",
      });
      const { data } = await axios.post("/api/users", userData);
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: data,
      });
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "REGISTER_ERROR",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const logout = () => {
    dispatch({
      type: "RESET",
    });
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ state, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
