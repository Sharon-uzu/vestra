import React,{useState} from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/r-logo.png'


const Personal = () => {

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

    const navigate = useNavigate();

    const submit = () => {
        navigate("/kyc");
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

            <form className="reg-r">
                {
                    form1 ? (
                        <div className="reg-c">
                            <h3>Personal Information</h3>
                            <div className='r-form'>
                                <div className="form-c">
                                    <h6>Date of Birth</h6>
                                    <input type="date" />
                                    <h6>Address</h6>
                                    <input type="text" placeholder='City\state\country'/>
                                    <h6>Occupation</h6>
                                    <input type="text" placeholder='Optional'/>
                                    <button onClick={next}>Next</button>
                                    <p><Link to='/user-dashboard' style={{color:'#353434', textDecoration:'none'}}>Back</Link></p>
                                </div>
                            </div>
                        </div>
                    ): null
                }


{
                    form2 ? (
                        <div className="reg-c">
                            <h3>Investment Preferences</h3>
                            <div className='r-form'>
                                <div className="form-c">
                                    <h6>Investment Goals</h6>
                                    <select name="" id="">
                                        <option value="">Retirement</option>
                                        <option value="">Emergency fund</option>
                                        <option value="">Education Fund</option>
                                    </select>
                                    <h6>Risk Tolerance</h6>
                                    <select name="" id="">
                                        <option value="">High</option>
                                        <option value="">Medium</option>
                                        <option value="">Low</option>
                                    </select>
                                    <h6>Investment Horizon</h6>
                                    <select name="" id="">
                                        <option value="">3-5 years</option>
                                        <option value="">1-2 years</option>
                                        <option value="">6 months</option>
                                    </select>
                                    <button onClick={submit}>Submit</button>
                                    <p onClick={reverse} style={{cursor:'pointer'}}>Back</p>
                                </div>
                            </div>
                        </div>
                    ): null
                }
                
            </form>
        </div>
    </div>
  )
}

export default Personal