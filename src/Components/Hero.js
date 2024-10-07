import React from 'react'
import img1 from '../Images/image.png'

const Hero = () => {
  return (
    <div className='hero-s'>
        <div className="hero">
            <h1>Take Charge of Your Financial Future with Vestra.</h1>
            <p>Achieve Outstanding 20% Returns While Protecting 80% of Your Investments with Vestra’s Advanced Risk Management. Whether you're new to investing or a seasoned pro, Vestra provides a balanced, reliable path to financial growth.</p>

            <div className="btns">
                <a href="/join"><button style={{cursor:'pointer'}}>Get Started</button></a>
                <a href=""><button className='learn'>Learn More</button></a>
            </div>
        </div>

        <img src={img1} alt="" />
    </div>
  )
}

export default Hero