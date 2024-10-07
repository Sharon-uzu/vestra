import React from 'react'
import img1 from '../Images/w1.png'
import img2 from '../Images/w2.png'


const Workshop = () => {
  return (
    <div>
        <div className="workshop">
            <h2>Webinars and Workshops</h2>
            <div className="w-f">
                <div className="w1">
                    <img src={img1} alt="" />
                    <div>
                        <h3>Live Webinars</h3>
                        <p>Join our live webinars hosted by Vestra’s investment experts. Topics range from market updates and economic outlooks to specific investment strategies and Q&A sessions where you can get your questions answered in real time.</p>
                    </div>
                </div>

                <div className="w1">
                    <img src={img2} alt="" />
                    <div>
                        <h3>On-Demand Workshops</h3>
                        <p>Access our library of on-demand workshops at your convenience. These in-depth sessions cover a wide range of topics, including financial planning, retirement strategies, and the latest in fintech innovations.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Workshop