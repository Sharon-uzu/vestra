import React,{useState} from 'react'

const NotifySettings = () => {
    const [email, setEmail] = useState(true)
    const [app, setApp] = useState(false)
    const [push, setPush] = useState(false)

    function shift1(){
        setEmail(!email)
    }

    function shift2(){
        setApp(!app)
    }

    function shift3(){
        setPush(!push)
    }

  return (
    <div>
        <div className="notify-setting">
            <div className="n-s-c">
                <div>
                    <h3>Email Notifications</h3>
                    <p className={ email ? 'toggle-on' : 'toggle'} onClick={shift1}> <p></p></p>
                </div>

                <div>
                    <h3>In-App Notifications</h3>
                    <p className={ app ? 'toggle-on' : 'toggle'} onClick={shift2}> <p></p></p>
                </div>

                <div>
                    <h3>Push Notifications</h3>
                    <p className={ push ? 'toggle-on' : 'toggle'} onClick={shift3}> <p></p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotifySettings