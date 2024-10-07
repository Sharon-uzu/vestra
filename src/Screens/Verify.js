import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Images/r-logo.png'

const Verify = () => {

    const navigate = useNavigate();

    const submit = () => {
        navigate("/login");
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
                    <h3>Verification</h3>
                    <p>A code is sent to the provided email address.</p>
                    <form className='r-form'>
                        <div className="form-c verf">
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <button onClick={submit}>Verify</button>
                            <p>Resend Code</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Verify