import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Login details:", formData);

    alert("Login form completed. Backend integration is still required.");
  }

  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-heading">
          <FaUser />

          <h2>Welcome Back</h2>

          <p>Login to access your customer account.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register">Create an account</Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Login;