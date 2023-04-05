import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

export const Login = () => {

    let navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    }

    const handleForgotpassword = (e) => {
        e.preventDefault();
        navigate('/forgot-password');
    }

    return (
        <div className='login'>
            <div className="login-content">
                <h2>Welcome back!</h2>
                <div className="form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <div className="forgot" onClick={handleForgotpassword}>Forgot Password?</div>
                    <button type="submit">Login</button>
                    <div className="register-statement">
                        <span>Don't have an account? </span>
                        <span className='register-button' onClick={handleRegister}>Register</span>
                    </div>
                </div>
            </div>
            <img src="https://cdn.create.vista.com/api/media/small/3885082/stock-photo-new-york-buildings" alt="" />
        </div>
    )
}
