import React from 'react'
import '../styles/forgot_password.css'

function ForgotPassword() {
  return (
      <div className='forgot-password'>
          <h2>Forgot Password</h2>
          <div className="form">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Email' />
              <button type="submit">RESET PASSWORD</button>
          </div>
    </div>
  )
}

export default ForgotPassword