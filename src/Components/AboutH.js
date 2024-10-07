import React from 'react'
import img from '../Images/image (4).png'
import img1 from '../Images/image (5).png'
import img2 from '../Images/image (6).png'
const AboutH = () => {
  return (
    <div>
        <div className="abt abts">
            <div className="txt">
                <h2>About Us</h2>
                <p>Vestra was founded with a simple yet powerful mission: to make investing accessible, secure, and profitable for everyone. In a world where financial growth often feels out of reach, we believe in creating opportunities that empower individuals and organizations to achieve their financial dreams. With Vestra, investing isn’t just about numbers—it’s about building a better future with confidence and trust.</p>
            </div>
            <div className="img">
                <img src={img} alt="" />
            </div>
        </div>

        <div className="abt">
            <div className="img">
                <img src={img1} alt="" />
            </div>
            <div className="txt">
                <h3>Our Mission</h3>
                <p>Our mission is to empower individuals and organizations to achieve financial freedom and long-term prosperity by providing innovative, ethical, and personalized investment solutions. We are committed to setting new standards in the investment industry by delivering exceptional returns with unparalleled risk management, making wealth creation accessible to all.</p>
            </div>
            
        </div>


        <div className="abt abts">
            
            <div className="txt">
                <h3>Our Vission</h3>
                <p>At Vestra, we envision a world where financial growth is inclusive, transparent, and secure. Our goal is to be the leading global investment firm that sets the standard for trust, excellence, and sustainability. We strive to drive positive change in the financial industry, creating lasting value for all stakeholders while promoting responsible and impactful investing.</p>
            </div>

            <div className="img">
                <img src={img2} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default AboutH