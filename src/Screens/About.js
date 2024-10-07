import React,{useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Comp1 from '../Components/Comp1'
import Card2 from '../Components/Card2'
import AboutH from '../Components/AboutH'
import Sets from '../Components/Sets'
import { useLocation } from 'react-router-dom';


const About = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
  return (
    <div>
        <Header/>
        <AboutH/>
        <Comp1 title='Our Values' para="Vestra offers a unique combination of high returns and robust risk management, tailored for both novice and experienced investors. Here's what makes us different" title1='Trust' para1='We believe trust is the cornerstone of our business. We are committed to transparency, integrity, and reliability in everything we do.' title2='Excellence' para2='At Vestra, we are dedicated to delivering excellence in our services, from our innovative investment strategies to our exceptional customer support.'  title3='Innovation' para3=' We are constantly evolving, leveraging the latest technology and market insights to provide cutting-edge investment solutions.' title4='Sustainability' para4='We are committed to responsible investing, focusing on sustainable opportunities that drive positive social and environmental impact.'/>
        <Sets/>
        <Card2 t1='Join Us on the' t2='Journey' paragraph="Whether you're new to investing or a seasoned pro, Vestra is here to guide you every step of the way. Join us on the journey to financial freedom and discover how we can help you grow your wealth with confidence and security. Together, let's build a brighter financial future." btn='Register Now'/>
        <Footer/>
    </div>
  )
}

export default About