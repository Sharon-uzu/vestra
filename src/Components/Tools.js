import React from 'react'
import img1 from '../Images/r1.png'
import img2 from '../Images/r2.png'
import img3 from '../Images/r3.png'
import img4 from '../Images/r4.png'

const Tools = () => {
  return (
    <div>
        <div className="solution">
            <div className="sol1">
                <h2>Tools and Calculators</h2>
            </div>

            <div className="sol2">
                <img src={img1} alt="" />
                <h3>Investment Calculator</h3>
                <p>Use our investment calculator to estimate your potential returns based on different investment amounts, time horizons, and expected rates of return. It’s a great way to visualize how your money can grow with Vestra.</p>
            </div>

            <div className="sol2">
                <img src={img2} alt="" />
                <h3>Risk Assessment Tool</h3>
                <p>Determine your risk tolerance with our interactive risk assessment tool. By answering a few simple questions, you can identify your risk profile and find investment solutions that align with your comfort level and financial goals.</p>
            </div>

            <div className="sol2">
                <img src={img3} alt="" />
                <h3>Goal Setting Worksheet</h3>
                <p>Goal Setting Worksheet Our goal-setting worksheet helps you define your financial objectives, whether it's saving for retirement, buying a home, or building a college fund. Set clear goals and create a personalized investment plan to achieve them with Vestra.</p>
            </div>

            <div className="sol2">
                <img src={img4} alt="" />
                <h3>Portfolio Tracker</h3>
                <p>Track your investments with our easy-to-use portfolio tracker. Monitor your holdings, assess performance, and adjust your strategy as needed to stay on track with your financial goals.</p>
            </div>


        </div>
    </div>
  )
}

export default Tools