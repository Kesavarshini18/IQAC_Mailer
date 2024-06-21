import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/login.css";

function Login({ setIsLoggedIn, setIsAdmin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          localStorage.setItem("authToken", result.data.token);
          if (email == "admin@gmail.com") {
            setIsLoggedIn(true);
            setIsAdmin(true);
            navigate("/admin-dashboard");
          } else {
            setIsLoggedIn(true);
            setIsAdmin(false);
            navigate("/dashboard");
          }
        } else {
          alert("Incorrect email or password. Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login--container">
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setIsAdmin: PropTypes.func.isRequired,
};

export default Login;
