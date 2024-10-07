import React,{useState} from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/r-logo.png'


const Deposit = () => {

    const [form1, setForm1] = useState(true)
    const [form2, setForm2] = useState(false)

    const next = () => {
        setForm1(false);
        setForm2(true);
    };

    const reverse = () => {
        setForm1(true);
        setForm2(false);
    };

    const navigate = useNavigate()

    const submit = () => {
        navigate("/deposit-successful");
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
            {
                form1 ? (
                    <div className="reg-c">
                        <h3>Add Funds to Your Wallet</h3>
                        <p>Quickly and securely deposit funds to start or grow your investment portfolio</p>
                        <div className='r-form'>
                            <div className="form-c">
                                <h6>Enter Deposit Amount</h6>
                                <input type="text" placeholder='$1,000.00'/>
                                <h6>Choose Payment Method</h6>
                                <div className='add' onClick={next}>Add card</div>

                                <div className="rem">
                                <input type="checkbox" name="" id="" />
                                <div>
                                    <p>Funds will be available in 1-3 business days.</p>
                                </div>
                                </div>
                                
                                <button onClick={submit}>Confirm and Deposit</button>
                                <p><Link to='/user-dashboard' style={{color:'#353434', textDecoration:'none'}}>Cancel</Link></p>

                            </div>
                        </div>
                    </div>

                ):null
                }

                {
                    form2 ? (
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
                                    
                                    <button onClick={reverse}>Back to Deposit</button>
                                    <p><Link to='/user-dashboard' style={{color:'#353434', textDecoration:'none'}}>Cancel</Link></p>

                                </div>
                            </div>
                        </div>
                    ):null
                }
            </form>
        </div>
    </div>
  )
}

export default Deposit