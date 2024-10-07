import React ,{useEffect}from 'react'
import Header from '../Components/Header'
import HeroBg from '../Components/HeroBg'
import Content from '../Components/Content'
import Comp1 from '../Components/Comp1'
import Card2 from '../Components/Card2'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';


const How = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>
        <Header/>
        <HeroBg/>
        <Content/>
        <Comp1 title='Why Invest with Vestra?' para='At Vestra, we believe that investing should be both rewarding and secure. Our platform offers a balance of growth and protection, ensuring that your financial future is in good hands.' title1='High Returns with Managed Risk' para1='Enjoy the potential of up to 20% ROI while protecting your investments with Vestra’s 80% damage control rate.' title2='Personalized Experience' para2=' Tailor your investment journey with plans and strategies that fit your financial goals and comfort level.' title3='Secure and Transparent' para3='With Vestra, your investments are protected with top-tier security and full transparency, ensuring you’re always informed and in control.' title4='Sustainability' para4='From sign-up to withdrawals, our team of investment professionals and intuitive platform guide you every step of the way'/>
        <Card2 t1='Start Your Investment Journey with Vestra' paragraph='Discover the power of personalized investment solutions with Vestra. Whether you’re a novice investor or a seasoned pro, our diverse range of packages ensures there’s a perfect fit for your financial aspirations. Explore our investment solutions today and take the first step toward achieving your financial goals with confidence and security.' btn='Join Now'/>
        <Footer/>
    </div>
  )
}

export default How