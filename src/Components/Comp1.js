import React from 'react';
import image from '../Images/Frame 393.png'

const Comp1 = (props) => {
  return (
    <div>
        <div className="comp1">
            <div className="comp-one">
                <h3>{props.title}</h3>
                <p>{props.para}</p>
            </div>

            <div className="comp-two">
                <img src={image} alt="" />
            </div>

            <div className="comp-three">

                <div className="step">
                    <div className="sl">
                        <h4>01</h4>
                    </div>
                    <div className="s-r">
                        <h5>{props.title1}</h5>
                        <p>{props.para1}</p>
                    </div>
                </div>


                <div className="step">
                    <div className="sl sy">
                        <h4>02</h4>
                    </div>
                    <div className="s-r">
                        <h5>{props.title2}</h5>
                        <p>{props.para2}</p>
                    </div>
                </div>


                <div className="step">
                    <div className="sl">
                        <h4>03</h4>
                    </div>
                    <div className="s-r">
                        <h5>{props.title3}</h5>
                        <p>{props.para3}</p>
                    </div>
                </div>


                <div className="step">
                    <div className="sl sy">
                        <h4>04</h4>
                    </div>
                    <div className="s-r">
                        <h5>{props.title4}</h5>
                        <p>{props.para4}</p>
                    </div>
                </div>



            </div>


        </div>
    </div>
  )
}

export default Comp1