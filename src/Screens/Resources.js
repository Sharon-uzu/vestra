import React,{useEffect} from 'react'
import Header from '../Components/Header'
import Guide from '../Components/Guide'
import Tools from '../Components/Tools'
import Workshop from '../Components/Workshop'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';


const Resources = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);


  return (
    <div>
        <Header/>
        <div className="h-bg bg4">
          <div className="dk-bg"></div>

          <div>
              
            <h2>Empower Your Investment Journey with Vestra</h2>
            <p>At Vestra, we believe that knowledge is power. Our Resources page is designed to provide you with the tools, insights, and guidance you need to make informed investment decisions. From educational articles to interactive tools, we offer a variety of resources to help you navigate the world of investing with confidence.</p>

          </div>

        </div>
        <Guide/>
        <Tools/>
        <Workshop/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Resources