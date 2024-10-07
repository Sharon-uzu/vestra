import React,{useEffect} from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Comp1 from '../Components/Comp1'
import Invest from '../Components/Invest'
import Return from '../Components/Return'
import Package from '../Components/Package'
import Card2 from '../Components/Card2'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';


const Home = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);

    
  return (
    <div>
        <Header/>
        <Hero/>
        <Comp1 title='Why Choose Vestra?' para="Vestra offers a unique combination of high returns and robust risk management, tailored for both novice and experienced investors. Here's what makes us different" title1='Secure Access' para1='Seamless login and account management to keep your information safe and secure at all times.' title2='Advanced Damage Control' para2='Our sophisticated risk management strategies protect your investments, ensuring up to 80% damage control.'  title3='Personalized Wallet' para3='Manage your investments and returns effortlessly with your dedicated Vestra wallet.' title4='Performance Insights' para4='Receive regular updates on your investment performance to make informed decisions.'/>
        <Invest/>
        <Return/>
        <Package/>
        <Card2 t1='Ready to Start Your ' t2='Investment ' t3='Journey?' paragraph='Book now and experience the convenience and savings of CutRate. Your next adventurence the convenience and savings awaits!'  btn='Join Vestra Now'/>
        <Footer/>
    </div>
  )
}

export default Home