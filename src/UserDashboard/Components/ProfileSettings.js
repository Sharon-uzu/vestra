import React from 'react'
import dp from '../../Images/dp.png'
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi2";


const ProfileSettings = () => {
  return (
    <div>
        <div className="profile-setting">

            <div className="prof1">
                <div className="prof-c">
                    <img src={dp} alt="" />
                    <div className='e-d'>
                        <div>
                            <HiPencil className='p-i'/>
                        </div>
                        <div>
                            <RiDeleteBinFill className='p-i'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="prof2">
                <div className="prof-c">
                    <p>Name</p>
                    <h6>Alexander Lily</h6>
                </div>
            </div>

            <div className="prof2">
                <div className="prof-c">
                    <p>Email</p>
                    <h6>somebody@gmail.com</h6>
                </div>
            </div>

            <div className="prof2">
                <div className="prof-c">
                    <p>Phone number</p>
                    <h6>09080890989</h6>
                </div>
            </div>

            <div className="prof2">
                <div className="prof-c">
                    <p>Location</p>
                    <h6>N0. 234 Woji Road, Port Harcourt. Rivers state.</h6>
                </div>
            </div>

            <div className="prof2">
                <div className="prof-c">
                    <p>Occupation</p>
                    <h6>Designer</h6>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProfileSettings