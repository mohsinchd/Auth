import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const { register, state } = useContext(AuthContext);
  const { user } = state;
  const [formData, setFormData] = useState(initialData);

  const { name, email, password } = formData;

  useEffect(() => {
    if (user) {
      navigate("/name");
    }
  }, [user, navigate]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
    navigate("/name");
    setFormData(initialData);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          onChange={onChange}
          value={name}
        />

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
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
