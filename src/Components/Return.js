import React from 'react';
import p1 from '../Images/Frame 36.png'
import p2 from '../Images/image (2).png'
import p3 from '../Images/image 16.png'
import img from '../Images/Shape.png'

const Return = () => {
  return (
    <div>
        <div className="invest returns">
            <h2>High Returns, Low Risk</h2>
            <p>"At Vestra, we believe that investing should be both rewarding and secure. Our platform offers a balance of growth and protection, ensuring that your financial future is in good hands.</p>

            
        </div>

        <div className="perc-m">
                <div className="perc">
                    <div className="perc1">
                        <div>
                            <img src={p1} alt="" />
                            <h4>20% ROI</h4>
                            <p>Enjoy reliable returns on your investments with our expert strategies.</p>
                        </div>
                    </div>

                    <div className="perc1">
                        <div>
                            <img src={p2} alt="" />
                            <h4>80% Damage Control</h4>
                            <p>Our advanced risk management mechanisms minimize potential losses.</p>
                        </div>
                    </div>

                    <div className="perc1">
                        <div>
                            <img src={p3} alt="" />
                            <h4>User-Friendly </h4>
                            <p>An intuitive platform designed for investors of all levels.</p>
                        </div>
                    </div>
                </div>

                <div className="test">
                    <h1>What Our Investors Say</h1>
                    <p>Join a growing community of investors who trust Vestra with their financial goals.</p>

                    <div className="testimonial">
                        <div className="test1">
                            <div className='t-c'>
                                <h5> "Vestra's damage control feature gave me peace of mind, knowing my investments are protected."</h5>
                                <div className='t-f'>
                                    <img src={img} alt="" />
                                    <div>
                                        <h6> Jessica M., Lagos, Nigeria</h6>
                                        <p>Junior Investor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="test1">
                            <div className='t-c'>
                                <h5>"I’ve never felt more in control of my financial future. The returns are amazing!"</h5>
                                <div className='t-f'>
                                    <img src={img} alt="" />
                                    <div>
                                        <h6> Jessica M., Lagos, Nigeria</h6>
                                        <p>Junior Investor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="test1">
                            <div className='t-c'>
                                <h5> "Vestra's damage control feature gave me peace of mind, knowing my investments are protected."</h5>
                                <div className='t-f'>
                                    <img src={img} alt="" />
                                    <div>
                                        <h6> Jessica M., Lagos, Nigeria</h6>
                                        <p>Junior Investor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Return