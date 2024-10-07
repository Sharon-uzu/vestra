import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/r-logo.png'

const NewPaymentMethod = () => {

    const navigate = useNavigate()

    const submit = () => {
        navigate("/update-successful");
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


            <form  className="reg-r">
            
                        <div className="reg-c">
                            <h3>Add New Card</h3>
                            <p>Quickly and securely deposit funds to start or grow your investment portfolio</p>
                            <div className='r-form'>
                                <div className="form-c">
                                    <h6>Add New Payment Method</h6>
                                    <select name="" id="">
                                        <option value="">payment method</option>
                                        <option value="">PayPal</option>
                                    </select>
                                    <h6>Card Number</h6>
                                    <input type="text" placeholder='enter card number'/>
                                    <h6>Expiration Date</h6>
                                    <input type="text" placeholder='Month/Year'/>
                                    <h6>CVV</h6>
                                    <input type="text" placeholder='enter cvv'/>

                                    <div className="rem">
                                    <input type="checkbox" name="" id="" />
                                    <div>
                                        <p>Check this box to make this payment method the default for future deposits..</p>
                                    </div>
                                    </div>
                                    
                                    <button onClick={submit}>Add</button>
                                    <p><Link to='/setting' style={{color:'#353434', textDecoration:'none'}}>Cancel</Link></p>

                                </div>
                            </div>
                        </div>
                   
            </form>
        </div>
    </div>
  )
}

export default NewPaymentMethod