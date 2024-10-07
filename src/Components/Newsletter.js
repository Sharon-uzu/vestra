import React from 'react'
import img from '../Images/news.png'


const Newsletter = () => {
  return (
    <div>
        <div className="card2 news">

        <div className="cc-l">
                <img src={img}alt="" />
            </div>
            <div className="cc-r">
                <h4><span>Newsletter Subscription</span></h4>
                <p>Stay informed with the latest from Vestra by subscribing to our newsletter. Get regular updates on market trends, investment tips, and exclusive offers delivered straight to your inbox. It’s the easiest way to keep up with the financial world and make sure you never miss an opportunity.</p>
                <form className='n-form'>
                    <input type="text" placeholder='Enter your email here'/>
                    <button>Subscribe</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Newsletter