import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Login.css";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post(
      "/users/login",
      formData
    );

    alert("Login Successful!");

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    navigate("/dashboard");

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Invalid credentials"
    );
  }
};

  return (
    <div className="login-page">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="login-logo">🥗</div>

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Continue your healthy journey with Nutrition Assistant.
        </p>

        <p className="quote">
          "Healthy eating is a form of self-respect."
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <div className="remember-row">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">
            Login
          </button>
        </form>

        <p className="security-note">
          🔒 Your information is securely protected.
        </p>

        <p className="register-text">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

        <p className="home-link">
          <Link to="/">← Back to Home</Link>
        </p>
      </motion.div>
    </div>
  );
}