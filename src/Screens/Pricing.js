import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Plan from '../Components/Plan'
import img1 from '../Images/m11.png'
import img2 from '../Images/m12.png'
import img3 from '../Images/m13.png'
import img4 from '../Images/m14.png'
import { GoDotFill } from "react-icons/go";
import Faq from '../Components/Faq';
import Card2 from '../Components/Card2';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';


const Pricing = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>
        <Header/>
        <div className="h-bg bg3">
            <div className="dk-bg"></div>

            <div>
            
            <h2>What’s Included in Our Fees?</h2>
            <p>At Vestra, we believe that investing should be both rewarding and secure. Our platform offers a balance of growth and protection, ensuring that your financial future is in good hands.</p>

            </div>

      </div>
      <Plan/>

        <div className="solution">
            <div className="sol1">
                <h2>Comprehensive Portfolio Management</h2>
                <p>At Vestra, we believe that investing should be both rewarding and secure. Our platform offers a balance of growth and protection, ensuring that your financial future is in good hands.</p>
            </div>

            <div className="sol2">
                <img src={img1} alt="" />
                <h3>Customized Portfolios</h3>
                <p>Continuous monitoring and adjustment of your investments by our expert team to ensure optimal performance.</p>
            </div>

            <div className="sol2">
                <img src={img2} alt="" />
                <h3>Advanced Risk Management</h3>
                <p>Our unique damage control mechanisms are included at no extra cost, safeguarding your investments with up to 80% protection.</p>
            </div>

            <div className="sol2">
                <img src={img3} alt="" />
                <h3>Access to Vestra’s Investment Insights</h3>
                <p>Enjoy exclusive reports, market analyses, and investment guides tailored to your portfolio.</p>
            </div>

            <div className="sol2">
                <img src={img4} alt="" />
                <h3>Dedicated Support</h3>
                <p>Direct access to our investment advisors for personalized advice and portfolio reviews.</p>
            </div>


        </div>

        <div className="philosophy">
            <div className="phil1">
                <h2>Flexible Contribution Options</h2>
                <p>We offer flexible contribution schedules to fit your financial planning:</p>
            </div>
            <div className="phil2">
                <GoDotFill className='p-i'/>
                <div>
                    <h3>Monthly Contributions</h3>
                    <p>Add funds to your portfolio monthly to steadily grow your investment.</p>
                </div>

            </div>

            <div className="phil2">
                <GoDotFill className='p-i'/>
                <div>
                    <h3>One-Time Top-Ups</h3>
                    <p> Make additional investments at any time without any extra fees.</p>
                </div>

            </div>

            <div className="phil2">
                <GoDotFill className='p-i'/>
                <div>
                    <h3>Reinvestment of Returns</h3>
                    <p>Automatically reinvest your returns to take advantage of compounding growth.</p>
                </div>

            </div>
        </div>


        <Faq/>

        <Card2 t1='No Hidden Fees' paragraph='Vestra prides itself on a transparent fee structure with no hidden charges. Our management and performance fees are clearly stated, and there are no unexpected costs such as entry or exit fees. All transaction costs are included in the management fee, so you can invest with confidence knowing exactly what you’re paying for.'  btn='Register Now'/>
        <Footer/>

    </div>
  )
}

export default Pricing