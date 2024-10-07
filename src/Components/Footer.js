import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <footer>
            <div className="foot">
                <div className="foot1">
                    <h1>Helping Investors Scale & Grow.</h1>
                    <div className="f-icons">
                        <FaFacebookF className='f-i'/>
                        <FaYoutube className='f-i'/>
                        <FaInstagram className='f-i'/>
                    </div>
                </div>

                <ul>
                    <li>Quick Links</li>
                    <a href=""><button>About</button></a>
                    <a href=""><button>Investment Solutions</button></a>
                    <a href=""><button>Contact Us</button></a>
                    <a href=""><button>Resources</button></a>
                </ul>


                <ul>
                    <li>Contact Information</li>
                    <a href=""><p>Email: support@vestra.com</p></a>
                    <a href=""><p>+1 (800) 123-4567</p></a>
                    <p>345 Woji Road, Gbalagsm Port Harcourt</p>
                </ul>

                <p className='right'>© 2024 VESTRA. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer