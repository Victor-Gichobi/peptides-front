import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    country: "",
    researchPurpose: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    console.log("Registration details:", formData);

    alert("Registration form completed. Backend integration is still required.");
  }

  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-heading">
          <FaUserPlus />

          <h2>Create Your Account</h2>

          <p>
            Register to access your research enquiries
            and manage your customer profile.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

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
            <label>Organization / Institution</label>
            <input
              type="text"
              name="organization"
              className="form-control"
              placeholder="Enter your organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Country</label>
            <input
              type="text"
              name="country"
              className="form-control"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Research Purpose</label>
            <select
              name="researchPurpose"
              className="form-select"
              value={formData.researchPurpose}
              onChange={handleChange}
              required
            >
              <option value="">Select your purpose</option>
              <option value="Academic Research">Academic Research</option>
              <option value="Biotechnology">Biotechnology</option>
              <option value="Industrial Research">Industrial Research</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              minLength="8"
              required
            />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login">Login here</Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Register;