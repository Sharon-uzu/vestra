import React,{useEffect} from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../Images/r-logo.png'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);

    const navigate = useNavigate()

    const submit = () => {
        navigate("/user-dashboard");
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
                    <h3>Welcome Back!</h3>
                    <p>Access your Vestra account and manage your investments with ease.</p>
                    <form className='r-form'>
                        <div className="form-c">
                            <h6>Email Address</h6>
                            <input type="email" placeholder='Enter your email address'/>
                            <h6>Password</h6>
                            <input type="password" placeholder='Enter your password' className='pass'/>
                            <Link to='/reset' className='f-l'><p className='fgt'>Forgot password?</p></Link>

                            <div className="rem">
                              <input type="checkbox" name="" id="" />
                              <div>
                                <h6>Remember me</h6>
                                <p>Keep me logged in on this device.</p>
                              </div>
                            </div>
                            
                            <button onClick={submit}>Login</button>
                            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login