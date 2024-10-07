import React,{useEffect} from 'react'
import Header from '../Components/Header'
import Supports from '../Components/Supports';
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';


const Contact = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>
        <Header/>
        <div className="h-bg bg5">
            <div className="dk-bg"></div>

            <div>
            
            <h2>We’re Here to Help</h2>
            <p>At Vestra, we value our clients and are committed to providing exceptional customer service. Whether you have a question about your investments, need assistance with your account, or simply want to learn more about our services, our team is here to help. Reach out to us through any of the contact methods below, and we’ll be happy to assist you.</p>

            </div>

      </div>
      <Supports/>
      <Footer/>
    </div>
  )
}

export default Contact