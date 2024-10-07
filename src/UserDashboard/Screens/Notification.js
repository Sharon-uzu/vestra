import React from 'react'
import { FiSearch } from "react-icons/fi";
import dp from '../../Images/dp.png'
import { RiDeleteBinFill } from "react-icons/ri";
import img1 from '../../Images/f-p.png'
import img2 from '../../Images/f-s.png'

const Notification = () => {

    const Notify = [
        {
            id:1,
            status:'Withdrawal Processing',
            note:"Your withdrawal of $1,000 is being processed. It will be available in your bank account within 1-3 business days",
            time:'Yesterday, 4:15 PM',
            img:img1,
        },
        {
            id:2,
            status:'Successful Payment',
            note:'Your withdrawal of $1,000 is being processed. It will be available in your bank account within 1-3 business days',
            time:'Yesterday, 4:15 PM',
            img:img2,
        },
        {
            id:3,
            status:'Withdrawal Processing',
            note:"Your withdrawal of $1,000 is being processed. It will be available in your bank account within 1-3 business days",
            time:'Yesterday, 4:15 PM',
            img:img1,
        },
        {
            id:4,
            status:'Successful Payment',
            note:'Your withdrawal of $1,000 is being processed. It will be available in your bank account within 1-3 business days',
            time:'Yesterday, 4:15 PM',
            img:img2,
        },
        {
            id:5,
            status:'Withdrawal Processing',
            note:"Your withdrawal of $1,000 is being processed. It will be available in your bank account within 1-3 business days",
            time:'Yesterday, 4:15 PM',
            img:img1,
        },
        {
            id:6,
            status:'Successful Payment',
            note:'Your withdrawal of $1,000 is being processed. It will be available in your bank account within 1-3 business days',
            time:'Yesterday, 4:15 PM',
            img:img2,
        },
        {
            id:7,
            status:'Withdrawal Processing',
            note:"Your withdrawal of $1,000 is being processed. It will be available in your bank account within 1-3 business days",
            time:'Yesterday, 4:15 PM',
            img:img1,
        }
    ]
  return (
    <div>
        <div className="notification">
            <div className="n-heading">
                <div className="n-h-c">
                    <h4>Notification</h4>
                    <form className="search-f">
                        <div className="search">
                            <input type="search" placeholder='Search' />
                            <FiSearch className='n-i'/>
                        </div>

                    </form>
                    <img src={dp} alt="" />
                </div>
            </div>

            <div className="messages">
                {Notify.map((Notify, id)=>{
                    return(
                        <div className="message" key={id}>
                            <div className='m-c'>
                                <img src={Notify.img} alt="" />
                                <div>
                                    <h5>{Notify.status}</h5>
                                    <p>{Notify.note}</p>
                                    <p>{Notify.time}</p>
                                </div>
                            </div>

                            <RiDeleteBinFill className='m-i'/>
                        </div>

                )
                })


                }

                
            </div>
        </div>
    </div>
  )
}

export default Notification