import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("select");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateLogin = (e) => {
    e.preventDefault(); // prevent form reload
    let tempErrors = {};

    if (!username) tempErrors.username = "*Please enter your username";
    if (!password) tempErrors.password = "*Please enter your password";
    if (role === "select") tempErrors.role = "*Please select your role";

    setErrors(tempErrors);

    // If no errors, navigate
    if (Object.keys(tempErrors).length === 0) {
      navigate("/home");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>
      <div className="container-wrapper">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back
        </button>

        <form className="form1" onSubmit={validateLogin}>
          <label className="l1">Login</label>

          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span className="error">{errors.username}</span>}

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="select">--select--</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
          {errors.role && <span className="error">{errors.role}</span>}

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
