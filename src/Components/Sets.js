import React from 'react'
import img from '../Images/image (7).png';
import img1 from '../Images/image (8).png'
import { GoDotFill } from "react-icons/go";

const Sets = () => {
  return (
    <div>
        <div className="sets">
            <h3>What Sets Us Apart</h3>
            <p>With Vestra, investing isn’t just about numbers—it’s about building a better future with confidence and trust.</p>

            <div className="set-f">
                <div className="s-txt">
                    <div className="s-ff">
                        <GoDotFill className='s-i'/>
                        <div>
                            <h4> Unique Combination of High Returns and Risk Management</h4>
                            <p>Vestra stands out by offering a unique blend of high returns and advanced risk management strategies. Our platform ensures that investors can achieve their financial goals while safeguarding their investments with up to 80% damage control.</p>
                        </div>
                    </div>

                    <div className="s-ff">
                        <GoDotFill className='s-i'/>
                        <div>
                            <h4>Personalized Investment Solutions</h4>
                            <p>We understand that every investor is unique. Our personalized approach means that we tailor our investment strategies to align with your specific goals, risk tolerance, and timeline, ensuring a truly customized experience.</p>
                    
                        </div>
                    </div>

                    <div className="s-ff">
                        <GoDotFill className='s-i'/>
                        <div>
                            <h4>Cutting-Edge Technology</h4>
                            <p>Vestra utilizes the latest in financial technology to provide a seamless and secure investing experience. From secure access to real-time performance insights, our platform is designed to keep you informed and in control.</p>
                        </div>
                    </div>

                    <div className="s-ff">
                        <GoDotFill className='s-i'/>
                        <div>
                            <h4>Expert Team</h4>
                            <p>Our team of seasoned investment professionals brings decades of experience and expertise to the table. We combine market knowledge with a client-first approach to deliver exceptional service and results.</p>
                        </div>
                    </div>

                    
                </div>
                <img src={img} alt="" />
            </div>
        </div>

        <div className="abt">
            <div className="img">
                <img src={img1} alt="" />
            </div>
            <div className="txt">
                <h3>Our Team</h3>
                <p>At the heart of Vestra is a team of dedicated professionals who are passionate about finance, technology, and helping clients achieve their goals. Our diverse team includes investment experts, financial analysts, and customer support specialists—all working together to provide you with the best investment experience possible.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Sets