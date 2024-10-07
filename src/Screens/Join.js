import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../Images/r-logo.png'

const Join = () => {
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
                    <h3>Join Vestra and Start Growing Your Investments Today</h3>
                    <p>Sign up to access personalized investment solutions tailored to your financial goals.</p>

                    <Link to="/signup"><button>Sign Up</button></Link>
                    <Link to="/login"><button className='r-log'>Login</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Join