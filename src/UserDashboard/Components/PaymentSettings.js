import React,{useState} from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const PaymentSettings = () => {
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)

    function active1(){
        setOne(!one)
    }

    function active2(){
        setTwo(!two)
    }

    function active3(){
        setThree(!three)
    }


  return (
    <div>
        <div className="paysetting">
            <h3>Payment Preferences</h3>

            <div className="pref">
                <div className="pref-c">
                    <div className="one">
                        <div>
                            <h2 className={ one ? 'check' : 'uncheck'} onClick={active1}><p></p></h2>
                            <span>MasterCard, ending in XXXX</span>
                        </div>
                        <AiFillDelete className='pay-i'/>
                    </div>

                    <div className="one">
                        <div>
                            <h2 className={ two ? 'check' : 'uncheck'} onClick={active2}><p></p></h2>
                            <span>MasterCard, ending in XXXX</span>
                        </div>
                        <AiFillDelete className='pay-i'/>
                    </div>

                    <div className="one">
                        <div>
                            <h2 className={ three ? 'check' : 'uncheck'} onClick={active3}><p></p></h2>
                            <span>MasterCard, ending in XXXX</span>
                        </div>
                        <AiFillDelete className='pay-i'/>
                    </div>
                </div>

            </div>

            <Link to='/new-payment-method'><button>Add new method</button></Link>

        </div>
    </div>
  )
}

export default PaymentSettings