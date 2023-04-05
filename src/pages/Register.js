import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

export const Register = () => {

    let navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/personaldetails');
    }

    return (
        <div className='register'>
            <div className="register-content">
                <h2>Create an account</h2>
                <div className="form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password' />
                    <button type="submit" onClick={handleRegister}>Register</button>
                    <div className="login-statement">
                        <span>Already have an account? </span>
                        <span className='login-button' onClick={handleLogin}>Login</span>
                    </div>
                </div>
            </div>
            <img src="https://cdn.create.vista.com/api/media/small/3885082/stock-photo-new-york-buildings" alt="" />
        </div>
    )
}