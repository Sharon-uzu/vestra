import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Images/r-logo.png'

const NewPassword = () => {

  const navigate = useNavigate();

    const submit = () => {
        navigate("/password-reset-success");
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
                <h3>Create a New Password</h3>
                <p>For your security, choose a strong, unique password that you haven’t used before.</p>
                <form className='r-form'>
                    <div className="form-c">
                        <h6>Password</h6>
                        <input type="password" placeholder='Enter your new email'/>
                        <h6>Confirm Password</h6>
                        <input type="password" placeholder='Confirm your new email'/>
                        
                        
                          <button onClick={submit}>Confirm</button>
                        
                        <p>Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>



  )
}

export default NewPassword