import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Images/r-logo.png'

const Reset = () => {

  const navigate = useNavigate();

    const submit = () => {
        navigate("/check");
    };

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
                    <h3>Reset Your Password</h3>
                    <p>Please enter the email address associated with your Vestra account. We’ll send you a link to reset your password.</p>
                    <form className='r-form'>
                        <div className="form-c">
                            <h6>Email Address</h6>
                            <input type="email" placeholder='Enter your email address'/>
                            
                            <div className="new">
                              <Link to="/login">Back to login</Link>
                              <button onClick={submit}>Send Reset Link</button>
                            </div>
                            
                            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reset