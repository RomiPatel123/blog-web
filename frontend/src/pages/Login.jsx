import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/login', formData);
      alert(res.data.message);

      // ✅ Save userId in localStorage
      localStorage.setItem('userId', res.data.userId);

      // ✅ Clear form
      setFormData({ email: '', password: '' });

      // ✅ Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      alert(error?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <main className="main-content">
        <section className="login-container" role="main">
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
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {errors.password && <span className="error">{errors.password}</span>}
              </div>

              <div className="options">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <button type="submit">Login</button>

              <p className="signup">
                New here? <Link to="/signup">Create an Account</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;