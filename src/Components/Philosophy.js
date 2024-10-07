import React from 'react'
import { GoDotFill } from "react-icons/go";

const Philosophy = () => {
  return (
    <div>
        <div className="philosophy">
            <div className="phil1">
                <h2>Our Investment Philosophy</h2>
                <p>Vestra's investment philosophy is grounded in a commitment to delivering high returns while minimizing risk. We leverage a combination of advanced technology, market expertise, and personalized strategies to create investment solutions that are both innovative and reliable. Our approach centers around:</p>
            </div>
            <div className="phil2">
                <GoDotFill className='p-i'/>
                <div>
                    <h3>Diversification</h3>
                    <p>Spreading investments across various asset classes, sectors, and geographies to reduce risk and enhance returns.</p>
                </div>

            </div>

            <div className="phil2">
                <GoDotFill className='p-i'/>
                <div>
                    <h3>Risk Management</h3>
                    <p>Employing sophisticated risk management techniques to protect your investments, including our unique damage control mechanisms that safeguard up to 80% of your capital.</p>
                </div>

            </div>

            <div className="phil2">
                <GoDotFill className='p-i'/>
                <div>
                    <h3>Performance Monitoring</h3>
                    <p>Continuously tracking and adjusting your portfolio to align with changing market conditions and your evolving financial goals.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Philosophy