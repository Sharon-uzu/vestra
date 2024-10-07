import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Images/r-logo.png'

const Signup = () => {

    const navigate = useNavigate();

    const submit = () => {
        navigate("/verify");
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
                    <h3>Basic Informations</h3>
                    <form className='r-form'>
                        <div className="form-c">
                            <h6>Full Name</h6>
                            <input type="text" placeholder='Enter your fullname'/>
                            <h6>Email Address</h6>
                            <input type="email" placeholder='Enter your email address'/>
                            <h6>Password</h6>
                            <input type="password" placeholder='Create your password'/>
                            <h6>Confirm Password</h6>
                            <input type="password" placeholder='Confirm your password'/>
                            <button onClick={submit}>Next</button>
                            <p>Already on Vestra? <Link to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup