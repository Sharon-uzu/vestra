import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Link } from 'react-router-dom';

const Guide = () => {

    const Guide = [
        {
          id: 1,
          ques: "Investment Basics",
          answer: "New to investing? Start with our beginner-friendly articles that cover the fundamentals of investing,"
        },
        {
          id: 2,
          ques: "Advanced Strategies",
          answer: "New to investing? Start with our beginner-friendly articles that cover the fundamentals of investing,"
        },
        {
          id: 3,
          ques: "Market Insights",
          answer: "New to investing? Start with our beginner-friendly articles that cover the fundamentals of investing,"
        },
        {
          id: 4,
          ques: "Risk Management Tips",
          answer: "New to investing? Start with our beginner-friendly articles that cover the fundamentals of investing,"
        }
        
      ];

      const [open, setOpen] = useState(Array(Guide.length).fill(false));

        const toggleAnswer = (index) => {
            setOpen(open.map((item, i) => (i === index ? !item : item)));
        };

  return (
    <div className='faqs'>
      <div className="title">
        <h3>Educational Articles and Guides</h3>
      </div>
      
      <div className='w-r'>
        {Guide.map((item, index) => (
          <div className="ques" key={item.id}>
           
            <div className='q-c'>
              <h4>{item.ques}</h4>
              {open[index] && <p>{item.answer}<Link to='/sponsors' style={{color:'#fff'}}>{item.links}</Link></p>}
            </div>

            <div onClick={() => toggleAnswer(index)}>
              {open[index] ? (
                <IoIosArrowDropup className='arr-icon' />
              ) : (
                <IoIosArrowDropdown className='arr-icon' />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Guide