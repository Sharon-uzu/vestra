import React,{useState} from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    
  return (
    <div className='side'>
        <div className="sidebar">
            <div className="side-c">
                <div className="top">
                    <Link to='/user-dashboard'><RxDashboard className='side-i'/></Link>
                    <Link to='/user-dashboard'><IoHomeOutline className='side-i'/></Link>
                    <Link to='/setting'><IoSettingsOutline className='side-i'/></Link>
                </div>

                <div className="bottom">
                    <Link><IoIosLogOut className='side-i'/></Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Sidebar