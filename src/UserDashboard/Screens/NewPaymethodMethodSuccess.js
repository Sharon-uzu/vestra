import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Images/Icon.png'

const NewPaymethodMethodSuccess = () => {
  return (
<div>
      <div className="resetsuccess">
        <div className="success">
          <div className="s-c">
            <img src={img} alt="" />
            <h3>Success! Your New Payment Method was added successful</h3>
            <Link to='/setting'><button>Back</button></Link>
          </div>
        </div>
      </div>
    </div>  )
}

export default NewPaymethodMethodSuccess