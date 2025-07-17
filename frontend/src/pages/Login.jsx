import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    const res = axios.post('http://localhost:3000/login', formData)
      alert('Login successful!');
      setFormData({ email: '', password: '' });
      navigate('/dashboard');
     
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
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email && <span id="email-error" className="error">{errors.email}</span>}
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