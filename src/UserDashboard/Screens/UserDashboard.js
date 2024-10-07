import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import logo from '../../Images/d-LOGO.png'
import dp from '../../Images/dp.png'
import { Link } from 'react-router-dom'
import { IoMdNotifications } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Piechart from '../Components/Piechart'
import BarCharts from '../Components/BarCharts'
import LineCharts from '../Components/LineCharts'



const UserDashboard = () => {

    const Trans = [
        {
            id:1,
            date:'23-09-24',
            desc:'Deposit',
            amount:'+20,000',
            status:'Completed'
        },
        {
            id:2,
            date:'23-09-24',
            desc:'Deposit',
            amount:'+20,000',
            status:'Completed'
        },
        {
            id:3,
            date:'23-09-24',
            desc:'Deposit',
            amount:'+20,000',
            status:'Failed'
        },
        {
            id:4,
            date:'23-09-24',
            desc:'Deposit',
            amount:'+20,000',
            status:'Completed'
        },
        {
            id:5,
            date:'23-09-24',
            desc:'Deposit',
            amount:'+20,000',
            status:'Pending'
        },

        {
            id:6,
            date:'23-09-24',
            desc:'Deposit',
            amount:'+20,000',
            status:'Completed'
        },

        {
            id:7,
            date:'23-09-24',
            desc:'Deposit',
            amount:'+20,000',
            status:'Pending'
        },
        {
            id:8,
            date:'23-09-24',
            desc:'Deposit',
            amount:'+20,000',
            status:'Completed'
        },
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return '#3BD858'; // Green
            case 'Pending':
                return '#faf87d'; // yellow
            case 'Failed':
                return '#C10B0E'; // Red
            default:
                return '#000'; // Default color
        }
      };

  return (
    <div>
        <div className="dashboard">
            <Sidebar/>

            <main>
                <div className="dash">
                    <div className="first">
                        <div>
                            <img src={logo} alt="" />
                            <b>Monitor the health of your <span>finances</span></b>
                        </div>
                        <div>
                            <Link to='/withdraw'><button className='btn1'>Withdraw Funds</button></Link>
                            <Link to='/deposit'><button className='btn2'>Invest Funds</button></Link>
                            <Link to=''><button className='btn'>Lock Funds</button></Link>
                            <Link to=''><img src={dp} alt="" className='dp'/></Link>
                        </div>
                    </div>

                    <div className="second">

                        <Link to='/personal'><button className='btn-active'>Personal and Financial Details</button></Link>
                        <div className="line"></div>
                        <Link to='/kyc'><button>KYC</button></Link>
                        <div className="line"></div>
                        <Link to='/deposit'><button>Invest With Vestra</button></Link>
                        <Link to='/notification'><IoMdNotifications className='notf'/></Link>

                    </div>

                    <div className="third">
                        <div className="cir-graph div">
                            <div className="wal">
                                <h3>Wallet Overview</h3>
                                <h6>+2.5% this week <FaArrowUp className='w-i'/></h6>
                            </div>

                            <div className="tot">
                                <h4>Total Wallet Balance</h4>
                                <h5>$200,000.00</h5>
                            </div>

                            <div>
                                <Piechart/>
                            </div>

                        </div>

                        <div className="bar-graph div">
                            <div className="earn">
                                <h3>Weekly Earnings</h3>
                                <div>
                                    <h4><FaCircle className='e-i'/>Earnings</h4>
                                    <h4><FaCircle className='e-i c1'/>Predicted Earnings</h4>
                                </div>
                            </div>

                            <div>
                                <BarCharts/>
                            </div>

                        </div>

                        <div className="rules div">
                            <h3>Deposits and Withdrawals Rules</h3>
                            <ul>
                                <li>Deposit Limits: Minimum and maximum deposit limits may apply.</li>
                                <li>Payment Methods: Only user-registered payment methods are accepted; third-party deposits are prohibited.</li>
                                <li>Withdrawal Limits: Based on verification level, with possible delays for security checks.</li>
                                <li>Processing Times: Typically 1-3 business days, depending on payment method.</li>
                            </ul>

                        </div>

                    </div>

                    <div className="fourth">
                        <div className="line-g">
                            <div className="perf">
                                <div className="p-l">
                                    <h4>Performance Analytics</h4>
                                    <p>Total Earnings</p>
                                    <h6>$200,000.00</h6>
                                </div>

                                <div className="time">
                                    <h4><FaCircle className='t-i'/>Earned</h4>
                                    <h4><FaCircle className='t-i t1'/>Forecasted</h4>
                                    <select name="" id="">
                                        <option value="">6 months</option>
                                        <option value="">3 months</option>
                                        <option value="">1 months</option>
                                    </select>


                                </div>

                                
                            </div>

                            <div>
                                <LineCharts/>
                            </div>

                        </div>


                        <div className="table">
                            <table>
                                <tr>
                                    <th>Date</th>
                                    <th>Desc</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>

                                {Trans.map((Trans, id)=>{
                                    const statusColor = getStatusColor(Trans.status);
                                        return(
                                            <tr key={id}>
                                                <td>{Trans.date}</td>
                                                <td>{Trans.desc}</td>
                                                <td>{Trans.amount}</td>
                                                <td style={{ color: statusColor }}>{Trans.status}</td>
                                            </tr>

                                        )
                                    })
                                

                                }
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    </div>
  )
}

export default UserDashboard