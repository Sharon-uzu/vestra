import React,{useEffect} from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import Philosophy from '../Components/Philosophy';
import Explore from '../Components/Explore'
import Risk from '../Components/Risk';
import Solution from '../Components/Solution';
import Card2 from '../Components/Card2';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';


const Investment = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>
        <Header/>
        <div className="h-bg bg2">
            <div className="dk-bg"></div>

            <div>
            
                <h2>Tailored Investment Solutions for Every Investor</h2>
                <p>At Vestra, we understand that each investor has unique financial goals, risk tolerance, and investment horizons. That’s why we offer a diverse range of investment solutions designed to meet the varied needs of our clients. From high-growth opportunities to secure income streams, our expertly managed portfolios are crafted to deliver exceptional returns with robust risk management.</p>
                <Link to=''><button>Invest now</button></Link>

            </div>

        </div>
        <Philosophy/>
        <Explore/>
        <Risk/>
        <Solution/>
        <Card2 t1='Join Us on the' t2='Journey' paragraph="Whether you're new to investing or a seasoned pro, Vestra is here to guide you every step of the way. Join us on the journey to financial freedom and discover how we can help you grow your wealth with confidence and security. Together, let's build a brighter financial future." btn='Register Now' />
        <Footer/>

        
    </div>
  )
}

export default Investment