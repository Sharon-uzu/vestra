import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/SINGLE LOGO.png'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    // document.body.classList.toggle('no-scroll', !click);
    // document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

    

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };

  return (
    <div>
        <header>
            <nav>
                <Link to='/'><img src={logo} alt="" /></Link>

                <div className='bars' onClick={handleClick}>
                  {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                </div>
                <ul className={click ? 'active' : 'menu'}>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/how'><li>How It Works</li></Link>
                    <Link to='/invest'><li>Investment Solutions</li></Link>
                    <Link to='/pricing'><li>Pricing</li></Link>
                    <Link to='/resources'><li>Resources</li></Link>
                    <Link to='/contact'><li>Contact Us</li></Link>
                    <Link to='/login' className='log-a'><li className='log'>Login</li></Link>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header