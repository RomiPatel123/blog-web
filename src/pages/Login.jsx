import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username or email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.username) && formData.username.length < 3) {
      newErrors.username = 'Enter a valid email or username (minimum 3 characters)';
    }
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (Object.keys(newErrors).length === 0) {
      alert('Login successful!');
      setFormData({ username: '', password: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <main className="main-content">
        <section className="login-container" role="main" aria-label="Login form">
          <div className="left-panel">
            <h1>Welcome Back!</h1>
            <p>Sign in to access your existing account or create a new one to join our community.</p>
          </div>
          <div className="right-panel">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username or email"
                  value={formData.username}
                  onChange={handleChange}
                  aria-describedby={errors.username ? 'username-error' : undefined}
                  required
                />
                {errors.username && <span id="username-error" className="error">{errors.username}</span>}
              </div>
              <div className="form-group">
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {errors.password && <span id="password-error" className="error">{errors.password}</span>}
              </div>

              <div className="options">
                <label>
                  <input type="checkbox" id="remember" />
                  Remember me
                </label>
                <Link to="/forgot-password" aria-label="Forgot password">Forgot password?</Link>
              </div>

              <button type="submit">Login</button>

              <p className="signup">
                New here? <Link to="/signup" aria-label="Create an account">Create an Account</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;