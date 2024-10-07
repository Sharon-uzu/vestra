import React from 'react'
import image from '../Images/Frame 393.png'


const Risk = () => {
  return (
    <div>
        <div className="comp1">
            <div className="comp-one">
                <h3>Advanced Risk Management with Vestra</h3>
                <p>Our commitment to safeguarding your investments is at the core of every solution we offer. Vestra’s advanced risk management strategies include</p>
            </div>

            <div className="comp-two">
                <img src={image} alt="" />
            </div>

            <div className="comp-three">

                <div className="step">
                    <div className="sl">
                        <h4>01</h4>
                    </div>
                    <div className="s-r">
                        <h5>Dynamic Asset Allocation</h5>
                        <p>We adjust your portfolio dynamically to respond to market changes, protecting your investments from significant downturns.</p>
                    </div>
                </div>


                <div className="step">
                    <div className="sl sy">
                        <h4>02</h4>
                    </div>
                    <div className="s-r">
                        <h5>Stop-Loss Mechanisms</h5>
                        <p>Automated stop-loss orders are implemented to minimize potential losses, ensuring your capital is protected.</p>
                    </div>
                </div>


                <div className="step">
                    <div className="sl">
                        <h4>03</h4>
                    </div>
                    <div className="s-r">
                        <h5>Diversification Strategies</h5>
                        <p> By spreading your investments across various asset classes and regions, we reduce exposure to any single market or asset, enhancing overall stability.</p>
                    </div>
                </div>


            </div>


        </div>
    </div>
  )
}

export default Risk