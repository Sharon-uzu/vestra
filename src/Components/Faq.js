import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Link } from 'react-router-dom';

const Faq = () => {

    const Faqs = [
        {
          id: 1,
          ques: "What are the management and performance fees, and how are they charged?",
          answer: "Management fees are annual charges based on the assets under management (AUM):"
        },
        {
          id: 2,
          ques: "Are there any hidden fees I should be aware of?",
          answer: "Management fees are annual charges based on the assets under management (AUM):"
        },
        {
          id: 3,
          ques: "Can I change my investment package after I’ve already started?",
          answer: "Management fees are annual charges based on the assets under management (AUM):"
        },
        {
          id: 4,
          ques: "What is the minimum investment amount, and can I invest more later?",
          answer: "Management fees are annual charges based on the assets under management (AUM):"
        },
        {
          id: 5,
          ques: "How do the damage control mechanisms work?",
          answer: "Management fees are annual charges based on the assets under management (AUM):"
        },
        {
          id: 6,
          ques: "Can I withdraw my funds at any time?",
          answer: "Management fees are annual charges based on the assets under management (AUM):"
        },
        {
          id: 7,
          ques: "How often are returns credited to my account?",
          answer: "Management fees are annual charges based on the assets under management (AUM):"
        }
      ];

      const [open, setOpen] = useState(Array(Faqs.length).fill(false));

        const toggleAnswer = (index) => {
            setOpen(open.map((item, i) => (i === index ? !item : item)));
        };

  return (
    <div className='faqs'>
      <div className="title">
        <h3>Frequently Asked Questions</h3>
      </div>
      
      <div className='w-r'>
        {Faqs.map((item, index) => (
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

export default Faq