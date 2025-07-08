import React from 'react'
import './Signup.css'
const Signup = () => {
    return (
        <div>
            <div className=" sign-container">
                <div className="left-panel">
                    <h1>Welcome back!</h1>
                    <p>You can sign in to access with your existing account.</p>
                </div>
                <div className="right-panel">
                    <h2>Sign In</h2>
                    <form>
                        <input type="text" placeholder="Username or email" required />
                        <input type="password" placeholder="Password" required />

                        <div className="options">
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit">Sign In</button>

                        <p className="signup">New here? <a href="#">Create an Account</a></p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup