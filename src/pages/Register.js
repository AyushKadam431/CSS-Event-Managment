import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [icode, setIcode] = useState("");
  const [role, setRole] = useState("select");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateRegister = (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!username) {
      tempErrors.username = "*Please enter your name";
    } else if (!/^[a-zA-Z]+$/.test(username)) {
      tempErrors.username = "*Only characters allowed";
    }

    if (!email) {
      tempErrors.email = "*Please enter email";
    } else if (!email.includes("@") || !email.includes(".")) {
      tempErrors.email = "*Invalid email format";
    }

    if (!password) {
      tempErrors.password = "*Enter password";
    } else if (
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      tempErrors.password =
        "*Password must contain Capital, Number & Special char";
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      tempErrors.phone = "*Enter valid Indian number";
    }

    if (!/^\d+$/.test(icode)) {
      tempErrors.icode = "*Only numbers allowed";
    }

    if (role === "select") {
      tempErrors.role = "*Select your role";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      navigate("/home");
    }
  };

  return (
    <>
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>

      <form className="f1" onSubmit={validateRegister}>
        <label className="l1">Register</label>

        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <span>{errors.username}</span>

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <span>{errors.email}</span>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>{errors.password}</span>

        <label>Phone Number</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        <span>{errors.phone}</span>

        <label>Institute Code</label>
        <input value={icode} onChange={(e) => setIcode(e.target.value)} />
        <span>{errors.icode}</span>

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="select">--select--</option>
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
        </select>
        <span>{errors.role}</span>

        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default Register;
