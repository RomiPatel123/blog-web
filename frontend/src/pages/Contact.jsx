import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <main>
        <div className="contact-container">
          <div className="left">
            <h1>Hello ! Contact Us </h1>
          </div>
          <div className="right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h2>Contact Us Here</h2>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span id="name-error" className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span id="email-error" className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && <span id="message-error" className="error">{errors.message}</span>}
              </div>
              <button type="submit">Send</button>
            </form>
            <div className="contact-info">
              <h3>Or Reach Us Here</h3>
              <p>
                <strong>Email:</strong> livebloggerofficial@gmail.com
              </p>
              <h4>Get Social:</h4>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png"
                    alt=""
                  />
                </a>
                <a href="#" aria-label="Twitter">
                  <img
                    src="https://www.citypng.com/public/uploads/preview/hd-square-twitter-button-icon-png-7017516950551447u17aee6vo.png"
                    alt=""
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <img
                    src="https://img.freepik.com/premium-psd/instagram-application-logo_23-2151544088.jpg?semt=ais_hybrid&w=740"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;