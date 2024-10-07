import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/r-logo.png'

const Kyc = () => {

    const navigate = useNavigate()

    const submit = () => {
        navigate("/kyc-successful");
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
                    <h3>Verify Your Identity to Unlock Full Access</h3>
                    <p>To protect your account and comply with legal regulations, we need to verify your identity. This process takes just a few minutes, and your data is kept confidential and secure.</p>
                    <form className='r-form'>
                        <div className="form-c">
                            <h6>Select ID Type</h6>
                            <select name="" id="">
                                <option value="">Passport</option>
                                <option value="">Drivers license</option>
                                <option value="">Birth certificate</option>
                            </select>
                            <h6>Upload ID Document</h6>
                            <input type="file" />
                            <h6>Document Number</h6>
                            <input type="text" placeholder='Enter ID number' />
                            <h6>Selfie with ID</h6>
                            <input type="file" />

                            <div className="rem">
                              <input type="checkbox" name="" id="" />
                              <div>
                                <p>I consent to the collection and use of my information for identity verification as per the Privacy Policy.</p>
                              </div>
                            </div>
                            
                            <button onClick={submit}>Submit for Verification</button>
                            <p><Link to='/user-dashboard' style={{color:'#353434', textDecoration:'none'}}>Back</Link></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kyc