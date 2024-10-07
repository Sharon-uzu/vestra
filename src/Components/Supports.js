import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import img from '../Images/contact.png'

const Supports = () => {
  return (
    <div>
        <div className="support-top">
            <div className="support-l">
                <div className="sup1">
                    <div className="c-icon">
                        <FaPhone className='c-i'/>
                    </div>
                    <div className="c-c">
                        <h5>Phone Support</h5>
                        <h6><a href="">1 (800) 123-4567</a></h6>
                        <p>Hours: Monday to Friday, 8:00 AM – 6:00 PM (EST)</p>
                    </div>
                </div>

                <div className="sup1">
                    <div className="c-icon">
                        <IoMailSharp className='c-i'/>
                    </div>
                    <div className="c-c">
                        <h5>Email Support</h5>
                        <h6><a href="">support@vestra.com</a></h6>
                        <p>Expect a response within 24 hours.</p>
                    </div>
                </div>

                <div className="sup1">
                    <div className="c-icon">
                        <CiLocationOn className='c-i'/>
                    </div>
                    <div className="c-c">
                        <h5>Location</h5>
                        <h6>Vestra Investment Solutions</h6>
                        <p>123 Finance Street, Suite 500 <br />Port Harcourt, PH 10001</p>
                    </div>
                </div>

            </div>
            <div className="support-r">
                <h3>Send A Message</h3>
                <p>Your feedback is important to us. If you have any suggestions, comments, or concerns, please let us know. We’re constantly looking to improve our services and value your input.</p>

                <form className='s-form'>
                    <input type="text" placeholder='Name'/>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="tel" name="" id="" placeholder='Phone Number'/>
                    <input type="text" placeholder='Subject'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button>Send Message</button>
                </form>

            </div>
        </div>

        <div className="support-down">
            <img src={img} alt="" />
            <div>
                <h3>Follow Us on Social Media</h3>
                <p>Stay connected with Vestra and keep up with the latest news, updates, and financial tips through our social media channels:</p>
                <h6>LinkedIn:<a href=""> Vestra on LinkedIn</a></h6>
                <h6>Twitter:<a href=""> @VestraInvest</a></h6>
                <h6>Facebook:<a href=""> Vestra Investments</a></h6>
                <h6>Instagram:<a href=""> @VestraInvest</a></h6>
            </div>
        </div>
    </div>
  )
}

export default Supports