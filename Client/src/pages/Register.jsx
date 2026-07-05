import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Register.css";
import API from "../services/api";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await API.post("/users/register", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    alert("Registration successful!");

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    window.location.href = "/login";

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Registration failed"
    );
  }
};

  return (
    <div className="register-page">
      <motion.div
        className="register-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="register-logo">🥗</div>

        <h1>Create Account</h1>

        <p className="subtitle">
          Start your healthy journey with Nutrition Assistant.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}