import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/r-logo.png'


const Withdraw = () => {

    const navigate = useNavigate()

    const submit = () => {
        navigate("/withdraw-successful");
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
                        <h3>Withdraw Funds from Your Wallet</h3>
                        <p>Easily transfer your investment returns or available balance to your preferred payment method.</p>
                        <div className='r-form'>
                            <div className="form-c">
                                <h6>Available Balance</h6>
                                <div className='add' style={{cursor:'default'}}>$5,000.00</div>
                                <h6>Withdrawal Amount</h6>
                                <input type="text" placeholder='$1,000.00'/>
                                <h6>Choose Payment Method</h6>
                                <select name="" id="">
                                    <option value="">Bank Account (ending in XXXX)</option>
                                </select>

                                <div className="rem">
                                <input type="checkbox" name="" id="" />
                                <div>
                                    <p>Funds will be available in 1-3 business days. Please note, only available funds can be withdrawn. Pending investments may not be withdrawn.</p>
                                </div>
                                </div>
                                
                                <button onClick={submit}>Confirm and Withdraw</button>
                                <p><Link to='/user-dashboard' style={{color:'#353434', textDecoration:'none'}}>Cancel</Link></p>

                            </div>
                        </div>
                    </div>

               
            </form>
        </div>
    </div>
  )
}

export default Withdraw