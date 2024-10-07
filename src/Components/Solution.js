import React from 'react'
import img1 from '../Images/image 25.png'
import img2 from '../Images/image 26.png'
import img3 from '../Images/image 27.png'
import img4 from '../Images/image 28.png'


const Solution = () => {
  return (
    <div>
        <div className="solution">
            <div className="sol1">
                <h2>Why Choose Vestra Investment Solutions?</h2>
                <p>At Vestra, we believe that investing should be both rewarding and secure. Our platform offers a balance of growth and protection, ensuring that your financial future is in good hands.</p>
            </div>

            <div className="sol2">
                <img src={img1} alt="" />
                <h3>Customized Portfolios</h3>
                <p>Tailor-made portfolios that align with your personal financial goals and risk appetite.</p>
            </div>

            <div className="sol2">
                <img src={img2} alt="" />
                <h3>Expert-Managed</h3>
                <p>Benefit from the expertise of our seasoned investment professionals who actively manage your portfolio to maximize returns.</p>
            </div>

            <div className="sol2">
                <img src={img3} alt="" />
                <h3>Innovative Technology</h3>
                <p>Our cutting-edge platform provides real-time insights and analytics, keeping you informed and in control of your investments.</p>
            </div>

            <div className="sol2">
                <img src={img4} alt="" />
                <h3>Transparent and Secure</h3>
                <p>With Vestra, you enjoy full transparency into your investments and robust security features that protect your assets.</p>
            </div>


        </div>
    </div>
  )
}

export default Solution