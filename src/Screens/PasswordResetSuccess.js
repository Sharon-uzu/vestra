import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/Icon.png'

const PasswordResetSuccess = () => {
  return (
    <div>
      <div className="resetsuccess">
        <div className="success">
          <div className="s-c">
            <img src={img} alt="" />
            <h3>Success! Your Password Has Been Reset</h3>
            <p>Your password has been successfully reset. You can now log in to your Vestra account with your new credentials. For security reasons, make sure to keep your password safe</p>
            <Link to='/login'><button>Login Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordResetSuccess