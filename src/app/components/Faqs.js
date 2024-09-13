import React from 'react'
import Faq from './Faq';

function Faqs() {
    const faqs = [
        {
          ques: "How Can Students from outside NCU Join?",
          ans: "The students must register for at least one event and carry their valid university identity proof  as an absolute requirement.",
        },
        {
          ques: " How do I confirm my participation in the fest?",
      
          ans: "To confirm your participation, you will receive a confirmation email.",
        },
        {
          ques: "How is Momentum being conducted this year ?",
      
          ans: "Momentum will be conducted at the NCU Campus, with a few events happening online.",
        },
        {
          ques: "Is the entry free for all? Who can attend ?",
      
          ans: "To secure your entry to Momentum, you must register for at least one event",
        },
        {
          ques: "Who can attend Momentum ?",
      
          ans: " Momentum is open to all students from any college. You can attend Momentum even if you are not part of any college fest committee. However carrying your College ID card is essential along with your event registration ticket.",
        },
        {
          ques: "Will there be food stalls in the fest ?",
      
          ans: "Yes, there will be a variety of food stalls available at the fest.",
        },
      ];
  return (
    <>
        <div className='mt-12 flex p-8 w-[85%] justify-between'>
            <div className='w-[40%] text-2xl'>FAQs</div>
            <div className='w-[65%] py-2 xl:space-y-4 space-y-2 '>
                {
                    faqs.map((element, key)=>{
                        return (
                          <Faq key={key} element={element}/>
                        )
                    })
                }
                
            </div>
        </div> 
    </>
  )
}

export default Faqs
