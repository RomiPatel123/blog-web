import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div>
        <div className="login-box">
    <h2>LOGIN</h2>
    <form>
      <input type="email" placeholder="Enter Email" required></input>
      <input type="password" placeholder="Enter Password" required></input>

      <div className="checkbox">
        <input type="checkbox" id="remember"></input>
        <label for="remember">Remember me</label>
      </div>

      <button type="submit">LOGIN</button>

      <div className="alt-login">
        <p>Or Login With</p>
        <div className="icons">
          <button className="login-facebook">Facebook</button>
          <button className="login-google">Google</button>
        </div>
      </div>
    </form>
  </div>

    </div>
  )
}

export default Login