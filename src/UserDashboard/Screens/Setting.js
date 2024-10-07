import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import logo from '../../Images/d-LOGO.png'
import { Link } from 'react-router-dom'
import ProfileSettings from '../Components/ProfileSettings'
import PasswordSetting from '../Components/PasswordSetting'
import NotifySettings from '../Components/NotifySettings'
import PaymentSettings from '../Components/PaymentSettings'

const Setting = () => {

    const [profile, setProfile] = useState(true)
    const [password, setPassword] = useState(false)
    const [notification, setNotification] = useState(false)
    const [payment, setPayment] = useState(false)

    function click1(){
        setProfile(true)
        setPassword(false)
        setNotification(false)
        setPayment(false)
    }

    function click2(){
        setProfile(false)
        setPassword(true)
        setNotification(false)
        setPayment(false)
    }

    function click3(){
        setProfile(false)
        setPassword(false)
        setNotification(true)
        setPayment(false)
    }

    function click4(){
        setProfile(false)
        setPassword(false)
        setNotification(false)
        setPayment(true)
    }

  return (
    <div>
        <div className="dashboard">
            <Sidebar/>

            <main>
                <div className="dash">
                    <div className="first">
                        <div>
                            <img src={logo} alt="" />
                            <b>Settings</b>
                        </div>
                        <div>

                            <button className='btn'>Update changes</button>
                        </div>
                    </div>


                    <div className="settings">
                        <h3 onClick={click1} className={profile ? 'active' : 'p'}>Profile</h3>
                        <h3 onClick={click2} className={password ? 'active' : 'p'}>Password</h3>
                        <h3 onClick={click3} className={notification ? 'active' : 'p'}>Notification</h3>
                        <h3 onClick={click4} className={payment ? 'active' : 'p'}>Payment</h3>
                    </div>


                    <div className="setting-c">
                        {
                            profile ? (
                                <ProfileSettings/>
                            ): null
                        }

{
                            password ? (
                                <PasswordSetting/>
                            ): null
                        }

                        {
                            notification ? (
                                <NotifySettings/>
                            ): null
                        }

                        {
                            payment ? (
                                <PaymentSettings/>
                            ): null
                        }
                    </div>



                </div>
            </main>
        </div>
    </div>
  )
}

export default Setting