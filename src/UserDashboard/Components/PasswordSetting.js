import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const PasswordSetting = () => {

    const navigate = useNavigate()

    const submit = () => {
        navigate("/check");
    };


  return (
    <div>
        <div className="password-setting">
            <div className="p-c">
                <h3>Reset Your Password</h3>
                <p>Please enter the email address associated with your Vestra account. We’ll send you a link to reset your password.</p>

                <form className='s-form'>
                    <h5>Email Address</h5>
                    <input type="email" placeholder='Enter your registered email address.'/>

                    <div className="p-btns">
                        <Link to='/user-dashboard'>Cancel</Link>
                        <button onClick={submit}>Send Reset Link</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default PasswordSetting