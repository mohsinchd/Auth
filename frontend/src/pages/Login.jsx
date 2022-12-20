import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const { login, state } = useContext(AuthContext);
  const { user } = state;
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (user) {
      navigate("/name");
    }
  }, [user, navigate]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
    navigate("/name");
    setFormData(initialData);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={onChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={onChange}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
