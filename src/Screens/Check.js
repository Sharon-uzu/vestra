import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../Images/r-logo.png'

const Check = () => {
  return (
    <div>
        <div className="registration">

            <div className="reg-l">
                <div className="brand">
                    <img src={logo} alt="" />
                    <div>
                        <a href=""><FiFacebook className='r-i'/></a>
                        <a href=""><CiYoutube className='r-i'/></a>
                        <a href=""><FaInstagram className='r-i'/></a>
                    </div>
                </div>
            </div>

            <div className="reg-r">
                <div className="reg-c">
                    <h3>Check Your Email</h3>
                    <p>We’ve sent a password reset link to your email address. Follow the instructions in the email to reset your password. The link will expire in 15 minutes for security reasons.</p>
                    <div className='r-form'>
                        <div className="form-c check">
                            <h5><Link to="/create-password">Resend Reset Link</Link></h5>
                            <p> If you're having trouble resetting your password, reach out to our support team at <a href="">support@vestra.com</a></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Check