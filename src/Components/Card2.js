import React from 'react'
import img from '../Images/Union.png'

const Card2 = (props) => {
  return (
    <div>
        <div className="card2">
            <div className="cc-r">
                <h4><span>{props.t1} </span><span className='s2'>{props.t2}</span><span>{props.t3}</span></h4>
                <p>{props.paragraph}</p>
                <button>{props.btn}</button>
            </div>
            <div className="cc-l">
                <img src={img}alt="" />
            </div>
        </div>
    </div>
  )
}

export default Card2