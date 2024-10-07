import React from 'react'
import img from '../Images/image.png'

const Package = () => {
  return (
    <div>
        <div className="invest">
            <h2>Our Investment Packages</h2>
            <p>The Vestra Elite Investment Package is designed for investors seeking maximum growth potential with enhanced risk management.</p>

            <div className="i-cards">
                <div className="card1">
                    <img src={img} alt="" />
                </div>

                <div className="card2">
                    <div>
                        <h3>Vestra Global Diversifier Package</h3>
                        <p>Minimum Investment: $100,000</p>
                        <p>Monthly Contribution: Minimum $2,000</p>
                        <p>Management Fee: 1.25% annually on assets under management</p>
                        <p>Performance Fee: 15% of returns exceeding the benchmark</p>
                        <p>Additional Costs: No entry or exit fees; transaction costs included</p>
                    </div>
                    
                </div>

                <div className="card2">
                    <div>
                        <h3>Vestra Elite Investment Package</h3>
                        <p>Minimum Investment: $100,000</p>
                        <p>Monthly Contribution: Minimum $2,000</p>
                        <p>Management Fee: 1.25% annually on assets under management</p>
                        <p>Performance Fee: 15% of returns exceeding the benchmark</p>
                        <p>Additional Costs: No entry or exit fees; transaction costs included</p>
                    </div>
                    
                </div>

                <div className="card2">
                    <div>
                        <h3>Vestra Growth Plus Package</h3>
                        <p>Minimum Investment: $100,000</p>
                        <p>Monthly Contribution: Minimum $2,000</p>
                        <p>Management Fee: 1.25% annually on assets under management</p>
                        <p>Performance Fee: 15% of returns exceeding the benchmark</p>
                        <p>Additional Costs: No entry or exit fees; transaction costs included</p>
                    </div>
                    
                </div>

                <div className="card2">
                    <div>
                        <h3> Vestra Sustainable Wealth Package</h3>
                        <p>Minimum Investment: $100,000</p>
                        <p>Monthly Contribution: Minimum $2,000</p>
                        <p>Management Fee: 1.25% annually on assets under management</p>
                        <p>Performance Fee: 15% of returns exceeding the benchmark</p>
                        <p>Additional Costs: No entry or exit fees; transaction costs included</p>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Package