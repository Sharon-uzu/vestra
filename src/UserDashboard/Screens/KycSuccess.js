import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Images/Icon.png'

const KycSuccess = () => {
  return (
    <div>
      <div className="resetsuccess">
        <div className="success">
          <div className="s-c">
            <img src={img} alt="" />
            {/* <h3>Success! Your Password Has Been Reset</h3> */}
            <p>Thank you for completing your KYC. Your submission is under review, and this may take up to 48 hours. You will be notified via email once the verification process is complete. In the meantime, you can continue to explore the platform with limited access.</p>
            <Link to='/user-dashboard'><button>Back</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KycSuccess