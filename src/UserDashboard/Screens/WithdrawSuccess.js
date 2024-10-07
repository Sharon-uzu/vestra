import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Images/Icon.png'


const WithdrawSuccess = () => {
  return (
    <div>
      <div className="resetsuccess">
        <div className="success">
          <div className="s-c">
            <img src={img} alt="" />
            <h3>Success! Your Withdrawal was successful</h3>
            <Link to='/user-dashboard'><button>Back</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawSuccess